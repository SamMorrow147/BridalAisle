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
  onMenuOpen?: () => void;
}

export default function HeroSlideshow({ slides, interval = 5000, onMenuOpen }: HeroSlideshowProps) {
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
        {/* Hamburger Menu Button for Mobile/Tablet */}
        <button 
          className="hero-hamburger-menu" 
          aria-label="Open menu"
          onClick={onMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
        
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

