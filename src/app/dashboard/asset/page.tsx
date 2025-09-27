"use client";

import { useEffect, useMemo, useState } from "react";
import AssetStats from "@/components/dashboard/AssetStats";
import RecentTable from "@/components/asset/RecentTable";
import AssetTable from "@/components/dashboard/AssetTable";

type AssetItem = {
  type: "Valve" | "Safety Valve" | "DO sensor" | "pH sensor";
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
  const [type, setType] = useState<"" | "Valve" | "Safety Valve" | "DO sensor" | "pH sensor">("");
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
    const phCount = filtered.filter(item => item.type === "pH sensor").length;
    const totalCount = filtered.length;
    return { valveCount, safetyValveCount, doCount, phCount, totalCount };
  }, [filtered]);

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Assets</h1>
          <p className="text-sm text-gray-600">รายการอุปกรณ์</p>
        </div>
      </div>

      {/* Dashboard Summary (compact) */}
      <AssetStats
        total={summary.totalCount}
        valve={summary.valveCount}
        safety={summary.safetyValveCount}
        DO={summary.doCount}
        pH={summary.phCount}
      />

      {/* Recent 10 reports */}
      <RecentTable items={recent} />

      {/* Assets table */}
      <AssetTable />
    </div>
  );
}
