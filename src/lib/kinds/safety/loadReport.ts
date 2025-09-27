import { readSheetObjectsFrom } from "@/lib/google/sheets";
import { resolveDrivePathToViewerUrl } from "@/lib/google/drive"; // This import is correct, the error message is misleading.

function get(r: Record<string, any>, keys: string[], fallback = "") {
  for (const k of keys) if (r[k] != null && String(r[k]).trim() !== "") return r[k];
  return fallback;
}

export async function loadSafetyReport(tag: string, reportNo: string) {
  const SHEET_ID = process.env.GOOGLE_SHEETS_REPORT_ID!;
  const REPORT_TAB = process.env.GOOGLE_SHEETS_SAFETY_VALVE_REPORT_TAB || "safety_valve_report";

  const rows = await readSheetObjectsFrom(SHEET_ID, REPORT_TAB, "A1:ZZ20000");
  const r = rows.find((x) =>
    String(get(x, ["Report_No","Report No.","Report"])).trim() === reportNo &&
    String(get(x, ["Tag_No","Tag No.","Tag"])).trim() === tag
  );
  if (!r) return undefined;

  const pdfPath = String(get(r, ["PDF", "Pdf", "Attachment", "File"], "")).trim();
  const pdf = pdfPath ? await resolveDrivePathToViewerUrl(pdfPath) : undefined;

  return {
    reportNo,
    tag,
    testedBy: get(r, ["Tested_by","Tested By"], ""),
    inspectedAt: get(r, ["DATE","Date"], ""),
    remark: get(r, ["Remark","หมายเหตุ"], ""),

    // ผล test
    popInitial: get(r, ["B_PopTest","B: Pop test Result"], ""),
    popFinal:   get(r, ["A_PopTest","A: Pop test Result"], ""),
    leakInitial:get(r, ["B_LeakTest","B: Leakage test Result"], ""),
    leakFinal:  get(r, ["A_LeakTest","A: Leakage test Result"], ""),

    // detail
    popFluid: get(r, ["Pop Test Fluid"], ""),
    setPressure: get(r, ["Set pressure"], ""),
    popInitialPressure: get(r, ["Initial Test Popping"], ""),
    popFinalPressure: get(r, ["Final Test Popping"], ""),

    leakFluid: get(r, ["Leakage Test Fluid"], ""),
    leakPressure: get(r, ["Leakage Test Pressure"], ""),
    leakInitialRate: get(r, ["Initial Leakage Test"], ""),
    leakFinalRate: get(r, ["Final Leakage Test"], ""),

    // << สำคัญ: ลิงก์ PDF ที่ resolve แล้ว >>
    pdf,
  };
}
