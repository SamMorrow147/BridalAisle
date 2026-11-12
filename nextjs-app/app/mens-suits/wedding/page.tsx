import type { Metadata } from 'next';
import WeddingPageContent from './WeddingPageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: "Wedding Suits | The Woods at Bridal Aisle, Minnesota",
  description: "The Woods at Bridal Aisle Boutique in Maple Grove — men's wedding suits for rent or purchase, with professional styling. Book your appointment today — (763) 220-2319.",
  alternates: {
    canonical: '/mens-suits/wedding',
  },
  openGraph: {
    title: "Wedding Suits | The Woods at Bridal Aisle, Minnesota",
    description: "The Woods at Bridal Aisle Boutique in Maple Grove — men's wedding suits for rent or purchase, with professional styling. Book your appointment today — (763) 220-2319.",
    url: `${SITE_URL}/mens-suits/wedding`,
    images: [{ url: '/mens-suits/woods-hero.jpg', width: 1024, height: 768, alt: "The Woods — men's suits at Bridal Aisle Boutique" }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "The Woods — Men's Wedding Suits & Formal Attire",
  provider: { '@type': 'LocalBusiness', name: 'Bridal Aisle Boutique' },
  description: "The Woods at Bridal Aisle Boutique: men's suit rentals and purchases for weddings and formal events in Maple Grove MN near Minneapolis. Professional measuring and styling appointments available.",
  areaServed: ['Osseo MN', 'Maple Grove MN', 'Brooklyn Park MN', 'Minneapolis MN'],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://www.bridalaislemn.com/appointments',
  },
};

export default function WoodsWeddingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <WeddingPageContent />
    </>
  );
}
