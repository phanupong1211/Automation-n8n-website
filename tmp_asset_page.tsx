"use client";

import { useEffect, useMemo, useState } from "react";
import { FaFireExtinguisher, FaTools, FaFilter, FaTint } from "react-icons/fa";
import PieChartCard from "@/components/dashboard/PieChartCard";
import StatCard from "@/components/asset/StatsCards";
import RecentTable from "@/components/asset/RecentTable";

type AssetItem = {
  type: "Valve" | "Safety Valve" | "DO sensor";
  tag: string;
  description: string;
  area: string;
  location: string;
};

type ApiResp = {
  items: AssetItem[];
  types: string[];
  locations: string[];
  areas: string[];
  total: number;
};

export default function AssetsPage() {
  const [data, setData] = useState<ApiResp>({ items: [], types: [], locations: [], areas: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [recent, setRecent] = useState<any[]>([]);
  const [rType, setRType] = useState<string>("");
  const [rArea, setRArea] = useState<string>("");

  // filters
  const [q, setQ] = useState("");
  const [type, setType] = useState<"" | "Valve" | "Safety Valve" | "DO sensor">("");
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");

  useEffect(() => {
    fetch("/api/assets")
      .then((r) => r.json())
      .then((d: ApiResp) => setData(d))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (rType) params.set("type", rType);
    if (rArea) params.set("area", rArea);
    params.set("limit", "10");
    fetch(`/api/assets/recent?${params.toString()}`)
      .then((r) => r.json())
      .then((d) => setRecent(d.items || []))
      .catch(() => setRecent([]));
  }, [rType, rArea]);

  useEffect(() => {
    fetch("/api/assets/recent")
      .then((r) => r.json())
      .then((d) => setRecent(d.items || []))
      .catch(() => setRecent([]));
  }, []);

  const filtered = useMemo(() => {
    const qs = q.trim().toLowerCase();
    return data.items.filter((r) => {
      if (qs) {
        const hit =
          r.tag.toLowerCase().includes(qs) ||
          r.description.toLowerCase().includes(qs) ||
          r.location.toLowerCase().includes(qs) ||
          r.area.toLowerCase().includes(qs);
        if (!hit) return false;
      }
      if (type && r.type !== type) return false;
      if (location && r.location !== location) return false;
      if (area && r.area !== area) return false;
      return true;
    });
  }, [data.items, q, type, location, area]);

  const summary = useMemo(() => {
    const valveCount = filtered.filter(item => item.type === "Valve").length;
    const safetyValveCount = filtered.filter(item => item.type === "Safety Valve").length;
    const doCount = filtered.filter(item => item.type === "DO sensor").length;
    const totalCount = filtered.length;
    return { valveCount, safetyValveCount, doCount, totalCount };
  }, [filtered]);

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Assets</h1>
          <p className="text-sm text-gray-600">รายการอุปกรณ์จาก Equipment (Valve • Safety Valve • DO sensor)</p>
        </div>
      </div>

      {/* Dashboard Summary */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatCard
            title="อุปกรณ์ทั้งหมด"
            count={summary.totalCount}
            icon={<FaFilter />}
            color="#64748B"
        />
        <StatCard
            title="Valve"
            count={summary.valveCount}
            icon={<FaTools />}
            color="#3B82F6"
        />
        <StatCard
            title="Safety Valve"
            count={summary.safetyValveCount}
            icon={<FaFireExtinguisher />}
            color="#10B981"
        />
        <StatCard
            title="DO sensor"
            count={summary.doCount}
            icon={<FaTint />}
            color="#8B5CF6"
        />
    </div>
    
    {/* กล่อง PieChartCard จะถูกจัดให้อยู่ในคอลัมน์ของตัวเอง */}
    <div className="lg:col-span-1">
        <PieChartCard
            valveCount={summary.valveCount}
            safetyValveCount={summary.safetyValveCount}
            doCount={summary.doCount}
        />
    </div>
</div>

      {/* Recent filter toolbar */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
        <div>
          <label className="block text-xs text-slate-600 mb-1">ประเภท (Recent)</label>
          <select
            value={rType}
            onChange={(e) => setRType(e.target.value)}
            className="rounded-lg border border-slate-200 text-slate-900 px-3 py-2 text-sm"
          >
            <option value="">ทั้งหมด</option>
            <option value="Valve">Valve</option>
            <option value="Safety Valve">Safety Valve</option>
            <option value="DO sensor">DO sensor</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-slate-600 mb-1">พื้นที่ (Recent)</label>
          <select
            value={rArea}
            onChange={(e) => setRArea(e.target.value)}
            className="rounded-lg border border-slate-200 text-slate-900 px-3 py-2 text-sm"
          >
            <option value="">ทั้งหมด</option>
            {data.areas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Recent 10 reports */}
      <RecentTable items={recent} />

      {/* Toolbar */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
        <div className="flex-1">
          <label className="block text-xs text-slate-600 mb-1">ค้นหา</label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ค้นหา Tags / Description / Location / Tags Area..."
            className="w-full rounded-lg border border-slate-200 text-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-600 mb-1">ประเภท</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="rounded-lg border border-slate-200 text-slate-900 px-3 py-2 text-sm"
          >
            <option value="">ทั้งหมด</option>
            <option value="Valve">Valve</option>
            <option value="Safety Valve">Safety Valve</option>
            <option value="DO sensor">DO sensor</option>
          </select>
        </div>

        <div>
          <label className="block text-xs text-slate-600 mb-1">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded-lg border border-slate-200 text-slate-900 px-3 py-2 text-sm"
          >
            <option value="">ทั้งหมด</option>
            {data.locations.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs text-slate-600 mb-1">Tags Area</label>
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="rounded-lg border border-slate-200 text-slate-900 px-3 py-2 text-sm"
          >
            <option value="">ทั้งหมด</option>
            {data.areas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 text-slate-900">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs font-medium uppercase text-slate-600">
            <tr>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Tags</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Tags Area</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3 text-right"></th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                  กำลังโหลด...
                </td>
              </tr>
            )}
            {!loading && filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                  ไม่พบรายการ
                </td>
              </tr>
            )}
            {!loading &&
              filtered.map((r, idx) => {
                return (
                  <tr key={`${r.type}-${r.tag}-${idx}`} className={idx % 2 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs ${
                          r.type === "Valve"
                            ? "bg-blue-100 text-blue-700"
                            : r.type === "Safety Valve"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-violet-100 text-violet-700"
                        }`}
                      >
                        {r.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium">{r.tag || "-"}</td>
                    <td className="px-4 py-3">{r.description || "-"}</td>
                    <td className="px-4 py-3">{r.area || "-"}</td>
                    <td className="px-4 py-3">{r.location || "-"}</td>
                    <td className="px-4 py-3 text-right">
                      <a
                        className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                        href={`/dashboard/asset/${r.type === "Valve" ? "valve" : r.type === "Safety Valve" ? "safety" : "DO"}/${encodeURIComponent(r.tag)}`}
                      >
                        รายละเอียด
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

