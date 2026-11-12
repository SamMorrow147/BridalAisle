'use client';

import { useEffect, useRef } from 'react';

// Scroll depth for the Woods hero: sets --hero-p on the hero section, 0 at the
// top of the page → 1 once the hero has scrolled out. CSS uses it to grow the
// groom toward you, ease the forest back, and lift/fade the title.
export default function WoodsHeroParallax() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = ref.current?.parentElement;
    if (!hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Ease toward the scroll position so it glides instead of jumping
    let current = 0;
    let target = 0;
    let frame = 0;
    let glide = 0;

    const step = () => {
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.0005) current = target;
      hero.style.setProperty('--hero-p', current.toFixed(4));
      glide = current === target ? 0 : requestAnimationFrame(step);
    };
    const update = () => {
      frame = 0;
      // From the very first scroll until the hero's bottom edge leaves the top of the screen
      const rect = hero.getBoundingClientRect();
      const heroBottom = rect.bottom + window.scrollY;
      target = Math.min(1, Math.max(0, window.scrollY / Math.max(1, heroBottom)));
      if (!glide) glide = requestAnimationFrame(step);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    current = target;
    hero.style.setProperty('--hero-p', current.toFixed(4));
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(glide);
    };
  }, []);

  return <div ref={ref} hidden />;
}
