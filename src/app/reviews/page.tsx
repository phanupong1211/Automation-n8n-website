"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import AffiliateCard from "@/components/AffiliateCard";
import Image from "next/image";

//import { services } from "./services-data"; // ถ้า data คุณแยกออกไว้ (หรือจะคงเป็น array ด้านบนก็ได้)

const services = [
  {
    id: "1",
    title: "Valve Service",
    description: "การบำรุงรักษาวาล์ว (Valve Maintenance)",
    image: "/images/v.jpg",
    highlights: [
      "Leak Test",
      "Overhaul & Lapping",
      "Control Valve, Manaul Valve",
    ],
    badge: "Valve",
    details: 
     `Valve Services
      - เรามีบริการตรวจสอบ บำรุงรักษา Control Valve ครอบคลุมทุกประเภท เช่น Globe, Ball, Butterfly และอื่น ๆ
      เพื่อให้ระบบควบคุมของคุณทำงานได้ตามสเปก ลดความสูญเสีย และเพิ่มเสถียรภาพในกระบวนการ

      High Light
      - Overhaul & Calibration — ถอดประกอบ เปลี่ยนอะไหล่ ซีล แพ็คกิ้ง
      - Leak Test & Pressure Test — ตรวจสอบการรั่ว และทดสอบการทนแรงดันตามมาตรฐาน ANSI/API
      - Positioner & Actuator Services — ตรวจสอบ-ซ่อม Positioner ทั้ง Pneumatic & Smart, ปรับจูน Actuator
      - ออกใบรายงานผลทดสอบทันทีหลังจบงาน พร้อมแนะนำรอบการบำรุงรักษาในอนาคต`,
    moreImage: [
      "/images/Picture3.png",
      "/images/Picture6.png",
      "/images/cv.jpg"

    ],
  },
    {
    id: "2",
    title: "Safety Valve Service",
    description: "การบำรุงรักษาวาล์นิรภัย (Safety Valve Maintenance)",
    image: "/images/saf.jpg",
    highlights: [
      "Leak Test",
      "Overhaul & Lapping",
      "Section VIII and Section I",
    ],
    badge: "Valve",
    details: 
     `Safety Valve Services
      - เรามอบบริการครบวงจร ตั้งแต่บำรุงรักษาจนถึงการทดสอบ Safety Valve

      High Light
      - Overhaul & Repair — ถอดประกอบทุกชิ้นส่วน ทำความสะอาด Lapping Seat/Disc ปรับแต่งและเปลี่ยนอะไหล่ตามสภาพ
      - Onsite & Workshop — รองรับงานซ่อมบำรุงทั้งในโรงงาน และใน Workshop ที่มีเครื่องมือพร้อม
      - เอกสารรับรองครบ — รายงานผลการทดสอบ ส่งมอบทันหลังจบงาน`,
    moreImage: [
      "/images/S__31907886_0.jpg",
      "/images/svv.jpg",
      "/images/Picture9.jpg"

    ],
  },
  {
    id: "3",
    title: "On-Line Test PSV Service",
    description: "การทดสอบวาล์วนิรภัยในขณะเดินเครื่อง",
    image: "/images/onsaf.jpg",
    highlights: ["ตรวจสอบค่า Set point", "ไม่หยุดระบบ", "ตั้งค่าใหม่ได้จากหน้างาน"],
    badge: "Valve",
    details: 
      `On-Line Test Safety Valve
      - เรามีบริการทดสอบ Safety Valve ขณะระบบกำลังเดินเครื่อง (On-Line Testing)
      ช่วยลดความเสี่ยงจากการหยุดโรงงานโดยไม่จำเป็น และมั่นใจได้ว่าวาล์วของคุณพร้อมทำงานเมื่อถึงจุดตั้งค่า

      High Light
      - ไม่ต้อง Shutdown — ทดสอบได้ขณะระบบเดินเครื่อง ลดเวลาหยุดซ่อมบำรุง และลดค่าใช้จ่ายในการหยุดระบบ
      - ตรวจสอบ Set Pressure — ตรวจสอบค่าเปิดได้แม่นยำ
      - รายงานผลแบบ Real-time — ได้ผลการทดสอบพร้อมวิเคราะห์ทันที เพื่อวางแผนบำรุงรักษาต่อเนื่อง
      - ทีมวิศวกรชำนาญ — มีประสบการณ์ On-Line Test ในหลายพื้นที่ ทั้งโรงไฟฟ้า และโรงกระดาษ
      - มาตรฐานรองรับ — ทดสอบตามมาตรฐาน API, ASME เพื่อมั่นใจได้ในความปลอดภัยและความถูกต้อง`,
    moreImage: [
      "/images/S__46940232.jpg",
      "/images/รูปภาพ15.png",
      "/images/onlisaf.jpg"
    ]
  },
  {
    id: "4",
    title: "Ultrasonic clamp-on flowmeters",
    description: "เครื่องวัดอัตราการไหลแบบอุลตร้าโซนิคชนิดรัดท่อ",
    image: "/images/flowul.jpg",
    highlights: [
      "ใช้วัดอัตราการไหลของของเหลวได้ง่ายโดยไม่ต้องตัดต่อท่อ",
      "ใช้ได้ทั้งท่อโลหะและพลาสติกที่มีขนาดตั้งแต่ 0.5 ถึง 240 นิ้ว",
      "ความแม่นยำสูง Accuracy 1%",
    ],
    badge: "Flow",
    details:
     `Ultrasonic Clamp-On Flowmeters Service
      - บริการตรวจวัด ติดตั้ง และสอบเทียบ(Verify) เครื่องวัดอัตราการไหลแบบอัลตร้าโซนิคชนิดรัดท่อ (Clamp-On Flowmeter)
      เหมาะสำหรับงานวัดอัตราการไหลของของเหลวในท่อ โดยไม่ต้องตัดต่อหรือหยุดการเดินระบบ

      High Light
      - Non-Invasive: ติดตั้งภายนอกท่อ ไม่ต้องเจาะหรือหยุดไลน์ ลด Downtime และความเสี่ยง
      - Portable & Permanent Setup: รองรับทั้งงานวัดแบบพกพา (ตรวจสอบจุดเดียว) และติดตั้งถาวรเพื่อ Monitor ต่อเนื่อง
      - Calibration & Verification: ตรวจสอบความแม่นยำ ช่วยยืนยันค่าการวัดของอุปกรณ์วัดอัตราการไหลในโรงงาน
      - Data Logging & Report: เก็บบันทึกค่าไหลเพื่อวิเคราะห์ พร้อมรายงานผลละเอียด
      
      ตัวอย่างการใช้งาน
      - พื้นที่ที่ต้องการตรวจสอบ Balance ของ Utility (Water, Chiller, Condensate, Pump)
      - งานตรวจสอบ Flow ของ Electromagnetic Flow Meter หรือระบบ Fire Pump`,
    moreImage: [
      "/images/1.png",
      "/images/2.png",
      "/images/Picture4.png"

    ],

  },
  {
    id: "5",
    title: "Digital Scale Service",
    description: "งานสอบเทียบเครื่องชั่งอิเล็กทรอนิกส์'",
    image: "/images/sc.jpg",
    highlights: [
      "รองรับน้ำหนักพิกัดสูงสุดถึง 1000 กิโลกรัม",
      "สอบเทียบด้วยเครื่องมือมาตรฐาน สามารถสอบกลับได้",
      "ตรวจสอบแก้ไขเครื่องชั่ง โดยทีมงานมืออาชีพ"
    ],
    link: "",
    badge: "Scale",
    details:
     `Digital Scale Service
      - บริการตรวจสอบ บำรุงรักษา และสอบเทียบ (Calibration) เครื่องชั่งดิจิทัล
      ตั้งแต่เครื่องชั่งพื้น, เครื่องชั่งระบบ Conveyor จนถึงเครื่องชั่งถัง (Tank Weighing) ครอบคลุมทุกความต้องการในโรงงานและคลังสินค้า

      High Light
      - Inspection & Maintenance: ตรวจสอบระบบโหลดเซลล์ (Load Cell), อินดิเคเตอร์ และสายสัญญาณ พร้อมทำความสะอาด
      - Calibration ตามมาตรฐาน: ใช้ตุ้มน้ำหนักมาตรฐาน(Certified Weight) ในการสอบเทียบ พร้อมออกรายงานผลได้ทันที
      - Troubleshooting: แก้ไขปัญหาการอ่านค่าเพี้ยน, Error Code และความผิดปกติอื่น ๆ`,
    moreImage: [
      "/images/3.png",
      "/images/caw.jpg",
      "/images/22.jpg"

    ],

  },
  {
    id: "6",
    title: "LoRaWAN IoT Solution",
    description: "ระบบส่งสัญญาณเครื่องมือวัดระยะไกล",
    image: "/images/lora.jpg",
    highlights: [
      "ประหยัดพลังงาน ใช้แบตเตอรี่ได้นาน",
      "ครอบคลุมพื้นที่กว้าง",
      "รองรับอุปกรณ์จำนวนมาก"
    ],
    badge: "IoT Solution",
    details: 
    
     `LoRaWAN IoT Solution
      - ระบบเชื่อมต่ออุปกรณ์ IoT ผ่านเครือข่าย LoRaWAN (Long Range Wide Area Network)
      เหมาะสำหรับการรับส่งข้อมูลจากอุปกรณ์ตรวจวัดต่าง ๆ ในระยะไกล ใช้พลังงานต่ำ ครอบคลุมพื้นที่กว้าง ประหยัดค่าใช้จ่ายด้านโครงสร้างพื้นฐานเมื่อเทียบกับระบบสัญญาณอื่น

      High Light
      - Long Range & Low Power: สื่อสารได้ไกลหลายกิโลเมตร ใช้พลังงานต่ำ ทำให้เหมาะกับอุปกรณ์ที่ใช้แบตเตอรี่นานเป็นปี
      - Multi-Device & Massive Scale: รองรับการเชื่อมต่อเซ็นเซอร์และอุปกรณ์ IoT จำนวนมากในเครือข่ายเดียว
      - Real-time Monitoring: รับข้อมูลการตรวจวัด เช่น อุณหภูมิ ความชื้น ระดับน้ำ หรือพลังงานไฟฟ้า ได้แบบเรียลไทม์
      - Data Analytics & Dashboard: เชื่อมต่อ Platform เพื่อวิเคราะห์และแสดงผลบน Dashboard ช่วยให้ตัดสินใจได้อย่างชาญฉลาด
      - Alert & Notification: ตั้งค่าการแจ้งเตือนเมื่อมีค่าผิดปกติ เช่น น้ำรั่ว อุณหภูมิสูง หรือเครื่องจักรหยุดทำงาน
      - Remote Control: ควบคุมอุปกรณ์ได้จากทุกที่ เหมาะสำหรับระบบที่ต้องการสั่งการระยะไกล

      เหมาะกับงานประเภท
      - Smart Water / Gas / Energy Metering
      - Smart Farming (ตรวจวัดดิน ปุ๋ย ความชื้น)
      - พื้นที่ที่ต้องการ Monitoring อุปกรณ์แบบไร้สาย
      - โครงการ Smart City & Utilities

      หมายเหตุ:
      เรามีบริการครบวงจร ตั้งแต่การสำรวจหน้างาน, ออกแบบระบบ LoRaWAN, จัดหา Gateway & Sensor, ติดตั้ง, Integrate API เข้าสู่ระบบ ERP หรือ SCADA จนถึงการดูแลหลังการขาย`,
    moreImage: 
    [
      "/images/Untitled3.jpg",
      "/images/Picture1.png",
      "/images/4.png"

    ],

  }
];

