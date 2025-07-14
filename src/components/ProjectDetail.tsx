"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail({
  title,
  description,
  //category,
  skill,
  year,
  image,
  objectives,
  results
}: {
  title: string;
  description: string;
  category: string;
  skill: string[];
  year: string;
  image: string;
  objectives: string[];
  results: string[];
}) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Back button */}
        <div className="mb-6">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {skill.map((s, i) => (
              <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Year: {year}</p>
        </div>

        <div className="mb-8">
          <Image src={image} alt={title} width={800} height={400} className="rounded-lg shadow-lg" />
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Objectives</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            {objectives.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Results</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            {results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
