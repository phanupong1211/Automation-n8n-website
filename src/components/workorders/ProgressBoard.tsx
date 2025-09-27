"use client";
import { useEffect, useState } from "react";

type OptionPayload = {
  teams:string[]; plants:string[];
  areas:{tagsArea:string; plant:string; description:string}[];
  unitQty:string[]; unitProgress:string[];
};

export default function ProgressBoard(){
  const [opts,setOpts]=useState<OptionPayload>({teams:[],plants:[],areas:[],unitQty:[],unitProgress:[]});
  const [plant,setPlant]=useState("");
  const [form,setForm]=useState<any>({ Team:"", Plant:"", Area:"", WO:"", Dresscription:"", จำนวน:"", หน่วยจำนวน:"ตัว", Progress:"", หน่วยProgress:"%", หมายเหตุ:"" });
  const [rows,setRows]=useState<any[]>([]);

  const loadOptions=async (p="")=>{
    const r=await fetch(`/api/progress/options${p?`?plant=${encodeURIComponent(p)}`:""}`);
    const j=await r.json(); setOpts(j);
  };
  const loadRows=async ()=>{ const r=await fetch("/api/progress"); setRows(await r.json()); };

  useEffect(()=>{ loadOptions(); loadRows(); },[]);
  useEffect(()=>{ setForm((f:any)=>({...f,Plant:plant, Area:""})); loadOptions(plant); },[plant]);

  const areas = opts.areas.filter(a=>!plant || a.plant===plant);

  async function submit(){
    await fetch("/api/progress",{method:"POST", headers:{'Content-Type':'application/json'}, body:JSON.stringify(form)});
    setForm((f:any)=>({...f, WO:"", Dresscription:"", จำนวน:"", Progress:"", หมายเหตุ:""}));
    await loadRows();
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">งาน Shutdown</h2>

      <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-6">
        <h3 className="text-slate-100 font-semibold mb-4">เพิ่มงาน</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="bg-slate-800 border border-slate-700 rounded-lg p-2" value={form.Team} onChange={e=>setForm({...form,Team:e.target.value})}>
            <option value="">ทีม (Team)</option>
            {opts.teams.map(t=><option key={t}>{t}</option>)}
          </select>

          <select className="bg-slate-800 border border-slate-700 rounded-lg p-2" value={plant} onChange={e=>setPlant(e.target.value)}>
            <option value="">Plant</option>
            {opts.plants.map(p=><option key={p}>{p}</option>)}
          </select>

          <select className="bg-slate-800 border border-slate-700 rounded-lg p-2" value={form.Area} onChange={e=>setForm({...form,Area:e.target.value})}>
            <option value="">Area</option>
            {areas.map(a=><option key={a.tagsArea} value={a.tagsArea}>{a.tagsArea} — {a.description}</option>)}
          </select>

          <input className="bg-slate-800 border border-slate-700 rounded-lg p-2" placeholder="WO" value={form.WO} onChange={e=>setForm({...form,WO:e.target.value.replace(/\D/g,"")})}/>
          <input className="bg-slate-800 border border-slate-700 rounded-lg p-2 md:col-span-2" placeholder="Description" value={form.Dresscription} onChange={e=>setForm({...form,Dresscription:e.target.value})}/>

          <input className="bg-slate-800 border border-slate-700 rounded-lg p-2" placeholder="จำนวน" value={form.จำนวน} onChange={e=>setForm({...form,จำนวน:e.target.value.replace(/[^\d.]/g,"")})}/>
          <select className="bg-slate-800 border border-slate-700 rounded-lg p-2" value={form.หน่วยจำนวน} onChange={e=>setForm({...form,หน่วยจำนวน:e.target.value})}>
            {opts.unitQty.map(u=><option key={u}>{u}</option>)}
          </select>

          <input className="bg-slate-800 border border-slate-700 rounded-lg p-2" placeholder="Progress" value={form.Progress} onChange={e=>setForm({...form,Progress:e.target.value.replace(/[^\d.]/g,"")})}/>
          <select className="bg-slate-800 border border-slate-700 rounded-lg p-2" value={form.หน่วยProgress} onChange={e=>setForm({...form,หน่วยProgress:e.target.value})}>
            {opts.unitProgress.map(u=><option key={u}>{u}</option>)}
          </select>

          <input className="bg-slate-800 border border-slate-700 rounded-lg p-2 md:col-span-2" placeholder="หมายเหตุ" value={form.หมายเหตุ} onChange={e=>setForm({...form,หมายเหตุ:e.target.value})}/>
          <button onClick={submit} className="bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium px-4">บันทึก</button>
        </div>
      </div>

      <div className="bg-slate-900/80 border border-slate-700 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-700 text-slate-100 font-semibold">รายการงาน Shutdown</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-slate-300">
            <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">Team</th>
                <th className="px-4 py-3 text-left">Plant</th>
                <th className="px-4 py-3 text-left">Area</th>
                <th className="px-4 py-3 text-left">WO</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">จำนวน</th>
                <th className="px-4 py-3 text-left">หน่วย</th>
                <th className="px-4 py-3 text-left">Progress</th>
                <th className="px-4 py-3 text-left">หน่วย</th>
                <th className="px-4 py-3 text-left">หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r,i)=>(
                <tr key={i} className="border-t border-slate-800">
                  <td className="px-4 py-3">{r.Team||r.team||"-"}</td>
                  <td className="px-4 py-3">{r.Plant||r.plant||"-"}</td>
                  <td className="px-4 py-3">{r.Area||r.area||"-"}</td>
                  <td className="px-4 py-3">{r.WO||"-"}</td>
                  <td className="px-4 py-3">{r.Dresscription||r.Description||"-"}</td>
                  <td className="px-4 py-3">{r["จำนวน"]||r.qty||"-"}</td>
                  <td className="px-4 py-3">{r["หน่วยจำนวน"]||r.unit_qty||"-"}</td>
                  <td className="px-4 py-3">{r.Progress||"-"}</td>
                  <td className="px-4 py-3">{r["หน่วย Progress"]||r.unit_progress||"-"}</td>
                  <td className="px-4 py-3">{r["หมายเหตุ"]||r.remark||"-"}</td>
                </tr>
              ))}
              {!rows.length && <tr><td className="px-6 py-6 text-slate-500" colSpan={10}>ยังไม่มีรายการ</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
