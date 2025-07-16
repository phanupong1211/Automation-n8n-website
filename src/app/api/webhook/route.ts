import { NextRequest, NextResponse } from "next/server";
import { redisPublisher } from "@/lib/redis";
import { validateWebhookRequest } from "@/lib/webhook-security";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get('x-signature');

    // --- ส่วนที่แก้ไข ---
    // 1. แปลง rawBody กลับเป็น Object ก่อน
    const bodyObject = JSON.parse(rawBody);
    // 2. แปลง Object นั้นกลับเป็น String อีกครั้งเพื่อสร้าง "Canonical String"
    const canonicalString = JSON.stringify(bodyObject);

    // 3. ใช้ Canonical String ในการตรวจสอบลายเซ็น
    if (!signature || !validateWebhookRequest(canonicalString, signature).valid) {
        console.warn('[Webhook] Signature validation failed with canonical string.');
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // --- สิ้นสุดส่วนที่แก้ไข ---
    
    console.log('✅ Signature verification passed!');
    
    const responseMessage = bodyObject.response || bodyObject.message || "ข้อความจาก n8n";
    const sessionId = bodyObject.sessionId;

    if (!sessionId) {
      return NextResponse.json({ success: false, error: "sessionId is required" }, { status: 400 });
    }

    // ... โค้ดส่วนที่เหลือเหมือนเดิม ...
    const channel = `sse:${sessionId}`;
    const payload = { type: 'response', message: responseMessage };
    let published = false;

    for (let i = 0; i < 3; i++) {
      try {
        const subCount = await redisPublisher.publish(channel, JSON.stringify(payload));
        console.log(`✅ [Attempt ${i+1}] Published to Redis. Subscribers: ${subCount}`);
        published = true;
        break;
      } catch (e) {
        console.warn(`[Attempt ${i+1}] Failed to publish:`, e instanceof Error ? e.message : e);
        if (i < 2) await sleep(500);
      }
    }

    if (!published) throw new Error(`Failed to publish after 3 attempts.`);
    return NextResponse.json({ success: true });

  } catch (handlerError) {
    console.error("❌ Final error in webhook endpoint:", handlerError);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}