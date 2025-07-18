import { NextRequest, NextResponse } from "next/server";
import { redisPublisher } from "@/lib/redis";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const body = JSON.parse(rawBody);

    console.log('✅ Signature check bypassed. Proceeding to publish...');
    
    const responseMessage = body.response || body.message || "ข้อความจาก n8n";
    const sessionId = body.sessionId;

    // --- LOG ที่เพิ่มเข้ามา ---
    console.log("--- AI Response Received ---");
    console.log(`[Session: ${sessionId}] AI responds: "${responseMessage}"`);
    console.log("----------------------------");
    // --- สิ้นสุด LOG ---

    if (!sessionId) {
      return NextResponse.json({ success: false, error: "sessionId is required" }, { status: 400 });
    }

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