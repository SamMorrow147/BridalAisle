'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  alt: string;
}

interface FullwidthSlideshowProps {
  slides: Slide[];
  interval?: number;
}

export default function FullwidthSlideshow({ slides, interval = 4000 }: FullwidthSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="fullwidth-slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`fullwidth-slide ${index === currentSlide ? 'active' : ''}`}
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


