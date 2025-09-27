// src/app/api/assets/route.ts
import { NextResponse } from "next/server";
import { readSheetObjectsFrom } from "@/lib/google/sheets";

// อ่านค่าจากหลายชื่อคอลัมน์ที่เป็นไปได้
function get(r: Record<string, any>, keys: string[], fallback = ""): string {
  for (const k of keys) {
    const v = r?.[k];
    if (v != null && String(v).trim() !== "") return String(v).trim();
  }
  return fallback;
}

type AssetItem = {
  type: "Valve" | "Safety Valve" | "DO sensor" | "pH sensor";
  tag: string;
  description: string;
  area: string;      // Tags Area
  location: string;
};

export async function GET() {
  // Central equipment sheet (single ID with multiple tabs)
  const EQUIP_SHEET_ID = process.env.GOOGLE_SHEETS_ASSET_ID!;

  // Tabs per kind
  const VALVE_SHEET_TAB = process.env.GOOGLE_SHEETS_VALVE_ASSET_TAB || "valve";
  const SAFE_SHEET_TAB = process.env.GOOGLE_SHEETS_SAFETY_VALVE_ASSET_TAB || "safety_valve";
  const DO_SHEET_TAB = process.env.GOOGLE_SHEETS_DO_ASSET_TAB || "do_sensor";
  const PH_SHEET_TAB = process.env.GOOGLE_SHEETS_PH_ASSET_TAB || "ph_sensor";


  // โหลด Equipment ทั้งสองไฟล์
  const [valveEquip, safetyEquip, DOEquip, phEquip] = await Promise.all([
    readSheetObjectsFrom(EQUIP_SHEET_ID, VALVE_SHEET_TAB, "A1:ZZ20000"),
    readSheetObjectsFrom(EQUIP_SHEET_ID, SAFE_SHEET_TAB, "A1:ZZ20000"),
    readSheetObjectsFrom(EQUIP_SHEET_ID, DO_SHEET_TAB, "A1:ZZ20000"),
    readSheetObjectsFrom(EQUIP_SHEET_ID, PH_SHEET_TAB, "A1:ZZ20000"),
  ]);

  // ===== Map: Valve
  const valveRows: AssetItem[] = valveEquip
    .map((r) => {
      const tag = get(r, ["Tag_No", "Tags", "Tag No.", "Tag"]);
      if (!tag) return null;
      const description = get(r, ["Description", "รายละเอียด", "Tag Name"]);
      const area = get(r, ["Tags Area", "TagsArea", "Area"]);
      const location = get(r, ["Location", "ตำแหน่ง"]);
      return {
        type: "Valve" as const,
        tag,
        description,
        area,
        location,
      };
    })
    .filter(Boolean) as AssetItem[];

  // ===== Map: Safety Valve
  const safetyRows: AssetItem[] = safetyEquip
    .map((r) => {
      // บางชีตใช้ "Tags" เป็นคีย์หลัก
      const tag = get(r, ["Tags", "Tag", "Tag_No", "Tag No."]);
      if (!tag) return null;
      const description = get(r, ["Description"]);
      const area = get(r, ["Tags Area", "TagsArea", "Area"]);
      const location = get(r, ["Location"]);
      return {
        type: "Safety Valve" as const,
        tag,
        description,
        area,
        location,
      };
    })
    .filter(Boolean) as AssetItem[];

  const DORows: AssetItem[] = DOEquip
    .map((r) => {
      const tag = get(r, ["Tag_No", "Tags", "Tag No.", "Tag"]);
      if (!tag) return null;
      const description = get(r, ["Description", "รายละเอียด", "Tag Name"]);
      const area = get(r, ["Tags Area", "TagsArea", "Area"]);
      const location = get(r, ["Location", "ตำแหน่ง"]);
      return {
        type: "DO sensor" as const,
        tag,
        description,
        area,
        location,
      };
    })
    .filter(Boolean) as AssetItem[];

  const phRows: AssetItem[] = phEquip
    .map((r) => {
      const tag = get(r, ["Tags", "Tag", "Tag_No", "Tag No."]);
      if (!tag) return null;
      const description = get(r, ["Description"]);
      const area = get(r, ["Tags Area", "TagsArea", "Area"]);
      const location = get(r, ["Location"]);
      return {
        type: "pH sensor" as const,
        tag,
        description,
        area,
        location,
      };
    })
    .filter(Boolean) as AssetItem[];


  const items = [...valveRows, ...safetyRows, ...DORows, ...phRows];

  // ตัวเลือกสำหรับฟิลเตอร์ในหน้า UI
  const types = ["Valve", "Safety Valve", "DO sensor", "pH sensor"] as const;
  const locations = Array.from(
    new Set(items.map((x) => x.location).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b, "en"));
  const areas = Array.from(
    new Set(items.map((x) => x.area).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b, "en"));

  return NextResponse.json({
    items,
    types,
    locations,
    areas,
    total: items.length,
  });
}

