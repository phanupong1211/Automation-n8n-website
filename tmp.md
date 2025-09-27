# Guide: Adding New Equipment Kind to Dashboard

## 0) ตั้งชื่อชนิด
ตัวอย่าง: `transmitter`

---

## 1) เพิ่ม ENV ใน `.env.local`

```
GOOGLE_SHEETS_TRANSMITTER_ID=your_google_sheet_id
GOOGLE_SHEETS_TRANSMITTER_TAB=Equipment
GOOGLE_SHEETS_TRANSMITTER_REPORT_TAB=Transmitter service report
```

---

## 2) Google Sheet Columns

### Equipment
- Tag_No (หรือ Tags, Tag)
- Description
- Model
- Range
- Location
- Tags Area
- Remark

### Report
- Report_No
- Tag_No
- Inspect_Date
- Calib_Medium
- Calib_Points
- AsFound
- AsLeft
- Result
- Tested_by
- Remark

---

## 3) Components

### `src/components/asset/TransmitterSpec.tsx`
```tsx
export default function TransmitterSpec({ row }: { row: Record<string, any> }) {
  const fields: [string, string][] = [
    ["Tag_No", "Tag"],
    ["Description", "Description"],
    ["Model", "Model"],
    ["Range", "Range"],
    ["Tags_Area", "Tags Area"],
    ["Location", "Location"],
    ["Remark", "Remark"],
  ];
  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold">Specification (Transmitter)</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map(([k, label]) => (
          <div key={k}>
            <div className="text-xs font-medium uppercase text-slate-500">{label}</div>
            <div>{row[k] || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### `src/components/asset/MaintHistoryTransmitter.tsx`
```tsx
import { fmtDate, resultBadgeClass } from "@/lib/utils";
export default function MaintHistoryTransmitter({ rows, kind, tag }: { rows: Record<string, any>[]; kind: string; tag: string }) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold">Maintenance History (Transmitter)</h3>
      <table className="w-full text-sm">
        <thead><tr><th>Report No.</th><th>Date</th><th>Result</th><th>Tester</th><th>Remark</th></tr></thead>
        <tbody>
          {rows.map((r, i) => {
            const reportNo = r["Report_No"];
            return (
              <tr key={i}>
                <td>{reportNo}</td>
                <td>{fmtDate(r["Inspect_Date"])}</td>
                <td><span className={resultBadgeClass(r["Result"])}>{r["Result"]}</span></td>
                <td>{r["Tested_by"]}</td>
                <td>{r["Remark"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
```

### `src/components/report/TransmitterReportView.tsx`
```tsx
import { fmtDate, resultBadgeClass } from "@/lib/utils";
export interface TransmitterReportData {
  reportNo: string; tag: string;
  calibMedium?: string; calibPoints?: string;
  asFound?: string; asLeft?: string;
  result?: string; testedBy?: string; inspectedAt?: string; remark?: string;
}
export default function TransmitterReportView({ data }: { data: TransmitterReportData }) {
  return (
    <div>
      <h1>Transmitter Report #{data.reportNo}</h1>
      <p>Tag: {data.tag} • Date: {fmtDate(data.inspectedAt)}</p>
      <div>Medium: {data.calibMedium}</div>
      <div>Points: {data.calibPoints}</div>
      <div>As Found: {data.asFound}</div>
      <div>As Left: {data.asLeft}</div>
      <div>Result: <span className={resultBadgeClass(data.result)}>{data.result}</span></div>
      <div>Tester: {data.testedBy}</div>
      <div>Remark: {data.remark}</div>
    </div>
  );
}
```

---

## 4) kindRegistry

เพิ่มที่ `src/lib/kinds/kindRegistry.ts`

```ts
import TransmitterSpec from "@/components/asset/TransmitterSpec";
import MaintHistoryTransmitter from "@/components/asset/MaintHistoryTransmitter";
import TransmitterReportView from "@/components/report/TransmitterReportView";

export type EquipmentKind = "valve" | "safety" | "transmitter";

export const kindRegistry: Record<EquipmentKind, any> = {
  transmitter: {
    label: "Transmitter",
    env: {
      equipSheetId: "GOOGLE_SHEETS_TRANSMITTER_ID",
      equipTab: "GOOGLE_SHEETS_TRANSMITTER_TAB",
      reportSheetId: "GOOGLE_SHEETS_TRANSMITTER_ID",
      reportTab: "GOOGLE_SHEETS_TRANSMITTER_REPORT_TAB",
    },
    keys: {
      tag: ["Tag_No", "Tags"],
      reportNo: ["Report_No"],
      inspectDate: ["Inspect_Date"],
    },
    loadSpec: (r) => ({
      Tag_No: r["Tag_No"], Description: r["Description"], Model: r["Model"],
      Range: r["Range"], Tags_Area: r["Tags Area"], Location: r["Location"], Remark: r["Remark"],
    }),
    loadReportRowToData: (r) => ({
      reportNo: r["Report_No"], tag: r["Tag_No"],
      calibMedium: r["Calib_Medium"], calibPoints: r["Calib_Points"],
      asFound: r["AsFound"], asLeft: r["AsLeft"],
      result: r["Result"], testedBy: r["Tested_by"], inspectedAt: r["Inspect_Date"], remark: r["Remark"],
    }),
    components: { SpecView: TransmitterSpec, HistoryTable: MaintHistoryTransmitter, ReportView: TransmitterReportView },
  },
};
```

---

## 5) Usage
- `/dashboard/asset/transmitter/[tag]` → แสดง Spec + History
- `/dashboard/asset/transmitter/[tag]/reports/[reportNo]` → แสดง Report

---

## 6) ถ้าอยากรวมในหน้า Assets
แก้ `/api/assets` ให้รวมจาก Transmitter Equipment ด้วย แล้วเพิ่ม filter "Transmitter"

---

