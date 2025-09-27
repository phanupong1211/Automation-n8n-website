// src/components/progress/ProgressForm.tsx
"use client";
import { useEffect, useMemo, useState } from "react";

type Options = {
  teams: string[];
  plants: string[];
  areasByPlant: Record<string, string[]>;
  qtyUnits: string[];
  progressUnits: string[];
};

export default function ProgressForm() {
  const [opts, setOpts] = useState<Options | null>(null);
  const [plant, setPlant] = useState("");
  const [area, setArea] = useState("");

  const [form, setForm] = useState({
    team: "",
    plant: "",
    area: "",
    wo: "",
    description: "",
    qty: "",
    qtyUnit: "",
    progress: "",
    progressUnit: "",
    remark: "",
  });

  useEffect(() => {
    fetch("/api/progress/options").then(r => r.json()).then(setOpts);
  }, []);

  // เมื่อเปลี่ยน plant → เคลียร์ area และคำนวณตัวเลือกใหม่
  useEffect(() => {
    setForm((f) => ({ ...f, plant, area: "" }));
    setArea("");
  }, [plant]);

  const areaOptions = useMemo(
    () => (plant && opts ? (opts.areasByPlant[plant] ?? []) : []),
    [plant, opts]
  );

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const j = await res.json();
    if (res.ok) alert("บันทึกแล้ว"); else alert("Error: " + j?.message);
  };

  if (!opts) return <div className="p-4">กำลังโหลดตัวเลือก…</div>;

  return (
    <form onSubmit={submit} className="space-y-4 bg-slate-900/50 p-4 rounded-xl">
      <div className="grid md:grid-cols-3 gap-3">
        <select
          value={form.team}
          onChange={(e) => setForm({ ...form, team: e.target.value })}
          className="px-3 py-2 rounded-md bg-slate-800 border border-slate-700"
        >
          <option value="">เลือก Team</option>
          {opts.teams.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>

        <select
          value={plant}
          onChange={(e) => setPlant(e.target.value)}
          className="px-3 py-2 rounded-md bg-slate-800 border border-slate-700"
        >
          <option value="">เลือก Plant</option>
          {opts.plants.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>

        <select
          value={form.area}
          onChange={(e) => setForm({ ...form, area: e.target.value })}
          disabled={!plant}
          className="px-3 py-2 rounded-md bg-slate-800 border border-slate-700 disabled:opacity-50"
        >
          <option value="">{plant ? "เลือก Area" : "เลือก Plant ก่อน"}</option>
          {areaOptions.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <input
          placeholder="WO"
          value={form.wo}
          onChange={(e) => setForm({ ...form, wo: e.target.value })}
          className="px-3 py-2 rounded-md bg-slate-800 border border-slate-700"
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="px-3 py-2 rounded-md bg-slate-800 border border-slate-700"
        />
      </div>

      <div className="grid md:grid-cols-4 gap-3">
        <input
          type="number"
          placeholder="จำนวน"
          value={form.qty}
          onChange={(e) => setForm({ ...form, qty: e.target.value })}
          className="px-3 py-2 rounded-md bg-slate-800 border border-slate-700"
        />
        <select
          value={form.qtyUnit}
          onChange={(e) => setForm({ ...form, qtyUnit: e.target.value })}
          className="px-3 py-2 rounded-md bg-slate-800 border border-slate-700"
        >
          <option value="">หน่วยจำนวน</option>
          {opts.qtyUnits.map((u) => <option key={u} value={u}>{u}</option>)}
        </select>

        <input
          type="number"
          placeholder="Progress"
          value={form.progress}
          onChange={(e) => setForm({ ...form, progress: e.target.value })}
          className="px-3 py-2 rounded-md bg-slate-800 border border-slate-700"
        />
        <select
          value={form.progressUnit}
          onChange={(e) => setForm({ ...form, progressUnit: e.target.value })}
          className="px-3 py-2 rounded-md bg-slate-800 border border-slate-700"
        >
          <option value="">หน่วย Progress</option>
          {opts.progressUnits.map((u) => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>

      <textarea
        placeholder="หมายเหตุ"
        value={form.remark}
        onChange={(e) => setForm({ ...form, remark: e.target.value })}
        className="w-full px-3 py-2 rounded-md bg-slate-800 border border-slate-700"
      />

      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
      >
        บันทึก
      </button>
    </form>
  );
}
