'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import WoodsForestPass from './WoodsForestPass';

export type WoodsStep = { title: string; text: string };

// Five steps; the first one links to booking.
export default function WoodsHowItWorks({ steps }: { steps: WoodsStep[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [motion, setMotion] = useState<'idle' | 'ready' | 'inview'>('idle');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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
      { threshold: 0.18, rootMargin: '0px 0px -4% 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mens-process-section woods-process-section"
      data-motion={motion}
    >
      <WoodsForestPass />
      <h2 className="mens-process-heading">How it works</h2>

      <ol className="woods-steps">
        {steps.map((step, i) => {
          const num = String(i + 1).padStart(2, '0');
          return (
            <li key={step.title}>
              {i === 0 ? (
                <Link href="/appointments#book-appointment" className="woods-step woods-step-link">
                  <span className="woods-step-num">{num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </Link>
              ) : (
                <div className="woods-step">
                  <span className="woods-step-num">{num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
