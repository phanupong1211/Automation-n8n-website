//chatreport
import { NextRequest, NextResponse } from "next/server";
import { createSignatureHeader, generateSessionToken } from "@/lib/webhook-security";

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

export async function POST(request: NextRequest) {
  let userMessage = "";
  let sessionId = "";

  try {
    const { message, history, sessionId: clientSessionId } = await request.json();
    userMessage = message || "";
    sessionId = clientSessionId || `session_${Date.now()}`;

    if (!userMessage) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    console.log(`[Chat API] Session: ${sessionId}, Message: ${userMessage.substring(0, 50)}...`);

    // Try to send to n8n webhook first
    try {
      const payload = JSON.stringify({
        message: userMessage,
        history,
        portfolioData,
        sessionId,
        responseUrl: `http://localhost:3001/api/webhook`,
        sessionToken: generateSessionToken(sessionId),
        timestamp: new Date().toISOString()
      });

      const signature = createSignatureHeader(payload);

      const webhookResponse = await fetch("http://localhost:5678/webhook/addcb960-afcc-4b62-8f41-105b65b53429", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-session-id": sessionId,
          "x-webhook-source": "portfolio-chat",
          "x-signature": signature,
        },
        body: payload,
        // Add timeout to prevent hanging
        signal: AbortSignal.timeout(15000) // 15 second timeout
      });

      if (webhookResponse.ok) {
        const webhookData = await webhookResponse.json();
        console.log(`[Chat API] Webhook success for session ${sessionId}:`, webhookData);

        // Check if n8n will send response via webhook (async mode)
        if (webhookData.useSSE || webhookData.async || webhookData.status === 'processing' ||
            (webhookData.message && webhookData.message.includes('Workflow was started'))) {
          console.log(`[Chat API] Using SSE mode for session ${sessionId} - n8n will send response later`);
          return NextResponse.json({
            success: true,
            useSSE: true,
            sessionId,
            message: "Response will be sent via real-time connection"
          });
        }

        // Handle immediate response formats
        let responseMessage = "";
        if (typeof webhookData === 'string') {
          responseMessage = webhookData;
        } else if (webhookData.response) {
          responseMessage = webhookData.response;
        } else if (webhookData.message) {
          responseMessage = webhookData.message;
        } else if (webhookData.reply) {
          responseMessage = webhookData.reply;
        } else if (webhookData.text) {
          responseMessage = webhookData.text;
        } else {
          // If webhook returns unexpected format, log it and use fallback
          console.log(`[Chat API] Unexpected webhook response format:`, webhookData);
          console.log(`[Chat API] Using fallback response for session ${sessionId}`);
          throw new Error("Unexpected webhook response format");
        }

        console.log(`[Chat API] Immediate response for session ${sessionId}:`, responseMessage);
        return NextResponse.json({ message: responseMessage, useSSE: false });
      } else {
        const errorText = await webhookResponse.text();
        console.log(`[Chat API] Webhook error ${webhookResponse.status}:`, errorText);
        throw new Error(`Webhook returned status: ${webhookResponse.status}`);
      }
    } catch (webhookError) {
      console.log(`[Chat API] Webhook failed for session ${sessionId}, using fallback:`, webhookError);
      // Fallback to local response if webhook fails
      const response = generateResponse(userMessage.toLowerCase());
      console.log(`[Chat API] Fallback response for session ${sessionId}:`, response.substring(0, 100) + "...");
      return NextResponse.json({
        message: response,
        useSSE: false,
        fallback: true
      });
    }
  } catch (error) {
    console.error(`[Chat API] Final error for session ${sessionId}:`, error);
    // Final fallback
    const response = generateResponse(userMessage.toLowerCase() || "");
    console.log(`[Chat API] Final fallback response for session ${sessionId}:`, response.substring(0, 100) + "...");
    return NextResponse.json({
      message: response,
      useSSE: false,
      fallback: true,
      error: "System temporarily unavailable"
    });
  }
}

function generateResponse(message: string): string { //ตอบเมื่อ n8n ล่ม
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
