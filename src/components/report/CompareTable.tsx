import { resultBadgeClass } from "@/lib/utils";

type Row = {
  label: string;
  before?: string | number | null;
  after?: string | number | null;
  asBadge?: boolean; // render PASS/FAIL as badge
};

export default function CompareTable({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="px-4 py-3 sm:px-6 border-b border-slate-200 bg-slate-50">
        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left text-slate-600">
              <th className="px-4 py-3 w-1/3">รายการ</th>
              <th className="px-4 py-3 w-1/3">ก่อน (Before)</th>
              <th className="px-4 py-3 w-1/3">หลัง (After)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const before = r.before ?? "-";
              const after = r.after ?? "-";
              return (
                <tr key={i} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                  <td className="px-4 py-3 text-slate-700">{r.label}</td>
                  <td className="px-4 py-3">
                    {r.asBadge ? (
                      <span className={`rounded-full px-2 py-0.5 text-xs ${resultBadgeClass(String(before))}`}>{String(before)}</span>
                    ) : (
                      <span className="text-slate-800">{String(before)}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {r.asBadge ? (
                      <span className={`rounded-full px-2 py-0.5 text-xs ${resultBadgeClass(String(after))}`}>{String(after)}</span>
                    ) : (
                      <span className="text-slate-800">{String(after)}</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

