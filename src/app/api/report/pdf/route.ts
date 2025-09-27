import { NextResponse } from "next/server";
import { google } from "googleapis";
import { resolveDrivePathToViewerUrl } from "@/lib/google/drive";

function driveClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });
  return google.drive({ version: "v3", auth });
}

const FOLDER_BY_KIND: Record<"safety" | "valve", string | undefined> = {
  safety: process.env.GOOGLE_DRIVE_SAFETY_ID,
  valve: process.env.GOOGLE_DRIVE_VALVE_ID,
};

const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
const lower = (s?: string | null) => (s ?? "").toLowerCase();

type GFile = {
  id?: string | null;
  name?: string | null;
  webViewLink?: string | null;
  modifiedTime?: string | null;
  size?: string | null;
  parents?: string[] | null;
};

function scoreName(
  nameRaw: string | null | undefined,
  ctx: { fileName?: string; tag?: string; reportNo?: string; num6?: string | null; hash?: string | null }
) {
  const n = lower(nameRaw);
  let score = 0;
  if (ctx.fileName && n === lower(ctx.fileName)) score += 100;          // exact ชนะขาด
  if (ctx.reportNo && n.includes(lower(ctx.reportNo))) score += 30;     // SV202594-c70f7333
  if (ctx.num6 && n.includes(ctx.num6)) score += 20;                    // 202594
  if (ctx.hash && n.includes(lower(ctx.hash))) score += 15;             // c70f7333
  if (ctx.tag && n.includes(lower(ctx.tag))) score += 25;               // 90LAA10BB001
  if (n.includes("report")) score += 2;
  if (n.includes("service")) score += 1;
  return score;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const kind = (searchParams.get("kind") || "safety") as "safety" | "valve";
    const fileNameRaw = (searchParams.get("fileName") || "").trim(); // ชื่อไฟล์จากชีต (ถ้ามี)
    const path = (searchParams.get("path") || "").trim();            // พาธเต็มจากชีต (ถ้ามี)
    const hint = (searchParams.get("hint") || "").trim();            // คีย์เวิร์ดเสริม
    const reportNo = (searchParams.get("reportNo") || "").trim();    // เช่น SV202594-c70f7333
    const tag = (searchParams.get("tag") || "").trim();              // 90LAA10BB001

    const folderId = FOLDER_BY_KIND[kind];
    if (!folderId) return NextResponse.json({ found: false, reason: "missing_folder" });

    const drive = driveClient();

    // 1) exact: ชื่อไฟล์ตรงในโฟลเดอร์ kind
    if (fileNameRaw) {
      const q1 = [
        `'${folderId}' in parents`,
        `mimeType='application/pdf'`,
        `trashed=false`,
        `name='${esc(fileNameRaw)}'`,
      ].join(" and ");

      const exact = await drive.files.list({
        q: q1,
        fields: "files(id,name,webViewLink,modifiedTime,size,parents)",
        orderBy: "modifiedTime desc",
        pageSize: 1,
        supportsAllDrives: true,
        includeItemsFromAllDrives: true,
      });

      const f1 = (exact.data.files as GFile[] | undefined)?.[0];
      if (f1?.id) {
        const link = f1.webViewLink || `https://drive.google.com/file/d/${f1.id}/view?usp=drive_link`;
        return NextResponse.json({
          found: true,
          id: f1.id,
          name: f1.name,
          webViewLink: link,
          downloadUrl: `https://drive.google.com/uc?export=download&id=${f1.id}`,
          iframeSrc: `https://drive.google.com/file/d/${f1.id}/preview`,
          modifiedTime: f1.modifiedTime,
          size: f1.size,
          via: "fileName-exact",
        });
      }
    }

    // 2) path resolve (optional)
    if (path) {
      const viewer = await resolveDrivePathToViewerUrl(path);
      if (viewer) {
        const m = viewer.match(/\/d\/([a-zA-Z0-9_-]+)/);
        const id = m?.[1];
        return NextResponse.json({
          found: true,
          id,
          name: path.split("/").pop(),
          webViewLink: viewer,
          downloadUrl: id ? `https://drive.google.com/uc?export=download&id=${id}` : undefined,
          iframeSrc: id ? `https://drive.google.com/file/d/${id}/preview` : undefined,
          via: "path-resolve",
        });
      }
    }

    // 3) fuzzy scoring ภายในโฟลเดอร์ kind
    const num6 = reportNo.match(/\d{6,}/)?.[0] || null;          // 202594
    const hash = reportNo.match(/[a-f0-9]{6,8}$/i)?.[0] || null; // c70f7333

    const qParts = [
      `'${folderId}' in parents`,
      `mimeType='application/pdf'`,
      `trashed=false`,
    ];
    if (tag) qParts.push(`name contains '${esc(tag)}'`);          // บังคับมี tag เพื่อลด false positive

    const q = qParts.join(" and ");

    const { data } = await drive.files.list({
      q,
      fields: "files(id,name,webViewLink,modifiedTime,size)",
      orderBy: "modifiedTime desc",
      pageSize: 50,
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
    });

    const files = (data.files as GFile[] | undefined) || [];
    if (files.length === 0) return NextResponse.json({ found: false });

    const ctx = { fileName: fileNameRaw, tag, reportNo, num6, hash };

    // กรองหยาบด้วย hint/reportNo (ถ้ามี) แล้วให้คะแนน
    const needles = [tag, fileNameRaw, hint, reportNo, num6 ?? undefined, hash ?? undefined]
      .filter((v): v is string => !!v && v.trim().length > 0)
      .map((v) => lower(v));

    const best = files
      .filter((f) => {
        if (needles.length === 0) return true;
        const fname = lower(f.name);
        return needles.some((n) => fname.includes(n));
      })
      .map((f) => ({ f, s: scoreName(f.name, ctx) }))
      .sort(
        (a, b) =>
          (b.s - a.s) ||
          (new Date(b.f.modifiedTime ?? 0).getTime() - new Date(a.f.modifiedTime ?? 0).getTime())
      )[0]?.f;

    if (!best?.id) return NextResponse.json({ found: false });

    const webViewLink =
      best.webViewLink || `https://drive.google.com/file/d/${best.id}/view?usp=drive_link`;

    return NextResponse.json({
      found: true,
      id: best.id,
      name: best.name,
      webViewLink,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${best.id}`,
      iframeSrc: `https://drive.google.com/file/d/${best.id}/preview`,
      modifiedTime: best.modifiedTime,
      size: best.size,
      via: "fuzzy-score",
    });
  } catch (e) {
    return NextResponse.json({ found: false, error: String(e) }, { status: 500 });
  }
}
