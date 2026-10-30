'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AddToCalendar from '@/components/AddToCalendar';

const STORAGE_KEY = 'nov-event-popup-dismissed';

function isEventWindow(now: Date) {
  const end = new Date(2026, 10, 30, 23, 59, 59);
  return now.getTime() <= end.getTime();
}

export default function NovemberEventPopup() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!isEventWindow(new Date())) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = window.setTimeout(() => setOpen(true), 450);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="nov-popup" role="dialog" aria-modal="true" aria-labelledby="nov-popup-title">
      <button className="nov-popup-backdrop" type="button" aria-label="Close" onClick={close} />
      <div className="nov-popup-stage">
        <figure className="nov-polaroid nov-polaroid-left">
          <img src="/november-event/santa.jpg" alt="Santa holding a young girl" />
          <figcaption>Nov. 29</figcaption>
        </figure>
        <div className="nov-popup-card">
          <button className="nov-popup-close" type="button" aria-label="Close" onClick={close}>
            <span aria-hidden="true">×</span>
          </button>
          <p className="nov-popup-kicker">Sunday, Nov. 29</p>
          <h2 id="nov-popup-title" className="nov-popup-title">
            <span>A Very</span>
            <span>Marry Day</span>
          </h2>
          <p className="nov-popup-when">Santa, 10am – 3pm</p>
          <p className="nov-popup-copy">
            Our Community&apos;s beloved Santa from The Woods returns with reindeer and elves Sparkle &amp; Sprinkle. Anniversary celebrations all November!
          </p>
          <div className="nov-popup-actions">
            <AddToCalendar className="nov-popup-btn" />
            <button
              type="button"
              className="nov-popup-btn nov-popup-btn-line"
              onClick={() => {
                sessionStorage.setItem(STORAGE_KEY, '1');
                setOpen(false);
                router.push('/a-very-marry-day');
              }}
            >
              More Information
            </button>
          </div>
        </div>
        <figure className="nov-polaroid nov-polaroid-right">
          <img src="/november-event/bride.jpg" alt="Bride in the snow holding a winter bouquet" />
          <figcaption>Anniversary</figcaption>
        </figure>
      </div>
    </div>
  );
}
