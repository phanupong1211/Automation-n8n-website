import { google } from "googleapis";

// Very light in-memory cache to reduce read bursts against Google Sheets.
// Keyed by spreadsheetId + tab + range. TTL keeps data fresh enough for dashboard views.
const SHEETS_CACHE = new Map<string, { at: number; rows: any[] }>();
const CACHE_TTL_MS = 60_000; // 60s — adjust if needed

// สร้าง client ด้วย Service Account
function getSheetsClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

/** อ่านชีตแปลงเป็น array ของ object: header แถวแรก -> คีย์ */
export async function readSheetObjectsFrom(
  spreadsheetId: string,
  tab: string,
  rangeA1 = "A1:ZZ20000"
) {
  const cacheKey = `${spreadsheetId}::${tab}::${rangeA1}`;
  const now = Date.now();
  const cached = SHEETS_CACHE.get(cacheKey);
  if (cached && now - cached.at < CACHE_TTL_MS) {
    return cached.rows;
  }

  const sheets = getSheetsClient();
  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${tab}!${rangeA1}`,
    valueRenderOption: "UNFORMATTED_VALUE",
  });

  const rows = data.values || [];
  if (!rows.length) return [];

  const headers = rows[0].map((h) => String(h).trim());
  const out = rows.slice(1).map((r) => {
    const obj: Record<string, any> = {};
    headers.forEach((h, i) => (obj[h] = r[i] ?? ""));
    return obj;
  });
  SHEETS_CACHE.set(cacheKey, { at: now, rows: out });
  return out;
}

/** append 1 แถวลงชีต */
export async function appendSheetRow(
  spreadsheetId: string,
  tab: string,
  row: (string | number | boolean | null | undefined)[]
) {
  const sheets = getSheetsClient();
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${tab}!A1`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}
