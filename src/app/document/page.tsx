"use client";

import { motion } from "framer-motion";
import { AffiliateCard } from '../../components/AffiliateCard'; // ขึ้นไปสองระดับ (ไปยัง 'app') แล้วลงไปที่ 'components'
const documents = [
  {
    id: "1",
    title: "WI Document",
    description: "คู่มือ WI การซ่อมบำรุง",
    image: "/images/doc.jpg",
    highlights: ["WI Valve", "WI Safety Valve", "WI Actuator"],
    link: "https://drive.google.com/drive/folders/1khozzayyCSwCKUIJ9NB7u2siuMtsbLo5?usp=drive_link",
    badge: "Document"
    
  },
  {
    id: "2",
    title: "Knowledge Document",
    description: "เอกสารความรู้",
    image: "/images/khow.jpg",
    highlights: ["Gasket & Packing & Flange", "ความรู้สำหรับช่างใหม่", "Toubleshooting"],
    link: "https://drive.google.com/drive/folders/1MdIT6wDX6d0PK0ntQSdn3v2vD_NIBVw4?usp=sharing",
    badge: "Document"
  }
];

//export default
export default function DocumentPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              เอกสารความรู้
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((item, index) => (
              <AffiliateCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                highlights={item.highlights}
                link={item.link}
                badge={item.badge}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
