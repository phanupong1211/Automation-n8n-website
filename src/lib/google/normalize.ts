// src/lib/google/normalize.ts

export function getByCandidates(
  row: Record<string, any>,
  candidates: string[],
  fallback: any = ""
) {
  for (const k of candidates) {
    if (row[k] !== undefined && row[k] !== null && row[k] !== "") {
      return row[k];
    }
  }
  return fallback;
}

/** แปลง Equipment (Valve) ให้เป็นฟิลด์กลาง */
export function normalizeValveEquip(row: Record<string, any>) {
  return {
    Tags: getByCandidates(row, ["Tags", "Tag", "TAG"]),
    Description: getByCandidates(row, ["Description", "DESCRIPTION"]),
    ValveType: getByCandidates(row, ["Valve Type", "ValveType", "Type"]),
    TagsArea: getByCandidates(row, ["Tags Area", "Area"]),
    Location: getByCandidates(row, ["Location", "AREA/Location", "Loc"]),
    Type: "Valve" as const,
  };
}

/** แปลง Equipment (Safety) ให้เป็นฟิลด์กลาง */
export function normalizeSafetyEquip(row: Record<string, any>) {
  return {
    Tags: getByCandidates(row, ["Tags", "Tag", "TAG"]),
    Description: getByCandidates(row, ["Description", "DESCRIPTION"]),
    ValveType: getByCandidates(row, ["Valve Type", "ValveType", "Type"]),
    TagsArea: getByCandidates(row, ["Tags Area", "Area"]),
    Location: getByCandidates(row, ["Location", "Area/Loc", "Loc"]),
    Type: "Safety Valve" as const,
  };
}

/** แปลง Report (Valve) ให้เป็นฟิลด์กลาง */
export function normalizeValveReport(row: Record<string, any>) {
  return {
    Type: "Valve" as const,
    Report_No: getByCandidates(row, ["Report_No", "REPORT_NO"]),
    Tag_No: getByCandidates(row, ["Tag_No", "TAG", "Tags"]),
    Description: row["Description"] ?? "",
    Inspect_Date: row["Inspect_Date"] ?? "",
    Final_Result: row["Final_Result"] ?? "",
    Tested_by: row["Tested_by"] ?? "",
  };
}

/** แปลง Report (Safety) ให้เป็นฟิลด์กลาง */
export function normalizeSafetyReport(row: Record<string, any>) {
  return {
    Type: "Safety Valve" as const,
    Report_No: getByCandidates(row, ["Report_No", "REPORT_NO"]),
    Tag_No: getByCandidates(row, ["Tag_No", "TAG", "Tags"]),
    Description: row["Description"] ?? "",
    Inspect_Date: getByCandidates(row, ["Inspect_Date", "DATE"]) ?? "",
    Final_Result: row["Final_Result"] ?? "",
    Tested_by: row["Tested_by"] ?? "",
  };
}
