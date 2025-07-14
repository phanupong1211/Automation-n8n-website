// src/utils/chat-responses.ts

// Portfolio data for the AI to reference
const portfolioData = {
  name: "์NIS Automation Service (Instrument)",
  title: "ผู้เชี่ยวชาญที่ให้บริการตรวจสอบ ซ่อมบำรุง และปรับปรุงอุปกรณ์อุตสาหกรรม",
  contact: {
    phone: "(+66) 85-835-1266",
    email: "Phanupong_C@npp.co.th",
    address: "1 tatoom, Srimahapot, Prachin buri 25140, Thailand"
  },
  summary: "เราคือทีมผู้เชี่ยวชาญที่ให้บริการตรวจสอบ ซ่อมบำรุง และปรับปรุงอุปกรณ์อุตสาหกรรม เช่น วาล์ว (Control Valve), เซฟตี้วาล์ว (Safety Valve), แท่นชั่งดิจิทัล (Weight Scale) และระบบวัดอัตราการไหล (Flow Measurement System) ด้วย ประสบการณ์และมาตรฐานคุณภาพสูง เรามุ่งเน้นเพิ่มประสิทธิภาพ และยืดอายุการใช้งานของเครื่องจักร",
  skills: {
    Valve: ["Valve maintenance", "Safety Valve maintenance", "Overhaul", "Leakage Test", "Calibration","On-Line Test Safety Valve"],
    Flow: ["flow tube maintenance", "flow measurement", "installation", "Commissioning", "Ultrasonic Clamp On"],
    Scale: ["weight scale calibration", "Truck scale maintenance", "Load Cell Check", "Floor Scale maintenance", "Electric Floor Scale maintenance"],
    IoT: ["Lorawan", "Remote Control", "IoT Solution", "Dashboards", "Automation system"],
    other: ["Develop, improve, and analyze the automation section's machinery and equipment."]
  },
  projects: [
    {
      name: "Smart Utility Water Monitoring System",
      client: "NS304",
      year: "2025",
      category: "IoT",
      description: "ประยุกต์ใช้เทคโนโลยี LoRaWAN ในพื้นที่สำคัญของระบบ Utility เพื่อเพิ่มประสิทธิภาพในการตรวจสอบการใช้น้ำแบบเรียลไทม์ ลดความจำเป็นในการใช้บุคลากรออกตรวจวัดข้อมูล ณ สถานที่จริงในแต่ละวัน และสามารถรองรับการวิเคราะห์ข้อมูลเชิงลึกเพื่อใช้ในการบริหารจัดการทรัพยากรน้ำอย่างแม่นยำ",
      tech: ["LoRaWAN", "Flow measurement", "Gateway installation","Signal 4-20mA"]
    },
    {
      name: "AMR Water meter (ระบบอ่านหน่วยมิเตอร์น้ำอัตโนมัติ)",
      client: "NS304",
      year: "2025",
      category: "IoT",
      description: "เพิ่มประสิทธิภาพในการบริหารจัดการการใช้น้ำและลดภาระงานในการจดบันทึกหน่วยน้ำแบบ Manual หน่วยงานจึงดำเนินการพัฒนาและติดตั้งระบบ AMR (Automatic Meter Reading) โดยใช้อุปกรณ์วัดอัตราการไหลที่สามารถส่งข้อมูลอัตโนมัติผ่าน LoRaWAN Module ซึ่งสามารถอ่านค่าได้แบบเรียลไทม์ และส่งข้อมูลเข้าสู่ระบบ Dashboard เพื่อช่วยในการตรวจสอบและวิเคราะห์แนวโน้มการใช้น้ำได้อย่างแม่นยำ สอดรับกับแนวทางการพัฒนาโครงสร้างพื้นฐานแบบ Smart Utility",
      tech: ["LoRaWAN", "Flow measurement","Automatic measurement Reading"]
    },
    {
      name: "Bloom Automatic (การควบคุมระบบรดน้ำต้นกล้าผ่านระบบสื่อสารระยะไกล)",
      client: "Tree-tech",
      category: "IoT",
      description: "นำเทคโนโลยี IoT มาประยุกต์ใช้ หน่วยงานจึงได้นำอุปกรณ์ LoRaWAN LT2222L มาเชื่อมต่อกับระบบรดน้ำต้นกล้า พร้อมออกแบบการควบคุมและสั่งงานจากระยะไกลผ่าน Dashboard หรือ Mobile Application โดยมีเป้าหมายให้สามารถควบคุมได้ 100% เพิ่มประสิทธิภาพและลดการใช้แรงงานคนในระยะยาว",
      tech: ["LoRaWAN", "Remote Control", "Remote IO","Automatic measurement Reading"]
    },
    {
      name: "On-Line Test Safety Valve",
      client: "Trevitest",
      category: ["valve","maintenance"],
      description: "หาค่า Set point ในระบบที่แท้จริง ในขณะที่วาล์วยังติดตั้งใช้งานจริง ในตำแหน่งจริง และควบคุมระบบตามที่ออกแบบไว้ตามจริง",
      tech: ["Safety Valve", "maintenance", "On line","Solution"]
    },
    {
      name: "Web HTML",
      client: "Web",
      category: "Other",
      description: "การเขียน HTML คือการสร้างโครงสร้างพื้นฐานของหน้าเว็บโดยใช้ภาษา HTML ซึ่งประกอบด้วยแท็ก (tags) ที่บอกเบราว์เซอร์ว่าจะแสดงผลเนื้อหาอย่างไร",
      tech: ["Web deverlop", "HTML", "AI"]
    }
  ],
};

