import { fmtDate, resultBadgeClass } from "@/lib/utils";

export default function MaintHistoryValve({
  rows,
  kind,
  tag,
}: { rows: Record<string, any>[]; kind: "valve" | "safety"; tag: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">Maintenance History (Valve)</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs font-medium uppercase text-slate-600">
            <tr>
              <th className="px-4 py-3">Report No.</th>
              <th className="px-4 py-3">Inspect Date</th>
              <th className="px-4 py-3">Initial</th>
              <th className="px-4 py-3">Final</th>
              <th className="px-4 py-3">Act Initial</th>
              <th className="px-4 py-3">Act Final</th>
              <th className="px-4 py-3">Comment</th>
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
              const href = `/dashboard/asset/${kind}/${encodeURIComponent(tag)}/reports/${encodeURIComponent(String(reportNo))}`;
              return (
                <tr key={i} className={i % 2 ? "bg-slate-50/60" : ""}>
                  <td className="px-4 py-3">
                    <a className="text-blue-600 hover:underline" href={href}>
                      {reportNo || "-"}
                    </a>
                  </td>
                  <td className="px-4 py-3">{fmtDate(r["Inspect_Date"] || r["DATE"])}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs ${resultBadgeClass(r["Initial_Result"])}`}>
                      {r["Initial_Result"] || "-"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs ${resultBadgeClass(r["Final_Result"])}`}>
                      {r["Final_Result"] || "-"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs ${resultBadgeClass(r["act_Initial_Result"])}`}>
                      {r["act_Initial_Result"] || "-"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs ${resultBadgeClass(r["act_Final_Result"])}`}>
                      {r["act_Final_Result"] || "-"}
                    </span>
                  </td>
                  <td className="px-4 py-3">{r["comment"] || "-"}</td>
                  <td className="px-4 py-3">{r["Tested_by"] || r["Tester"] || "-"}</td>
                  <td className="px-4 py-3 text-right">
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
