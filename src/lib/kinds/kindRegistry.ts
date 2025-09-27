//src\lib\kinds\kindRegistry.ts
import { readSheetObjectsFrom } from "@/lib/google/sheets";
import { get, pickFlex, parseSheetDateMs, cleanDateStr } from "@/lib/utils";

// Components (แยกชนิด)
import ValveSpec from "@/components/asset/ValveSpec";
import SafetySpec from "@/components/asset/SafetySpec";
import MaintHistoryValve from "@/components/asset/MaintHistoryValve";
import MaintHistorySafety from "@/components/asset/MaintHistorySafety";
import ValveReportView from "@/components/report/ValveReportView";
import SafetyReportView from "@/components/report/SafetyReportView";
import DOSpec from "@/components/asset/DOSpec";
import MaintHistoryDO from "@/components/asset/MaintHistoryDO";
import DOReportView from "@/components/report/DOReportView";
import pHSpec from "@/components/asset/pHSpec";
import MaintHistorypH from "@/components/asset/MaintHistorypH";
import pHReportView from "@/components/report/pHReportView";

import { JSX } from "react";

export type EquipmentKind = "valve" | "safety" | "DO" | "ph";

export type ShutdownRow = {
  Team: string;
  Plant: string;
  Area: string;
  WO: string | number;
  equipment: string;
  equipment_name: string;
  work_name: string;
  จำนวน: number | string;
  หน่วยจำนวน: string;
  plan_start?: string | number; // <-- เพิ่ม
  plan_finish?: string | number;  // <-- เพิ่ม (สะกดตามหัวในชีต)
  actual_start?: string | number; // <-- เพิ่ม
  actual_finish?: string | number; // <-- เพิ่ม
  Progress: number | string;
  "หน่วย Progress": string;
  หมายเหตุ?: string;
};

export interface BaseKindConfig {
  label: string;
  env: {
    equipSheetId: string; // ชื่อ ENV
    equipTab: string;     // ชื่อ ENV (จะมี default ในเพจ)
    reportSheetId: string;
    reportTab: string;
  };
  keys: {
    tag: string[];
    reportNo: string[];
    inspectDate: string[];
    description: string[];

  };
  loadSpec: (row: Record<string, any>) => any;
  loadReportRowToData?: (row: Record<string, any>) => any;
  components: {
    SpecView: (props: any) => JSX.Element;
    HistoryTable: (props: any) => JSX.Element;
    ReportView: (props: any) => JSX.Element;
  };
}

