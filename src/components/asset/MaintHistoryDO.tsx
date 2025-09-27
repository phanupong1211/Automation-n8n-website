import { fmtDate, resultBadgeClass } from "@/lib/utils";

export default function MaintHistoryDO({ rows, kind, tag }: { rows: Record<string, any>[]; kind: string; tag: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">Maintenance History (DO Sensor)</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-900">
          <thead className="bg-slate-50 text-xs font-medium uppercase text-slate-600">
            <tr>
              <th className="px-4 py-3 text-slate-900">Report No.</th>
              <th className="px-4 py-3 text-slate-900">Cal. Date</th>
              <th className="px-4 py-3 text-slate-900">Result</th>
              <th className="px-4 py-3 text-slate-900">Tester</th>
              <th className="px-4 py-3 text-slate-900">Remark</th>
              <th className="px-4 py-3 text-slate-900"></th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr><td className="px-4 py-6 text-center text-slate-500" colSpan={6}>ไม่มีประวัติ</td></tr>
            )}
            {rows.map((r, i) => {
              const reportNo = r["Cert. No"] || r["Report_No"] || r["Report No."] || r["ReportNo"];
              const href = `/dashboard/asset/DO/${encodeURIComponent(tag)}/reports/${encodeURIComponent(String(reportNo))}`;
              return (
                <tr key={i} className={`opacity-100 ${i % 2 ? "bg-slate-50/60" : "bg-white"}`}>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    <a className="text-blue-600 no-underline hover:underline" href={href}>{reportNo || "-"}</a>
                  </td>
                  <td className="px-4 py-3 text-slate-800">{fmtDate(r["Cal. Date"] || r["Inspect_Date"] || r["DATE"])}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs ${resultBadgeClass(r["Result"])}`}>{r["Result"] || "-"}</span>
                  </td>
                  <td className="px-4 py-3 text-slate-800">{r["Tested by"] || r["Tested_by"] || r["Tester"] || "-"}</td>
                  <td className="px-4 py-3 text-slate-800">{r["Remark"] || r["comment"] || "-"}</td>
                  <td className="px-4 py-3 text-right">
                    <a className="text-blue-600 no-underline hover:underline" href={href}>ดูรีพอร์ต</a>
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
