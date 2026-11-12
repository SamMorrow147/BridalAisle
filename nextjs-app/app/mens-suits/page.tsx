import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: "The Woods | Men's Suits for Weddings, Prom & Every Occasion in Minnesota",
  description: "Navigate the Woods at Bridal Aisle Boutique in Maple Grove — men's suits for weddings, prom, and every occasion, for rent or purchase. Book your fitting today — (763) 220-2319.",
  alternates: {
    canonical: '/mens-suits',
  },
  openGraph: {
    title: "The Woods | Men's Suits for Weddings, Prom & Every Occasion in Minnesota",
    description: "Navigate the Woods at Bridal Aisle Boutique in Maple Grove — men's suits for weddings, prom, and every occasion, for rent or purchase. Book your fitting today — (763) 220-2319.",
    url: `${SITE_URL}/mens-suits`,
    images: [{ url: '/mens-suits/woods-hero.jpg', width: 1024, height: 768, alt: "The Woods — men's suits at Bridal Aisle Boutique" }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "The Woods Men's Suits",
  provider: { '@type': 'LocalBusiness', name: 'Bridal Aisle Boutique' },
  description: "Men's suits for weddings, prom, and every occasion at Bridal Aisle Boutique in Maple Grove, MN. Rentals and purchases with professional styling. Free fitting appointment.",
  areaServed: ['Osseo MN', 'Maple Grove MN', 'Brooklyn Park MN', 'Minneapolis MN'],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://www.bridalaislemn.com/appointments',
  },
};

const PATHS = [
  {
    href: '/mens-suits/wedding',
    title: 'Wedding',
    image: '/mens-suits/suit-slide-3.jpg',
    alt: 'Groom in a tan suit with his bride from The Woods',
    position: 'center 40%',
    zoom: 1.28,
    origin: 'center 64%',
  },
  {
    href: '/mens-suits/prom',
    title: 'Prom',
    image: '/mens-suits/prom-path.jpg',
    alt: 'Three young men in blue suits from The Woods',
    position: 'center 38%',
    zoom: 1.22,
    origin: 'center 62%',
  },
  {
    href: '/mens-suits/every-occasion',
    title: 'Every Occasion',
    image: '/mens-suits/occasion-path.jpg',
    alt: 'Man in a charcoal three-piece suit from The Woods',
    position: 'center 6%',
    zoom: 1.08,
    origin: 'center 8%',
  },
];

export default function NavigateTheWoodsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    <main className="page-container woods-navigate">
      <div className="woods-navigate-bg" aria-hidden="true" />

      <div className="woods-navigate-inner">
        <h1 className="woods-sr-only">The Woods</h1>

        <ul className="woods-paths">
          {PATHS.map((path, i) => (
            <li key={path.href} style={{ '--i': i } as React.CSSProperties}>
              <Link href={path.href} className="woods-path">
                <div
                  className="woods-path-photo"
                  style={{
                    '--photo-pos': path.position,
                    '--photo-zoom': path.zoom ?? 1,
                    '--photo-origin': path.origin ?? 'center 70%',
                  } as React.CSSProperties}
                >
                  <Image
                    src={path.image}
                    alt={path.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i === 0}
                  />
                </div>
                <div className="woods-path-body">
                  <h2 className="woods-path-title">
                    <span className="woods-path-title-text">{path.title}</span>
                    <span className="woods-path-arrow" aria-hidden="true">→</span>
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="woods-navigate-cta">
          <Link href="/appointments#book-appointment" className="woods-cta-btn woods-cta-btn-on-dark">
            Book Your Fitting
          </Link>
        </div>
      </div>
    </main>
    </>
  );
}
