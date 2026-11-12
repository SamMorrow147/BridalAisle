import Link from 'next/link';
import type { ReactNode } from 'react';
import WoodsHeroParallax from './WoodsHeroParallax';

type WoodsHeroProps = {
  title: ReactNode;
  imageLabel?: string;
  fgImage?: string;
  bgImage?: string;
};

export default function WoodsHero({
  title,
  imageLabel = 'Groom in a charcoal suit fastening a cufflink',
  fgImage,
  bgImage,
}: WoodsHeroProps) {
  return (
    <section className="mens-suits-hero woods-hero">
      <WoodsHeroParallax />
      <div
        className="woods-hero-bg"
        aria-hidden="true"
        style={bgImage ? { backgroundImage: `url('${bgImage}')` } : undefined}
      />
      <div className="mens-hero-overlay woods-hero-overlay" />
      <div
        className="woods-hero-fg"
        role="img"
        aria-label={imageLabel}
        style={fgImage ? { backgroundImage: `url('${fgImage}')` } : undefined}
      />
      <div className="mens-hero-content">
        <div className="woods-hero-copy">
          <h1 className="mens-hero-title">{title}</h1>
          <p className="woods-hero-hook">Measured. Styled. Done.</p>
        </div>
        <div className="woods-hero-cta">
          <Link href="/appointments#book-appointment" className="woods-cta-btn">
            Book Your Fitting
          </Link>
        </div>
      </div>
    </section>
  );
}