export function generateResponse(message: string): string { // อย่าลืม export ที่นี่
  // Skills-related queries
  if (message.includes("skill") || message.includes("หน้าที่") || message.includes("ทักษะ") || message.includes("งาน") || message.includes("บริการ")|| message.includes("รับงาน")) {
    return `ทีม Instrument service มีทักษะและความเชี่ยวชาญในงาน Maintenance และ Automation ดังนี้:
    🔧 Valve: ${portfolioData.skills.Valve.join(", ")}
    💧 Flow Measurement: ${portfolioData.skills.Flow.join(", ")}
    ⚖️ Scale: ${portfolioData.skills.Scale.join(", ")}
    🌐 IoT & Automation: ${portfolioData.skills.IoT.join(", ")}
    🛠 อื่นๆ: ${portfolioData.skills.other.join(", ")}

    เรามีจุดเด่นในการเพิ่มประสิทธิภาพ ตรวจสอบ และซ่อมบำรุงระบบอุตสาหกรรมให้พร้อมใช้งานสูงสุด!`;
  }

  // Experience-related queries
  if (message.includes("experience") || message.includes("work") || message.includes("job") || message.includes("ประสบการณ์") || message.includes("เชี่ยวชาญ")) {
    return `ทีม Instrument service มีประสบการณ์มากกว่า 4 ปี ในการให้บริการ Maintenance Engineering สำหรับอุปกรณ์อุตสาหกรรม เช่น Control Valve, Safety Valve, Weight Scale และ Flow Measurement System โดยมุ่งเน้นเพิ่มความน่าเชื่อถือ ลด Downtime และยืดอายุการใช้งานเครื่องจักรให้กับลูกค้าในหลายภาคอุตสาหกรรม.`;
  }

  // Projects-related queries
  if (message.includes("โปรเจค") || message.includes("project") || message.includes("technology")|| message.includes("portfolio") || message.includes("ผลงาน") || message.includes("โครงการ") || message.includes("IoT")|| message.includes("Lorawan") || message.includes("smart")) {
    return `นี่คือตัวอย่างโปรเจกต์สำคัญของทีม Instrument service:

    🚰 Smart Utility Water Monitoring System - ใช้ LoRaWAN ตรวจสอบการใช้น้ำแบบเรียลไทม์ ลดภาระการตรวจวัดหน้างาน, 
    💧 AMR Water Meter - ระบบอ่านหน่วยมิเตอร์น้ำอัตโนมัติ ส่งข้อมูลเข้าสู่ Dashboard, 
    🌱 Bloom Automatic - ระบบควบคุมรดน้ำต้นกล้าผ่าน Dashboard และ Mobile App

    ทุกโปรเจกต์มุ่งพัฒนาการบำรุงรักษาเชิงป้องกัน (Preventive Maintenance) และเพิ่มประสิทธิภาพกระบวนการผลิต.`;
  }

  // Contact-related queries
  if (message.includes("contact") || message.includes("email") || message.includes("phone") || message.includes("reach") || message.includes("ติดต่อ")) {
    return `คุณสามารถติดต่อทีม Instrument service ได้ที่:

    📧 Email: ${portfolioData.contact.email}
    📱 Phone: ${portfolioData.contact.phone}

    เรายินดีให้คำปรึกษาและออกแบบบริการตรวจสอบ/ซ่อมบำรุงให้เหมาะกับโรงงานหรือหน่วยงานของคุณ!`;
  }

  // General greeting or introduction
  if (message.includes("hello") || message.includes("hi") || message.includes("สวัสดี") || message.includes("who") || message.includes("about") || message.includes("เกี่ยวกับ")) {
    return `สวัสดีครับ! ผมเป็น AI ผู้ช่วยของทีม Instrument service👋

    ${portfolioData.summary}

    คุณสามารถถามเกี่ยวกับ:
    • 🔧 ทักษะและความเชี่ยวชาญด้านงาน Maintenance & Automation, 
    • 🏗️ ประสบการณ์และโครงการที่ผ่านมา, 
    • 📞 ช่องทางการติดต่อและบริการ, 
    • 🌐 การนำ IoT และ AI มาใช้ในงานบำรุงรักษา, 

    สนใจเรื่องไหนเป็นพิเศษ แจ้งได้เลยครับ!`;
  }

  // Default fallback
  return `ขอบคุณสำหรับคำถามครับ! ขณะนี้ระบบตอบคำถามอัจฉริยะขัดข้อง หากคุณสนใจเรื่องงานซ่อมบำรุง วาล์ว เซฟตี้วาล์ว แท่นชั่งดิจิทัล ระบบวัดอัตราการไหล หรือ IoT สามารถติดต่อช่องทางดังนี้ได้เลยครับ😀

  📧 Email: ${portfolioData.contact.email}, 
  📱 Phone: ${portfolioData.contact.phone}
  `;
}