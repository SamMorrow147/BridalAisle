'use client';

import { useEffect, useState } from 'react';

function isApplePhone() {
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

export default function AddToCalendar({ className }: { className?: string }) {
  const [applePhone, setApplePhone] = useState(false);

  useEffect(() => {
    setApplePhone(isApplePhone());
  }, []);

  if (!applePhone) return null;

  return (
    <a className={className} href="/a-very-marry-day/calendar">
      Add to Calendar
    </a>
  );
}
