import { NextRequest, NextResponse } from "next/server";
import { sendToSession } from "@/utils/sse-helpers";
import { validateWebhookRequest } from "@/lib/webhook-security";

// Store for pending chat responses - in production, use Redis or database
const pendingResponses = new Map<string, string>();

// ต้อง export POST เพื่อให้เป็น API Route Handler
export async function POST(request: NextRequest) {
  try {
    // Get raw body for signature verification
    const rawBody = await request.text();
    let body;

    try {
      body = JSON.parse(rawBody);
    } catch (parseError) { // เปลี่ยนชื่อ error เป็น parseError เพื่อใช้งาน
      console.error("Invalid JSON payload error:", parseError); // ใช้งาน parseError
      return NextResponse.json(
        { error: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    // Check authentication method (API key OR signature)
    const apiKey = request.headers.get('x-api-key');
    const signature = request.headers.get('x-signature');
    const expectedApiKey = 'boom-portfolio-2024';

    let isAuthenticated = false;

    // Method 1: API Key authentication (for backward compatibility)
    if (apiKey && apiKey === expectedApiKey) {
      isAuthenticated = true;
      console.log('[Webhook] Authenticated via API key');
    }

    // Method 2: Signature authentication (more secure)
    else if (signature) {
      const validation = validateWebhookRequest(rawBody, signature);
      if (validation.valid) {
        isAuthenticated = true;
        console.log('[Webhook] Authenticated via signature');
      } else {
        console.log('[Webhook] Signature validation failed:', validation.error);
      }
    }

    if (!isAuthenticated) {
      return NextResponse.json(
        {
          error: "Unauthorized",
          message: "Please include either 'x-api-key: boom-portfolio-2024' or valid 'x-signature' header"
        },
        { status: 401 }
      );
    }
    console.log("Webhook received:", body); // body ถูกใช้งานแล้ว

    // Extract the response data from n8n
    const {
      sessionId,
      response,
      message,
      reply,
      chatId,
      conversationId
    } = body;

    // Get the actual response message from various possible fields
    let responseMessage = "";
    if (response) {
      responseMessage = response;
    } else if (message) {
      responseMessage = message;
    } else if (reply) {
      responseMessage = reply;
    } else if (typeof body === 'string') {
      responseMessage = body;
    } else {
      responseMessage = "ได้รับข้อมูลจาก AI แล้ว แต่ไม่สามารถแสดงผลได้";
    }

    // Store the response with a session/chat ID for retrieval
    const id = sessionId || chatId || conversationId || Date.now().toString();
    pendingResponses.set(id, responseMessage);

    // Send real-time update via SSE if session exists (นำ block นี้กลับมา)
    if (sessionId || chatId || conversationId) {
      const sent = sendToSession(id, {
        type: 'response',
        message: responseMessage,
        timestamp: new Date().toISOString()
      });
      console.log(`SSE message sent to session ${id}:`, sent);
    }

    // Clean up old responses (older than 5 minutes)
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    for (const key of pendingResponses.keys()) {
      if (parseInt(key) < fiveMinutesAgo) {
        pendingResponses.delete(key);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Response received and stored",
      id: id
    });

  } catch (handlerError) { // เปลี่ยนชื่อ error เป็น handlerError เพื่อใช้งาน
    console.error("Webhook error:", handlerError); // ใช้งาน handlerError
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 500 }
    );
  }
}

// ต้อง export GET เพื่อให้เป็น API Route Handler
export async function GET(request: NextRequest) {
  // ลบบรรทัดนี้: const body = await request.json();
  // ลบบรรทัดนี้: const sessionId = body.sessionId;

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: "ID parameter required" },
        { status: 400 }
      );
    }

    // ลบบรรทัดนี้: const responseText = "นี่คือข้อความตอบกลับจาก webhook";

    // ถ้าต้องการให้ GET endpoint นี้ใช้ SSE ก็ต้องนำ block นี้กลับมา
    // หากไม่ต้องการ สามารถลบส่วนนี้ทิ้งได้
    // ตัวอย่างการนำกลับมา:
    const responseText = "นี่คือข้อความตอบกลับจาก webhook"; // อาจจะต้องกำหนดค่าตรงนี้
    const success = sendToSession(id, { // ใช้ id แทน sessionId ที่ไม่มีแล้ว
       type: "response",
       message: responseText
     });
     if (!success) {
       console.log(`[Fallback] Could not send via SSE, replying HTTP`);
       return NextResponse.json({
         message: responseText,
         useSSE: false
       });
     }

    const response = pendingResponses.get(id);

    if (response) {
      // Remove the response after retrieving it
      pendingResponses.delete(id);
      return NextResponse.json({
        success: true,
        message: response
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "No response found for this ID"
      });
    }

  } catch (getError) { // เปลี่ยนชื่อ error เป็น getError เพื่อใช้งาน
    console.error("Webhook GET error:", getError); // ใช้งาน getError
    return NextResponse.json(
      { error: "Failed to retrieve response" },
      { status: 500 }
    );
  }
}

// ใน src/app/api/webhook/route.ts
// เพิ่มคอมเมนต์นี้เหนือฟังก์ชัน DELETE
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function DELETE(_request: NextRequest) { // _request คือพารามิเตอร์ที่ถูกรับเข้ามา
  try {
    pendingResponses.clear();
    return NextResponse.json({
      success: true,
      message: "All pending responses cleared"
    });
  } catch (deleteError) {
    console.error("Webhook DELETE error:", deleteError);
    return NextResponse.json(
      { error: "Failed to clear responses" },
      { status: 500 }
    );
  }
}
