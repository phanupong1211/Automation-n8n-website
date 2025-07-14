//sse
import { NextRequest } from "next/server"; // เพิ่ม NextResponse เพื่อให้ GET/POST return ได้ถูกต้อง ลบ , NextResponse
import { sendToSession, getConnectionInfo } from "@/utils/sse-helpers"; //, broadcast

// Store for SSE connections
const connections = new Map<string, ReadableStreamDefaultController>();

// GET endpoint สำหรับ SSE connection (ต้อง export)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId') || Date.now().toString();

    console.log(`SSE connection established for session: ${sessionId}`);

    const stream = new ReadableStream({
      start(controller) {
        try {
          // Store the connection
          connections.set(sessionId, controller);

          // Send initial connection message
          controller.enqueue(`data: ${JSON.stringify({
            type: 'connected',
            sessionId,
            message: 'เชื่อมต่อ AI สำเร็จ'
          })}\n\n`);

          console.log(`SSE initial message sent for session: ${sessionId}`);

          // Clean up on close
          request.signal.addEventListener('abort', () => {
            console.log(`SSE connection closed for session: ${sessionId}`);
            connections.delete(sessionId);
            try {
              controller.close();
            } catch (e) {
              console.error("Error closing controller:", e); // เพิ่มบรรทัดนี้
              // Connection already closed
            }
          });
        } catch (error) {
          console.error('Error in SSE stream start:', error);
          connections.delete(sessionId);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Cache-Control',
        'X-Accel-Buffering': 'no', // Disable nginx buffering
      },
    });
  } catch (error) {
    console.error('Error in SSE GET handler:', error);
    return new Response('SSE Error', { status: 500 });
  }
}

// POST endpoint for debugging SSE connections (ต้อง export)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, sessionId, testData } = body;

    if (action === 'debug') {
      const info = getConnectionInfo();
      console.log(`[SSE Debug] Connection info:`, info);
      return new Response(JSON.stringify({
        success: true,
        connectionInfo: info,
        timestamp: new Date().toISOString()
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (action === 'test' && sessionId) {
      const testMessage = testData || { type: 'test', message: 'Test message from debug endpoint' };
      const sent = sendToSession(sessionId, testMessage);
      return new Response(JSON.stringify({
        success: sent,
        message: sent ? 'Test message sent successfully' : 'Failed to send test message',
        sessionId,
        connectionInfo: getConnectionInfo()
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      error: 'Invalid action. Use "debug" or "test"'
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('SSE POST error:', error);
    return new Response(JSON.stringify({
      error: 'Failed to process request'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
