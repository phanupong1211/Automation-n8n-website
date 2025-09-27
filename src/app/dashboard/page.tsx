// src/app/dashboard/page.tsx
import  ShutdownProgress  from "@/components/dashboard/ShutdownProgress";
import { CurrentTime } from "@/components/dashboard/CurrentTime";
import AssetStats from "@/components/dashboard/AssetStats";


export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500">ภาพรวมระบบบำรุงรักษา</p>
        </div>
        <div className="text-sm text-slate-500">
          <CurrentTime />
        </div>
      </div>

      {/* KPIs (เรียบ/อ่านง่าย) */}
      <AssetStats />

      {/* Shutdown Progress (แบบการ์ดบางๆ ไม่รก) */}
      <ShutdownProgress />

    
    </div>
  );
}
