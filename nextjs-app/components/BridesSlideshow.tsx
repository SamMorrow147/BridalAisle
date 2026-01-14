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
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);
  const lastXRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  
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
      setIsReady(true);
    }
  }, [totalSlideWidth, startOffset]);

  // Update slide scales and opacity based on scroll position
  const updateSlideScales = (scrollPos: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.width / 2;
    const slideElements = container.querySelectorAll('.scroll-slide');
    
    slideElements.forEach((slide, index) => {
      const slideElement = slide as HTMLElement;
      const slideLeft = index * totalSlideWidth - scrollPos;
      const slideCenter = slideLeft + slideWidth / 2;
      const distanceFromCenter = Math.abs(slideCenter - containerCenter);
      const maxDistance = containerRect.width / 2;
      
      // Smooth scale from 1.0 (center) to 0.88 (edges) with easing
      const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
      const scale = gsap.utils.interpolate(1, 0.88, normalizedDistance);
      const opacity = gsap.utils.interpolate(1, 0.75, normalizedDistance);
      
      gsap.to(slideElement, {
        scale,
        opacity,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });
  };

  // Handle scroll with GSAP smooth animation
  const smoothScrollTo = (targetScroll: number, duration: number = 0.8) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Cancel any ongoing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }
    
    animationRef.current = gsap.to(container, {
      scrollLeft: targetScroll,
      duration,
      ease: 'power3.out',
      onUpdate: () => {
        updateSlideScales(container.scrollLeft);
        updateActiveIndex(container.scrollLeft);
      },
      onComplete: () => {
        handleInfiniteLoop();
      }
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
      
      // Instantly reposition without animation
      gsap.set(container, { scrollLeft: newIndex * totalSlideWidth });
    }
  };

  // Update active index
  const updateActiveIndex = (scrollPos: number) => {
    const currentIndex = Math.round(scrollPos / totalSlideWidth);
    const normalizedIndex = ((currentIndex % slides.length) + slides.length) % slides.length;
    setActiveIndex(normalizedIndex);
  };

  // Touch/Mouse handlers with momentum
  const handleStart = (clientX: number) => {
    isDraggingRef.current = true;
    startXRef.current = clientX;
    currentXRef.current = clientX;
    lastXRef.current = clientX;
    velocityRef.current = 0;
    lastTimeRef.current = Date.now();
    
    // Cancel any ongoing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }
    
    const container = scrollContainerRef.current;
    if (container) {
      gsap.set(container, { cursor: 'grabbing' });
    }
  };

  const handleMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTimeRef.current;
    const deltaX = clientX - lastXRef.current;
    
    // Calculate velocity for momentum
    if (deltaTime > 0) {
      velocityRef.current = deltaX / deltaTime;
    }
    
    currentXRef.current = clientX;
    const walk = (startXRef.current - clientX) * 1.2; // Sensitivity multiplier
    const newScrollLeft = container.scrollLeft + walk;
    
    // Apply scroll with GSAP for smoothness
    gsap.set(container, { scrollLeft: newScrollLeft });
    
    startXRef.current = clientX;
    lastXRef.current = clientX;
    lastTimeRef.current = currentTime;
    
    updateSlideScales(container.scrollLeft);
    updateActiveIndex(container.scrollLeft);
  };

  const handleEnd = () => {
    if (!isDraggingRef.current) return;
    
    isDraggingRef.current = false;
    const container = scrollContainerRef.current;
    if (!container) return;
    
    gsap.set(container, { cursor: 'grab' });
    
    // Apply momentum based on velocity
    const momentum = velocityRef.current * 300; // Momentum strength
    const currentScroll = container.scrollLeft;
    const targetScroll = currentScroll + momentum;
    
    // Snap to nearest slide
    const nearestIndex = Math.round(targetScroll / totalSlideWidth);
    const snappedScroll = nearestIndex * totalSlideWidth;
    
    // Animate to snapped position with momentum easing
    smoothScrollTo(snappedScroll, Math.min(0.8, Math.abs(momentum) / 1000 + 0.3));
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Handle native scroll events (for scroll wheel on desktop)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (isDraggingRef.current) return;
      
      updateSlideScales(container.scrollLeft);
      updateActiveIndex(container.scrollLeft);
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Snap to nearest slide after scroll stops
        const nearestIndex = Math.round(container.scrollLeft / totalSlideWidth);
        smoothScrollTo(nearestIndex * totalSlideWidth, 0.5);
      }, 150);
    };
    
    container.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial scale update
    updateSlideScales(container.scrollLeft);
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [slides.length, totalSlideWidth]);

  // Navigate to specific slide via dots
  const scrollToSlide = (index: number) => {
    const targetIndex = startOffset + index;
    smoothScrollTo(targetIndex * totalSlideWidth, 0.8);
  };

  // GSAP context for animations
  useGSAP(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Animate in on mount
    gsap.fromTo(container, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
  }, { scope: scrollContainerRef });

  return (
    <div className="brides-slideshow" style={{ opacity: isReady ? 1 : 0 }}>
      <div
        ref={scrollContainerRef}
        className="slideshow-scroll-container"
        style={{ cursor: 'grab' }}
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
