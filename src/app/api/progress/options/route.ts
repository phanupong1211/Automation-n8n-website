import { NextResponse } from "next/server";
import { readSheetObjectsFrom } from "@/lib/google/sheets";
import { envOrThrow } from "@/lib/utils";

export async function GET() {
  const SHEET_ID = envOrThrow("GOOGLE_SD_PROGRESS_ID");
  const TAB_TEAM  = process.env.GOOGLE_SD_TAB_TEAM  || "team";
  const TAB_PLANT = process.env.GOOGLE_SD_TAB_PLANT || "plant";
  const TAB_AREA  = process.env.GOOGLE_SD_TAB_AREA  || "tag_area";

  const teamRows  = await readSheetObjectsFrom(SHEET_ID, TAB_TEAM,  "A1:ZZ20000");
  const plantRows = await readSheetObjectsFrom(SHEET_ID, TAB_PLANT, "A1:ZZ20000");
  const areaRows  = await readSheetObjectsFrom(SHEET_ID, TAB_AREA,  "A1:ZZ20000");

  const teams  = teamRows.map((r: any)  => String(r.Team || r.team || r.Name || r[0] || "").trim()).filter(Boolean);
  const plants = plantRows.map((r: any) => String(r.Plant || r.plant || r.Name || r[0] || "").trim()).filter(Boolean);

  // area sheet รูปแบบ: Tags Area | Plant | Description
  const areasByPlant: Record<string, { code: string; name: string }[]> = {};
  for (const r of areaRows) {
    const code = String(r["Tags Area"] || r.Area || r[0] || "").trim();
    const plant = String(r["Plant"] || r.Plant || r[1] || "").trim();
    const name = String(r["Description"] || r.Name || r[2] || "").trim();
    if (!code || !plant) continue;
    if (!areasByPlant[plant]) areasByPlant[plant] = [];
    areasByPlant[plant].push({ code, name });
  }

  return NextResponse.json({ teams, plants, areasByPlant });
}
