"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ExperienceProps {
  id: string;
  name: string;
  description: string;
  category: string;
  skill: string[];
  year: string;
  image: string;
  slug: string;
}

const experiences: ExperienceProps[] = [
  {
    id: "1",
    slug: "bloom-automatic",
    name: "Bloom Automatic",
    description:
      "โครงการควบคุมระบบรดน้ำต้นกล้าโดยระยะไกล เพิ่มอัตราการรอด ลดแรงงานกว่า 80%",
    category: "IoT Solution",
    skill: ["LoRaWAN", "Remote Control"],
    year: "2568",
    image: "/images/111.png",
  },
  {
    id: "2",
    slug: "amr-water-meter",
    name: "AMR Water Meter",
    description:
      "พัฒนาระบบระบบอ่านหน่วยมิเตอร์น้ำอัตโนมัติ (Remote Monitoring) อ่านค่าอัตราการไหลและ Dashboard",
    category: "IoT Solution",
    skill: ["AMR", "Flow Measurement"],
    year: "2568",
    image: "/images/Pic6.png",
  },
  {
    id: "3",
    slug: "smart-monitoring",
    name: "Smart Utility Monitoring",
    description:
      "พัฒนาระบบส่งสัญญาณเครื่องมือวัด อ่านค่าระยะไกลด้วย Dashboard",
    category: "IoT Solution",
    skill: ["AMR", "LoRaWAN"],
    year: "2568",
    image: "/images/p1.png",
  },
];

export function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion();

  const cardInitial = shouldReduceMotion ? false : { opacity: 0, y: 30 };
  const cardAnimate = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm text-blue-600 font-medium uppercase tracking-wider">
            Experiences
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">
            Featured IoT Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our highlighted IoT and automation projects that drive operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={cardInitial}
              whileInView={cardAnimate}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : index * 0.15, ease: "easeOut" }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-md w-full mx-auto"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skill.map((type) => (
                    <span
                      key={`${exp.id}-${type}`}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Year: {exp.year}
                </p>
                <div className="text-center">
                  <Link
                    href={`/projects/${exp.slug}`}
                    className="inline-block bg-blue-800 hover:bg-blue-500 text-blue-200 px-3 py-1 rounded-lg shadow transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition shadow hover:shadow-xl"
          >
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