export const kindRegistry: Record<EquipmentKind, BaseKindConfig> = {
  valve: {
    label: "Valve",
    env: {
      equipSheetId: "GOOGLE_SHEETS_ASSET_ID",
      equipTab: "GOOGLE_SHEETS_VALVE_ASSET_TAB",
      reportSheetId: "GOOGLE_SHEETS_REPORT_ID",
      reportTab: "GOOGLE_SHEETS_VALVE_REPORT_TAB",
    },
    keys: {
      tag: ["Tag_No", "Tags", "Tag No.", "Tag"],
      reportNo: ["Report_No", "Report No.", "ReportNo"],
      inspectDate: ["Inspect_Date", "DATE"],
      description: ["Description"]
    },
    loadSpec: (r) => ({
      Tag_No: get(r, ["Tag_No", "Tags", "Tag No.", "Tag"]),
      Description: get(r, ["Description"]),
      Valve_Type: get(r, ["Valve Type", "Valve_Type"]),
      Model: get(r, ["Model"]),
      Standard: get(r, ["Standard"]),
      Valve_Size: get(r, ["Valve Size", "Valve_Size"]),
      Rating_Class: get(r, ["Rating Class", "Rating_Class"]),
      Gasket_Size: get(r, ["Gasket Size", "Gasket_Size"]),
      Tags_Area: get(r, ["Tags Area", "Area"]),
      Location: get(r, ["Location"]),
      Scaffolding: get(r, ["Scaffolding"]),
      Remark: get(r, ["Remark"]),
    }),
    loadReportRowToData: (r) => ({
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
    }),
    components: {
      SpecView: ValveSpec,
      HistoryTable: MaintHistoryValve,
      ReportView: ValveReportView,
    },
  },

  safety: {
    label: "Safety Valve",
    env: {
      equipSheetId: "GOOGLE_SHEETS_ASSET_ID",
      equipTab: "GOOGLE_SHEETS_SAFETY_VALVE_ASSET_TAB",
      reportSheetId: "GOOGLE_SHEETS_REPORT_ID",
      reportTab: "GOOGLE_SHEETS_SAFETY_VALVE_REPORT_TAB",
    },
    keys: {
      tag: ["Tags", "Tag", "Tag_No", "Tag No."],
      reportNo: ["Report_No", "Report No.", "ReportNo"],
      inspectDate: ["DATE", "Date", "Inspect_Date"],
      description: ["Description","Tag Name"],
    },
    loadSpec: (r) => ({
      Tags: get(r, ["Tags", "Tag", "Tag_No", "Tag No."]),
      Description: get(r, ["Description"]),
      Model: get(r, ["Model"]),
      Service_Fluid: get(r, ["Service Fluid", "Service_Fluid"]),
      Valve_standard: get(r, ["Valve standard", "Valve_standard"]),
      Inlet_flange_size: get(r, ["Inlet flange size"]),
      Outlet_flange_size: get(r, ["Outlet Flange size", "Outlet flange size"]),
      Set_pressure: get(r, ["Set pressure", "Set_pressure"]),
      Inlet_Rating_Class: get(r, ["Inlet Rating Class"]),
      Outlet_Rating_Class: get(r, ["Outlet Rating Class"]),
      Gasket_Inlet_Size: get(r, ["Gasket Inlet Size"]),
      Gasket_Outlet_Size: get(r, ["Gasket Outlet Size"]),
      Location: get(r, ["Location"]),
      Tags_Area: get(r, ["Tags Area", "Area"]),
      Scaffolding: get(r, ["Scaffolding"]),
      Remark: get(r, ["Remark"]),
    }),
    loadReportRowToData: (r) => ({
      reportNo: get(r, ["Report_No", "Report No.", "ReportNo"]),
      tag: get(r, ["Tags", "Tag", "Tag_No", "Tag No."]),
      testedBy: get(r, ["Tested by", "Tested_by", "Tester"]),
      inspectedAt: get(r, ["DATE", "Inspect_Date"]),
      remark: get(r, ["Remark", "comment"]),
      popInitial: get(r, ["B: Pop test Result", "B_PopTest"]),
      popFinal: get(r, ["A: Pop test Result", "A_PopTest"]),
      leakInitial: get(r, ["B: Leakage test Result", "B_LeakTest"]),
      leakFinal: get(r, ["A: Leakage test Result", "A_LeakTest"]),
      popFluid: get(r, ["Pop Test Fluid"]),
      setPressure: get(r, ["Set pressure"]),
      popInitialPressure: get(r, ["Initial Test Poping"]),
      popFinalPressure: get(r, ["Final Test Poping"]),
      leakFluid: get(r, ["Leakage Test Fluid"]),
      leakPressure: get(r, ["Leakage Test Pressure"]),
      leakInitialRate: get(r, ["Initial Leakage Test"]),
      leakFinalRate: get(r, ["Final Leakage Test"]),
    }),
    components: {
      SpecView: SafetySpec,
      HistoryTable: MaintHistorySafety,
      ReportView: SafetyReportView,
    },
  },

  DO: {
    label: "DO sensor",
    env: {
      equipSheetId: "GOOGLE_SHEETS_ASSET_ID",
      equipTab: "GOOGLE_SHEETS_DO_ASSET_TAB",
      reportSheetId: "GOOGLE_SHEETS_REPORT_ID",
      reportTab: "GOOGLE_SHEETS_DO_REPORT_TAB",
    },
    keys: {
      tag: ["Tags", "Tag", "Tag_No", "Tag No."],
      reportNo: ["Cert. No", "Report No.", "ReportNo"],
      inspectDate: ["Cal. Date", "Inspect_Date"],
      description: ["Description","Tag Name"],
    },
    loadSpec: (r) => ({
      Tags: get(r, ["Tags", "Tag", "Tag_No", "Tag No."]),
      Description: get(r, ["Description","Tag Name"]),
      Model: get(r, ["Model"]),
      Callibrate_mode: get(r, ["Cal. Mode"]),
      Callibrate_range: get(r, ["Cal. Range"]),
      Manufacturer: get(r, ["Manufacturer"]),
      SerialNo: get(r, ["Serial No."]),
      Location: get(r, ["Location"]),
      Tags_Area: get(r, ["Tags Area", "Area"]),
      Remark: get(r, ["Remark"]),
    }),
    loadReportRowToData: (r) => ({
      reportNo: get(r, ["Cert. No", "Report No.", "ReportNo"]),
      tag: get(r, ["Tags", "Tag", "Tag_No", "Tag No."]),
      TagName: get(r, ["Tag Name"]),
      testedBy: get(r, ["Tested by", "Tested_by", "Tester"]),
      inspectedAt: get(r, ["Cal. Date", "Inspect_Date"]),
      remark: get(r, ["Remark", "comment"]),
      Callibrate_mode: get(r, ["Cal. Mode"]),
      Callibrate_range: get(r, ["Cal. Range"]),
      Test_medium: get(r, ["Test medium"]),
      Test_Temperature: get(r, ["Test Temperature"]),
      CalibrationAdjustment: get(r, ["Calibration Adjustment"]),
      Asfound_UUC_Na2SO3: get(r, ["AF UUC Na2SO3"]),
      Asfound_UUC_Air: get(r, ["AF UUC Air"]),
      Asfound_UUC_Process: get(r, ["AF UUC Process"]),
      Asleft_UUC_Na2SO3: get(r, ["AL UUC Na2SO3"]),
      Asleft_UUC_Air: get(r, ["AL UUC Air"]),
      Asleft_UUC_Process: get(r, ["AL UUC Process"]),
    
    }),
    components: {
      SpecView: DOSpec,
      HistoryTable: MaintHistoryDO,
      ReportView: DOReportView,
    },
  },
    ph: {
    label: "pH sensor",
    env: {
      equipSheetId: "GOOGLE_SHEETS_ASSET_ID",
      equipTab: "GOOGLE_SHEETS_PH_ASSET_TAB",
      reportSheetId: "GOOGLE_SHEETS_REPORT_ID",
      reportTab: "GOOGLE_SHEETS_PH_REPORT_TAB",
    },
    keys: {
      tag: ["Tags", "Tag", "Tag_No", "Tag No."],
      reportNo: ["Cert. No", "Report No.", "ReportNo"],
      inspectDate: ["Cal. Date", "Inspect_Date"],
      description: ["Description","Tag Name"],
    },
    loadSpec: (r) => ({
      Tags: get(r, ["Tags", "Tag", "Tag_No", "Tag No."]),
      Description: get(r, ["Description","Tag Name"]),
      Model: get(r, ["Model"]),
      Callibrate_mode: get(r, ["Cal. Mode"]),
      Callibrate_range: get(r, ["Cal. Range"]),
      Manufacturer: get(r, ["Manufacturer"]),
      SerialNo: get(r, ["Serial No."]),
      Location: get(r, ["Location"]),
      Tags_Area: get(r, ["Tags Area", "Area"]),
      Remark: get(r, ["Remark"]),
    }),
    loadReportRowToData: (r) => ({
      reportNo: get(r, ["Cert. No", "Report No.", "ReportNo"]),
      tag: get(r, ["Tags", "Tag", "Tag_No", "Tag No."]),
      TagName: get(r, ["Tag Name"]),
      testedBy: get(r, ["Tested by", "Tested_by", "Tester"]),
      inspectedAt: get(r, ["Cal. Date", "Inspect_Date"]),
      remark: get(r, ["Remark", "comment"]),
      Callibrate_mode: get(r, ["Cal. Mode"]),
      Callibrate_range: get(r, ["Cal. Range"]),
      Test_medium: get(r, ["Test medium"]),
      Test_Temperature: get(r, ["Test Temperature"]),
      CalibrationAdjustment: get(r, ["Calibration Adjustment"]),
      Asfound_UUC_Na2SO3: get(r, ["AF UUC Na2SO3"]),
      Asfound_UUC_Air: get(r, ["AF UUC Air"]),
      Asfound_UUC_Process: get(r, ["AF UUC Process"]),
      Asleft_UUC_Na2SO3: get(r, ["AL UUC Na2SO3"]),
      Asleft_UUC_Air: get(r, ["AL UUC Air"]),
      Asleft_UUC_Process: get(r, ["AL UUC Process"]),
    
    }),
    components: {
      SpecView: pHSpec,
      HistoryTable: MaintHistorypH,
      ReportView: pHReportView,
    },
  },

};

