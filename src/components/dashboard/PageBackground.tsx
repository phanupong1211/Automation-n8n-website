"use client";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const palette = [
  "bg-gray-50", "bg-slate-50", "bg-zinc-50", "bg-stone-50",
  "bg-red-50", "bg-rose-50", "bg-orange-50", "bg-amber-50",
  "bg-yellow-50", "bg-lime-50", "bg-emerald-50", "bg-teal-50",
  "bg-cyan-50", "bg-sky-50", "bg-blue-50", "bg-indigo-50",
  "bg-violet-50", "bg-fuchsia-50", "bg-pink-50"
];

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function PageBackground({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const bg = palette[hash(pathname) % palette.length];
  return <div className={`flex h-screen ${bg}`}>{children}</div>;
}

