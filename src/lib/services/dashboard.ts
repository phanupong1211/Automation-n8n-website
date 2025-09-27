import { readSheetObjectsFrom } from "@/lib/google/sheets";
import { envOrThrow } from "@/lib/utils";

//
// TYPES
//
export type KpiSummary = {
  total: number;
  done: number;
  inProgress: number;
  pending: number;
};

export type EquipmentSummary = {
  valve: number;
  safety: number;
  total: number;
};

export type RecentItem = {
  Type: "Valve" | "Safety Valve";
  Report_No: string;
  Tag_No: string;
  Description: string;
  Inspect_Date?: string;
  Final_Result?: string;
  Tested_by?: string;
};

//
// HELPERS
//
function countByStatus(rows: any[]): KpiSummary {
  let done = 0, inProgress = 0, pending = 0;
  for (const r of rows) {
    const status = (r["Final_Result"] || r["Status"] || "").toString().toLowerCase();
    if (["done", "pass", "เสร็จสิ้น", "เสร็จแล้ว"].some(k => status.includes(k))) {
      done++;
    } else if (["progress", "doing", "กำลังทำ"].some(k => status.includes(k))) {
      inProgress++;
    } else {
      pending++;
    }
  }
  const total = done + inProgress + pending;
  return { total, done, inProgress, pending };
}

//
// SERVICES
//

/** ดึง KPI summary รวมจากทั้ง Valve และ Safety Valve */
export async function getDashboardSummary(): Promise<{
  kpi: KpiSummary;
  equipment: EquipmentSummary;
}> {
  const ASSET_ID = envOrThrow("GOOGLE_SHEETS_ASSET_ID");
  const V_TAB = envOrThrow("GOOGLE_SHEETS_VALVE_ASSET_TAB");
  const S_TAB = envOrThrow("GOOGLE_SHEETS_SAFETY_VALVE_ASSET_TAB");

  // อ่านอุปกรณ์ทั้งหมด
  const valveEquip = await readSheetObjectsFrom(ASSET_ID, V_TAB, "A1:ZZ20000");
  const safetyEquip = await readSheetObjectsFrom(ASSET_ID, S_TAB, "A1:ZZ20000");

  const equipment: EquipmentSummary = {
    valve: valveEquip.length,
    safety: safetyEquip.length,
    total: valveEquip.length + safetyEquip.length,
  };

  // อ่านประวัติซ่อม
  const REPORT_ID = envOrThrow("GOOGLE_SHEETS_REPORT_ID");
  const V_RPT = envOrThrow("GOOGLE_SHEETS_VALVE_REPORT_TAB");
  const S_RPT = envOrThrow("GOOGLE_SHEETS_SAFETY_VALVE_REPORT_TAB");

  const valveReports = await readSheetObjectsFrom(REPORT_ID, V_RPT, "A1:ZZ20000");
  const safetyReports = await readSheetObjectsFrom(REPORT_ID, S_RPT, "A1:ZZ20000");

  const kpi = countByStatus([...valveReports, ...safetyReports]);

  return { kpi, equipment };
}

/** ดึง recent report (รวม Valve และ Safety Valve) */
export async function getRecentReports(limit = 10): Promise<RecentItem[]> {
  const REPORT_ID = envOrThrow("GOOGLE_SHEETS_REPORT_ID");
  const V_RPT = envOrThrow("GOOGLE_SHEETS_VALVE_REPORT_TAB");
  const S_RPT = envOrThrow("GOOGLE_SHEETS_SAFETY_VALVE_REPORT_TAB");

  const valveReports = await readSheetObjectsFrom(REPORT_ID, V_RPT, "A1:ZZ20000");
  const safetyReports = await readSheetObjectsFrom(REPORT_ID, S_RPT, "A1:ZZ20000");

  const merged: RecentItem[] = [
    ...valveReports.map(r => ({
      Type: "Valve" as const,
      Report_No: r["Report_No"] || r["Report No."],
      Tag_No: r["Tag_No"] || r["Tag"],
      Description: r["Description"] || "",
      Inspect_Date: r["Inspect_Date"] || r["DATE"] || r["Date"],
      Final_Result: r["Final_Result"],
      Tested_by: r["Tested_by"],
    })),
    ...safetyReports.map(r => ({
      Type: "Safety Valve" as const,
      Report_No: r["Report_No"] || r["Report No."],
      Tag_No: r["Tag_No"] || r["Tag"],
      Description: r["Description"] || "",
      Inspect_Date: r["Inspect_Date"] || r["DATE"] || r["Date"],
      Final_Result: r["Final_Result"],
      Tested_by: r["Tested_by"],
    })),
  ];

  // sort by date desc
  merged.sort((a, b) => {
    const da = new Date(a.Inspect_Date || 0).getTime();
    const db = new Date(b.Inspect_Date || 0).getTime();
    return db - da;
  });

  return merged.slice(0, limit);
}
