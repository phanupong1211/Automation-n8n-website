export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">{title}</h3>
      {children}
    </section>
  );
}
