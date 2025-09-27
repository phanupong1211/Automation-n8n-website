"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

type Item = {
  href: string;
  label: string;
  icon: JSX.Element;
};

export function SidebarNav() {
  const pathname = usePathname();

  const items: Item[] = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
        </svg>
      ),
    },
    {
      href: "/dashboard/asset",
      label: "Assets",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
        </svg>
      ),
    },
    {
      href: "/dashboard/workorders",
      label: "Shutdown",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      href: "/dashboard/team",
      label: "Team",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 7a1 1 0 11-2 0 1 1 0 012 0zM7 16a4 4 0 014-4h4a4 4 0 014 4v1a1 1 0 01-1 1H8a1 1 0 01-1-1v-1z"/>
        </svg>
      ),
    },
    {
      href: "/dashboard/reports",
      label: "Report",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
        </svg>
      ),
    },
  ];

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <nav className="p-4">
      <ul className="space-y-2">
        {items.map((item) => {
          const active = isActive(item.href);
          const base = "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors";
          const cls = active
            ? "bg-blue-600 text-white opacity-100 shadow"
            : "bg-white text-gray-900 opacity-100 hover:bg-gray-100";
          return (
            <li key={item.href} className="opacity-100">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`${base} ${cls} no-underline hover:no-underline focus:no-underline active:no-underline`}
                style={{ color: active ? "#ffffff" : "#0f172a", textDecoration: "none" }}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
