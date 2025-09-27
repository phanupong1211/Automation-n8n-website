import { NextResponse } from "next/server";
import { envOrThrow } from "@/lib/utils";
import { readSheetObjectsFrom } from "@/lib/google/sheets";

export async function GET() {
  const ASSET_ID = envOrThrow("GOOGLE_SHEETS_ASSET_ID");
  const V_EQ = envOrThrow("GOOGLE_SHEETS_VALVE_ASSET_TAB");
  const S_EQ = envOrThrow("GOOGLE_SHEETS_SAFETY_VALVE_ASSET_TAB");
  const DO_EQ = envOrThrow("GOOGLE_SHEETS_DO_ASSET_TAB");
  const PH_EQ = envOrThrow("GOOGLE_SHEETS_PH_ASSET_TAB");

  const [valves, safeties, DO, ph] = await Promise.all([
    readSheetObjectsFrom(ASSET_ID, V_EQ),
    readSheetObjectsFrom(ASSET_ID, S_EQ),
    readSheetObjectsFrom(ASSET_ID, DO_EQ),
    readSheetObjectsFrom(ASSET_ID, PH_EQ),
  ]);

  const equipmentTotal = valves.length + safeties.length + DO.length + ph.length;

  return NextResponse.json({
    kpi: {
      totalReports: 200,   // ปล่อยค่าหยาบ/แทนที่ได้จากแหล่งจริงของคุณ
      done: 40,
      inProgress: 19,
      pending: 141,
    },
    equipment: {
      total: equipmentTotal,
      valve: valves.length,
      safety: safeties.length,
      DO: DO.length,
      ph: ph.length,
    },
  });
}
