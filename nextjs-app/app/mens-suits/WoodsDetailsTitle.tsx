'use client';

import { useEffect, useRef, useState } from 'react';

// "Show up. / Get measured. / We'll handle the rest." — each line rises in on its
// own beat the first time the heading scrolls into view.
export default function WoodsDetailsTitle() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [motion, setMotion] = useState<'idle' | 'ready' | 'inview'>('idle');

  useEffect(() => {
    const heading = ref.current;
    if (!heading) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMotion('inview');
      return;
    }

    setMotion('ready');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMotion('inview');
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  return (
    <h2 ref={ref} className="woods-details-title" data-motion={motion}>
      <span className="woods-details-title-bold">Show up.</span>
      <span className="woods-details-title-semi">Get measured.</span>
      <span className="woods-details-title-regular">We&apos;ll handle the rest.</span>
    </h2>
  );
}
