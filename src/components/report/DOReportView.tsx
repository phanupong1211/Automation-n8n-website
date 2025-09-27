import Section from "./Section";
import { Field } from "./Field";
import CompareTable from "./CompareTable";
import { fmtDate, resultBadgeClass } from "@/lib/utils";

export interface DOReportData {
  reportNo: string;
  tag: string;
  TagName?: string;
  Callibrate_mode?: string;
  Callibrate_range?: string;
  Test_medium?: string;
  Test_Temperature?: string;
  CalibrationAdjustment?: string;
  Asfound_UUC_Na2SO3?: string;
  Asfound_UUC_Air?: string;
  Asfound_UUC_Process?: string;
  Asleft_UUC_Na2SO3?: string;
  Asleft_UUC_Air?: string;
  Asleft_UUC_Process?: string;
  inspectedAt?: string;
  testedBy?: string;
  remark?: string;
  result?: string;
}

export default function DOReportView({ data }: { data: DOReportData }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <a href={`/dashboard/asset/DO/${encodeURIComponent(data.tag)}`} className="text-sm text-blue-600 hover:underline">← กลับ</a>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            DO Sensor Report <span className="text-slate-700">#{data.reportNo}</span>
          </h1>
          <p className="text-sm text-slate-600">Tag: {data.tag} • Date: {fmtDate(data.inspectedAt)}</p>
        </div>
        {data.result && (
          <span className={`rounded-full px-3 py-1 text-xs ${resultBadgeClass(data.result)}`}>{data.result}</span>
        )}
      </div>

      <Section title="Calibration Info">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Field label="Cal. Mode" value={data.Callibrate_mode} />
          <Field label="Cal. Range" value={data.Callibrate_range} />
          <Field label="Test Medium" value={data.Test_medium} />
          <Field label="Test Temperature" value={data.Test_Temperature} />
          <Field label="Calibration Adjustment" value={data.CalibrationAdjustment} />
        </div>
      </Section>

      <CompareTable
        title="As Found vs As Left (UUC)"
        rows={[
          { label: "Na2SO3", before: data.Asfound_UUC_Na2SO3, after: data.Asleft_UUC_Na2SO3 },
          { label: "Air", before: data.Asfound_UUC_Air, after: data.Asleft_UUC_Air },
          { label: "Process", before: data.Asfound_UUC_Process, after: data.Asleft_UUC_Process },
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
