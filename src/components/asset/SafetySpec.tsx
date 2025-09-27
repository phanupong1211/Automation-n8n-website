export default function SafetySpec({ row }: { row: Record<string, any> }) {
  const fields: [string, string][] = [
    ["Tags", "Tag"],
    ["Description", "Description"],
    ["Model", "Model"],
    ["Service_Fluid", "Service Fluid"],
    ["Valve_standard", "Valve standard"],
    ["Inlet_flange_size", "Inlet flange size"],
    ["Outlet_flange_size", "Outlet flange size"],
    ["Set_pressure", "Set pressure"],
    ["Inlet_Rating_Class", "Inlet Rating Class"],
    ["Outlet_Rating_Class", "Outlet Rating Class"],
    ["Gasket_Inlet_Size", "Gasket Inlet Size"],
    ["Gasket_Outlet_Size", "Gasket Outlet Size"],
    ["Location", "Location"],
    ["Tags_Area", "Tags Area"],
    ["Scaffolding", "Scaffolding"],
    ["Remark", "Remark"],
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">Specification (Safety Valve)</h3>
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
