'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  appointmentType: string;
  quote: string;
  highlight?: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextTestimonial = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        setDirection('right');
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
          setIsAnimating(false);
        }, 500);
      }
    }, 6000); // Change testimonial every 6 seconds

    return () => clearInterval(interval);
  }, [testimonials.length, isAnimating]);

  const current = testimonials[currentIndex];

  return (
    <div className="testimonial-carousel">
      <div className={`testimonial-grid ${isAnimating ? `slide-out-${direction}` : 'slide-in'}`}>
        <div className="testimonial-text-side">
          <h1 className="testimonial-quote-script">
            {current.highlight || 'I found a dress that exceeded my expectations & I could not be happier!'}
          </h1>
          
          <div className="divider-short"></div>
          
          <p className="testimonial-full-quote">
            {current.quote}
          </p>
          
          <div className="testimonial-nav">
            <button onClick={prevTestimonial} className="nav-arrow" aria-label="Previous testimonial">
              ← PREV
            </button>
            <button onClick={nextTestimonial} className="nav-arrow" aria-label="Next testimonial">
              NEXT →
            </button>
          </div>
          
          <h3 className="testimonial-name">{current.name}</h3>
        </div>
        
        <div className="testimonial-image-side">
          <div className="testimonial-image-container">
            <Image
              src={current.image}
              alt={current.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

