'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  alt: string;
}

interface AppointmentDetailSlideshowProps {
  slides: Slide[];
  interval?: number;
}

export default function AppointmentDetailSlideshow({ slides, interval = 5000 }: AppointmentDetailSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (slides.length === 0) return null;
  if (slides.length === 1) {
    return (
      <div className="appointment-detail-image">
        <Image
          src={slides[0].image}
          alt={slides[0].alt}
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  return (
    <div className="appointment-detail-image">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`appointment-detail-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ zIndex: index === currentSlide ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            quality={90}
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
}


