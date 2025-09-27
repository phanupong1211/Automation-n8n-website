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
  types: string[];
  totalValve: number;
  totalSafety: number;
  totalAll: number;
};

type Props = {
  /** "all" = แสดงรวม, "valve" = เฉพาะ Valve, "safety" = เฉพาะ Safety Valve */
  source?: "all" | "valve" | "safety" | "DO sensor" | "pH sensor";
};

const PAGE_SIZE = 12;

export default function EquipmentTable({ source = "all" }: Props) {
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

  // meta
  useEffect(() => {
    fetch("/api/equipment/meta")
      .then((r) => r.json())
      .then((d) => setMeta(d))
      .catch(() =>
        setMeta({
          areas: [],
          types: ["Valve", "Safety Valve", "DO sensor", "pH sensor"],
          totalAll: 0,
          totalValve: 0,
          totalSafety: 0,
        }),
      );
  }, []);

  // table
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({
      page: String(page),
      pageSize: String(PAGE_SIZE),
    });
    if (debounced) params.set("search", debounced);
    if (area) params.set("area", area);
    if (type) params.set("type", type); // ถ้า lockedType จะติดไปเอง

    fetch(`/api/equipment?${params.toString()}`)
      .then((r) => r.json())
      .then((d) => {
        setItems(d.items ?? []);
        setTotal(d.total ?? 0);
      })
      .finally(() => setLoading(false));
  }, [debounced, area, type, page]);

  // reset page เมื่อ filter เปลี่ยน
  useEffect(() => setPage(1), [debounced, area, type]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil((total || 0) / PAGE_SIZE)),
    [total],
  );

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-500 dark:border-slate-900">
      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 px-6 py-4 border-b border-slate-100 dark:border-slate-800">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ค้นหา Tags / คำอธิบาย / Location ..."
            className="w-full bg-slate-50 dark:bg-slate-800 pl-9 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex gap-2">
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-800 text-sm"
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
            className="px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-800 text-sm disabled:opacity-50"
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
          <thead className="sticky top-0 z-10 bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wide">
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
            ) : items.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-400">
                  ไม่พบข้อมูล
                </td>
              </tr>
            ) : (
              items.map((r, i) => (
                <tr
                  key={`${r.Type}-${r.Tags}-${i}`}
                  className={`hover:bg-slate-50 dark:hover:bg-slate-800 ${
                    i % 2 ? "bg-slate-50/30 dark:bg-slate-800/40" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                    {r.Tags}
                  </td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-200">
                    {r.Description || "-"}
                  </td>
                  <td className="px-4 py-3">{r.TagsArea || "-"}</td>
                  <td className="px-4 py-3">{r.Location || "-"}</td>
                  <td className="px-4 py-3">
                    <TypePill type={r.Type} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <a
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800"
                      href={`/dashboard/asset/${r.Type === "Valve" ? "valve" : r.Type === "Safety Valve" ? "safety" : r.Type === "DO sensor" ? "DO" : r.Type === "pH sensor" ? "pH" : ""}/${encodeURIComponent(r.Tags)}`}
                    >
                      <Eye className="w-4 h-4" />
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
      <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 dark:border-slate-800 text-sm">
        <span className="text-slate-500">
          รวม {total.toLocaleString()} รายการ
          {type ? ` • ${type}` : ""} {area ? ` • พื้นที่ ${area}` : ""}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="px-3 py-1 border rounded-lg disabled:opacity-40"
          >
            ก่อนหน้า
          </button>
          <span className="min-w-[5rem] text-center">
            {page} / {Math.max(1, Math.ceil((total || 0) / PAGE_SIZE))}
          </span>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page >= Math.max(1, Math.ceil((total || 0) / PAGE_SIZE))}
            className="px-3 py-1 border rounded-lg disabled:opacity-40"
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
      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
      : type === "DO sensor"
      ? "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300"
      : "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
  return <span className={`px-2 py-1 text-xs rounded-full ${style}`}>{type}</span>;
}

