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
            🌊 เครื่องมือวัดอัตราการไหลอัลตราโซนิค (SIEMENS Clamp-on)🛠️
          </h2>

        <p className="mb-6 text-lg">
          ในงานอุตสาหกรรม การวัดอัตราการไหลของของไหลในท่อเป็นสิ่งสำคัญยิ่ง
          <span className="text-blue-600 font-bold mx-1">เครื่องมือวัดอัตราการไหลชนิดอัลตราโซนิคแบบรัดท่อ (Ultrasonic Clamp-on Flow Meter)</span>
          โดยเฉพาะอย่างยิ่งของแบรนด์
          <span className="text-blue-600 font-bold mx-1">SIEMENS </span>
          เป็นเทคโนโลยีที่น่าสนใจและมีประโยชน์มาก เพราะสามารถวัดได้โดยไม่ต้องตัดท่อ ทำให้ประหยัดเวลาและค่าใช้จ่ายในการติดตั้งและบำรุงรักษา</p>
          
          <p>วัตถุประสงค์ของเอกสารนี้คือเพื่อเป็นแนวทางมาตรฐาน (Standard Operating Procedure - SOP) ในการติดตั้ง ตรวจสอบ และเริ่มใช้งาน 
          Siemens SITRANS FUP 1010 Portable Ultrasonic Flowmeter แบบ Clamp-On เพื่อให้สามารถวัดอัตราการไหลได้อย่างถูกต้องและเชื่อถือได้ 
          ขอบเขตการใช้งานสำหรับงานวัดของเหลว เช่น น้ำมัน, น้ำ, น้ำยาเคมี, ของเหลวไฮดรอลิก ในท่อโลหะหรือพลาสติก โดยใช้ Clamp-On ultrasonic sensor ที่ติดตั้งภายนอกท่อ
        </p>

        <div className="flex justify-center mb-6">
          <Image
            src="https://cz.all.biz/img/cz/catalog/60969.jpg"
            alt="flow siemens"
            className="rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">🎯 เครื่องมือวัดอัตราการไหลอัลตราโซนิคแบบรัดท่อคืออะไร?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          เครื่องมือวัดชนิดนี้ทำงานโดยใช้หลักการของ{" "}
          <span className="text-blue-500 font-bold">คลื่นเสียงอัลตราโซนิค</span>{" "}
          ส่งผ่านของไหลในท่อ โดยไม่ต้องสัมผัสกับของไหลโดยตรง หัววัด (Transducers) จะถูกรัดติดอยู่ภายนอกท่อ ทำให้การติดตั้งง่าย สะดวก และไม่รบกวนกระบวนการทำงาน
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">✨ ทำไมเครื่องมือวัดชนิดนี้จึงสำคัญ?</h2>
        <ul className="space-y-4 mb-6">
          <li><span className="text-blue-500 font-bold"></span>  ✅ ไม่รบกวนกระบวนการ: ติดตั้งง่าย ไม่ต้องตัดท่อ ไม่ต้องหยุดไลน์ผลิต</li>
          <li><span className="text-blue-500 font-bold"></span>  ✅ ความปลอดภัย: ไม่มีของไหลรั่วไหลออกมา ลดความเสี่ยงในการทำงานกับของไหลอันตราย</li>
          <li><span className="text-blue-500 font-bold"></span>  ✅ ความหลากหลาย: ใช้ได้กับท่อหลายขนาดและวัสดุที่แตกต่างกัน</li>
          <li><span className="text-blue-500 font-bold"></span>  ✅ บำรุงรักษาง่าย: ไม่มีชิ้นส่วนที่เคลื่อนไหวภายในท่อ ลดการสึกหรอและค่าใช้จ่ายในการบำรุงรักษา</li>
          <li><span className="text-blue-500 font-bold"></span>  ✅ ความแม่นยำ: ให้ค่าการวัดที่แม่นยำสำหรับการควบคุมกระบวนการ</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">🛠️ ส่วนประกอบหลักของ Safety Valve</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li><span className="text-gray-lg font-bold">Siemens portable (เครื่องอ่านและประมวลผล):</span> ใช้ประมวลผล ultrasonic transit-time</li>
          <li><span className="text-gray-lg font-bold">Clamp-On sensors A & B:</span> ทำหน้าที่ส่งและรับคลื่นเสียง ultrasonic ผ่านท่อและของเหลว</li>
          <li><span className="text-gray-lg font-bold">EZ Clamp หรือ Spacer bar:</span> ใช้ยึดเซ็นเซอร์ให้ตรงตามระยะที่กำหนด (Lin)</li>
          <li><span className="text-gray-lg font-bold">Coupling gel (Ultrasonic gel):</span> ช่วยเพิ่มการส่งผ่านคลื่นเสียงและลดช่องว่างอากาศระหว่างเซ็นเซอร์กับท่อ</li>
          <li><span className="text-gray-lg font-bold">Cleaning kit (กระดาษทราย, แปรง, ผ้า):</span> ใช้ทำความสะอาดผิวท่อเพื่อเพิ่มการนำเสียง</li>
          <li><span className="text-gray-lg font-bold">ตลับเมตร/Thickness gauge:</span> ใช้วัดเส้นผ่านศูนย์กลางภายนอก (OD) ของท่อและตรวจสอบความหนาของผนังท่อ</li>
          <li><span className="text-gray-lg font-bold">สายสัญญาณ:</span> สำหรับเชื่อมต่อเซ็นเซอร์กับเครื่อง Siemens portable</li>
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
          src="/images/44.png"
          alt="Safety Valve"
          className="rounded-lg shadow-lg"
        />
        </div>
        )}

        
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">⚙️ หลักการทำงานเบื้องต้น (Transit Time Method)</h2>
        <h2 className="text-gray-lg font-bold">เครื่องมือวัด SIEMENS Clamp-on ส่วนใหญ่ใช้หลักการ Transit Time Method:</h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li>หัววัดตัวแรก (Upstream Transducer) ส่งคลื่นอัลตราโซนิคไปยังหัววัดตัวที่สอง (Downstream Transducer)</li>
          <li>ในขณะเดียวกัน หัววัดตัวที่สองก็ส่งคลื่นอัลตราโซนิคกลับไปยังหัววัดตัวแรก</li>
          <li>ความเร็วของคลื่นเสียงจะถูกเร่งขึ้นเมื่อเดินทางตามทิศทางการไหลของของไหล และจะช้าลงเมื่อเดินทางทวนทิศทางการไหล</li>
          <li>เครื่องส่งสัญญาณจะคำนวณ ความแตกต่างของเวลาที่คลื่นเสียงใช้ในการเดินทาง ไปและกลับ</li>
          <li>ความแตกต่างของเวลานี้จะถูกแปลงเป็นค่าอัตราการไหลของของไหลในท่อ</li>
        </ol>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">🔧 การติดตั้งเบื้องต้นสำหรับช่างใหม่</h2>
        <h2 className="text-gray-lg font-bold">การติดตั้งที่ถูกต้องเป็นสิ่งสำคัญเพื่อให้ได้ค่าการวัดที่แม่นยำ:</h2>
        <h2 className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
        <li>การเตรียมท่อและจุดติดตั้ง:</li>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li><span className="text-gray-300 dark">ควรเลือกส่วนของท่อที่เป็นแนวตรง (straight run) ที่ยาวเพียงพอ อย่างน้อย 10 เท่าของเส้นผ่านศูนย์กลางท่อ (10D) ในส่วนต้นน้ำ (upstream) และ 5 เท่าของเส้นผ่านศูนย์กลางท่อ (5D) ในส่วนปลายน้ำ (downstream) เพื่อให้การไหลพัฒนาเต็มที่ (fully-developed flow)</span></li>
          <li><span className="text-gray-300 dark">หลีกเลี่ยงการติดตั้งใกล้กับจุดโค้ง (bend), วาล์ว (valve), ทางออกของปั๊ม (pump discharge) หรือแนวเชื่อม (weld seam) เนื่องจากจะทำให้การไหลปั่นป่วน (turbulence)</span></li>
          <li><span className="text-gray-300 dark">ควรเป็นทิศทางการไหลขึ้นด้านบนสำหรับท่อแนวตั้ง เพื่อหลีกเลี่ยงช่องว่างอากาศ (voids)</span></li>
          <li><span className="text-gray-300 dark">สำหรับท่อแนวนอน: หลีกเลี่ยงตำแหน่ง 12 นาฬิกา (ด้านบนสุด) หรือ 6 นาฬิกา (ด้านล่างสุด) เนื่องจากอาจมีอากาศหรือตะกอนสะสม ตำแหน่ง 9 หรือ 3 นาฬิกาเหมาะสมที่สุด</span></li>
          <li><span className="text-gray-300 dark">ตรวจสอบให้แน่ใจว่าท่อมีการไหลเต็ม (pipe full) ไม่มีช่องอากาศ (air pocket) หรือการไหลแบบ slug flow</span></li>
        </ul>
        <li>การเตรียมผิวท่อ:</li>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li><span className="text-gray-300 dark">ใช้ผ้าเช็ดคราบมันออกก่อน</span></li>
          <li><span className="text-gray-300 dark">ขัดด้วยกระดาษทรายจนเห็นเนื้อโลหะหรือผิวท่อเรียบสนิท โดยให้พื้นที่กว้างประมาณ 5 ซม. รอบตำแหน่งติดตั้ง</span></li>
          <li><span className="text-gray-300 dark">เช็ดผิวท่อให้แห้ง เพื่อป้องกันการปนเปื้อนของ coupling gel</span></li>
        </ul>

        <li>การติดตั้ง Sensor:</li>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li><span className="text-gray-300 dark">ทา coupling gel เป็นเส้นยาวตามหน้าสัมผัสของเซ็นเซอร์ทั้งสองตัว</span></li>
          <li><span className="text-gray-300 dark">ยึดเซ็นเซอร์ A ที่ตำแหน่งต้นน้ำ (upstream) ด้วย EZ clamp หรือ spacer bar</span></li>
          <li><span className="text-gray-300 dark">ยึดเซ็นเซอร์ B ที่ตำแหน่งปลายน้ำ (downstream) ให้ตรงตามระยะห่าง Ltn spacing ที่เครื่อง Flowmeter แนะนำ</span></li>
          <li><span className="text-gray-300 dark">รัด clamp ให้แน่นพอสมควร แต่อย่าบีบจน coupling gel หลุดออกหมด</span></li>
          <li><span className="text-gray-300 dark">สังเกตให้เซ็นเซอร์แนบสนิทกับผิวท่อ ไม่เอียง หรือบิดเบี้ยว</span></li>
        </ul>

        <li>การต่อสาย:</li>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li><span className="text-gray-300 dark">ต่อสายเซ็นเซอร์เข้ากับช่อง UP และ DN บนเครื่องอย่างถูกต้อง ตามป้ายกำกับของเซ็นเซอร์</span></li>
          <li><span className="text-gray-300 dark">ตรวจสอบว่า connector ไม่หลวม ไม่มีการบิดหรือสายเคเบิลตึงเกินไป</span></li>
        </ul>

        <li>การตั้งค่า Flowmeter (Commissioning):</li>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li><span className="text-gray-300 dark">เปิดเครื่อง Flowmeter หน้าจอหลักจะปรากฏขึ้น</span></li>
          <li><span className="text-gray-300 dark">กด Quick Commissioning</span></li>
          <li><span className="text-gray-300 dark">เลือกหน่วยวัดที่ต้องการ เช่น Metric ($m^3/h$) หรือ English (gpm)</span></li>
          <li><span className="text-gray-300 dark">ป้อนค่า OD (เส้นผ่านศูนย์กลางภายนอก), ความหนาของผนังท่อ (wall thickness) และวัสดุของท่อ</span></li>
          <li><span className="text-gray-300 dark">ป้อนข้อมูลของเหลวที่กำลังวัด</span></li>
          <li>เลือก Sensor model & size ที่ถูกต้อง (เช่น Uni, portable, size A2 ถึง E2 ซึ่งมีช่วงเส้นผ่านศูนย์กลางท่อที่รองรับต่างกัน)</li>
                    <li>เลือกโหมดการติดตั้ง เลือกระหว่าง Reflect หรือ Direct ตามวิธีการติดตั้งที่ใช้
                        <ul>
                            <li>Direct Mode: Transducers อยู่คนละด้านของท่อ</li>
                            <li>Reflect Mode: Transducers อยู่ด้านเดียวกันของท่อ</li>
                        </ul><p>
                          
                        </p>
        <div className="flex justify-center mb-6">
          <Image
            src="https://cz.all.biz/img/cz/catalog/60969.jpg"
            alt="flow siemens"
            className="rounded-lg shadow-lg"
          />
        </div>
          </li>
          <li><span className="text-gray-300 dark">ป้อนข้อมูลของเหลวที่กำลังวัด</span></li>
          <li><span className="text-gray-300 dark">ป้อนข้อมูลของเหลวที่กำลังวัด</span></li>
        </ul>

        <li>ตรวจสอบ Waveform:</li>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li><span className="text-gray-300 dark">ควรเลือกส่วนของท่อที่เป็นแนวตรง (straight run) ที่ยาวเพียงพอ อย่างน้อย 10 เท่าของเส้นผ่านศูนย์กลางท่อ (10D) ในส่วนต้นน้ำ (upstream) และ 5 เท่าของเส้นผ่านศูนย์กลางท่อ (5D) ในส่วนปลายน้ำ (downstream) เพื่อให้การไหลพัฒนาเต็มที่ (fully-developed flow)</span></li>
          <li><span className="text-gray-300 dark">หลีกเลี่ยงการติดตั้งใกล้กับจุดโค้ง (bend), วาล์ว (valve), ทางออกของปั๊ม (pump discharge) หรือแนวเชื่อม (weld seam) เนื่องจากจะทำให้การไหลปั่นป่วน (turbulence)</span></li>
          <li><span className="text-gray-300 dark">ควรเป็นทิศทางการไหลขึ้นด้านบนสำหรับท่อแนวตั้ง เพื่อหลีกเลี่ยงช่องว่างอากาศ (voids)</span></li>
          <li><span className="text-gray-300 dark">สำหรับท่อแนวนอน: หลีกเลี่ยงตำแหน่ง 12 นาฬิกา (ด้านบนสุด) หรือ 6 นาฬิกา (ด้านล่างสุด) เนื่องจากอาจมีอากาศหรือตะกอนสะสม ตำแหน่ง 9 หรือ 3 นาฬิกาเหมาะสมที่สุด</span></li>
          <li><span className="text-gray-300 dark">ตรวจสอบให้แน่ใจว่าท่อมีการไหลเต็ม (pipe full) ไม่มีช่องอากาศ (air pocket) หรือการไหลแบบ slug flow</span></li>
        </ul>

        <li>การตั้งค่า Zero:</li></h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li><span className="text-gray-300 dark">ควรเลือกส่วนของท่อที่เป็นแนวตรง (straight run) ที่ยาวเพียงพอ อย่างน้อย 10 เท่าของเส้นผ่านศูนย์กลางท่อ (10D) ในส่วนต้นน้ำ (upstream) และ 5 เท่าของเส้นผ่านศูนย์กลางท่อ (5D) ในส่วนปลายน้ำ (downstream) เพื่อให้การไหลพัฒนาเต็มที่ (fully-developed flow)</span></li>
          <li><span className="text-gray-300 dark">หลีกเลี่ยงการติดตั้งใกล้กับจุดโค้ง (bend), วาล์ว (valve), ทางออกของปั๊ม (pump discharge) หรือแนวเชื่อม (weld seam) เนื่องจากจะทำให้การไหลปั่นป่วน (turbulence)</span></li>
          <li><span className="text-gray-300 dark">ควรเป็นทิศทางการไหลขึ้นด้านบนสำหรับท่อแนวตั้ง เพื่อหลีกเลี่ยงช่องว่างอากาศ (voids)</span></li>
          <li><span className="text-gray-300 dark">สำหรับท่อแนวนอน: หลีกเลี่ยงตำแหน่ง 12 นาฬิกา (ด้านบนสุด) หรือ 6 นาฬิกา (ด้านล่างสุด) เนื่องจากอาจมีอากาศหรือตะกอนสะสม ตำแหน่ง 9 หรือ 3 นาฬิกาเหมาะสมที่สุด</span></li>
          <li><span className="text-gray-300 dark">ตรวจสอบให้แน่ใจว่าท่อมีการไหลเต็ม (pipe full) ไม่มีช่องอากาศ (air pocket) หรือการไหลแบบ slug flow</span></li>
        </ul>


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
