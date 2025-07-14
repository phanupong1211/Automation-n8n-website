export const portfolioData = {
  name: "์NIS Automation AI Report",
  title: "AI Report",
  contact: {
    phone: "(+66) 85-835-1266",
    email: "Phanupong_C@npp.co.th",
    address: "1 tatoom, Srimahapot, Prachin buri 25140, Thailand"
  },
};

export function generateResponse(message: string): string { //ตอบเมื่อ n8n ล่ม
  // Contact-related queries
  if (message.includes("contact") || message.includes("email") || message.includes("phone") || message.includes("reach") || message.includes("ติดต่อ")) {
    return `ขณะนี้ระบบตอบคำถามอัจฉริยะขัดข้อง คุณสามารถติดต่อทีม Instrument service ได้ที่:
    📧 Email: ${portfolioData.contact.email}
    📱 Phone: ${portfolioData.contact.phone}

  เรายินดีให้คำปรึกษาและออกแบบบริการตรวจสอบ/ซ่อมบำรุงให้เหมาะกับโรงงานหรือหน่วยงานของคุณ!`;
  }

  // Default fallback
  return `ขอบคุณสำหรับคำถามครับ! ขณะนี้ระบบตอบคำถามอัจฉริยะขัดข้อง หากคุณสนใจเรื่องงานซ่อมบำรุง วาล์ว เซฟตี้วาล์ว แท่นชั่งดิจิทัล ระบบวัดอัตราการไหล หรือ IoT สามารถติดต่อช่องทางดังนี้ได้เลยครับ😀

  📧 Email: ${portfolioData.contact.email}, 
  📱 Phone: ${portfolioData.contact.phone}
  `;
}