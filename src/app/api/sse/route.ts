import { NextRequest } from 'next/server';
import Redis from 'ioredis';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('sessionId');

  if (!sessionId) {
    return new Response('sessionId is required', { status: 400 });
  }

  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) {
    console.error('[SSE] REDIS_URL is not set in environment variables.');
    return new Response('Server configuration error', { status: 500 });
  }

  // ใช้การตั้งค่าแบบเดียวกับ Publisher ที่ทำงานได้สำเร็จ
  const redisSubscriber = new Redis(redisUrl, {
    retryStrategy: (times) => {
      const delay = Math.min(times * 50, 2000);
      return delay;
    },
  });

  const channel = `sse:${sessionId}`;

  const stream = new ReadableStream({
    async start(controller) {
      console.log(`[SSE] Subscribing to Redis channel: ${channel}`);
      
      redisSubscriber.on('connect', () => {
          console.log(`[SSE] Subscriber connected to Redis for channel: ${channel}`);
      });
      
      redisSubscriber.on('message', (ch, message) => {
        if (ch === channel) {
          console.log(`[SSE] Message received on ${channel}`);
          controller.enqueue(`data: ${message}\n\n`);
        }
      });

      redisSubscriber.on('error', (err: Error) => {
          console.error(`[SSE] Subscriber connection error:`, err.message);
          // ไม่ต้อง close controller ที่นี่ เพราะ retryStrategy จะทำงาน
      });

      await redisSubscriber.subscribe(channel);
      
      request.signal.addEventListener('abort', () => {
        console.log(`[SSE] Connection closed for ${channel}.`);
        redisSubscriber.unsubscribe(channel).catch(() => {});
        redisSubscriber.quit();
      });
    },
    cancel() {
        console.log(`[SSE] Stream cancelled for ${channel}.`);
        redisSubscriber.unsubscribe(channel).catch(() => {});
        redisSubscriber.quit();
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  });
}