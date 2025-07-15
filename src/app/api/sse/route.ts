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
    return new Response('Server configuration error: REDIS_URL not set', { status: 500 });
  }

  // ตั้งค่าให้ ioredis ทนทานขึ้นบน Free Tier
  const redisSubscriber = new Redis(redisUrl, {
    retryStrategy: (times) => Math.min(times * 100, 2000),
    tls: { rejectUnauthorized: false }
  });

  const channel = `sse:${sessionId}`;

  const stream = new ReadableStream({
    async start(controller) {
      console.log(`[SSE] Subscribing to Redis channel: ${channel}`);
      
      redisSubscriber.on('message', (ch, message) => {
        if (ch === channel) {
          console.log(`[SSE] Message received on ${channel}`);
          controller.enqueue(`data: ${message}\n\n`);
        }
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