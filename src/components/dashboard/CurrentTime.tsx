// src/components/dashboard/CurrentTime.tsx
'use client';

import { useState, useEffect } from 'react';

export function CurrentTime() {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-gray-500">
      <span>{currentTime}</span>
    </div>
  );
}