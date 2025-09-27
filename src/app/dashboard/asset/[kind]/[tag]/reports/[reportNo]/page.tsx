import PdfFrame from "@/components/report/PdfFrame";
import { kindRegistry, type EquipmentKind, loadReportByKind } from "@/lib/kinds/kindRegistry";

type Props = {
  params: Promise<{ kind: EquipmentKind; tag: string; reportNo: string }>;
};

export default async function ReportPage({ params }: Props) {
  const { kind, tag, reportNo } = await params;
  const tagDecoded = (() => { try { return decodeURIComponent(tag); } catch { return tag; } })();
  const cfg = kindRegistry[kind];
  const data: any = await loadReportByKind(kind, tagDecoded, reportNo);

  if (!data) {
    return (
      <div className="space-y-3">
        <a href={`/dashboard/asset/${kind}/${encodeURIComponent(tagDecoded)}`} className="text-sm text-slate-800 hover:underline">
          ← กลับ
        </a>
        <h1 className="text-xl font-semibold text-slate-900">ไม่พบรายงาน</h1>
        <p className="text-slate-700">
          Report: <b>{reportNo}</b> / Tag: <b>{tagDecoded}</b>
        </p>
      </div>
    );
  }

  const ReportView = cfg.components.ReportView as any;

  return (
    <div className="space-y-6">
      <ReportView data={data} />
      {kind !== "DO" && (
        <PdfFrame
          kind={kind === "valve" ? "valve" : "safety"}
          reportNo={reportNo}
          pdfHint={data?.PDF ?? data?.pdfPath ?? ""}   // << ใช้คอลัมน์ PDF เป็นหลัก
          tag={tagDecoded}
          inspectedAt={data?.inspectedAt}
        />
      )}
    </div>
  );
}
