import Redis from 'ioredis';

// ดึง URL จาก environment variable
const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  // ข้อความ Error ที่ถูกต้องควรเป็นแบบนี้
  throw new Error('REDIS_URL is not defined in your environment variables');
}

// สร้าง client สำหรับการ publish ข้อความ
const redisPublisher = new Redis(redisUrl);

redisPublisher.on('connect', () => {
  console.log('Redis publisher connected successfully.');
});

redisPublisher.on('error', (err: Error) => { // เพิ่ม : Error เพื่อแก้ปัญหา implicit any
  console.error('Could not connect to Redis publisher:', err);
});

export { redisPublisher };