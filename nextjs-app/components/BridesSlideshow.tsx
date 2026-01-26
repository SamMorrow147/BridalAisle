'use client';

import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface Slide {
  image: string;
  alt: string;
}

interface BridesSlideshowProps {
  slides: Slide[];
}

export default function BridesSlideshow({ slides }: BridesSlideshowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideElementsRef = useRef<HTMLElement[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const lastScrollRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const scrollStartRef = useRef(0);
  
  // Slide dimensions
  const slideWidth = 400;
  const gap = 24;
  const totalSlideWidth = slideWidth + gap;
  
  // Create extended slides for infinite loop effect (5 copies for smooth looping)
  const extendedSlides = [...slides, ...slides, ...slides, ...slides, ...slides];
  const startOffset = slides.length * 2; // Start in the middle

  // Set initial scroll position
  useLayoutEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft = totalSlideWidth * startOffset;
      requestAnimationFrame(() => {
        setIsReady(true);
      });
    }
  }, [totalSlideWidth, startOffset]);

  // Optimized scale update using GSAP ticker for smooth 60fps updates
  const updateSlideScales = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollPos = container.scrollLeft;
    
    // Only update if scroll has changed (optimization)
    if (Math.abs(scrollPos - lastScrollRef.current) < 0.5) return;
    lastScrollRef.current = scrollPos;
    
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    
    slideElementsRef.current.forEach((slideElement, index) => {
      if (!slideElement) return;
      
      // Get actual position of slide in viewport
      const slideRect = slideElement.getBoundingClientRect();
      const slideCenterX = slideRect.left + slideRect.width / 2;
      const distanceFromCenter = Math.abs(slideCenterX - containerCenterX);
      const maxDistance = containerRect.width / 2 + slideRect.width / 2;
      
      // Smooth scale from 1.0 (center) to 0.88 (edges)
      const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
      const scale = 1 - (normalizedDistance * 0.12);
      const opacity = 1 - (normalizedDistance * 0.25);
      
      // Direct style manipulation for best performance (no GSAP during scroll)
      slideElement.style.transform = `scale(${scale})`;
      slideElement.style.opacity = `${opacity}`;
    });
  };

  // Handle infinite loop repositioning
  const handleInfiniteLoop = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollPos = container.scrollLeft;
    const currentIndex = Math.round(scrollPos / totalSlideWidth);
    
    const minSafeIndex = slides.length;
    const maxSafeIndex = slides.length * 4 - 1;
    
    if (currentIndex < minSafeIndex || currentIndex > maxSafeIndex) {
      const normalizedIndex = ((currentIndex % slides.length) + slides.length) % slides.length;
      const newIndex = slides.length * 2 + normalizedIndex;
      container.scrollLeft = newIndex * totalSlideWidth;
    }
  };

  // Update active index
  const updateActiveIndex = (scrollPos: number) => {
    const currentIndex = Math.round(scrollPos / totalSlideWidth);
    const normalizedIndex = ((currentIndex % slides.length) + slides.length) % slides.length;
    setActiveIndex(normalizedIndex);
  };

  // Main scroll handler - uses RAF for smooth 60fps updates
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    let scrollTimeout: NodeJS.Timeout;
    let isScrolling = false;
    
    const handleScroll = () => {
      // Start RAF loop if not already running
      if (!isScrolling) {
        isScrolling = true;
        const animate = () => {
          if (!isScrolling) return;
          updateSlideScales();
          animationFrameRef.current = requestAnimationFrame(animate);
        };
        animate();
      }
      
      // Update active index
      updateActiveIndex(container.scrollLeft);
      
      // Debounce scroll end
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        
        // Snap to nearest slide
        const nearestIndex = Math.round(container.scrollLeft / totalSlideWidth);
        const targetScroll = nearestIndex * totalSlideWidth;
        
        // Use GSAP for smooth snap
        gsap.to(container, {
          scrollLeft: targetScroll,
          duration: 0.5,
          ease: 'power2.out',
          onUpdate: updateSlideScales,
          onComplete: handleInfiniteLoop
        });
      }, 100);
    };
    
    // Use passive listener for better scroll performance
    container.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial scale update
    updateSlideScales();
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [slides.length, totalSlideWidth]);

  // Navigate to specific slide via dots
  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const targetIndex = startOffset + index;
    const targetScroll = targetIndex * totalSlideWidth;
    
    gsap.to(container, {
      scrollLeft: targetScroll,
      duration: 0.8,
      ease: 'power3.out',
      onUpdate: updateSlideScales,
      onComplete: handleInfiniteLoop
    });
  };

  // Navigate to next slide
  const goToNext = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    scrollToSlide(nextIndex);
  };

  // Navigate to previous slide
  const goToPrev = () => {
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    scrollToSlide(prevIndex);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    isDraggingRef.current = true;
    dragStartXRef.current = e.pageX;
    scrollStartRef.current = container.scrollLeft;
    container.style.cursor = 'grabbing';
    container.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    
    e.preventDefault();
    const x = e.pageX;
    const walk = (dragStartXRef.current - x) * 2; // Multiply by 2 for faster scroll
    container.scrollLeft = scrollStartRef.current + walk;
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    isDraggingRef.current = false;
    container.style.cursor = 'grab';
    container.style.scrollBehavior = 'smooth';
  };

  const handleMouseLeave = () => {
    if (isDraggingRef.current) {
      handleMouseUp();
    }
  };

  // Collect slide element refs
  const setSlideRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      slideElementsRef.current[index] = el;
    }
  };

  // GSAP context for entrance animation
  useGSAP(() => {
    if (!isReady) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Fade in on mount
    gsap.fromTo(container, 
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' }
    );
  }, { dependencies: [isReady], scope: scrollContainerRef });

  return (
    <div className="brides-slideshow">
      {/* Previous Arrow */}
      <button
        className="slideshow-arrow slideshow-arrow-prev"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <div
        ref={scrollContainerRef}
        className="slideshow-scroll-container"
        style={{ 
          opacity: 0,
          scrollBehavior: 'auto' // Let GSAP handle smooth scrolling
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {extendedSlides.map((slide, index) => (
          <div 
            key={`slide-${index}`} 
            className="scroll-slide"
            ref={(el) => setSlideRef(el, index)}
          >
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

      {/* Next Arrow */}
      <button
        className="slideshow-arrow slideshow-arrow-next"
        onClick={goToNext}
        aria-label="Next slide"
      >
        ›
      </button>
      
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
