//chatreport
import { NextRequest, NextResponse } from "next/server";
import { createSignatureHeader, generateSessionToken } from "@/lib/webhook-security";

// Portfolio data for the AI to reference
const portfolioData = {
  name: "์NIS Automation AI Report",
  title: "AI Report",
  contact: {
    phone: "(+66) 85-835-1266",
    email: "Phanupong_C@npp.co.th",
    address: "1 tatoom, Srimahapot, Prachin buri 25140, Thailand"
  },
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

      const webhookResponse = await fetch("http://localhost:5678/webhook/8bdc9363-b386-44cb-a05c-cd168d0f8608", {
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
