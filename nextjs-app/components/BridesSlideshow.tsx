'use client';

import { useRef, useState, useEffect, useLayoutEffect, useCallback } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Slide dimensions
  const slideWidth = 400;
  const gap = 24;
  const totalSlideWidth = slideWidth + gap;
  
  // Create extended slides for infinite loop effect (5 copies for smooth looping)
  const extendedSlides = [...slides, ...slides, ...slides, ...slides, ...slides];
  const startOffset = slides.length * 2; // Start in the middle

  // Set initial scroll position before paint
  useLayoutEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Disable smooth scroll for initial positioning
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = totalSlideWidth * startOffset;
      // Small delay to ensure position is set, then enable smooth scroll
      requestAnimationFrame(() => {
        setIsReady(true);
        container.style.scrollBehavior = 'smooth';
      });
    }
  }, [totalSlideWidth, startOffset]);

  // Handle infinite loop repositioning
  const handleScrollEnd = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || isDragging) return;
    
    const scrollPos = container.scrollLeft;
    const currentIndex = Math.round(scrollPos / totalSlideWidth);
    
    // Calculate boundaries for repositioning
    const minSafeIndex = slides.length;
    const maxSafeIndex = slides.length * 4 - 1;
    
    // If we've scrolled too far in either direction, silently reposition
    if (currentIndex < minSafeIndex || currentIndex > maxSafeIndex) {
      const normalizedIndex = ((currentIndex % slides.length) + slides.length) % slides.length;
      const newIndex = slides.length * 2 + normalizedIndex;
      
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = newIndex * totalSlideWidth;
      requestAnimationFrame(() => {
        container.style.scrollBehavior = 'smooth';
      });
    }
  }, [isDragging, slides.length, totalSlideWidth]);

  // Scroll event handler with debounced end detection
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Update active dot indicator
      const scrollPos = container.scrollLeft;
      const currentIndex = Math.round(scrollPos / totalSlideWidth);
      const normalizedIndex = ((currentIndex % slides.length) + slides.length) % slides.length;
      setActiveIndex(normalizedIndex);
      
      // Update visual scaling
      updateSlideScales(container);
      
      // Debounce scroll end detection
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 150);
    };
    
    const updateSlideScales = (container: HTMLDivElement) => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      const slideElements = container.querySelectorAll('.scroll-slide');
      
      slideElements.forEach((slide) => {
        const slideElement = slide as HTMLElement;
        const slideRect = slideElement.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distanceFromCenter = Math.abs(slideCenter - containerCenter);
        const maxDistance = containerRect.width / 2;
        
        // Smooth scale from 1.0 (center) to 0.88 (edges)
        const scale = Math.max(0.88, 1 - (distanceFromCenter / maxDistance) * 0.12);
        const opacity = Math.max(0.75, 1 - (distanceFromCenter / maxDistance) * 0.25);
        
        slideElement.style.transform = `scale(${scale})`;
        slideElement.style.opacity = `${opacity}`;
      });
    };
    
    container.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial scale update
    updateSlideScales(container);
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [handleScrollEnd, slides.length, totalSlideWidth]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(container.scrollLeft);
    container.style.scrollBehavior = 'auto';
    container.style.scrollSnapType = 'none';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const walk = (e.pageX - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setIsDragging(false);
    container.style.scrollBehavior = 'smooth';
    container.style.scrollSnapType = 'x mandatory';
    
    // Snap to nearest slide
    const currentPos = container.scrollLeft;
    const nearestIndex = Math.round(currentPos / totalSlideWidth);
    container.scrollLeft = nearestIndex * totalSlideWidth;
    
    // Check for repositioning after snap completes
    setTimeout(handleScrollEnd, 300);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(container.scrollLeft);
    container.style.scrollBehavior = 'auto';
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const walk = (e.touches[0].pageX - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setIsDragging(false);
    container.style.scrollBehavior = 'smooth';
    
    setTimeout(handleScrollEnd, 300);
  };

  // Navigate to specific slide via dots
  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Navigate to the slide in the middle set
    const targetIndex = startOffset + index;
    container.scrollTo({
      left: targetIndex * totalSlideWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div className="brides-slideshow" style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.3s ease' }}>
      <div
        ref={scrollContainerRef}
        className={`slideshow-scroll-container ${isDragging ? 'dragging' : ''}`}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {extendedSlides.map((slide, index) => (
          <div key={`slide-${index}`} className="scroll-slide">
            <Image
              src={slide.image}
              alt={slide.alt}
              width={400}
              height={550}
              style={{ objectFit: 'cover', pointerEvents: 'none' }}
              draggable={false}
              priority={index >= startOffset && index < startOffset + 3}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="slideshow-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => scrollToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
