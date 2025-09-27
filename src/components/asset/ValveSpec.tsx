export default function ValveSpec({ row }: { row: Record<string, any> }) {
  const fields: [string, string][] = [
    ["Tag_No", "Tag"],
    ["Description", "Description"],
    ["Valve_Type", "Valve Type"],
    ["Model", "Model"],
    ["Standard", "Standard"],
    ["Valve_Size", "Valve Size"],
    ["Rating_Class", "Rating Class"],
    ["Gasket_Size", "Gasket Size"],
    ["Tags_Area", "Tags Area"],
    ["Location", "Location"],
    ["Scaffolding", "Scaffolding"],
    ["Remark", "Remark"],
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">Specification (Valve)</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map(([k, label]) => (
          <div key={k} className="rounded-lg bg-slate-50 px-4 py-3">
            <div className="text-xs font-medium uppercase text-slate-500">{label}</div>
            <div className="text-slate-900">{row[k] || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
