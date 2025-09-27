export function Field({ label, value }: { label: string; value?: React.ReactNode }) {
  return (
    <div className="rounded-lg bg-slate-50 px-4 py-3">
      <div className="text-xs font-medium uppercase text-slate-500">{label}</div>
      <div className="text-slate-900">{value ?? "-"}</div>
    </div>
  );
}
