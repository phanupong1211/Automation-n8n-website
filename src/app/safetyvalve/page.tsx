"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

//export default
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
            Safety Valve พื้นฐานสำหรับช่างใหม่
          </h2>

        <p className="mb-6 text-lg">
          สวัสดีครับช่างใหม่ทุกท่าน! ในการทำงานกับระบบที่มีแรงดัน ไม่ว่าจะเป็นหม้อไอน้ำ, ถังแรงดัน หรือท่อส่งก๊าซ
          <span className="text-blue-600 font-bold mx-1">Safety Valve</span>
          หรือที่เรียกว่า
          <span className="text-blue-600 font-bold mx-1">วาล์วนิรภัย</span>
          นั้นคืออุปกรณ์สำคัญยิ่งที่เราต้องทำความเข้าใจ เพื่อความปลอดภัยของตัวเราเองและระบบที่เราดูแล
        </p>

        <div className="flex justify-center mb-6">
          <Image
            src="https://vanbidien.com/wp-content/uploads/2020/03/querulousvaluableamericanbittern-size_restricted.gif"
            alt="Safety Valve"
            className="rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">🎯 Safety Valve คืออะไร?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Safety Valve คือวาล์วที่ออกแบบมาเพื่อ{" "}
          <span className="text-blue-500 font-bold">ระบายแรงดันส่วนเกินโดยอัตโนมัติ</span>{" "}
          ออกจากระบบเมื่อแรงดันภายในสูงเกินกว่าค่าที่กำหนดไว้ เพื่อป้องกันความเสียหาย
          ที่อาจเกิดขึ้นกับอุปกรณ์หรือแม้กระทั่งอุบัติเหตุร้ายแรง เช่น การระเบิด
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">✨ ทำไม Safety Valve จึงสำคัญ?</h2>
        <ul className="space-y-4 mb-6">
          <li><span className="text-blue-500 font-bold"></span>  ✅ ป้องกันแรงดันเกิน (Overpressure Protection)</li>
          <li><span className="text-blue-500 font-bold"></span>  ✅ ป้องกันความเสียหายของอุปกรณ์</li>
          <li><span className="text-blue-500 font-bold"></span>  ✅ ลดความเสี่ยงต่อชีวิตบุคลากร</li>
          <li><span className="text-blue-500 font-bold"></span>  ✅ เป็นไปตามมาตรฐานอุตสาหกรรม</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">🛠️ ส่วนประกอบหลักของ Safety Valve</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li><span className="text-blue-500 font-bold">Body:</span> ตัวเรือนหลัก</li>
          <li><span className="text-blue-500 font-bold">Seat:</span> บ่าวาล์ว</li>
          <li><span className="text-blue-500 font-bold">Disc:</span> แผ่นที่เปิด-ปิด</li>
          <li><span className="text-blue-500 font-bold">Spring:</span> ตั้งค่าแรงดัน</li>
          <li><span className="text-blue-500 font-bold">Stem:</span> ก้านวาล์ว</li>
          <li><span className="text-blue-500 font-bold">Lever:</span> บางรุ่นมีทดสอบด้วยมือ</li>
        </ul>

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
        <Image
          src="/images/svas.png"
          alt="Safety Valve"
          className="rounded-lg shadow-lg"
        />
        </div>
        )}

        
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">⚙️ หลักการทำงานเบื้องต้น</h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li>แรงดันปกติ สปริงกด Disc ปิด</li>
          <li>แรงดันสูงขึ้นเกิน Set Pressure</li>
          <li>Disc ยก ปล่อยของไหลออก</li>
          <li>แรงดันลด สปริงกด Disc กลับปิดอีกครั้ง</li>
        </ol>
        <div className="flex justify-center mb-6">
          <Image
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTdxYW5yYXdlYWg3cjNvOTByOG4zYnZ1a2d6djZzOXc2cWZ5YnN3eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dC3A6er0VKeWVNTyaT/giphy.gif"
            alt="Safety Valve"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => showInfo("types")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition transform hover:-translate-y-1"
          >
            ประเภทของ Safety Valve
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
            การทดสอบสำคัญอย่างไร?
          </button>
        </div>

        {activeInfo === "types" && (
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6">
            <h2 className="text-2xl font-bold mb-4">ประเภทของ Safety Valve</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold text-green-700">Relief Valve:</span> สำหรับของเหลว มักเปิดเมื่อแรงดันเกิน</li>
              <li><span className="font-semibold text-green-700">Safety Valve (แบบเต็ม):</span> สำหรับก๊าซ เปิดเร็วเต็มที่</li>
              <li><span className="font-semibold text-green-700">Safety Relief Valve:</span> ใช้ได้ทั้งของเหลวและก๊าซ</li>
            </ul>
          </div>
        )}

        {activeInfo === "maintenance" && (
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6">
            <h2 className="text-2xl font-bold mb-4">การบำรุงรักษาเบื้องต้น</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>ตรวจสอบการกัดกร่อน ความเสียหาย การรั่ว</li>
              <li>ทำความสะอาดรอบวาล์วและทางออก</li>
              <li>ทดสอบการทำงานตามกำหนด</li>
              <li>ห้ามดัดแปลงโดยไม่ได้รับอนุญาต</li>
            </ul>
          </div>
        )}

        {activeInfo === "test" && (
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-inner mb-6">
            <h2 className="text-2xl font-bold mb-4">การทดสอบสำคัญอย่างไร?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>เพื่อให้วาล์วทำงานเมื่อแรงดันถึง Set Pressure</li>
              <li>เพื่อให้วาล์วสามารถระบายได้พอ</li>
              <li>และเพื่อให้ปิดสนิทได้หลังแรงดันลดลง</li>
            </ul>
          </div>
        )}

<div className="fixed bottom-20 left-20 flex space-x-2 bg-gray-800 p-1 rounded-xl shadow-lg z-50 transition-opacity duration-300 hover:opacity-100 opacity-80">
  <button
    onClick={playAudio} // เรียกใช้ฟังก์ชัน playAudio() โดยตรง
    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
  >
    ▶️
  </button>
  <button
    onClick={pauseAudio} // เรียกใช้ฟังก์ชัน pauseAudio() โดยตรง
    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
  >
    ⏸️
  </button>
</div>

          <audio id="explanationAudio" src="/audio/safety.wav" preload="auto"></audio>


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
