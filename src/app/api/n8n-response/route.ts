import { NextRequest, NextResponse } from "next/server";
import { redisPublisher } from "@/lib/redis"; // 👈 1. นำเข้า redis publisher

export async function POST(request: NextRequest) {
  try {
    // --- ส่วนของการตรวจสอบ API Key (คงเดิม) ---
    const apiKey = request.headers.get('x-api-key');
    const expectedApiKey = 'boom-portfolio-2024';

    if (!apiKey || apiKey !== expectedApiKey) {
      return NextResponse.json(
        { error: "Unauthorized - API key required" },
        { status: 401 }
      );
    }
    // --- สิ้นสุดการตรวจสอบ API Key ---

    const body = await request.json();
    console.log("[n8n-response] Webhook received:", body);

    // 👇 2. ดึง sessionId จาก body ที่ n8n ส่งกลับมา (สำคัญมาก)
    const { sessionId } = body;

    if (!sessionId) {
      console.error("[n8n-response] Error: sessionId is missing from n8n response body.");
      return NextResponse.json(
        { success: false, error: "sessionId is required" },
        { status: 400 }
      );
    }

    // ส่วนของการดึงข้อความจาก response (คงเดิม)
    const responseMessage = body.response || body.message || body.reply || body.text || "ไม่สามารถประมวลผลคำตอบได้";

    // 🚀 3. Publish ข้อความไปยัง Redis Channel
    const channel = `sse:${sessionId}`; // สร้างชื่อ channel ให้ตรงกับ session
    const payload = {
      type: 'response',
      message: responseMessage,
    };

    const subscriberCount = await redisPublisher.publish(channel, JSON.stringify(payload));

    console.log(`[n8n-response] Published to channel "${channel}". Message reached ${subscriberCount} subscribers.`);

    // ตอบกลับ n8n ว่าได้รับข้อมูลเรียบร้อยแล้ว
    return NextResponse.json({
      success: true,
      message: "Response received and published to Redis successfully",
      subscriberCount: subscriberCount
    });

  } catch (error) {
    console.error("[n8n-response] Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process n8n response",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}