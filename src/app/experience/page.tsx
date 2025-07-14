"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ExperienceProps {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  skill: string[];
  year: string;
  image: string;
}

const experiences: ExperienceProps[] = [
  {
    id: "1",
    slug: "bloom-automatic",
    name: "Bloom Automatic",
    description: "โครงการควบคุมระบบรดน้ำต้นกล้าโดยระยะไกล เพิ่มอัตราการรอด ลดแรงงานกว่า 80%",
    category: "IoT Solution",
    skill: ["LoRaWAN", "Remote Control"],
    year: "2568",
    image: "/images/111.png"
  },
  {
    id: "2",
    slug: "amr-water-meter",
    name: "AMR Water Meter",
    description: "พัฒนาระบบระบบอ่านหน่วยมิเตอร์น้ำอัตโนมัติ (Remote Monitoring) อ่านค่าอัตราการไหลและ Dashboard",
    category: "IoT Solution",
    skill: ["AMR", "Flow Measurement"],
    year: "2568",
    image: "/images/pic6.png"
  },
  {
    id: "3",
    slug: "smart-monitoring",
    name: "Smart Utility Monitoring",
    description: "พัฒนาระบบส่งสัญญาณเครื่องมือวัด อ่านค่าระยะไกลด้วย Dashboard",
    category: "IoT Solution",
    skill: ["AMR", "LoRaWAN"],
    year: "2568",
    image: "/images/p1.png"
  }

];

export default function ViewAllProjects() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            All IoT & Automation Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Browse through all highlighted projects that improve operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-60 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${exp.image})` }}
                ></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skill.map((type, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
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
      </div>
    </section>
  );
}
