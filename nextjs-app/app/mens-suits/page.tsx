'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MensSuitsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(3); // Start at 4th image (index 3)
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const suitSlides = [
    { image: '/mens-suits/suit-slide-1.jpg', alt: 'Metro suit sage' },
    { image: '/mens-suits/suit-slide-2.jpg', alt: 'Metro suit rust' },
    { image: '/mens-suits/suit-slide-3.jpg', alt: 'Metro suit tan' },
    { image: '/mens-suits/suit-slide-4.jpg', alt: 'Metro suit tan' },
    { image: '/mens-suits/suit-slide-5.jpg', alt: 'Metro suit light grey' },
    { image: '/mens-suits/suit-slide-6.jpg', alt: 'Metro suit camel' },
    { image: '/mens-suits/suit-slide-7.jpg', alt: 'Metro suit cornflower' }
  ];
  
  const slideWidth = 550 + 24; // width + gap (horizontal images)

  // Initialize scroll position to index 3 (4th image)
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = slideWidth * 3;
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

  // Track scroll position for current index
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && !isDragging) {
        const container = scrollContainerRef.current;
        const scrollPosition = container.scrollLeft;
        const index = Math.round(scrollPosition / slideWidth);
        const clampedIndex = Math.max(0, Math.min(index, suitSlides.length - 1));
        setCurrentIndex(clampedIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [slideWidth, isDragging, suitSlides.length]);

  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    // Load Linda widget script
    const container = document.getElementById('linda-widget-container');
    if (!container) return;

    const script = document.createElement('script');
    script.id = 'gb_widget_script';
    script.type = 'module';
    script.src = 'https://locations.linda.co/gb-widget.js';
    script.setAttribute('data-widget-token', 'e25b4c7cbee769617bfc85fafd3d29f9');
    
    // Append to container instead of body to ensure it renders in the right place
    container.appendChild(script);

    // Watch for widget content being injected elsewhere and move it to our container
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            const element = node as HTMLElement;
            // Check if this is a Linda widget element
            if (element.id?.includes('linda') || 
                element.className?.includes('linda') || 
                element.className?.includes('gb-widget') ||
                element.querySelector('[class*="linda"], [id*="linda"], [class*="gb-widget"]')) {
              // If it's not already in our container, move it
              if (!container.contains(element)) {
                container.appendChild(element);
              }
            }
          }
        });
      });
    });

    // Observe the body for any new elements
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      if (script && script.parentNode === container) {
        container.removeChild(script);
      }
      // Also clean up any widget elements
      const widgetElements = container.querySelectorAll('[class*="linda"], [id*="linda"], [class*="gb-widget"]');
      widgetElements.forEach(el => {
        if (el.parentNode) {
          el.remove();
        }
      });
    };
  }, []);
  return (
    <main className="page-container">
      {/* Hero Section */}
      <section className="mens-suits-hero">
        <div className="mens-hero-overlay"></div>
        <div className="mens-hero-content">
          <h3 className="mens-hero-label">
            <span className="label-line"></span>
            THE WOODS MEN'S SUITS
            <span className="label-line"></span>
          </h3>
          <h1 className="mens-hero-title">For the groom, the groomsmen & beyond</h1>
          <p className="mens-hero-text">
            From timeless rentals to custom-fit suits you can call your own, Bridal Aisle Boutique 
            offers a full-service formalwear experience. Whether you're walking down the aisle or 
            showing up in style, our men's department makes finding the right fit effortless.
          </p>
        </div>
      </section>

      {/* Section 2 - Suit Rentals */}
      <section className="mens-rentals-section">
        <div className="mens-two-column">
          <div className="mens-content-left">
            <h1 className="mens-section-title">Full-service suit rentals for weddings, prom & special events</h1>
            
            <p className="mens-section-text">
              Our partnership with <strong>DuBois Formalwear</strong> ensures every suit meets the 
              highest standard of fit and finish. Whether you're preparing for your wedding, prom, or 
              a black-tie event, our stylists will curate a look that complements your style and setting.
            </p>
            
            <div style={{ marginTop: '2.5rem', marginBottom: '3rem' }}>
              <Link href="/appointments#appointment-5" className="bridal-cta-btn">BOOK A SUIT APPOINTMENT</Link>
            </div>
            
            <div className="mens-logos">
              <Image
                src="/home/dubois-logo.png"
                alt="DB•FW"
                width={120}
                height={60}
                style={{ objectFit: 'contain' }}
              />
              <Image
                src="/home/psf-logo.png"
                alt="Pure Silk Fabrics"
                width={180}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          
          <div className="mens-image-right">
            <Image
              src="/mens-suits/groom-suit-brick.jpg"
              alt="Groom in suit"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Section 3 - The Suit Rental Process */}
      <section className="mens-process-section">
        <h1 className="mens-process-heading">The Suit Rental Process</h1>
        
        <div className="mens-process-grid">
          {/* Row 1: 2 columns */}
          <div className="process-box row1">
            <p>BOOK YOUR<br />APPOINTMENT ONLINE &gt;</p>
          </div>
          
          <div className="process-box row1">
            <p>CONSULT WITH OUR FORMALWEAR STYLIST TO SELECT YOUR PREFERRED STYLE AND COLOR PALETTE.</p>
          </div>
          
          {/* Row 2: 3 columns */}
          <div className="process-box row2">
            <p>GET PROFESSIONALLY MEASURED — WE HANDLE ALL THE DETAILS.</p>
          </div>
          
          <div className="process-box row2">
            <p>TRY ON BEFORE YOUR EVENT TO ENSURE A PERFECT FIT.</p>
          </div>
          
          <div className="process-box row2">
            <p>RETURN WITH EASE THE DAY AFTER YOUR CELEBRATION.</p>
          </div>
        </div>
      </section>

      {/* Section 4 - Pure Silk Suits */}
      <section className="mens-silk-suits-section">
        <div className="silk-suits-content">
          <h3 className="silk-suits-label">OWN YOUR SUIT</h3>
          <h1 className="silk-suits-title">Pure Silk Suits Designed to Last a Lifetime</h1>
          
          <p className="silk-suits-text">
            For those seeking a more permanent addition to their wardrobe, Bridal Aisle now offers pure 
            silk fabric suits for purchase. Crafted with precision and available in a variety of timeless 
            hues, these suits are made to move with you—from your wedding day to every milestone that follows.
          </p>
          
          <p className="silk-suits-text">
            Choose your style, customize your fit, and complete your look with refined details such as a 
            shirt, tie, and pocket square, all carefully curated by our stylists.
          </p>
          
          <div style={{ marginTop: '3rem' }}>
            <Link href="/appointments" className="bridal-cta-btn">SCHEDULE YOUR APPOINTMENT</Link>
          </div>
        </div>
      </section>

      {/* Suits Slideshow Section */}
      <section className="mens-suits-slideshow-section">
        <div className="mens-suits-slideshow">
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
            {suitSlides.map((slide, index) => (
              <div key={index} className="scroll-slide mens-suit-slide">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={550}
                  height={400}
                  style={{ objectFit: 'cover', pointerEvents: 'none' }}
                  draggable={false}
                  priority={index <= 1}
                />
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="slideshow-dots">
            {suitSlides.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => scrollToImage(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Linda Widget Section */}
      <section className="linda-widget-section">
        <div id="linda-widget-container"></div>
      </section>
    </main>
  );
}
