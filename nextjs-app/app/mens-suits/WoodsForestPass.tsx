'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';

// Tone-on-tone pines framing a section from both edges, center kept clear.
// Each side: the biggest, darkest tree at the outer edge, two smaller, fainter
// ones stepping inward along the bottom. As the section scrolls into view the
// big ones grow and slide outward together (diagonally into the corners) until,
// once it is fully on screen, they are off the edges and only the faint inner ones remain.
// x = distance from its edge (% of width), h = height (% of section height),
// o = opacity, drift = outward slide (% of width), exit = slides fully off screen,
// grow = how much it scales up over the scroll.
const SIDE = [
  { x: 5, h: 92, o: 1, drift: 0, exit: 1, grow: 1.2 },
  { x: 15, h: 52, o: 0.45, drift: 12, exit: 0, grow: 0.35 },
  { x: 23, h: 34, o: 0.3, drift: 7, exit: 0, grow: 0.35 },
];

export default function WoodsForestPass() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const forest = ref.current;
    const section = forest?.parentElement;
    if (!forest || !section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Ease toward the scroll position so the trees glide instead of jumping
    let current = 0;
    let target = 0;
    let frame = 0;
    let glide = 0;

    const step = () => {
      current += (target - current) * 0.08;
      if (Math.abs(target - current) < 0.0005) current = target;
      forest.style.setProperty('--pass-p', current.toFixed(4));
      glide = current === target ? 0 : requestAnimationFrame(step);
    };
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 as the section's top enters from below, 1 once the whole section is on screen
      target = Math.min(1, Math.max(0, (vh - rect.top) / Math.min(rect.height, vh)));
      if (!glide) glide = requestAnimationFrame(step);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    current = target;
    forest.style.setProperty('--pass-p', current.toFixed(4));
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(glide);
    };
  }, []);

  return (
    <div ref={ref} className="woods-pass" aria-hidden="true">
      {(['left', 'right'] as const).map((side) =>
        SIDE.map((t, i) => (
          <span
            key={`${side}-${i}`}
            className={`woods-pass-tree woods-pass-${side}`}
            style={{ '--x': t.x, '--h': t.h, '--o': t.o, '--drift': t.drift, '--exit': t.exit, '--grow': t.grow } as CSSProperties}
          />
        ))
      )}
    </div>
  );
}
