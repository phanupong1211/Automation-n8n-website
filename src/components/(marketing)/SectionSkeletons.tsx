"use client";

import type { PropsWithChildren } from "react";

interface SectionSkeletonProps {
  variant?: "hero" | "content" | "cards";
  id?: string;
}

const basePulse = "animate-pulse bg-white/30 dark:bg-gray-700/40";

export function SectionSkeleton({ variant = "content", id }: SectionSkeletonProps) {
  if (variant === "hero") {
    return (
      <section
        id={id}
        className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-[60vh] flex items-center"
      >
        <div className="max-w-4xl mx-auto px-4 w-full space-y-6">
          <div className={`${basePulse} h-10 rounded-full w-2/3`} />
          <div className={`${basePulse} h-6 rounded-full w-1/2`} />
          <div className="space-y-3 pt-6">
            <div className={`${basePulse} h-4 rounded-full w-full`} />
            <div className={`${basePulse} h-4 rounded-full w-5/6`} />
            <div className={`${basePulse} h-4 rounded-full w-2/3`} />
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className={`${basePulse} h-12 rounded-full w-40`} />
            <div className={`${basePulse} h-12 rounded-full w-40`} />
          </div>
        </div>
      </section>
    );
  }

  if (variant === "cards") {
    return (
      <section id={id} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-4">
            <div className={`${basePulse} h-4 rounded-full w-24 mx-auto`} />
            <div className={`${basePulse} h-8 rounded-full w-64 mx-auto`} />
            <div className={`${basePulse} h-4 rounded-full w-3/4 mx-auto`} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((item) => (
              <div key={item} className="rounded-xl border border-white/40 dark:border-gray-700/40 bg-white/30 dark:bg-gray-800/60 p-6 space-y-4">
                <div className={`${basePulse} h-36 rounded-lg w-full`} />
                <div className={`${basePulse} h-6 rounded-full w-2/3`} />
                <div className={`${basePulse} h-4 rounded-full w-full`} />
                <div className={`${basePulse} h-4 rounded-full w-4/5`} />
                <div className="flex gap-2">
                  {[0, 1].map((chip) => (
                    <div key={chip} className={`${basePulse} h-6 rounded-full w-16`} />
                  ))}
                </div>
                <div className={`${basePulse} h-4 rounded-full w-24`} />
                <div className={`${basePulse} h-10 rounded-full w-28 mx-auto`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-6">
          <div className={`${basePulse} h-6 rounded-full w-1/3`} />
          <div className={`${basePulse} h-8 rounded-full w-1/2`} />
          <div className="space-y-3">
            <div className={`${basePulse} h-4 rounded-full w-full`} />
            <div className={`${basePulse} h-4 rounded-full w-11/12`} />
            <div className={`${basePulse} h-4 rounded-full w-5/6`} />
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            {[0, 1, 2].map((chip) => (
              <div key={chip} className={`${basePulse} h-10 rounded-full w-32`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkeletonContainer({ children }: PropsWithChildren) {
  return <div className="animate-pulse space-y-4">{children}</div>;
}
