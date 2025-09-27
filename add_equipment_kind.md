# Guide: Adding New Equipment Kind to Dashboard

This guide follows the current code structure (kindRegistry, unified sheets, recent API). You can add a new kind yourself in minutes.

0) Pick names
- Kind key (URL part): e.g. `transmitter`
- Label (display): e.g. `Transmitter`

1) .env.local (tabs only)
- The app uses two Sheet IDs globally: `GOOGLE_SHEETS_ASSET_ID` and `GOOGLE_SHEETS_REPORT_ID`.
- Add tab envs for your kind:

```
GOOGLE_SHEETS_TRANSMITTER_ASSET_TAB=transmitter
GOOGLE_SHEETS_TRANSMITTER_REPORT_TAB=Transmitter report
```

2) Create components (copy + tweak)
- Spec: `src/components/asset/TransmitterSpec.tsx`
- History: `src/components/asset/MaintHistoryTransmitter.tsx`
- Report: `src/components/report/TransmitterReportView.tsx`
- Use `fmtDate(...)` for dates and `resultBadgeClass(...)` for results.

3) Register in kindRegistry
- File: `src/lib/kinds/kindRegistry.ts`
- Import your components and add:

```ts
transmitter: {
  label: "Transmitter",
  env: {
    equipSheetId: "GOOGLE_SHEETS_ASSET_ID",
    equipTab: "GOOGLE_SHEETS_TRANSMITTER_ASSET_TAB",
    reportSheetId: "GOOGLE_SHEETS_REPORT_ID",
    reportTab: "GOOGLE_SHEETS_TRANSMITTER_REPORT_TAB",
  },
  keys: {
    tag: ["Tag_No", "Tags", "Tag", "Tag No."],
    reportNo: ["Report_No", "Report No.", "ReportNo"],
    inspectDate: ["DATE", "Date", "Inspect_Date"],
    description: ["Description", "Tag Name"],
  },
  loadSpec: (r) => ({
    Tags: get(r, ["Tags", "Tag", "Tag_No", "Tag No."]),
    Description: get(r, ["Description", "Tag Name"]),
    Location: get(r, ["Location"]),
    Tags_Area: get(r, ["Tags Area", "Area"]),
    Remark: get(r, ["Remark"]),
  }),
  loadReportRowToData: (r) => ({
    reportNo: get(r, ["Report_No", "Report No.", "ReportNo"]),
    tag: get(r, ["Tags", "Tag", "Tag_No", "Tag No."]),
    testedBy: get(r, ["Tested by", "Tested_by", "Tester"]),
    inspectedAt: get(r, ["DATE", "Date", "Inspect_Date"]),
    remark: get(r, ["Remark", "comment"]),
  }),
  components: {
    SpecView: TransmitterSpec,
    HistoryTable: MaintHistoryTransmitter,
    ReportView: TransmitterReportView,
  },
},
```

4) Recent API
- File: `src/app/api/assets/recent/route.ts`
- Add your kind to the loader list and merge results:

```ts
const [v, s, d, t] = await Promise.all([
  load("valve"), load("safety"), load("DO"), load("transmitter"),
]);
const all = [...v, ...s, ...d, ...t]
```
- If TS complains about `RecentItem["Type"]`, add your label to that union (or change to `string`).

4.1) Route changes summary (what to edit)
- File: `src/app/api/assets/recent/route.ts`
  - Add your label to `RecentItem["Type"]` union.
  - In `load(kind)`, set sensible defaults for `reportTab`/`equipTab` when the env is missing (e.g., `ph` → `"pH report"` and `"ph_sensor"`).
  - Map returned `Type` by kind key → display label.
  - Add your kind to `Promise.all([...])` and spread into `all`.

- File: `src/app/api/assets/route.ts`
  - Add loader for your equipment tab (like valve/safety/DO) and push into `items` with `{ type: "<Label>", tag, description, area, location }`.
  - Add the label into `types` so it shows up in the filter (or derive dynamically from `items`).

- File: `src/app/api/dashboard/summary/route.ts`
  - Add your equipment tab env var and include its length in the counts.
  - Example: add `const PH_EQ = envOrThrow("GOOGLE_SHEETS_PH_ASSET_TAB");` and read it alongside others.

5) Assets API (equipment list)
- File: `src/app/api/assets/route.ts`
- Add loader for the new tab (like Valve/Safety/DO), push rows into `items`, and add the label into `types` so it appears in the filter.

6) Dashboard filter (optional)
- File: `src/app/dashboard/asset/page.tsx`
- Add a new `<option>` for your label, or map from `data.types` to avoid hard-coding types.

7) Verify
- Spec+History: `/dashboard/asset/transmitter/[tag]`
- Report: `/dashboard/asset/transmitter/[tag]/reports/[reportNo]`
- Recent list: main Asset page

Notes
- Always provide multiple `keys` candidates for robustness (header variations, spaces, case).
- Date utils already handle Excel serials and Thai BE years; use `fmtDate` for display and `parseSheetDateMs` for sorting.
