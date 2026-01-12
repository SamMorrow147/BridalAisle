'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  alt: string;
}

interface AppointmentsHeroSlideshowProps {
  slides: Slide[];
  interval?: number;
}

export default function AppointmentsHeroSlideshow({ slides, interval = 5000 }: AppointmentsHeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="appointments-hero-slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`appointments-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ zIndex: index === currentSlide ? 1 : 0 }}
        >
          <div className="appointments-slide-image">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={90}
              style={{ objectFit: 'cover' }}
            />
            <div className="appointments-slide-overlay" />
          </div>
        </div>
      ))}
      
      <div className="appointments-hero-content">
        <h3 className="appointments-hero-subtitle">book your</h3>
        <h1 className="appointments-hero-title">APPOINTMENT</h1>
        <h3 className="appointments-hero-description">We carry The Largest selection of in-stock wedding dresses in the midwest</h3>
      </div>
    </div>
  );
}

