import { NextRequest, NextResponse } from "next/server";
import { createSignatureHeader } from "@/lib/webhook-security";
import { generateResponse, portfolioData } from "@/utils/chat-responses";

export async function POST(request: NextRequest) {
  let userMessage = "";
  let sessionId = "";

  try {
    const { message, history, sessionId: clientSessionId, workflow } = await request.json();
    userMessage = message || "";
    sessionId = clientSessionId || `session_${Date.now()}`;

    // --- LOG ที่เพิ่มเข้ามา ---
    console.log("--- User Message Received ---");
    console.log(`[Session: ${sessionId}] User says: "${userMessage}"`);
    console.log("-----------------------------");
    // --- สิ้นสุด LOG ---

    if (!userMessage) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // ... โค้ดที่เหลือเหมือนเดิม ...
    let targetWorkflowUrl;
    if (workflow === "report") {
        targetWorkflowUrl = process.env.N8N_REPORT_WORKFLOW_URL;
    } else {
        targetWorkflowUrl = process.env.N8N_TEAM_WORKFLOW_URL;
    }

    if (!targetWorkflowUrl) {
        throw new Error(`Workflow URL for type "${workflow}" is not defined.`);
    }

    try {
      const payload = JSON.stringify({
        message: userMessage,
        history,
        portfolioData,
        sessionId,
        responseUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhook`,
      });

      const signature = createSignatureHeader(payload);
      
      const webhookResponse = await fetch(targetWorkflowUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-signature": signature },
        body: payload,
        signal: AbortSignal.timeout(15000)
      });

      if (!webhookResponse.ok) throw new Error(`Webhook failed: ${webhookResponse.status}`);
      
      await webhookResponse.json();
      return NextResponse.json({ success: true, useSSE: true, sessionId });

    } catch (webhookError) {
      console.warn(`[Fallback] Webhook failed, using local response:`, webhookError);
      const response = generateResponse(userMessage.toLowerCase());
      return NextResponse.json({ message: response, useSSE: false, fallback: true });
    }
  } catch (error) {
    console.error(`[Final Catch] Error in chat API:`, error);
    const response = generateResponse(userMessage.toLowerCase() || "");
    return NextResponse.json({ message: response, useSSE: false, fallback: true });
  }
}