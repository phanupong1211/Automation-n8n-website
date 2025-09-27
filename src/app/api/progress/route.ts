import { NextResponse } from "next/server";
import { appendSheetRow, readSheetObjectsFrom } from "@/lib/google/sheets";
import { envOrThrow } from "@/lib/utils";
import { ShutdownRow } from "@/lib/kinds/kindRegistry";

export async function GET() {
  const SHEET_ID = envOrThrow("GOOGLE_SD_PROGRESS_ID");
  const TAB = process.env.GOOGLE_SD_TAB_MAIN || "SD_Progress";
  const rows = await readSheetObjectsFrom(SHEET_ID, TAB, "A1:ZZ20000");

  const handleDateField = (value: any) => {
    if (!value) return "";
    
    // ถ้าเป็นตัวเลข (Excel serial number) ให้คงไว้เป็น number
    if (typeof value === 'number') {
      return value;
    }
    
    // ถ้าเป็น string ที่เป็นตัวเลขล้วน ให้แปลงเป็น number
    if (typeof value === 'string' && /^\d+\.?\d*$/.test(value.trim())) {
      const numValue = Number(value);
      // ถ้าเป็นตัวเลขที่มากกว่า 25000 น่าจะเป็น Excel serial number
      if (numValue > 25000) {
        return numValue;
      }
    }
    
    // อื่นๆ ให้คงเป็น string
    return String(value);
  };

  const items: ShutdownRow[] = rows.map(
    (r: Record<string, any>) => ({
      Team: String(r.Team || ""),
      Plant: String(r.Plant || ""),
      Area: String(r.Area || ""),
      WO: String(r.WO || r.Wo || ""),
      work_name: String(r.work_name || r.workName || ""),
      equipment: String(r.equipment || ""), // Add equipment
      equipment_name: String(r.equipment_name || ""), // Add equipment_name
      จำนวน: String(r.จำนวน ?? ""),
      หน่วยจำนวน: String(r["หน่วยจำนวน"] || ""),
      plan_start: handleDateField(r["plan_start"] || r["Plan Start"] || "") as string | number,
      plan_finish: handleDateField(r["plan_finish"] || r["Plan Finish"] || "") as string | number,
      actual_start: handleDateField(r["actual_start"] || r["Actual Start"] || "") as string | number,
      actual_finish: handleDateField(r["actual_finish"] || r["Actual Finish"] || "") as string | number,
      Progress: Number(r.Progress ?? 0),
      "หน่วย Progress": String(r["หน่วย Progress"] || r["หน่วยProgress"] || "%"),
      หมายเหตุ: String(r["หมายเหตุ"] || ""),
    })
  );

  // เพิ่ม return statement ที่หายไป!
  return NextResponse.json({ items });
}

export async function POST(req: Request) {
  const payload = (await req.json()) as ShutdownRow;
  const SHEET_ID = envOrThrow("GOOGLE_SD_PROGRESS_ID");
  const TAB = process.env.GOOGLE_SD_TAB_MAIN || "SD_Progress";

  // NOTE: จัดเรียงตามหัวจริงในชีตของคุณ
  const row = [
    payload.Team,
    payload.Plant,
    payload.Area,
    payload.WO,
    payload.work_name,
    payload.equipment, // Add equipment
    payload.equipment_name, // Add equipment_name
    payload.จำนวน,
    payload.หน่วยจำนวน,
    payload.plan_start ?? "",
    payload.plan_finish ?? "",
    payload.actual_start ?? "",
    payload.actual_finish ?? "",
    payload.Progress,
    payload["หน่วย Progress"],
    payload.หมายเหตุ || "",
  ];

  await appendSheetRow(SHEET_ID, TAB, row);
  return NextResponse.json({ ok: true });
}