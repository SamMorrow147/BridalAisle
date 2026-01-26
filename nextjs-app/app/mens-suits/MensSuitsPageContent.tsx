'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ErrorBoundary from '@/components/ErrorBoundary';
import BridesSlideshow from '@/components/BridesSlideshow';

export default function MensSuitsPageContent() {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    // Mark page as ready after initial render
    setPageReady(true);
  }, []);

  useEffect(() => {
    // Load Linda widget script only when main content is shown (container exists)
    if (!pageReady) return;

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
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Also clean up any widget elements
      const widgetElements = container.querySelectorAll('[class*="linda"], [id*="linda"], [class*="gb-widget"]');
      widgetElements.forEach(el => {
        if (el.parentNode) {
          el.remove();
        }
      });
    };
  }, [pageReady]);

  if (!pageReady) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f4f6f4'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '3px solid #e3ddd3',
            borderTop: '3px solid #827270',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }} />
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Loading...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <ErrorBoundary>
    <>
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
              <a href="https://www.dbformalwear.com/online-catalog" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/home/dubois-logo.png"
                  alt="DB Formalwear"
                  width={120}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </a>
              <a href="https://puresilkfabrics.com/suits/metro-suits/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/home/psf-logo.png"
                  alt="Pure Silk Fabrics"
                  width={180}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </div>
          </div>
          
          <div className="mens-image-right">
            <Image
              src="/mens-suits/hero-groom.jpg"
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
          <Link href="/appointments#appointment-5" className="process-box row1">
            <p>BOOK YOUR<br />APPOINTMENT ONLINE &gt;</p>
          </Link>
          
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

      {/* Linda Widget Section */}
      <section className="linda-widget-section">
        <div id="linda-widget-container"></div>
      </section>

      {/* Photo Gallery - in tan section, below the Linda widget */}
      <section className="mens-gallery-section">
        <BridesSlideshow slides={[
          { image: '/mens-suits/suit-slide-1.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/suit-slide-2.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/suit-slide-3.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/suit-slide-4.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/suit-slide-5.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/suit-slide-6.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/suit-slide-7.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/groom-suit-brick.jpg', alt: 'Groom in suit' },
          { image: '/mens-suits/hero-groom.jpg', alt: 'Groom formalwear' },
          { image: '/home/groomportraits-2021-07-30candaceandchase-31-laurenbakerphotography-ee15a496.jpg', alt: 'Groom portrait' },
          { image: '/home/bk-bride-groom-7.jpg', alt: 'Bride and groom' }
        ]} />
      </section>
    </main>
    </>
    </ErrorBoundary>
  );
}
