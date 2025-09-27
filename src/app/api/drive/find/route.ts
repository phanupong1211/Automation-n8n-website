// src/app/api/drive/find/route.ts
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

function getDrive() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });
  return google.drive({ version: "v3", auth });
}

// สร้างฟอร์แมตวันที่ 2025725 (YYYYM D ไม่มีศูนย์นำหน้า)
function toYMDCompact(dateStr?: string) {
  if (!dateStr) return "";
  let d: Date | null = null;
  const s = String(dateStr).trim();
  // Excel serial (เช่น 244230.4242)
  const n = Number(s);
  if (!Number.isNaN(n) && n > 25000) {
    const EXCEL_UNIX_EPOCH_OFFSET = 25569; // 1970-01-01
    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    d = new Date((n - EXCEL_UNIX_EPOCH_OFFSET) * MS_PER_DAY);
  } else {
    const dt = new Date(s);
    if (!Number.isNaN(+dt)) d = dt;
  }
  if (!d) return "";
  const y = d.getFullYear();
  const m = d.getMonth() + 1; // 1..12
  const day = d.getDate();    // 1..31
  return `${y}${m}${day}`;
}

// ป้องกัน single quote ใน q
function esc(s: string) {
  return String(s).replace(/'/g, "\\'");
}

export async function GET(req: NextRequest) {
  try {
    const drive = getDrive();
    const { searchParams } = new URL(req.url);

    const kind = searchParams.get("kind") || "safety"; // safety | valve
    const tag = (searchParams.get("tag") || "").trim();
    const dateStr = (searchParams.get("date") || "").trim(); // 2025-07-25 หรือรูปแบบอื่นที่ Date parse ได้
    const pdfHint = (searchParams.get("hint") || "").trim(); // ชื่อไฟล์จากชีต (ถ้ามี)
    const reportNoRaw = (searchParams.get("report") || "").trim(); // เช่น CV2025227-255

    const folderId =
      kind === "valve"
        ? process.env.GOOGLE_DRIVE_VALVE_ID
        : process.env.GOOGLE_DRIVE_SAFETY_ID;

    if (!folderId) {
      return NextResponse.json({ ok: false, reason: "Missing Drive folder env" }, { status: 400 });
    }

    // 0) ถ้ามี reportNo => แปลงเป็น token แล้วค้นด้วย tag + token
    const tokenFromReport = (() => {
      if (!reportNoRaw) return "";
      const m = reportNoRaw.match(/(\d[\d-]*)/); // ดึงตั้งแต่หลักแรกที่เป็นตัวเลข เช่น 2025227-255
      return m ? m[1] : "";
    })();

    if (tag && tokenFromReport) {
      const q0 = [
        `'${esc(folderId)}' in parents`,
        `mimeType='application/pdf'`,
        `trashed=false`,
        `name contains '${esc(tag)}'`,
        `name contains '${esc(tokenFromReport)}'`,
      ].join(" and ");

      let r0 = await drive.files.list({
        q: q0,
        fields: "files(id,name,webViewLink,modifiedTime,size)",
        orderBy: "modifiedTime desc",
        pageSize: 5,
        supportsAllDrives: true,
        includeItemsFromAllDrives: true,
      });

      const files0 = r0.data.files || [];
      if (files0.length) {
        return NextResponse.json({ ok: true, from: "tag+report", files: files0 });
      }
      // fallback: ค้นทั้งไดรฟ์ (ไม่มี parent filter)
      const q0b = [
        `mimeType='application/pdf'`,
        `trashed=false`,
        `name contains '${esc(tag)}'`,
        `name contains '${esc(tokenFromReport)}'`,
      ].join(" and ");
      r0 = await drive.files.list({
        q: q0b,
        fields: "files(id,name,webViewLink,modifiedTime,size)",
        orderBy: "modifiedTime desc",
        pageSize: 5,
        supportsAllDrives: true,
        includeItemsFromAllDrives: true,
      });
      if (r0.data.files && r0.data.files.length) {
        return NextResponse.json({ ok: true, from: "tag+report-anywhere", files: r0.data.files });
      }
    }

    // 1) ถ้ามี pdfHint => ค้นด้วยชื่อ (contains)
    if (pdfHint) {
      const q1 = [
        `'${esc(folderId)}' in parents`,
        `mimeType='application/pdf'`,
        `trashed=false`,
        `name contains '${esc(pdfHint.split("/").pop()!)}'`,
      ].join(" and ");

      let r1 = await drive.files.list({
        q: q1,
        fields: "files(id,name,webViewLink,modifiedTime,size)",
        orderBy: "modifiedTime desc",
        pageSize: 5,
        supportsAllDrives: true,
        includeItemsFromAllDrives: true,
      });

      const files = r1.data.files || [];
      if (files.length) {
        return NextResponse.json({ ok: true, from: "hint", files });
      }
      // fallback both: search anywhere without parent filter
      const q1b = [
        `mimeType='application/pdf'`,
        `trashed=false`,
        `name contains '${esc(pdfHint.split("/").pop()!)}'`,
      ].join(" and ");
      r1 = await drive.files.list({
        q: q1b,
        fields: "files(id,name,webViewLink,modifiedTime,size)",
        orderBy: "modifiedTime desc",
        pageSize: 5,
        supportsAllDrives: true,
        includeItemsFromAllDrives: true,
      });
      if (r1.data.files && r1.data.files.length) {
        return NextResponse.json({ ok: true, from: "hint-anywhere", files: r1.data.files });
      }
    }

    // 2) ค้นด้วย tag + วันที่ (2025725)
    const tokenDate = toYMDCompact(dateStr);
    if (tag && tokenDate) {
      const q2 = [
        `'${esc(folderId)}' in parents`,
        `mimeType='application/pdf'`,
        `trashed=false`,
        `name contains '${esc(tag)}'`,
        `name contains '${esc(tokenDate)}'`,
      ].join(" and ");

      let r2 = await drive.files.list({
        q: q2,
        fields: "files(id,name,webViewLink,modifiedTime,size)",
        orderBy: "modifiedTime desc",
        pageSize: 5,
        supportsAllDrives: true,
        includeItemsFromAllDrives: true,
      });

      const files = r2.data.files || [];
      if (files.length) {
        return NextResponse.json({ ok: true, from: "tag+date", files });
      }
      // fallback: anywhere
      const q2b = [
        `mimeType='application/pdf'`,
        `trashed=false`,
        `name contains '${esc(tag)}'`,
        `name contains '${esc(tokenDate)}'`,
      ].join(" and ");
      r2 = await drive.files.list({
        q: q2b,
        fields: "files(id,name,webViewLink,modifiedTime,size)",
        orderBy: "modifiedTime desc",
        pageSize: 5,
        supportsAllDrives: true,
        includeItemsFromAllDrives: true,
      });
      if (r2.data.files && r2.data.files.length) {
        return NextResponse.json({ ok: true, from: "tag+date-anywhere", files: r2.data.files });
      }
    }

    // 3) ค้นด้วย tag อย่างเดียว (หยิบล่าสุด)
    if (tag) {
      const q3 = [
        `'${esc(folderId)}' in parents`,
        `mimeType='application/pdf'`,
        `trashed=false`,
        `name contains '${esc(tag)}'`,
      ].join(" and ");

      let r3 = await drive.files.list({
        q: q3,
        fields: "files(id,name,webViewLink,modifiedTime,size)",
        orderBy: "modifiedTime desc",
        pageSize: 5,
        supportsAllDrives: true,
        includeItemsFromAllDrives: true,
      });

      const files = r3.data.files || [];
      if (files.length) {
        return NextResponse.json({ ok: true, from: "tag-only", files });
      }
      // fallback: anywhere
      const q3b = [
        `mimeType='application/pdf'`,
        `trashed=false`,
        `name contains '${esc(tag)}'`,
      ].join(" and ");
      r3 = await drive.files.list({
        q: q3b,
        fields: "files(id,name,webViewLink,modifiedTime,size)",
        orderBy: "modifiedTime desc",
        pageSize: 5,
        supportsAllDrives: true,
        includeItemsFromAllDrives: true,
      });
      if (r3.data.files && r3.data.files.length) {
        return NextResponse.json({ ok: true, from: "tag-anywhere", files: r3.data.files });
      }
    }

    return NextResponse.json({ ok: false, reason: "not-found" });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || String(e) }, { status: 500 });
  }
}
