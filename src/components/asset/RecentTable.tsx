import { fmtDate } from "@/lib/utils";
import { useMemo, useState, useEffect } from "react";

type Item = {
  [x: string]: string | number | undefined;
  Type: "Valve" | "Safety Valve" | "DO sensor" | "pH sensor";
  Report_No: string; Tag_No: string; Description: string;
  Tested_by?: string; Inspect_Date?: string | number; Final_Result?: string;
  displayDate?: string;
  Area?: string;
};

function TypeBadge({type}:{type:Item["Type"]}) {
  const tone = type === "Valve" ? "blue" : type === "Safety Valve" ? "emerald" : "violet";
  return <span className={`px-2 py-0.5 rounded-full text-xs bg-${tone}-500/15 text-${tone}-300`}>{type}</span>;
}
function StatusPill({v}:{v?:string}) {
  const ok = String(v||"").toLowerCase().includes("pass");
  const tone = ok ? "green" : "rose";
  return <span className={`px-2 py-0.5 rounded-full text-xs bg-${tone}-500/15 text-${tone}-300`}>{v||"-"}</span>;
}

export default function RecentTable({ items = [], onlyType }:{
  items?: Item[];
  onlyType?: Item["Type"];
}) {
  const [rType, setRType] = useState(onlyType || "");   // "" = ทั้งหมด
  const [rArea, setRArea] = useState("");

  // ข้อมูลที่แสดง และรายการพื้นที่ทั้งหมดจาก API
  const [data, setData] = useState<Item[]>(items || []);
  const [areas, setAreas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // lock ประเภทเมื่อมี onlyType
  useEffect(() => { if (onlyType) setRType(onlyType); }, [onlyType]);

  // เปลี่ยนชนิด → รีเซ็ตพื้นที่ (เพื่อให้เห็น "ทุกพื้นที่" ของชนิดใหม่)
  useEffect(() => { setRArea(""); }, [rType, onlyType]);

  const SUPPORTED_TYPES: Item["Type"][] = ["Valve", "Safety Valve", "DO sensor", "pH sensor"];
  const typeOptions = useMemo(() => SUPPORTED_TYPES, []);

  const effectiveType = onlyType || rType;

  // ⬇️ รีเฟตช์ทุกครั้งที่ ชนิด/พื้นที่ เปลี่ยน (limit = 10 เสมอ)
  useEffect(() => {
    const params = new URLSearchParams();
    if (effectiveType) params.set("type", effectiveType);
    if (rArea) params.set("area", rArea);
    params.set("limit", "10");

    const url = `/api/assets/recent?${params.toString()}`;
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        const res = await fetch(url, { cache: "no-store" });
        const json = await res.json();
        if (!alive) return;
        setData(json.items ?? []);
        setAreas(json.areas ?? []);   // ✅ ใช้รายการพื้นที่จาก API
      } catch {
        if (alive) {
          setData([]);
          setAreas([]);
        }
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => { alive = false; };
  }, [effectiveType, rArea]);

  const rows = data;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
      <div className="flex flex-col md:flex-row md:items-center gap-3 px-6 py-4 border-b border-slate-200">
        {!onlyType && (
          <div>
            <select
              value={rType}
              onChange={(e) => setRType(e.target.value)}
              className="px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-800"
            >
              <option value="">ทั้งหมด</option>
              {typeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        )}
        <div>
          <select
            value={rArea}
            onChange={(e) => setRArea(e.target.value)}
            className="px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-800"
          >
            <option value="">ทุกพื้นที่</option>
            {areas.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">รายการซ่อมล่าสุด</div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-slate-700">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">ประเภท</th>
              <th className="px-6 py-3 text-left">Report No.</th>
              <th className="px-6 py-3 text-left">Tag</th>
              <th className="px-6 py-3 text-left">รายละเอียด</th>
              <th className="px-6 py-3 text-left">ผู้ทดสอบ</th>
              <th className="px-6 py-3 text-left">วันที่</th>
              <th className="px-6 py-3 text-left">ผล</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td className="px-6 py-6 text-slate-500" colSpan={7}>กำลังโหลด…</td></tr>}
            {!loading && rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="px-6 py-3"><TypeBadge type={r.Type}/></td>
                <td className="px-6 py-3 text-blue-600">{r.Report_No || "-"}</td>
                <td className="px-6 py-3">{r.Tag_No || "-"}</td>
                <td className="px-6 py-3">{r.Description || "-"}</td>
                <td className="px-6 py-3">{r.Tested_by || "-"}</td>
                <td className="px-6 py-3">{(r.displayDate as string) || fmtDate((r["Inspect_Date"] as any) ?? r["DATE"])}</td>
                <td className="px-6 py-3"><StatusPill v={r.Final_Result}/></td>
              </tr>
            ))}
            {!loading && !rows.length && <tr><td className="px-6 py-6 text-slate-500" colSpan={7}>ไม่มีข้อมูลล่าสุด</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
