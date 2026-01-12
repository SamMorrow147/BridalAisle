'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  alt: string;
}

interface HeroSlideshowProps {
  slides: Slide[];
  interval?: number;
}

export default function HeroSlideshow({ slides, interval = 5000 }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="hero-slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
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
          <div className="slide-overlay" />
        </div>
      ))}
      
      <div className="hero-content-overlay">
        <div className="hero-logo-top">
          <Image
            src="/White-BA-logo-stacked.png"
            alt="Bridal Aisle"
            width={200}
            height={250}
            priority
          />
        </div>
        
        <div className="hero-text">
          <h3 className="hero-subtitle">your dream dress</h3>
          <h1 className="hero-title">IS AT BRIDAL AISLE</h1>
          <a href="/appointments" className="hero-cta">
            APPOINTMENTS
          </a>
        </div>
      </div>
    </div>
  );
}

