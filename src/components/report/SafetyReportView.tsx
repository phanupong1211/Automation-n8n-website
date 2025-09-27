import Section from "./Section";
import { Field } from "./Field";
import { fmtDate } from "@/lib/utils";
import CompareTable from "./CompareTable";

export interface SafetyReportData {
  reportNo: string;
  tag: string;
  testedBy?: string;
  inspectedAt?: string;
  remark?: string;

  popInitial?: string;
  popFinal?: string;
  leakInitial?: string;
  leakFinal?: string;

  popFluid?: string;
  setPressure?: string;
  popInitialPressure?: string;
  popFinalPressure?: string;

  leakFluid?: string;
  leakPressure?: string;
  leakInitialRate?: string;
  leakFinalRate?: string;
}

export default function SafetyReportView({ data }: { data: SafetyReportData }) {
  return (
    <div className="space-y-6">
      <div>
        <a href={`/dashboard/asset/safety/${encodeURIComponent(data.tag)}`} className="text-sm text-blue-600 hover:underline">← กลับ</a>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">
          Safety Valve Report <span className="text-slate-700">#{data.reportNo}</span>
        </h1>
        <p className="text-sm text-slate-600">Tag: {data.tag} • Date: {fmtDate(data.inspectedAt)}</p>
      </div>

      <CompareTable
        title="Pop Test"
        rows={[
          { label: "Result", before: data.popInitial, after: data.popFinal, asBadge: true },
          { label: "Popping Pressure", before: data.popInitialPressure, after: data.popFinalPressure },
        ]}
      />

      <CompareTable
        title="Leakage Test"
        rows={[
          { label: "Result", before: data.leakInitial, after: data.leakFinal, asBadge: true },
          { label: "Leak Rate", before: data.leakInitialRate, after: data.leakFinalRate },
        ]}
      />

      <Section title="เพิ่มเติม">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Field label="Tested by" value={data.testedBy} />
          <Field label="Date" value={fmtDate(data.inspectedAt)} />
          <Field label="Remark" value={data.remark} />
        </div>
      </Section>
    </div>
  );
}
