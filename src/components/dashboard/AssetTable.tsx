"use client";
import { useEffect, useMemo, useState } from "react";
import { Search, Eye } from "lucide-react";

type Row = {
  Tags: string;
  Description?: string;
  TagsArea?: string;
  Location?: string;
  Type: "Valve" | "Safety Valve" | "DO sensor" | "pH sensor";
};

type Meta = {
  areas: string[];
  types: (Row["Type"])[];
};

type Props = {
  /** "all" = แสดงรวม, "valve" = เฉพาะ Valve, "safety" = เฉพาะ Safety Valve */
  source?: "all" | "valve" | "safety" | "DO sensor" | "pH sensor";
};

const PAGE_SIZE = 12;

export default function AssetTable({ source = "all" }: Props) {
  const lockedType: "" | "Valve" | "Safety Valve" | "DO sensor" | "pH sensor" =
    source === "valve" ? "Valve" : source === "safety" ? "Safety Valve" : source === "DO sensor" ? "DO sensor" : source === "pH sensor" ? "pH sensor" : "";

  const [items, setItems] = useState<Row[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);

  // query states
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [area, setArea] = useState("");
  // ถ้า lockedType มีค่า ให้ตั้ง type ตามนั้นและไม่ให้เปลี่ยน
  const [type, setType] = useState<"" | "Valve" | "Safety Valve" | "DO sensor" | "pH sensor">(lockedType);

  useEffect(() => {
    setType(lockedType); // sync เมื่อ prop เปลี่ยน
  }, [lockedType]);

  // debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebounced(search.trim()), 250);
    return () => clearTimeout(t);
  }, [search]);

  // Load asset list + meta (single call)
  useEffect(() => {
    setLoading(true);
    fetch("/api/assets")
      .then((r) => r.json())
      .then((d) => {
        const rows: Row[] = (d.items || []).map((x: any) => ({
          Type: x.type,
          Tags: x.tag,
          Description: x.description,
          TagsArea: x.area,
          Location: x.location,
        }));
        setItems(rows);
        const areas = Array.from(new Set(rows.map((r) => r.TagsArea || "").filter(Boolean))) as string[];
        const types = Array.from(new Set(rows.map((r) => r.Type))) as Row["Type"][];
        setMeta({ areas, types });
      })
      .finally(() => setLoading(false));
  }, []);

  // client-side filtering + pagination
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const qs = debounced.toLowerCase();
    return items.filter((r) => {
      if (qs) {
        const hit =
          r.Tags.toLowerCase().includes(qs) ||
          (r.Description || "").toLowerCase().includes(qs) ||
          (r.Location || "").toLowerCase().includes(qs) ||
          (r.TagsArea || "").toLowerCase().includes(qs);
        if (!hit) return false;
      }
      if (type && r.Type !== type) return false;
      if (area && (r.TagsArea || "") !== area) return false;
      return true;
    });
  }, [items, debounced, type, area]);

  const total = filtered.length;
  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / PAGE_SIZE)), [total]);
  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  // reset page เมื่อ filter เปลี่ยน
  useEffect(() => setPage(1), [debounced, area, type]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 px-6 py-4 border-b border-slate-200">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-700" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ค้นหา Tags / คำอธิบาย / Location ..."
            className="w-full bg-slate-50 pl-9 pr-3 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex gap-2">
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700"
          >
            <option value="">ทุกพื้นที่</option>
            {(meta?.areas ?? []).map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>

          {/* ถ้า lock type (จาก source) ให้ disable dropdown */}
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            disabled={!!lockedType}
            className="px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm disabled:opacity-50 text-slate-700"
          >
            <option value="">ทุกประเภท</option>
            <option value="Valve">Valve</option>
            <option value="Safety Valve">Safety Valve</option>
            <option value="DO sensor">DO sensor</option>
            <option value="pH sensor">pH sensor</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 z-10 bg-slate-50/90 backdrop-blur text-slate-600 text-xs uppercase tracking-wide">
            <tr>
              <th className="px-4 py-3 text-left w-[14rem]">Tags</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left w-[10rem]">Tags Area</th>
              <th className="px-4 py-3 text-left w-[12rem]">Location</th>
              <th className="px-4 py-3 text-left w-[8rem]">Type</th>
              <th className="px-4 py-3 text-right w-[8rem]">รายละเอียด</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-400">
                  กำลังโหลด...
                </td>
              </tr>
            ) : pageItems.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-400">
                  ไม่พบข้อมูล
                </td>
              </tr>
            ) : (
              pageItems.map((r, i) => (
                <tr
                  key={`${r.Type}-${r.Tags}-${i}`}
                  className={`hover:bg-slate-50 ${
                    i % 2 ? "bg-slate-50/30" : "" //ปรับสีตาราง
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {r.Tags}
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    {r.Description || "-"}
                  </td>
                  <td className="px-4 py-3 text-slate-700">{r.TagsArea || "-"}</td>
                  <td className="px-4 py-3 text-slate-700">{r.Location || "-"}</td>
                  <td className="px-4 py-3 text-slate-700">
                    <TypePill type={r.Type} />
                  </td>
                  <td className="px-4 py-3 text-right text-slate-700">
                    <a
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800"
                      href={`/dashboard/asset/${r.Type === "Valve" ? "valve" : r.Type === "Safety Valve" ? "safety" : r.Type === "DO sensor" ? "DO" : r.Type === "pH sensor" ? "pH" : ""}/${encodeURIComponent(r.Tags)}`}
                    >
                      <Eye className="w-4 h-4 text-slate-700" />
                      ดูรายละเอียด
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 text-slate-700 dark:border-slate-200 text-sm">
        <span className="text-slate-500">
          รวม {total.toLocaleString()} รายการ
          {type ? ` • ${type}` : ""} {area ? ` • พื้นที่ ${area}` : ""}
        </span>

        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="px-3 py-1 border rounded-lg disabled:opacity-40 text-slate-700"
          >
            ก่อนหน้า
          </button>
          <span className="min-w-[5rem] text-center text-slate-700">{page} / {totalPages}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page >= totalPages}
            className="px-3 py-1 border rounded-lg disabled:opacity-40 text-slate-700"
          >
            ถัดไป
          </button>
        </div>
      </div>
    </div>
  );
}

function TypePill({ type }: { type: Row["Type"] }) {
  const style =
    type === "Safety Valve"
      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-100/30 text-sm"  //ปรับสีประเภท
      : type === "Valve"
      ? "bg-red-50 text-red-700 dark:bg-red-100/30"
      : type === "DO sensor"
      ? "bg-violet-50 text-violet-700"
      : "bg-blue-50 text-blue-700 dark:bg-blue-900/30";
  return <span className={`px-2 py-1 text-xs rounded-full ${style}`}>{type}</span>;
}
