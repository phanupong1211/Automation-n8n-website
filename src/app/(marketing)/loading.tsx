export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 rounded-full border-4 border-white/30 border-t-blue-400 animate-spin" />
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">
          Loading content…
        </p>
      </div>
    </div>
  );
}
