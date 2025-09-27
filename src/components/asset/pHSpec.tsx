export default function pHSpec({ row }: { row: Record<string, any> }) {
  // row structure follows kindRegistry.pH.loadSpec
  const fields: [string, string][] = [
    ["Tags", "Tag"],
    ["Description", "Description"],
    ["Model", "Model"],
    ["Callibrate_mode", "Cal. Mode"],
    ["Callibrate_range", "Cal. Range"],
    ["Manufacturer", "Manufacturer"],
    ["SerialNo", "Serial No."],
    ["Tags_Area", "Tags Area"],
    ["Location", "Location"],
    ["Remark", "Remark"],
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">Specification (pH Sensor)</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map(([k, label]) => (
          <div key={k}>
            <div className="text-xs font-medium uppercase text-slate-500">{label}</div>
            <div className="text-slate-800">{row[k] || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
