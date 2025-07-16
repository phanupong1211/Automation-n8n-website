import Redis from 'ioredis';

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  throw new Error('REDIS_URL is not defined in your environment variables');
}

// สร้าง client โดยไม่ต้องใส่ option ที่ซับซ้อน
// ioredis จะจัดการการเชื่อมต่อแบบ TLS (rediss://) ให้โดยอัตโนมัติ
const redisPublisher = new Redis(redisUrl, {
  // เพิ่มแค่ retryStrategy เพื่อความทนทาน
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000); // รอสูงสุด 2 วินาที
    return delay;
  },
});

redisPublisher.on('connect', () => {
  console.log('Redis publisher connected successfully.');
});

redisPublisher.on('error', (err: Error) => {
  // แสดงเฉพาะ error message เพื่อไม่ให้ log ยาวเกินไป
  console.error('[ioredis] Connection Error:', err.message);
});

export { redisPublisher };