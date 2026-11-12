'use client';

import { useEffect, useRef } from 'react';

function easeOut(t: number) {
  const p = Math.min(1, Math.max(0, t));
  return 1 - (1 - p) * (1 - p);
}

// Drives the subtle drift/zoom on the rentals photo (--reveal-p on the photo wrapper).
export default function WoodsPhotoReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const photo = ref.current?.parentElement;
    if (!photo) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      photo.style.setProperty('--reveal-p', '1');
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = photo.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.9;
      const done = Math.max(vh * 0.04, vh - rect.height);
      const raw = (start - rect.top) / Math.max(64, start - done);
      photo.style.setProperty('--reveal-p', easeOut(raw).toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} hidden />;
}
