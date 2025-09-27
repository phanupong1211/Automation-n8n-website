import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  try {
    const email = process.env.GOOGLE_CLIENT_EMAIL!;
    const key = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");
    const fileId = process.env.GOOGLE_SHEETS_ASSET_ID || process.env.GOOGLE_SHEETS_ID!;
    if (!email || !key || !fileId) {
      return NextResponse.json({ ok: false, hint: "ENV missing" }, { status: 400 });
    }

    const auth = new google.auth.JWT({ email, key, scopes: ["https://www.googleapis.com/auth/drive.readonly"] });
    const drive = google.drive({ version: "v3", auth });

    const meta = await drive.files.get({ fileId, fields: "id,name,mimeType" });
    return NextResponse.json({ ok: true, driveMeta: meta.data });
  } catch (e: any) {
    return NextResponse.json({ ok: false, message: e?.message, details: e?.response?.data }, { status: 500 });
  }
}
