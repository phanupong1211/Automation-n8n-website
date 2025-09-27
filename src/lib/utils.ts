import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** ===================== Helpers (วันที่) ===================== */

const EXCEL_UNIX_EPOCH_OFFSET = 25569; // 1970-01-01 = 25569 ในระบบ Excel 1900
const MS_PER_DAY = 24 * 60 * 60 * 1000;

function excelSerialToMs(n: number): number {
  // รองรับทศนิยม (เวลา) ด้วย
  return (n - EXCEL_UNIX_EPOCH_OFFSET) * MS_PER_DAY;
}

function safeToLocaleDate(d: Date, locale = "en-GB") {
  return isNaN(d.getTime())
    ? "-"
    : d.toLocaleDateString(locale, { day: "2-digit", month: "short", year: "numeric" });
}

/** ล้างอักขระซ่อนที่ชอบติดมาจากชีต/คัดลอก */
export function cleanDateStr(x: any) {
  if (x == null) return "";
  return String(x)
    .replace(/\u200B/g, "")   // zero-width space
    .replace(/\u00A0/g, " ")  // non-breaking space
    .trim();
}

/** ===================== Env ===================== */

export function envOrThrow(key: string): string {
  const v = process.env[key];
  if (!v || String(v).trim() === "") {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return v;
}

/** ===================== Pickers ===================== */

/** ทำให้ชื่อคีย์ยืดหยุ่นขึ้นเวลาหาคอลัมน์จากชีต */
function normalizeKey(k: string) {
  return k.normalize("NFKC").toLowerCase().replace(/[\s_\-]+/g, "");
}

/** ดึงค่าจากหลายชื่อคอลัมน์แบบยืดหยุ่น */
export function pickFlex(
  row: Record<string, any>,
  candidates: string[],
  fallback = ""
) {
  if (!row) return fallback;
  const dict = new Map<string, string>();
  for (const k of Object.keys(row)) {
    dict.set(normalizeKey(k), k);
  }
  for (const want of candidates) {
    const hit = dict.get(normalizeKey(want));
    if (hit != null) {
      const v = row[hit];
      if (v != null && String(v).trim() !== "") {
        return v;
      }
    }
  }
  return fallback;
}

/** ของเดิม (คงไว้ให้ backward compatibility) */
export function get(r: Record<string, any>, keys: string[], fallback = ""): string {
  for (const k of keys) {
    const v = r?.[k];
    if (v != null && String(v).trim() !== "") return String(v).trim();
  }
  return fallback;
}

/** ===================== Formatting / Parsing ===================== */

/**
 * ฟอร์แมตแสดงวันที่ (dd Mon yyyy)
 * - รองรับ: Excel serial (รวมทศนิยม), dd/mm/yy, ddmmyy, m/d/yyyy (+เวลา), พ.ศ. 4 หลัก (>2400)
 * - ใช้โซนเวลา Local
 */
export function fmtDate(
  input: string | number | Date | undefined,
  locale = "en-GB"
) {
  if (input == null || input === "") return "-";

  // Number → Excel serial หรือ epoch ms
  if (typeof input === "number") {
    if (input > 25000) {
      const d = new Date(excelSerialToMs(input));
      return safeToLocaleDate(d, locale);
    }
    const d = new Date(input);
    return safeToLocaleDate(d, locale);
  }

  // Date object
  if (input instanceof Date) {
    return safeToLocaleDate(input, locale);
  }

  // String
  const s0 = cleanDateStr(input);
  const s = s0;

  // 1) ddmmyy (เช็คก่อนเลข 4–6 หลักชน Excel serial)
  let m = s.match(/^(\d{2})(\d{2})(\d{2})$/);
  if (m) {
    const dd = parseInt(m[1], 10);
    const mm = parseInt(m[2], 10);
    const yy = parseInt(m[3], 10);
    let year = yy >= 50 ? 2000 + (yy - 43) : 2000 + yy; // 68 → 2025 (heuristic BE-short)
    const d = new Date(year, mm - 1, dd);
    return safeToLocaleDate(d, locale);
  }

  // 2) dd/mm/yy
  m = s.match(/^([0-3]?\d)\/(1?\d)\/(\d{2})$/);
  if (m) {
    const dd = parseInt(m[1], 10);
    const mm = parseInt(m[2], 10);
    const yy = parseInt(m[3], 10);
    const year = yy >= 50 ? 2000 + (yy - 43) : 2000 + yy;
    const d = new Date(year, mm - 1, dd);
    return safeToLocaleDate(d, locale);
  }

  // 3) m/d/yyyy หรือ d/m/yyyy (+เวลา) + BE 4 หลัก
  m = s.match(/^([0-3]?\d)\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
  if (m) {
    let a = parseInt(m[1], 10);
    let b = parseInt(m[2], 10);
    let year = parseInt(m[3], 10);
    const hh = m[4] ? parseInt(m[4], 10) : 0;
    const mi = m[5] ? parseInt(m[5], 10) : 0;
    const ss = m[6] ? parseInt(m[6], 10) : 0;
    if (year > 2400) year -= 543; // BE → CE

    let day: number, month: number;
    if (a > 12 && b <= 12) { day = a; month = b; }
    else if (b > 12 && a <= 12) { day = b; month = a; }
    else { day = b; month = a; } // default month/day

    const d = new Date(year, month - 1, day, hh, mi, ss);
    return safeToLocaleDate(d, locale);
  }

  // 4) เลข 4–6 หลักเป็น Excel serial (หลังเช็ค ddmmyy แล้ว)
  if (/^\d{4,6}$/.test(s)) {
    const n = parseFloat(s);
    if (n > 25000) {
      const d2 = new Date(excelSerialToMs(n));
      return safeToLocaleDate(d2, locale);
    }
  }

  // 5) fallback: แยก / แบบหยาบ + BE
  if (s.includes("/")) {
    const [datePart, timePart] = s.split(/\s+/, 2);
    const parts = datePart.split("/");
    if (parts.length === 3) {
      let p1 = parseInt(parts[0], 10);
      let p2 = parseInt(parts[1], 10);
      let year = parseInt(parts[2], 10);
      if (year > 2400) year -= 543;
      let day: number, month: number;
      if (p1 > 12 && p2 <= 12) { day = p1; month = p2; }
      else if (p2 > 12 && p1 <= 12) { day = p2; month = p1; }
      else { day = p2; month = p1; }
      let hh = 0, mi = 0, ss = 0;
      if (timePart && /\d+:\d+(:\d+)?/.test(timePart)) {
        const t = timePart.split(":");
        hh = parseInt(t[0], 10) || 0;
        mi = parseInt(t[1], 10) || 0;
        ss = parseInt(t[2] || "0", 10) || 0;
      }
      const d = new Date(year, month - 1, day, hh, mi, ss);
      return safeToLocaleDate(d, locale);
    }
  }

  // 5.5) รูปแบบ yyyy-mm-dd หรือ yyyy/mm/dd (+เวลา) + BE 4 หลัก
  // รองรับกรณีปีพุทธศักราชที่มาจากชีตเป็นรูปแบบมาตรฐานของ Google Sheets
  let m2 = s.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
  if (m2) {
    let year = parseInt(m2[1], 10);
    const month = parseInt(m2[2], 10);
    const day = parseInt(m2[3], 10);
    const hh = m2[4] ? parseInt(m2[4], 10) : 0;
    const mi = m2[5] ? parseInt(m2[5], 10) : 0;
    const ss = m2[6] ? parseInt(m2[6], 10) : 0;
    if (year > 2400) year -= 543; // BE → CE
    const d = new Date(year, month - 1, day, hh, mi, ss);
    return safeToLocaleDate(d, locale);
  }

  // 6) ISO/Date constructor
  const d = new Date(s);
  return safeToLocaleDate(d, locale);
}

/**
 * แปลงสตริงวันที่/Excel serial → epoch ms (0 ถ้า invalid)
 * - ใช้ตรรกะเดียวกับ fmtDate เพื่อให้ผลลัพธ์สอดคล้อง
 */
export function parseSheetDateMs(input: string | number | Date | undefined): number {
  if (input == null || input === "") return 0;

  // Number
  if (typeof input === "number") {
    if (input > 25000) return excelSerialToMs(input);
    const d = new Date(input);
    return isNaN(d.getTime()) ? 0 : d.getTime();
  }

  // Date
  if (input instanceof Date) {
    return isNaN(input.getTime()) ? 0 : input.getTime();
  }

  const s0 = cleanDateStr(input);
  const s = s0;

  // ddmmyy
  let m = s.match(/^(\d{2})(\d{2})(\d{2})$/);
  if (m) {
    const dd = parseInt(m[1], 10);
    const mm = parseInt(m[2], 10);
    const yy = parseInt(m[3], 10);
    let year = yy >= 50 ? 2000 + (yy - 43) : 2000 + yy;
    const d = new Date(year, mm - 1, dd);
    return isNaN(d.getTime()) ? 0 : d.getTime();
  }

  // dd/m/yy
  m = s.match(/^([0-3]?\d)\/(1?\d)\/(\d{2})$/);
  if (m) {
    const dd = parseInt(m[1], 10);
    const mm = parseInt(m[2], 10);
    const yy = parseInt(m[3], 10);
    const year = yy >= 50 ? 2000 + (yy - 43) : 2000 + yy;
    const d = new Date(year, mm - 1, dd);
    return isNaN(d.getTime()) ? 0 : d.getTime();
  }

  // m/d/yyyy หรือ d/m/yyyy (+เวลา) + BE
  m = s.match(/^([0-3]?\d)\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
  if (m) {
    let a = parseInt(m[1], 10);
    let b = parseInt(m[2], 10);
    let year = parseInt(m[3], 10);
    const hh = m[4] ? parseInt(m[4], 10) : 0;
    const mi = m[5] ? parseInt(m[5], 10) : 0;
    const ss = m[6] ? parseInt(m[6], 10) : 0;
    if (year > 2400) year -= 543;

    let day: number, month: number;
    if (a > 12 && b <= 12) { day = a; month = b; }
    else if (b > 12 && a <= 12) { day = b; month = a; }
    else { day = b; month = a; }

    const d = new Date(year, month - 1, day, hh, mi, ss);
    return isNaN(d.getTime()) ? 0 : d.getTime();
  }

  // yyyy-mm-dd หรือ yyyy/mm/dd (+เวลา) + BE
  let m2 = s.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
  if (m2) {
    let year = parseInt(m2[1], 10);
    const month = parseInt(m2[2], 10);
    const day = parseInt(m2[3], 10);
    const hh = m2[4] ? parseInt(m2[4], 10) : 0;
    const mi = m2[5] ? parseInt(m2[5], 10) : 0;
    const ss = m2[6] ? parseInt(m2[6], 10) : 0;
    if (year > 2400) year -= 543;
    const d = new Date(year, month - 1, day, hh, mi, ss);
    return isNaN(d.getTime()) ? 0 : d.getTime();
  }

  // เลข 4–6 หลักเป็น Excel serial
  if (/^\d{4,6}$/.test(s)) {
    const n = parseFloat(s);
    if (n > 25000) return excelSerialToMs(n);
  }

  // Fallback
  const d = new Date(s);
  return isNaN(d.getTime()) ? 0 : d.getTime();
}

/** ===================== Styling helpers (เดิม) ===================== */

export function resultColor(value?: string): string {
  if (!value) return "text-slate-600";
  const v = value.toLowerCase();
  if (v.includes("pass")) return "text-green-600 font-semibold";
  if (v.includes("fail") || v.includes("ng")) return "text-red-600 font-semibold";
  return "text-slate-800";
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** สีป้ายผลทดสอบ */
export function resultBadgeClass(v?: string) {
  const s = String(v || "").toLowerCase();
  if (s.includes("pass") || s.includes("ok") || s.includes("ผ่าน")) {
    return "bg-emerald-100 text-emerald-700";
  }
  if (s.includes("fail") || s.includes("not ok") || s.includes("ng") || s.includes("ไม่ผ่าน")) {
    return "bg-rose-100 text-rose-700";
  }
  return "bg-slate-100 text-slate-700";
}
