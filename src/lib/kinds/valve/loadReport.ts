import { readSheetObjectsFrom } from "@/lib/google/sheets";
import { resolveDrivePathToViewerUrl } from "@/lib/google/drive";

function get(r: Record<string, any>, keys: string[], fallback = "") {
  for (const k of keys) if (r[k] != null && String(r[k]).trim() !== "") return r[k];
  return fallback;
}

/**
 * โหลดรายงานวาล์ว (Valve) รายตัว
 * - หาแถวที่ Report_No และ Tag ตรง
 * - คืน object สำหรับ View + แนบลิงก์ PDF (ถ้าหาเจอ)
 */
export async function loadValveReport(tag: string, reportNo: string) {
  const SHEET_ID = process.env.GOOGLE_SHEETS_REPORT_ID!;
  const TAB = process.env.GOOGLE_SHEETS_VALVE_REPORT_TAB || "valve_report";

  const rows = await readSheetObjectsFrom(SHEET_ID, TAB, "A1:ZZ20000");

  const r = rows.find((x) =>
    String(get(x, ["Report_No", "Report No.", "ReportNo"])).trim() === reportNo &&
    String(get(x, ["Tag_No", "Tags", "Tag No.", "Tag"])).trim() === tag
  );
  if (!r) return undefined;

  // พยายามอ่านคอลัมน์ PDF หลายชื่อ
  const pdfPath = String(
    get(r, ["PDF", "Pdf", "pdf", "Attachment", "File", "ไฟล์"], "")
  ).trim();
  const pdf = pdfPath ? await resolveDrivePathToViewerUrl(pdfPath) : undefined;

  // จัดรูปตามโครง loadReportRowToData ของ valve ใน kindRegistry ที่คุณมีอยู่แล้ว
  const data = {
    reportNo: get(r, ["Report_No", "Report No.", "ReportNo"]),
    tag: get(r, ["Tag_No", "Tags", "Tag", "Tag No."]),

    testStandard: get(r, ["Test_Standard"]),
    stdRate: get(r, ["std_rate"]),
    valveAllowable: get(r, ["valve_allowable"]),

    valveTestMedium: get(r, ["valve_test_medium"]),
    valveTestPressure: get(r, ["valve_test_pressure"]),

    actuatorTestMedium: get(r, ["actuator_test_medium"]),
    actuatorTestPressure: get(r, ["actuator_test_pressure"]),

    valveInitialRate: get(r, ["valve_initial_rate"]),
    actuatorInitialRate: get(r, ["actuator_initial_rate"]),

    valveFinalRate: get(r, ["valve_final_rate"]),
    actuatorFinalRate: get(r, ["actuator_final_rate"]),

    initialResult: get(r, ["Initial_Result"]),
    finalResult: get(r, ["Final_Result"]),
    actInitialResult: get(r, ["act_Initial_Result"]),
    actFinalResult: get(r, ["act_Final_Result"]),

    comment: get(r, ["comment", "Remark"]),
    testedBy: get(r, ["Tested_by", "Tester"]),
    inspectedAt: get(r, ["Inspect_Date", "DATE"]),

    seatLeakageTest: get(r, ["Seat_Leakage_Test"]),
    valveOverhaul: get(r, ["Valve_Overhaul"]),
    valveCalibrate: get(r, ["Valve_Calibrate"]),

    // ลิงก์ PDF ที่ resolve แล้ว (อาจเป็น undefined ถ้าไม่มี)
    pdf,
  };

  return data;
}
