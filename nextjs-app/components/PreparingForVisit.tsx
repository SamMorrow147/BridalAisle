'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PreparingForVisit() {
  return (
    <>
      <section className="prepare-title-section">
        <h2 className="prepare-title">Preparing for your visit to Bridal Aisle</h2>
      </section>
      
      <section className="prepare-section">
        <div className="prepare-container">
          <div className="prepare-content">
            <h2 className="prepare-title">A smaller guest list makes for a more meaningful moment</h2>
            <p className="prepare-text">
              Finding your dress is a once-in-a-lifetime moment, and bringing just one or two trusted guests allows you to truly focus on what you love. For groups larger than four, please <Link href="/contact">contact us</Link> to book a private appointment for a more comfortable experience.
            </p>
            <div className="prepare-divider">
              <span>→</span>
            </div>
            <h2 className="prepare-title">We&apos;re a shoe-free boutique to keep our gowns pristine</h2>
            <p className="prepare-text">
              To protect our dresses from Minnesota&apos;s unpredictable weather, we kindly ask all guests to remove their shoes upon arrival. We&apos;ll provide slippers for you to wear during your appointment, or you may bring your own.
            </p>
          </div>
          <div className="prepare-image">
            <Image
              src="/contact/Contact-image.jpg"
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
