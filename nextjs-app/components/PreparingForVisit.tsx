'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

// Images for each page
const PAGE_IMAGES = [
  '/contact/Contact-image.jpg',
  '/contact/bab-99web-6a226f86.jpg',
  '/contact/bab-108web-93b94283.jpg',
  '/contact/bab-54web-5eab03dd.jpg',
];

const PAGES = [
  [
    {
      title: 'A smaller guest list makes for a more meaningful moment',
      text: "Finding your dress is a once-in-a-lifetime moment, and bringing just one or two trusted guests allows you to truly focus on what you love. For groups larger than four, please contact us to book a private appointment for a more comfortable experience.",
      hasLink: true,
    },
    {
      title: "We're a shoe-free boutique to keep our gowns pristine",
      text: "To protect our dresses from Minnesota's unpredictable weather, we kindly ask all guests to remove their shoes upon arrival. We'll provide slippers for you to wear during your appointment, or you may bring your own.",
    },
  ],
  [
    {
      title: 'The earlier you shop, the easier your alterations will be',
      text: "Your perfect dress deserves the perfect fit. Shopping well in advance of your wedding date ensures you have time for any necessary alterations. If you don't have an alteration specialist, our team would love to recommend one.",
    },
    {
      title: 'Arriving on time ensures you get the full experience',
      text: "We encourage brides to arrive on time, or a few minutes early, so we can provide the attentive and relaxed experience every appointment deserves. If you anticipate being late, please let us know so we can accommodate you with care.",
    },
  ],
  [
    {
      title: 'If you need to cancel, please let us know in advance',
      text: "We require a minimum of 24 hours' notice to receive a refund of your $25 deposit. Arriving more than 20 minutes late without notice will result in cancellation. The deposit is non-refundable if you do not cancel in advance or if you do not find your gown during your visit.",
    },
    {
      title: 'The right undergarments make all the difference',
      text: "Your undergarments create the foundation for your overall look. We recommend nude, seamless pieces and a strapless or convertible bra - or even going braless if you feel comfortable. Most gowns include built-in cups, so skipping a bra often gives you the most accurate fit and feel.",
    },
  ],
  [
    {
      title: 'We kindly ask that appointments remain adult-only',
      text: "We adore children, but to ensure a calm and focused experience for every bride, we ask that appointments remain adult-only. This allows us to give you—and every guest in the boutique—the pampered attention you deserve.",
    },
    {
      title: 'Our food & beverage policy',
      text: "To maintain the beauty and cleanliness of our gowns and boutique, we kindly ask that no food or beverages are brought into the store. Clear liquids and champagne are welcome; however, we ask that champagne be opened outdoors or in the restroom area. All other beverages may be left in the front waiting area.",
    },
  ],
];

export default function PreparingForVisit() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const startX = useRef<number>(0);
  const currentX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  const handleNext = () => {
    console.log('Next clicked/swiped - current page:', currentPage);
    setDirection('next');
    setCurrentPage((prev) => (prev + 1) % PAGES.length);
  };

  const handlePrev = () => {
    console.log('Prev clicked/swiped - current page:', currentPage);
    setDirection('prev');
    setCurrentPage((prev) => (prev - 1 + PAGES.length) % PAGES.length);
  };

  // Mouse events for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    console.log('Mouse down detected');
    startX.current = e.clientX;
    currentX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    currentX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    
    const difference = startX.current - currentX.current;
    const threshold = 50;
    
    console.log('Mouse up - difference:', difference, 'threshold:', threshold);
    
    if (Math.abs(difference) > threshold) {
      if (difference > 0) {
        console.log('Dragged left to next');
        handleNext();
      } else {
        console.log('Dragged right to previous');
        handlePrev();
      }
    }
    
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      handleMouseUp();
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    console.log('Touch start detected');
    startX.current = e.touches[0].clientX;
    currentX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    
    const difference = startX.current - currentX.current;
    const threshold = 50;
    
    console.log('Touch end - difference:', difference, 'threshold:', threshold);
    
    if (Math.abs(difference) > threshold) {
      if (difference > 0) {
        console.log('Swiped left to next');
        handleNext();
      } else {
        console.log('Swiped right to previous');
        handlePrev();
      }
    }
    
    isDragging.current = false;
  };

  const page = PAGES[currentPage];

  return (
    <>
      <section className="prepare-title-section">
        <h2 className="prepare-title">Preparing for your visit to Bridal Aisle</h2>
      </section>

      <section className="prepare-section">
        <div 
          className="prepare-container"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="prepare-content prepare-content--carousel" 
            key={currentPage}
          >
            {/* First card */}
            <div className="prepare-card prepare-card--slide-in" style={{ animationName: direction === 'next' ? 'slideInRight' : 'slideInLeft' }}>
              <h2 className="prepare-title">{page[0].title}</h2>
              <p className="prepare-text">
                {page[0].hasLink ? (
                  <>
                    Finding your dress is a once-in-a-lifetime moment, and bringing just one or
                    two trusted guests allows you to truly focus on what you love. For groups
                    larger than four, please <Link href="/contact">contact us</Link> to book a
                    private appointment for a more comfortable experience.
                  </>
                ) : (
                  page[0].text
                )}
              </p>
            </div>

            {/* Divider with line and arrow */}
            <div className="prepare-divider">
              <span className="prepare-divider-line" aria-hidden="true" />
              <button
                type="button"
                className="prepare-divider-arrow"
                onClick={handleNext}
                aria-label="Next page"
              >
                →
              </button>
            </div>

            {/* Second card */}
            <div className="prepare-card prepare-card--slide-in" style={{ animationName: direction === 'next' ? 'slideInRight' : 'slideInLeft', animationDelay: '0.1s' }}>
              <h2 className="prepare-title">{page[1].title}</h2>
              <p className="prepare-text">{page[1].text}</p>
            </div>
          </div>
          
          <div className="prepare-image" key={`image-${currentPage}`}>
            <Image
              src={PAGE_IMAGES[currentPage]}
              alt="Bridal boutique interior"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
