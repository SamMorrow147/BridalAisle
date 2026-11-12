import type { Metadata } from 'next';
import EveryOccasionPageContent from './EveryOccasionPageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: "Suits for Every Occasion | The Woods at Bridal Aisle, Minnesota",
  description: "The Woods at Bridal Aisle Boutique in Maple Grove — men's suits for galas, graduations, black-tie events and more, for rent or purchase. Book your fitting today — (763) 220-2319.",
  alternates: {
    canonical: '/mens-suits/every-occasion',
  },
  openGraph: {
    title: "Suits for Every Occasion | The Woods at Bridal Aisle, Minnesota",
    description: "The Woods at Bridal Aisle Boutique in Maple Grove — men's suits for galas, graduations, black-tie events and more, for rent or purchase. Book your fitting today — (763) 220-2319.",
    url: `${SITE_URL}/mens-suits/every-occasion`,
    images: [{ url: '/mens-suits/woods-hero.jpg', width: 1024, height: 768, alt: "The Woods — men's suits at Bridal Aisle Boutique" }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "The Woods — Men's Suits for Every Occasion",
  provider: { '@type': 'LocalBusiness', name: 'Bridal Aisle Boutique' },
  description: "The Woods at Bridal Aisle Boutique: men's suit rentals and purchases for formal events, galas and graduations in Maple Grove MN near Minneapolis. Professional measuring and styling appointments available.",
  areaServed: ['Osseo MN', 'Maple Grove MN', 'Brooklyn Park MN', 'Minneapolis MN'],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://www.bridalaislemn.com/appointments',
  },
};

export default function WoodsEveryOccasionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <EveryOccasionPageContent />
    </>
  );
}
