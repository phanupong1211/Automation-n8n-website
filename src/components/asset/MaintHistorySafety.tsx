import { fmtDate, resultBadgeClass } from "@/lib/utils";

export default function MaintHistorySafety({
  rows,
  kind,
  tag,
}: { rows: Record<string, any>[]; kind: "valve" | "safety"; tag: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">Maintenance History (Safety Valve)</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs font-medium uppercase text-slate-600">
            <tr>
              <th className="px-4 py-3 ">Report No.</th>
              <th className="px-4 py-3">DATE</th>
              <th className="px-4 py-3">B: Pop</th>
              <th className="px-4 py-3">B: Leak</th>
              <th className="px-4 py-3">A: Pop</th>
              <th className="px-4 py-3">A: Leak</th>
              <th className="px-4 py-3">Remark</th>
              <th className="px-4 py-3">Tested by</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr><td className="px-4 py-6 text-center text-slate-500" colSpan={9}>ไม่มีประวัติ</td></tr>
            )}
            {rows.map((r, i) => {
              const reportNo = r["Report_No"] || r["Report No."] || r["ReportNo"];
              const href = `/dashboard/asset/safety/${encodeURIComponent(tag)}/reports/${encodeURIComponent(String(reportNo))}`;
              return (
                <tr key={i} className={i % 2 ? "bg-slate-50/60" : ""}>
                  <td className="px-4 py-3 text-slate-900">
                    <a className="text-blue-600 hover:underline" href={href}>
                      {reportNo || "-"}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-slate-900">{fmtDate(r["Inspect_Date"] || r["DATE"] || r["Date"])}</td>
                  <td className="px-4 py-3 text-slate-900"><span className={`rounded-full px-2 py-0.5 text-xs ${resultBadgeClass(r["B: Pop test Result"] || r["B_PopTest"])}`}>{r["B: Pop test Result"] || r["B_PopTest"] || "-"}</span></td>
                  <td className="px-4 py-3 text-slate-900"><span className={`rounded-full px-2 py-0.5 text-xs ${resultBadgeClass(r["B: Leakage test Result"] || r["B_LeakTest"])}`}>{r["B: Leakage test Result"] || r["B_LeakTest"] || "-"}</span></td>
                  <td className="px-4 py-3 text-slate-900"><span className={`rounded-full px-2 py-0.5 text-xs ${resultBadgeClass(r["A: Pop test Result"] || r["A_PopTest"])}`}>{r["A: Pop test Result"] || r["A_PopTest"] || "-"}</span></td>
                  <td className="px-4 py-3 text-slate-900"><span className={`rounded-full px-2 py-0.5 text-xs ${resultBadgeClass(r["A: Leakage test Result"] || r["A_LeakTest"])}`}>{r["A: Leakage test Result"] || r["A_LeakTest"] || "-"}</span></td>
                  <td className="px-4 py-3 text-slate-900">{r["Remark"] || r["comment"] || "-"}</td>
                  <td className="px-4 py-3 text-slate-900">{r["Tested by"] || r["Tested_by"] || r["Tester"] || "-"}</td>
                  <td className="px-4 py-3 text-slate-900 text-right">
                    <a className="text-blue-600 hover:underline" href={href}>ดูรีพอร์ต</a>
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
