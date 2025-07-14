"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SafetyValvePage() {
  const [activeInfo, setActiveInfo] = useState<string | null>(null);
  const router = useRouter();

  const showInfo = (type: string) => {
    setActiveInfo(type === activeInfo ? null : type);
  };

  const playAudio = () => {
    const audio = document.getElementById("explanationAudio") as HTMLAudioElement;
    if (audio) audio.play();
  };

  const pauseAudio = () => {
    const audio = document.getElementById("explanationAudio") as HTMLAudioElement;
    if (audio) audio.pause();
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Control Valve: พื้นฐานและการซ่อมบำรุงสำหรับช่างใหม่
          </h2>

        <p className="mb-6 text-lg">
          ในโลกอุตสาหกรรมยุคใหม่
          <span className="text-blue-600 font-bold mx-1">Control Valve </span>
          หรือที่เรียกว่า
          <span className="text-blue-600 font-bold mx-1">วาล์วควบคุม</span>
          คือหัวใจสำคัญที่ช่วยให้กระบวนการผลิตเป็นไปอย่างแม่นยำและมีประสิทธิภาพ การทำความเข้าใจพื้นฐานและการซ่อมบำรุงที่ถูกต้องจะช่วยให้คุณทำงานได้อย่างมั่นใจและปลอดภัย
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="https://pre-vent.com/files/pre-vent/images/pre-vent/products/valve-br11-360.gif"
            alt="Safety Valve"
            className="rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">🎯 Control Valve คืออะไร?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Control Valve คืออุปกรณ์ที่ใช้ในการ{" "}
          <span className="text-blue-500 font-bold">ควบคุมอัตราการไหล</span>{" "}
          ของของไหล (ของเหลว, ก๊าซ, ไอน้ำ) ในระบบท่อ โดยการปรับขนาดของช่องเปิดตามสัญญาณที่ได้รับจากคอนโทรลเลอร์ (Controller) เพื่อรักษาสภาวะของกระบวนการให้อยู่ในค่าที่ต้องการ เช่น อุณหภูมิ, แรงดัน, ระดับ หรืออัตราการไหล
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">✨ ทำไม ทำไม Control Valve จึงสำคัญ?</h2>
        <ul className="space-y-4 mb-6">
          <li><span className="text-blue-500 font-bold"></span>  ✅ ควบคุมกระบวนการ: ช่วยให้กระบวนการผลิตมีความเสถียรและแม่นยำ</li>
          <li><span className="text-blue-500 font-bold"></span>  ✅ เพิ่มประสิทธิภาพ: ลดการสูญเสียพลังงานและวัตถุดิบ</li>
          <li><span className="text-blue-500 font-bold"></span>  ✅ ความปลอดภัย: ป้องกันสภาวะผิดปกติที่อาจเป็นอันตราย</li>
          <li><span className="text-blue-500 font-bold"></span>  ✅ คุณภาพผลิตภัณฑ์: รักษาคุณภาพของผลิตภัณฑ์ให้สม่ำเสมอ</li>
          <li><span className="text-blue-500 font-bold"></span>  ✅ ลดต้นทุน: ลดการทำงานด้วยมือและเพิ่มความเป็นอัตโนมัติ</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">🛠️ ส่วนประกอบหลักของ Control Valve</h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
        <li><span className="text-ig-500 font-bold">ตัววาล์ว (Valve Body):</span> เป็นส่วนที่สัมผัสกับของไหลโดยตรง มีหน้าที่ควบคุมการไหล ประกอบด้วย:</li>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li><span className="text-ig-500 font-bold">Body:</span> บ่าวาล์ว (Seat)</li>
          <li><span className="text-ig-500 font-bold">Seat:</span> ปลั๊กวาล์ว (Plug)</li>
          <li><span className="text-ig-500 font-bold">Disc:</span> ก้านวาล์ว (Stem)</li>
          <li><span className="text-ig-500 font-bold">Stem:</span> บอนเน็ต (Bonnet)</li>
        </ul>
        <li><span className="text-ig-500 font-bold">แอคทูเอเตอร์ (Actuator):</span> เป็นส่วนที่ทำหน้าที่เคลื่อนที่ปลั๊กวาล์วตามสัญญาณควบคุมที่ได้รับ อาจเป็นแบบลม (Pneumatic), ไฟฟ้า (Electric) หรือไฮดรอลิก (Hydraulic)</li>
        <li><span className="text-ig-500 font-bold">โพซิชันเนอร์ (Positioner):</span> (อุปกรณ์เสริม) ทำหน้าที่รับสัญญาณควบคุมและส่งแรงดันลมไปควบคุมแอคทูเอเตอร์ เพื่อให้ปลั๊กวาล์วเคลื่อนที่ไปยังตำแหน่งที่ถูกต้องแม่นยำ</li>
        </ol>

        <div className="flex justify-start mb-6">
        <button
          onClick={() => showInfo("pic1")}
          className={`${
            activeInfo === "pic1" ? "bg-green-700" : "bg-green-600"
            } hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl shadow transition transform hover:-translate-y-1`}
        >
        {activeInfo === "pic1" ? "ซ่อนภาพประกอบ" : "ดูภาพประกอบ"}
        </button>
        </div>

        {activeInfo === "pic1" && (
        <div className="flex justify-center mb-6">
        <img
          src="https://jwtech.co.th/activity/wp-content/uploads/2022/01/Control-valve-1.png"
          alt="Safety Valve"
          className="rounded-lg shadow-lg"
        />
        </div>
        )}

        
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">⚙️ หลักการทำงานเบื้องต้น</h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li>คอนโทรลเลอร์ (เช่น PLC หรือ DCS) จะส่งสัญญาณควบคุม (เช่น 4-20 mA หรือ 3-15 psi) ไปยัง Control Valve</li>
          <li>โพซิชันเนอร์ (ถ้ามี) จะรับสัญญาณนี้และแปลงเป็นแรงดันลมที่เหมาะสมเพื่อส่งไปยังแอคทูเอเตอร์</li>
          <li>แอคทูเอเตอร์จะใช้แรงดันลม (หรือพลังงานไฟฟ้า/ไฮดรอลิก) เพื่อเคลื่อนที่ก้านวาล์ว</li>
          <li>การเคลื่อนที่ของก้านวาล์วจะทำให้ปลั๊กวาล์วปรับตำแหน่ง ซึ่งจะ เปลี่ยนแปลงขนาดของช่องเปิด และควบคุมอัตราการไหลของของไหลในระบบ</li>
          <li>เมื่อสภาวะของกระบวนการเปลี่ยนแปลง คอนโทรลเลอร์จะปรับสัญญาณควบคุมเพื่อปรับตำแหน่งของวาล์วให้เหมาะสมต่อไป</li>
        </ol>

        <div className="flex justify-center mb-6">
          <img
            src="https://upmation.com/wp-content/uploads/2020/09/How-Control-Valve-Positioner-Works.jpg"
            alt="Safety Valve"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => showInfo("types")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition transform hover:-translate-y-1"
          >
            ประเภทของ Control Valve
          </button>
          <button
            onClick={() => showInfo("maintenance")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition transform hover:-translate-y-1"
          >
            การบำรุงรักษาเบื้องต้น
          </button>
          <button
            onClick={() => showInfo("test")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition transform hover:-translate-y-1"
          >
            การแก้ไขปัญหาเบื้องต้น?
          </button>
        </div>

        {activeInfo === "types" && (
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6">
            <h2 className="text-2xl font-bold mb-4">Control Valve มีหลายประเภท ขึ้นอยู่กับการออกแบบตัววาล์วและลักษณะการไหล:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold text-green-700">Globe Valve:</span>  เป็นที่นิยมที่สุดสำหรับการควบคุมการไหลที่แม่นยำ</li>
              <li><span className="font-semibold text-green-700">Ball Valve:</span> เหมาะสำหรับการเปิด-ปิดอย่างรวดเร็ว และการควบคุมการไหลแบบหยาบๆ</li>
              <li><span className="font-semibold text-green-700">Butterfly Valve:</span> ใช้สำหรับควบคุมการไหลของของไหลปริมาณมาก</li>
              <li><span className="font-semibold text-green-700">Diaphragm Valve:</span> เหมาะสำหรับของไหลที่มีฤทธิ์กัดกร่อนหรือมีอนุภาคแขวนลอย</li>
            </ul>
          </div>
        )}

        {activeInfo === "maintenance" && (
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6">
            <h2 className="text-2xl font-bold mb-4">การซ่อมบำรุง Control Valve อย่างสม่ำเสมอช่วยยืดอายุการใช้งานและรักษาประสิทธิภาพ:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>ตรวจสอบการรั่วไหล: ตรวจสอบตามจุดเชื่อมต่อและก้านวาล์ว</li>
              <li>หล่อลื่น: หล่อลื่นก้านวาล์วและชิ้นส่วนที่เคลื่อนไหวตามคำแนะนำของผู้ผลิต</li>
              <li>ตรวจสอบโพซิชันเนอร์: ตรวจสอบการทำงานและการสอบเทียบ (Calibration)</li>
              <li>ทำความสะอาด: ทำความสะอาดชิ้นส่วนภายในเมื่อมีการถอดประกอบ</li>
              <li>เปลี่ยนซีลและปะเก็น: เปลี่ยนตามระยะเวลาที่กำหนดหรือเมื่อพบการสึกหรอ</li>
              <li>ทดสอบการทำงาน: ตรวจสอบการตอบสนองต่อสัญญาณควบคุม</li>
            </ul>
          </div>
        )}

        {activeInfo === "test" && (
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6">
            <h2 className="text-2xl font-bold mb-4">ปัญหาที่พบบ่อยและแนวทางแก้ไขเบื้องต้น?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>วาล์วไม่เคลื่อนที่: ตรวจสอบสัญญาณควบคุม, แรงดันลม (สำหรับ Pneumatic Actuator), การอุดตันของท่อลม, หรือกลไกภายในติดขัด</li>
              <li>วาล์วเคลื่อนที่ช้า/ไม่แม่นยำ: ตรวจสอบการสอบเทียบโพซิชันเนอร์, การรั่วไหลของลม, หรือการเสียดสีภายใน</li>
              <li>วาล์วรั่วไหล: ตรวจสอบซีล, ปะเก็น, หรือความเสียหายของบ่าวาล์ว/ปลั๊กวาล์ว</li>
              <li>เสียงดังผิดปกติ: อาจเกิดจากการไหลแบบ Cavitation หรือ Flashing, การสั่นสะเทือนของชิ้นส่วนภายใน</li>
            </ul>
          </div>
        )}

        <div className="fixed bottom-20 left-20 flex space-x-2 bg-gray-800 p-1 rounded-xl shadow-lg z-50 transition-opacity duration-300 hover:opacity-100 opacity-80">
          <button
          onClick={() => {
            const audio = document.getElementById("explanationAudio") as HTMLAudioElement;
            audio?.play();
          }}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            ▶️
          </button>
          <button
          onClick={() => {
            const audio = document.getElementById("explanationAudio") as HTMLAudioElement;
            audio?.pause();
          }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            ⏸️
          </button>
          </div>

          <audio id="explanationAudio" src="/audio/valve.wav" preload="auto"></audio>


        <div className="fixed bottom-5 left-20 flex space-x-2 bg-gray-800 p-1 rounded-xl shadow-lg z-50 transition-opacity duration-300 hover:opacity-100 opacity-80">
          <button
            onClick={() => router.back()}
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600
                       text-white font-bold py-2 px-6 rounded-full shadow-lg 
                       transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            ⬅️ Back
          </button>
        </div>
      </div>

      <footer className="text-center mt-10 text-sm text-gray-500">
        &copy; 2025 ข้อมูลพื้นฐานสำหรับช่างเทคนิค
      </footer>
      
      </section>
    </div>
    
  );
}