export default function ReviewsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const selectedService = services.find((service) => service.id === openId);

  useEffect(() => {
    if (selectedService && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedService]);

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
              Sevices
            </h2>
            <h2 className="text-gray-600 dark:text-gray-300">
            Comprehensive maintenance and engineering services for industrial applications.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="cursor-pointer"
              >
                <AffiliateCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  highlights={item.highlights}
                  badge={item.badge}
                  index={index}
                />
              </div>
            ))}
          </div>

          {selectedService && (
            <motion.div
              ref={detailsRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md col-span-full"
            >
              <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line mb-4">
                {selectedService.details.split("\n").map((line, idx) => {
                  // ถ้าเจอหัวข้อพิเศษ ให้ bold & สีฟ้า
                  if (line.includes("High Light") || line.includes("หมายเหตุ") || line.includes("ตัวอย่างการใช้งาน")) {
                    return (
                      <span
                        key={idx}
                        className="block text-blue-600 font-bold mt-4 mb-2"
                      >
                        {line}
                      </span>
                    );
                  }
                  return (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  );
                })}
              </div>

              {/* show รูปภาพ array */}
              {Array.isArray(selectedService.moreImage) && (
                <div className="flex flex-wrap justify-center gap-4">
                  {selectedService.moreImage.map((imgSrc, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={imgSrc}
                      alt={`${selectedService.title} Image ${imgIndex + 1}`}
                      className="w-80 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)] object-cover rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}