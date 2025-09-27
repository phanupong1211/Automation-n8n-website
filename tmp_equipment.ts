type UnifiedEquipment = {
  Type: "Valve" | "Safety Valve";
  Tags: string;
  Description: string;
  TagsArea: string;   // from "Tags Area" | "Area"
  Location: string;   // from "Location"
  ValveType?: string; // เผื่อใช้ทีหลัง
};

function getBy<T extends object>(row: T, candidates: string[], fallback = "") {
  for (const k of candidates) {
    // @ts-ignore
    const v = row[k];
    if (v !== undefined && v !== null && String(v).trim() !== "") return String(v);
  }
  return fallback;
}

/** แปลงอุปกรณ์ Valve เป็น shape เดียวกัน */
export function normalizeValveRow(row: any): UnifiedEquipment {
  return {
    Type: "Valve",
    Tags: getBy(row, ["Tags", "Tag", "Tag_No"]),
    Description: getBy(row, ["Description"]),
    TagsArea: getBy(row, ["Tags Area", "Area"], "-"),
    Location: getBy(row, ["Location"], "-"),
    ValveType: getBy(row, ["Valve Type"], ""),
  };
}

/** แปลงอุปกรณ์ Safety Valve เป็น shape เดียวกัน */
export function normalizeSafetyRow(row: any): UnifiedEquipment {
  return {
    Type: "Safety Valve",
    Tags: getBy(row, ["Tags", "Tag", "Tag_No"]),
    Description: getBy(row, ["Description"]),
    TagsArea: getBy(row, ["Tags Area", "Area"], "-"),
    Location: getBy(row, ["Location"], "-"),
  };
}

export type { UnifiedEquipment };

