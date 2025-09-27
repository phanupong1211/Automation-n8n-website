import { kindRegistry, loadHistoryRowsByKind, loadSpecByKind, type EquipmentKind } from "@/lib/kinds/kindRegistry";
import { fmtDate, get } from "@/lib/utils";

type Props = { params: Promise<{ kind: EquipmentKind; tag: string }> };

export default async function AssetDetailPage({ params }: Props) {
  const { kind, tag } = await params;
  // Decode tag for matching and display (handles %20 etc.)
  const tagDecoded = (() => { try { return decodeURIComponent(tag); } catch { return tag; } })();
  const cfg = kindRegistry[kind];

  const spec = await loadSpecByKind(kind, tagDecoded);
  const histories = await loadHistoryRowsByKind(kind, tagDecoded);

  if (!spec) {
    return (
      <div className="space-y-3">
        <a href="/dashboard/asset" className="text-sm text-blue-600 hover:underline">← กลับ</a>
        <h1 className="text-xl font-semibold text-slate-900">ไม่พบอุปกรณ์</h1>
        <p className="text-slate-700">Kind: {kind} • Tag: {tagDecoded}</p>
      </div>
    );
  }

  const last = histories[0];
  const lastDate = last ? fmtDate(get(last, cfg.keys.inspectDate)) : "-";
  const lastReportNo = last ? (last["Report_No"] || last["Report No."] || last["ReportNo"]) : null;

  const SpecView = cfg.components.SpecView as any;
  const HistoryTable = cfg.components.HistoryTable as any;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <a href="/dashboard/asset" className="text-sm text-blue-600 hover:underline">← กลับไปหน้า Assets</a>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            {cfg.label}: <span className="text-slate-700">{tagDecoded}</span>
          </h1>
          <p className="text-sm text-slate-600">อัปเดตล่าสุด: {lastDate}</p>
        </div>
        <div className="flex gap-2">
          {lastReportNo && (
            <a
              href={`/dashboard/asset/${kind}/${encodeURIComponent(tagDecoded)}/reports/${encodeURIComponent(String(lastReportNo))}`}
              className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800"
            >
              ดูรีพอร์ตล่าสุด
            </a>
          )}
        </div>
      </div>

      <SpecView row={spec} />
      <HistoryTable rows={histories} kind={kind} tag={tagDecoded} />
  </div>
  );
}
