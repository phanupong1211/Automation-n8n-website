import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  try {
    const email = process.env.GOOGLE_CLIENT_EMAIL!;
    const key = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_SHEETS_ASSET_ID || process.env.GOOGLE_SHEETS_ID!;
    const tab = process.env.GOOGLE_SHEETS_VALVE_ASSET_TAB || process.env.GOOGLE_SHEETS_TAB || "valve";

    const auth = new google.auth.JWT({ email, key, scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"] });
    const sheets = google.sheets({ version: "v4", auth });

    const meta = await sheets.spreadsheets.get({ spreadsheetId });
    const sheetTitles = meta.data.sheets?.map(s => s.properties?.title) ?? [];

    let testPreview: any = null;
    if (sheetTitles.includes(tab)) {
      const test = await sheets.spreadsheets.values.get({ spreadsheetId, range: `${tab}!A1:B5` });
      testPreview = test.data.values ?? null;
    }

    return NextResponse.json({ ok: true, sheetTitles, usingTab: tab, testPreview });
  } catch (e: any) {
    return NextResponse.json({ ok: false, message: e?.message, details: e?.response?.data }, { status: 500 });
  }
}
