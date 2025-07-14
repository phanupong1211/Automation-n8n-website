// File: C:\Users\phanu\Automation-n8n+webiste\Automation-n8n+webiste\src\app\api\chat\route.ts
import { NextRequest, NextResponse } from "next/server";
import { createSignatureHeader, generateSessionToken } from "@/lib/webhook-security";
import { generateResponse } from "@/utils/chat-responses"; // <-- เพิ่มบรรทัดนี้

// ลบ export default ออกจาก POST ตามปัญหาที่แจ้ง
// เนื่องจากปัญหาคือ 'POST' is incompatible with index signature.
// และ Type 'OmitWithTag<typeof ...>' does not satisfy the constraint '{ [x: string]: never; }'
// ซึ่งบ่งชี้ว่ามีฟังก์ชันอื่นในไฟล์นี้ที่ Next.js พยายามตีความว่าเป็น handler หรือ export อื่นๆ
// การย้าย generateResponse ออกไปแล้ว ควรช่วยแก้ปัญหานี้
export async function POST(request: NextRequest) { // ทำให้เป็น export default หรือ export async function POST
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
        // portfolioData ไม่มีแล้วเพราะย้ายไป
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
      const response = generateResponse(userMessage.toLowerCase()); // เรียกใช้จากที่ import มา
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
    const response = generateResponse(userMessage.toLowerCase() || ""); // เรียกใช้จากที่ import มา
    console.log(`[Chat API] Final fallback response for session ${sessionId}:`, response.substring(0, 100) + "...");
    return NextResponse.json({
      message: response,
      useSSE: false,
      fallback: true,
      error: "System temporarily unavailable"
    });
  }
}