// ===== Data loader โดยอ้างอิง kind =====
export async function loadSpecByKind(kind: EquipmentKind, tag: string) {
  // Decode URL-encoded tags (e.g. spaces as %20) to ensure matching
  let qtag = tag;
  try { qtag = decodeURIComponent(tag); } catch {}
  const cfg = kindRegistry[kind];
  const equipSheetId = process.env[cfg.env.equipSheetId]!;
  const equipTab = process.env[cfg.env.equipTab] || (kind === "valve" ? "valve" : kind === "safety" ? "safety_valve" : "do_sensor");
  const rows = await readSheetObjectsFrom(equipSheetId, equipTab, "A1:ZZ20000");
  const row = rows.find((r) => get(r, cfg.keys.tag).toUpperCase() === qtag.toUpperCase());
  return row ? cfg.loadSpec(row) : null;
}

export async function loadHistoryRowsByKind(kind: EquipmentKind, tag: string) {
  // Decode URL-encoded tags for reliable comparison across sources
  let qtag = tag;
  try { qtag = decodeURIComponent(tag); } catch {}
  const cfg = kindRegistry[kind];
  const reportSheetId = process.env[cfg.env.reportSheetId]!;
  const reportTab =
    process.env[cfg.env.reportTab] ||
    (kind === "valve" ? "valve_report" : (kind === "safety" ? "safety_valve_report" : "do_report"));

  const rows = await readSheetObjectsFrom(reportSheetId, reportTab, "A1:ZZ20000");

  return rows
    .filter((r) => String(pickFlex(r, cfg.keys.tag) || "").toUpperCase() === qtag.toUpperCase())
    .sort((a, b) => {
      const da = parseSheetDateMs(cleanDateStr(pickFlex(a, cfg.keys.inspectDate)));
      const db = parseSheetDateMs(cleanDateStr(pickFlex(b, cfg.keys.inspectDate)));
      return (db || -1) - (da || -1);
    });
}

export async function loadReportByKind(kind: EquipmentKind, tag: string, reportNo: string) {
  // Decode URL-encoded tags prior to matching
  let qtag = tag;
  try { qtag = decodeURIComponent(tag); } catch {}
  const cfg = kindRegistry[kind];
  const reportSheetId = process.env[cfg.env.reportSheetId]!;
  const reportTab =
    process.env[cfg.env.reportTab] ||
    (kind === "valve" ? "valve_report" : (kind === "safety" ? "safety_valve_report" : "do_report"));
  const rows = await readSheetObjectsFrom(reportSheetId, reportTab, "A1:ZZ20000");
  const row = rows.find(
    (r) => get(r, cfg.keys.reportNo) === reportNo && get(r, cfg.keys.tag).toUpperCase() === qtag.toUpperCase()
  );
  return row && cfg.loadReportRowToData ? cfg.loadReportRowToData(row) : null;
}
