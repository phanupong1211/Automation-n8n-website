import { NextRequest, NextResponse } from "next/server";
import { redisPublisher } from "@/lib/redis"; // 1. นำเข้า redisPublisher แทน sendToSession

export async function POST(request: NextRequest) {
  try {
    console.log("=== n8n Public Endpoint Called (Corrected Redis Version) ===");
    const body = await request.json();
    console.log("Body received:", body);

    const response = body.response || body.message || body.reply || body.text || body.content || "ข้อความจาก n8n";
    const sessionId = body.sessionId || body.chatId || body.conversationId;

    // 2. ตรวจสอบว่ามี sessionId หรือไม่ ถ้าไม่มีก็ทำงานต่อไม่ได้
    if (!sessionId) {
      console.error("❌ No session ID found in request from n8n");
      return NextResponse.json({ success: false, error: "sessionId is required" }, { status: 400 });
    }

    console.log(`Processing response for Session ID: ${sessionId}`);

    // 3. Publish ข้อความไปยัง Redis channel ที่ถูกต้อง
    const channel = `sse:${sessionId}`;
    const payload = {
      type: 'response',
      message: response,
      timestamp: new Date().toISOString()
    };

    const subscriberCount = await redisPublisher.publish(channel, JSON.stringify(payload));
    console.log(`✅ Published to Redis channel "${channel}". Message sent to ${subscriberCount} subscribers.`);

    // 4. ตอบกลับ n8n ว่าได้รับและส่งต่อข้อมูลเรียบร้อย
    return NextResponse.json({
      success: true,
      message: "✅ Response received and published to Redis successfully.",
    });

  } catch (handlerError) {
    console.error("❌ n8n public endpoint error:", handlerError);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process n8n response",
        details: handlerError instanceof Error ? handlerError.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS (คงไว้เหมือนเดิม)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// GET endpoint to check if the service is running (คงไว้เหมือนเดิม)
export async function GET() {
  return NextResponse.json({
    status: "🟢 ACTIVE",
    message: "n8n public endpoint is running - CORRECTED REDIS VERSION",
    timestamp: new Date().toISOString(),
  });
}