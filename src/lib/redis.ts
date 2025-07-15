import Redis from 'ioredis';

// ดึง URL จาก environment variable
const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  throw new Error('rediss://default:AXC4AAIjcDEyYmIyYjQwOTE5NTI0MmZmYjU4Nzc4ZGY1ZDU5MDZjNnAxMA@perfect-caiman-28856.upstash.io:6379');
}

// สร้าง client สำหรับการ publish ข้อความ
// เราจะใช้ client นี้ร่วมกันในหลายๆ ที่เพื่อส่งข้อความ
const redisPublisher = new Redis(redisUrl);

redisPublisher.on('connect', () => {
  console.log('Redis publisher connected successfully.');
});

redisPublisher.on('error', (err) => {
  console.error('Could not connect to Redis publisher:', err);
});

export { redisPublisher };