"use client";

import { useEffect, useMemo, useState } from "react";
import { fmtDate } from "@/lib/utils";
import type { ShutdownRow } from "@/lib/kinds/kindRegistry";

export default function MinimalShutdownProgress() {
  const [rows, setRows] = useState<ShutdownRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((d) => setRows(d.items || d || []))
      .finally(() => setLoading(false));
  }, []);

  const normalized = useMemo(() => {
    return rows.map((r) => {
      let pct = 0;
      if (typeof r.Progress === "number") pct = r.Progress;
      else if (typeof r.Progress === "string") {
        pct = Number(r.Progress.replace("%", "")) || 0;
      }
      return { ...r, pct };
    });
  }, [rows]);

  if (loading) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="text-sm font-medium text-slate-900">Shutdown Progress</div>
        <div className="mt-4 text-sm text-slate-500">กำลังโหลด...</div>
      </div>
    );
  }

  // ฟังก์ชันเลือกสี bar ตาม % Progress
  const progressColor = (pct: number) => {
    if (pct >= 100) return "bg-blue-900";
    if (pct >= 80) return "bg-blue-700";
    if (pct >= 60) return "bg-blue-500";
    if (pct >= 40) return "bg-blue-300";
    if (pct >= 20) return "bg-blue-100";
    if (pct >= 20) return "bg-blue-10";
    return "bg-slate-300";                  
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-m font-semibold text-slate-500">Shutdown Progress</div>
        <a
          href="/dashboard/shutdown"
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-black/80"
        >
          View All
        </a>
      </div>

      <div className="space-y-4">
        {normalized.slice(0, 4).map((r, idx) => (
          <article key={idx} className="rounded-lg border border-slate-300 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-m font-semibold text-slate-900">
                  {r.WO} {r.work_name || "-"}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  เริ่ม: {fmtDate(r.plan_start)} | กำหนดเสร็จ: {fmtDate(r.plan_finish)}
                </div>
              </div>
              <div className="text-xs font-medium text-slate-500">
                {Math.round(r.pct)}%
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3">
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div
                  className={`h-2 rounded-full transition-all ${progressColor(r.pct)}`}
                  style={{ width: `${Math.max(0, Math.min(100, r.pct))}%` }}
                />
              </div>
            </div>

            <div className="mt-2 text-xs text-slate-500">
              ทีมงาน: {r.Team || "-"} {r.Plant ? `· Plant: ${r.Plant}` : ""}{" "}
              {r.Area ? `· Area: ${r.Area}` : ""}
            </div>
          </article>
        ))}

        {normalized.length === 0 && (
          <div className="text-sm text-slate-500">ยังไม่มีรายการ Shutdown</div>
        )}
      </div>
    </div>
  );
}
