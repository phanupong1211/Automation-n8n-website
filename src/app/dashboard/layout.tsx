// src/app/dashboard/layout.tsx
import type { ReactNode } from "react";
import { supabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/(marketing)/SignoutBotton";
import { SidebarNav } from "@/components/dashboard/SidebarNav";
import PageBackground from "@/components/dashboard/PageBackground";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const sb = supabaseServer();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) redirect("/login");
  // Background now driven by client pathname via PageBackground

  return (
    <PageBackground>
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Asset System</h1>
              <p className="text-xs text-gray-500">Maintenance Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <SidebarNav />

        {/* User Info */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700">A</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">Maintenance Team</p>
            </div>
          </div>
          <SignOutButton />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          {children}
        </main>
      </div>
    </PageBackground>
  );
}
