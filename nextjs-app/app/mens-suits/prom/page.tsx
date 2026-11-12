import type { Metadata } from 'next';
import PromPageContent from './PromPageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: "Prom Suits & Tuxedos | The Woods at Bridal Aisle, Minnesota",
  description: "The Woods at Bridal Aisle Boutique in Maple Grove — prom suits and tuxedos for rent or purchase, with professional styling. Book your fitting today — (763) 220-2319.",
  alternates: {
    canonical: '/mens-suits/prom',
  },
  openGraph: {
    title: "Prom Suits & Tuxedos | The Woods at Bridal Aisle, Minnesota",
    description: "The Woods at Bridal Aisle Boutique in Maple Grove — prom suits and tuxedos for rent or purchase, with professional styling. Book your fitting today — (763) 220-2319.",
    url: `${SITE_URL}/mens-suits/prom`,
    images: [{ url: '/mens-suits/woods-hero.jpg', width: 1024, height: 768, alt: "The Woods — men's suits at Bridal Aisle Boutique" }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "The Woods — Prom Suits & Tuxedos",
  provider: { '@type': 'LocalBusiness', name: 'Bridal Aisle Boutique' },
  description: "The Woods at Bridal Aisle Boutique: prom suit and tuxedo rentals and purchases in Maple Grove MN near Minneapolis. Professional measuring and styling appointments available.",
  areaServed: ['Osseo MN', 'Maple Grove MN', 'Brooklyn Park MN', 'Minneapolis MN'],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://www.bridalaislemn.com/appointments',
  },
};

export default function WoodsPromPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PromPageContent />
    </>
  );
}
