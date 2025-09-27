import { NextResponse } from "next/server";
import { readSheetObjectsFrom } from "@/lib/google/sheets";
import { get, parseSheetDateMs, cleanDateStr, fmtDate } from "@/lib/utils";   // ← เพิ่ม cleanDateStr, fmtDate
import { kindRegistry, type EquipmentKind } from "@/lib/kinds/kindRegistry";

type RecentItem = {
  Type: "Valve" | "Safety Valve" | "DO sensor";
  Report_No: string;
  Tag_No: string;
  Description?: string;
  Area?: string;
  Tested_by?: string;
  Inspect_Date?: string;  // raw date ที่หยิบมาใช้
  DATE?: string;          // สำรอง: เก็บอีกชื่อหนึ่งไว้เลย
  Final_Result?: string;
  displayDate?: string;   // ← เพิ่ม: แปลงพร้อมแสดงแล้ว
  __dateMs: number;
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const typeFilter = url.searchParams.get("type") || "";
  const areaFilter = url.searchParams.get("area") || "";
  const limit = Math.max(1, Math.min(200, Number(url.searchParams.get("limit") || 10)));

  async function load(kind: EquipmentKind): Promise<RecentItem[]> {
    const cfg = kindRegistry[kind];

    const reportSheetId = process.env[cfg.env.reportSheetId]!;
    const reportTab =
      process.env[cfg.env.reportTab] ||
      (kind === "valve"
        ? "Valve service report"
        : kind === "safety"
        ? "Safety valve service report"
        : "DO report");

    const rows = await readSheetObjectsFrom(reportSheetId, reportTab, "A1:ZZ20000");

    // map area
    const equipSheetId = process.env[cfg.env.equipSheetId]!;
    const equipTab = process.env[cfg.env.equipTab] || "Equipment";
    const equipRows = await readSheetObjectsFrom(equipSheetId, equipTab, "A1:ZZ20000");
    const areaMap = new Map<string, string>();
    for (const r of equipRows) {
      const tag = get(r, cfg.keys.tag).toUpperCase();
      if (!tag) continue;
      const ar = get(r, ["Tags Area", "TagsArea", "Area"]);
      areaMap.set(tag, ar);
    }

    return rows.map((r) => {
      const reportNo = get(r, cfg.keys.reportNo);
      const tag = get(r, cfg.keys.tag);
      const raw = get(r, cfg.keys.inspectDate);                           // ใช้ candidate ตาม kindRegistry
      const dateStr = typeof raw === "string" ? cleanDateStr(raw) : raw;  // ← กัน \u200B, nbsp

      const tester = get(r, ["Tested by", "Tested_by", "Tester"]);
      const desc   = get(r, ["Description", "Tag Name"]);
      const area   = areaMap.get((tag || "").toUpperCase()) || "";

      let result = "";
      if (kind === "valve") {
        result = get(r, ["Final_Result"]);
      } else if (kind === "safety") {
        result = get(r, ["A: Leakage test Result", "A_LeakTest", "A: Pop test Result", "A_PopTest"]);
      } else {
        result = get(r, ["Result"]);
      }

      // 2) แปลงเป็น ms เพื่อเรียง และเตรียมสตริงแสดงผลให้ UI
      const dateMs = parseSheetDateMs(dateStr);
      const displayDate = fmtDate(dateStr, "th-TH");                      // ← UI ใช้อันนี้ได้ทันที

      return {
        Type: kind === "valve" ? "Valve" : kind === "safety" ? "Safety Valve" : "DO sensor",
        Report_No: reportNo,
        Tag_No: tag,
        Area: area,
        Description: desc,
        Tested_by: tester,
        Inspect_Date: typeof dateStr === "number" ? String(dateStr) : (dateStr || ""), // เก็บดิบไว้
        DATE: r["DATE"] ? cleanDateStr(r["DATE"]) : undefined,            // เผื่ออยาก debug
        Final_Result: result,
        displayDate,                                                      // ← ส่งพร้อมแสดง
        __dateMs: dateMs || 0,
      } as RecentItem;
    });
  }

  // ต้องอยู่ในสโคปเดียวกับที่ใช้ [...v, ...s, ...d]
  const [v, s, d] = await Promise.all([
    load("valve"),
    load("safety"),
    load("DO"),
  ]);


  const all = [...v, ...s, ...d]
    .filter((x) => x.Report_No && x.Tag_No)
    .filter((x) => (typeFilter ? x.Type === typeFilter : true))
    .filter((x) => (areaFilter ? (x.Area || "") === areaFilter : true))
    .sort((a, b) => b.__dateMs - a.__dateMs)  // ล่าสุดก่อน
    .slice(0, limit)
    .map(({ __dateMs, ...rest }) => rest);

  return NextResponse.json({ items: all });
}

