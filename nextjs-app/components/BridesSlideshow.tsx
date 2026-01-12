'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  alt: string;
}

interface BridesSlideshowProps {
  slides: Slide[];
}

export default function BridesSlideshow({ slides }: BridesSlideshowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const slideWidth = 400 + 24; // width + gap

  // Initialize scroll position to index 1
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = slideWidth * 1;
    }
  }, [slideWidth]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Track scroll position for current index and scaling
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && !isDragging) {
        const container = scrollContainerRef.current;
        const scrollPosition = container.scrollLeft;
        const index = Math.round(scrollPosition / slideWidth);
        const clampedIndex = Math.max(0, Math.min(index, slides.length - 1));
        setCurrentIndex(clampedIndex);
        
        // Update scale for all slides based on distance from center
        const containerCenter = container.offsetWidth / 2;
        const slideElements = container.querySelectorAll('.scroll-slide');
        
        slideElements.forEach((slide) => {
          const slideElement = slide as HTMLElement;
          const slideRect = slideElement.getBoundingClientRect();
          const slideCenter = slideRect.left + slideRect.width / 2;
          const distanceFromCenter = Math.abs(slideCenter - containerCenter);
          const maxDistance = container.offsetWidth / 2;
          
          // Scale from 1.0 (center) to 0.85 (edges)
          const scale = Math.max(0.85, 1 - (distanceFromCenter / maxDistance) * 0.15);
          slideElement.style.transform = `scale(${scale})`;
          slideElement.style.opacity = `${Math.max(0.7, 1 - (distanceFromCenter / maxDistance) * 0.3)}`;
        });
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [slides.length, slideWidth, isDragging]);

  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  return (
    <div className="brides-slideshow">
      <div
        ref={scrollContainerRef}
        className={`slideshow-scroll-container ${isDragging ? 'dragging' : ''}`}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className="scroll-slide">
            <Image
              src={slide.image}
              alt={slide.alt}
              width={400}
              height={550}
              style={{ objectFit: 'cover', pointerEvents: 'none' }}
              draggable={false}
              priority={index <= 1}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="slideshow-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => scrollToImage(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
