'use client';

import { useEffect, useRef } from 'react';

export default function WoodsDetailsPhoto({
  imageLabel = 'A tailor measuring a groom in a brown three-piece suit at The Woods',
  image,
}: {
  imageLabel?: string;
  image?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shiftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const shift = shiftRef.current;
    if (!wrap || !shift) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let frame = 0;
    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const offset = (progress - 0.5) * 200;
      const scale = 1.08 + progress * 0.06;
      shift.style.transform = `translate3d(0, ${offset}px, 0) scale(${scale})`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
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

  return (
    <div ref={wrapRef} className="woods-details-photo">
      <div
        ref={shiftRef}
        className="woods-details-photo-shift"
        role="img"
        aria-label={imageLabel}
        style={image ? { backgroundImage: `url('${image}')` } : undefined}
      />
    </div>
  );
}
