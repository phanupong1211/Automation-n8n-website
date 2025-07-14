"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const trainings = [
  {
    title: "What are Safety valve?",
    desc: "มาทำความเข้าใจวาล์วนิรภัย เรียนรู้วิธีการทำงานและเหตุผลที่สำคัญต่อความปลอดภัยของระบบ พร้อมแนวทางเลือกใช้อย่างมั่นใจ",
    image: "/images/Picture12.gif",
    link: "/safetyvalve", //https://phanupong1211.github.io/safetyvalvetrain/
    testLinks: {
      newMechanic: "https://script.google.com/macros/s/AKfycbx789sRV4JdkqWpKyjX1sIfcuOSZbS2DxWnxM7MUfn2pJFGFPxVMCtcanRRupO87NcO/dev",
      tech13: "https://script.google.com/macros/s/AKfycbwfweS91sc5zHTzvjAo7IWIRzMUeNLy461e82fLSanxVl6q_W0s69Ni2IxnFa8LbJ-X/dev"}
  },
  {
    title: "What is Control valve?",
    desc: "เรียนรู้การทำงานของวาล์วควบคุม ที่ช่วยจัดการการไหลในโรงงานอุตสาหกรรมอย่างมีประสิทธิภาพ พร้อมเทคนิคการดูแลรักษา",
    image: "/images/cvtrain.png",
    link: "/convalve",
    testLinks:{
     newMechanic:"https://script.google.com/macros/s/AKfycbwfweS91sc5zHTzvjAo7IWIRzMUeNLy461e82fLSanxVl6q_W0s69Ni2IxnFa8LbJ-X/dev",
     tech13: ""}
  },
  {
    title: "Ultrasonic clamp flow",
    desc: "ทำความรู้จักเครื่องวัดอัตราการไหลแบบอัลตราโซนิกชนิดรัดท่อ ติดตั้งง่าย ไม่ต้องหยุดไลน์การผลิต และวิธีวิเคราะห์ผลอย่างมืออาชีพ",
    image: "/images/flowtrain.jpg",
    link: "/flow",
    testLinks: {
      newMechanic:"https://script.google.com/macros/s/AKfycbzil2vk0j4iw62DLmXfk1lEXqbqjvZwInNUYjq3ioxSCKyaOufz_QlyQunMhnXadZFu/dev",
      tech13: ""}
  }
];

export default function TrainingPage() {
  // ใช้ state array เก็บค่าที่เลือกสำหรับแต่ละการ์ด
  const [selectedLinks, setSelectedLinks] = useState(Array(trainings.length).fill(""));

  const handleSelectChange = (index: number, value: string) => {
    const newSelections = [...selectedLinks];
    newSelections[index] = value;
    setSelectedLinks(newSelections);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            หลักสูตรอบรม
          </h2>
          <div className="grid gap-8 grid-cols-1">
            {trainings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] sm:h-[400px]"
              >
                {/* ฝั่งข้อความ */}
                <div className="w-full sm:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed line-clamp-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link href={item.link}>
                      <span className="bg-gray-400 hover:bg-blue-500 text-white font-bold uppercase px-6 py-2 rounded-full shadow transition text-sm cursor-pointer">
                      Read More
                      </span>
                    </Link>

                    <div className="flex space-x-4 items-center mt-2">
                      <select
                        className="px-4 py-1 rounded-full border dark:bg-gray-700 dark:text-white"
                        value={selectedLinks[index]}
                        onChange={(e) => handleSelectChange(index, e.target.value)}
                      >
                        <option value="">-- เลือกหมวด --</option>
                        <option value={item.testLinks.newMechanic}>สำหรับช่างใหม่</option>
                        <option value={item.testLinks.tech13}>สำหรับ Tech 1-3</option>
                      </select>
                      <button
                        onClick={() => {
                          if (selectedLinks[index]) {
                            window.open(selectedLinks[index], "_blank");
                          } else {
                            alert("กรุณาเลือกหมวดก่อน");
                          }
                        }}
                        className="bg-gradient-to-r from-dark-400 to-gray-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold uppercase px-5 py-1.5 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                      >
                        Test
                      </button>
                    </div>
                  </div>
                </div>

                {/* ฝั่งรูป */}
                <div className="relative w-full sm:w-2/5 h-64 sm:h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (min-width: 641px) 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}