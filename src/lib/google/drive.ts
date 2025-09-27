// src/lib/google/drive.ts
import { google } from "googleapis";

/**
 * JWT Google Drive client (read-only)
 * ใช้ .env:
 *  - GOOGLE_CLIENT_EMAIL
 *  - GOOGLE_PRIVATE_KEY
 */
export function getDriveClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });
  return google.drive({ version: "v3", auth });
}

type DriveFileLite = { id: string; name: string; webViewLink?: string };

/**
 * ค้นหาไฟล์ชื่อที่ระบุภายในโฟลเดอร์ (exact match ก่อน, ไม่เจอค่อย contains)
 */
async function findFileInFolderByName(
  folderId: string,
  fileName: string
): Promise<DriveFileLite | null> {
  const drive = getDriveClient();

  // 1) exact match
  const qExact = [
    `'${folderId}' in parents`,
    `mimeType='application/pdf'`,
    `trashed=false`,
    `name='${fileName.replace(/'/g, "\\'")}'`,
  ].join(" and ");

  let r = await drive.files.list({
    q: qExact,
    fields: "files(id,name,webViewLink)",
    orderBy: "modifiedTime desc",
    pageSize: 1,
  });
  if (r.data.files && r.data.files.length) {
    const f = r.data.files[0]!;
    return { id: f.id!, name: f.name!, webViewLink: f.webViewLink || undefined };
  }

  // 2) contains fallback
  const qContains = [
    `'${folderId}' in parents`,
    `mimeType='application/pdf'`,
    `trashed=false`,
    `name contains '${fileName.replace(/'/g, "\\'")}'`,
  ].join(" and ");

  r = await drive.files.list({
    q: qContains,
    fields: "files(id,name,webViewLink)",
    orderBy: "modifiedTime desc",
    pageSize: 1,
  });
  if (r.data.files && r.data.files.length) {
    const f = r.data.files[0]!;
    return { id: f.id!, name: f.name!, webViewLink: f.webViewLink || undefined };
  }
  return null;
}

/**
 * รับ path แบบที่เก็บในชีต เช่น:
 *  - "Service report Safety Valve/2025725-158 Service report V324.pdf"
 *  - หรือส่งมาเฉพาะชื่อไฟล์ก็ได้ "2025725-158 Service report V324.pdf"
 *
 * จะเดา ROOT FOLDER จาก keyword:
 *  - มีคำว่า "Safety" => ใช้ GOOGLE_DRIVE_SAFETY_ID
 *  - มีคำว่า "Valve" (แต่ไม่มี Safety) => ใช้ GOOGLE_DRIVE_VALVE_ID
 *  - ไม่เข้าเงื่อนไข => fallback เป็น SAFETY
 *
 * คืนค่า URL สำหรับเปิดดู (webViewLink) หรือ null ถ้าไม่พบ
 */
export async function resolveDrivePathToViewerUrl(
  pdfPath: string
): Promise<string | null> {
  if (!pdfPath || !pdfPath.trim()) return null;

  const isSafety = /safety/i.test(pdfPath);
  const isValve = /valve/i.test(pdfPath) && !isSafety;

  const rootId =
    (isValve
      ? process.env.GOOGLE_DRIVE_VALVE_ID
      : process.env.GOOGLE_DRIVE_SAFETY_ID) || "";

  if (!rootId) return null;

  // ตัดให้เหลือเฉพาะชื่อไฟล์ (segment สุดท้าย)
  const segments = pdfPath.split("/").map((s) => s.trim()).filter(Boolean);
  const fileName = segments[segments.length - 1] || pdfPath;

  const f = await findFileInFolderByName(rootId, fileName);
  if (!f) return null;

  // ถ้า webViewLink ไม่มี ให้สร้างเป็น /file/{id}/view
  return f.webViewLink || `https://drive.google.com/file/d/${f.id}/view`;
}
