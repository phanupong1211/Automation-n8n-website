import Section from "./Section";
import { Field } from "./Field";
import { fmtDate } from "@/lib/utils";
import CompareTable from "./CompareTable";

export interface ValveReportData {
  reportNo: string;
  tag: string;
  testStandard?: string;
  stdRate?: string;
  valveAllowable?: string;
  valveTestMedium?: string;
  valveTestPressure?: string;
  actuatorTestMedium?: string;
  actuatorTestPressure?: string;
  valveInitialRate?: string;
  actuatorInitialRate?: string;
  valveFinalRate?: string;
  actuatorFinalRate?: string;
  initialResult?: string;
  finalResult?: string;
  actInitialResult?: string;
  actFinalResult?: string;
  comment?: string;
  testedBy?: string;
  inspectedAt?: string;
  seatLeakageTest?: string;
  valveOverhaul?: string;
  valveCalibrate?: string;
}

export default function ValveReportView({ data }: { data: ValveReportData }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <a href={`/dashboard/asset/valve/${encodeURIComponent(data.tag)}`} className="text-sm text-blue-600 hover:underline">← กลับ</a>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Valve Report <span className="text-slate-700">#{data.reportNo}</span>
          </h1>
          <p className="text-sm text-slate-600">Tag: {data.tag} • วันที่: {fmtDate(data.inspectedAt)}</p>
        </div>
      </div>

      <Section title="การทดสอบ (Test Spec)">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Field label="Test Standard" value={data.testStandard} />
          <Field label="Std Rate" value={data.stdRate} />
          <Field label="Valve Allowable" value={data.valveAllowable} />
        </div>
      </Section>

      <CompareTable
        title="Valve"
        rows={[
          { label: "Result", before: data.initialResult, after: data.finalResult, asBadge: true },
          { label: "Leak Rate", before: data.valveInitialRate, after: data.valveFinalRate },
        ]}
      />

      <CompareTable
        title="Actuator"
        rows={[
          { label: "Result", before: data.actInitialResult, after: data.actFinalResult, asBadge: true },
          { label: "Leak Rate", before: data.actuatorInitialRate, after: data.actuatorFinalRate },
        ]}
      />

      <Section title="งานที่ทำ (Performed)">
        <div className="flex flex-wrap gap-2">
          {[
            ["Seat Leakage Test", data.seatLeakageTest],
            ["Valve Overhaul", data.valveOverhaul],
            ["Valve Calibrate", data.valveCalibrate],
          ].map(([label, v]) => (
            <span key={label} className={`rounded-full px-3 py-1 text-xs ${String(v).toLowerCase() === "true" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700"}`}>
              {label}
            </span>
          ))}
        </div>
      </Section>

      <Section title="เพิ่มเติม">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Field label="Tested by" value={data.testedBy} />
          <Field label="Inspect Date" value={fmtDate(data.inspectedAt)} />
          <Field label="Comment" value={data.comment} />
        </div>
      </Section>
    </div>
  );
}
