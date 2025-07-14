"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
//import { useInView } from "framer-motion"; // These are already commented out correctly
//import { useRef } from "react"; // These are already commented out correctly
export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

      {/* Left content */}
      <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 uppercase tracking-wide font-semibold mb-3">
              Welcome to Valvetech Engineering
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              AUTOMATION SERVICE
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-4">
              ด้วยประสบการณ์กว่า 10 ปี ในอุตสาหกรรม จากบริษัท Double A และ NPS ทีมงานของเราได้พัฒนา
              ปรับปรุง และสั่งสมความเชี่ยวชาญด้าน Instrument อย่างเต็มที่
              ทำงานด้วยความมุ่งมั่นเพื่อส่งมอบผลงานที่มีคุณภาพสูงสุดในทุกครั้ง
            </p>
            <p className="text-gray-700 dark:text-gray-400 mb-15">
              NIS Automation Service ให้บริการโซลูชันครบวงจรด้านการบำรุงรักษาวาล์ว
              ครอบคลุม Overhaul, Calibration, On-Line Test Safety Valve และ Performance Test
              พร้อมทั้ง Ultrasonic Clamp-On และ Scale Calibration ดำเนินงานตามมาตรฐานสากล
              เพื่อความปลอดภัยและประสิทธิภาพสูงสุดในทุกกระบวนการผลิตของลูกค้า
            </p>
            <Link
              href="/reviews"
              className="px-6 py-2 bg-gray-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
              >
              Reviews →
            </Link>
        </motion.div>

      <motion.div>
        {/* Right Images collage */} {/* Use JSX comment here */}
        <div className="relative animate-fade-in [animation-delay:300ms]">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/sv4.jpeg"
              alt="Seaside view"
              className="w-full h-150 object-cover"
              width={600} // *** เพิ่ม width และ height ที่นี่ (กำหนดตามขนาดที่เหมาะสม) ***
              height={450} // 450 = 600 * (3/4) เพื่อรักษาสัดส่วน 4/3
            />
          </div>
          <div className="absolute -bottom-5 -left-10 w-1/2 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/369.jpg"
              alt="Luxury apartment Interior"
              className="w-full h-full object-cover"
              width={400} // *** เพิ่ม width และ height ที่นี่ (กำหนดตามขนาดที่เหมาะสม) ***
              height={300} // เช่น 400 * (3/4)
            />
          </div>
          <div className="absolute -top-5 -right-20 w-1/2 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/cv4.jpeg"
              alt="Pool view"
              className="w-full h-full object-cover"
              width={400} // *** เพิ่ม width และ height ที่นี่ (กำหนดตามขนาดที่เหมาะสม) ***
              height={300} // เช่น 400 * (3/4)
            />
          </div>
        </div>
      </motion.div>


      </div>
    </section>
  );
}
