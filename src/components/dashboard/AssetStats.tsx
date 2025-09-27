"use client";

import PieChartCard from "@/components/dashboard/PieChartCard";
import { FaTools } from "react-icons/fa";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";

type Props = {
  total: number;
  valve: number;
  safety: number;
  DO: number;
  pH: number;
};

export default function AssetStats({ total = 0, valve = 0, safety = 0, DO = 0, pH = 0 }: Partial<Props>) {
  const data = [
    { name: "Valve", value: valve },
    { name: "Safety Valve", value: safety },
    { name: "DO sensor", value: DO },
    { name: "pH sensor", value: pH },
  ];
  const COLORS = ["#3B82F6", "#10B981", "#8B5CF6", "#0EA5E9"]; // ให้ตรงกับ Pie

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Col 1: Total card */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
          <FaTools />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">อุปกรณ์ทั้งหมด</div>
          <div className="text-3xl font-bold text-slate-900 leading-tight">{total.toLocaleString()}</div>
          <div className="text-xs text-slate-500">Valve • Safety • DO • pH</div>
        </div>
      </div>

      {/* Col 2: Horizontal bar chart */}
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="text-sm font-semibold text-slate-700 mb-3">จำนวนต่อประเภท</div>
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 16, right: 8, top: 4, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis type="number" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={100} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Col 3: Pie chart */}
      <div>
        <PieChartCard valveCount={valve} safetyValveCount={safety} doCount={DO} phCount={pH} />
      </div>
    </div>
  );
}
