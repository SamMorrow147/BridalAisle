import type { Metadata } from 'next';
import MensSuitsPageContent from './MensSuitsPageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: "Men's Formal Attire & Wedding Suits in Minnesota | Bridal Aisle",
  description: "Shop men's wedding suits in Minnesota at Bridal Aisle Boutique in Maple Grove. Rentals and purchases available with professional styling. Book your men's suit appointment today — (763) 220-2319.",
  alternates: {
    canonical: '/mens-suits',
  },
  openGraph: {
    title: "Men's Formal Attire & Wedding Suits in Minnesota | Bridal Aisle",
    description: "Shop men's wedding suits in Minnesota at Bridal Aisle Boutique in Maple Grove. Rentals and purchases available with professional styling. Book your men's suit appointment today — (763) 220-2319.",
    url: `${SITE_URL}/mens-suits`,
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Men's Wedding Suits & Formal Attire",
  provider: { '@type': 'LocalBusiness', name: 'Bridal Aisle Boutique' },
  description: "Men's suit rentals and purchases for weddings and formal events in Maple Grove MN near Minneapolis. Professional measuring and styling appointments available. Free 60-minute consultation.",
  areaServed: ['Osseo MN', 'Maple Grove MN', 'Brooklyn Park MN', 'Minneapolis MN'],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://www.bridalaislemn.com/appointments',
  },
};

export default function MensSuitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <MensSuitsPageContent />
    </>
  );
}
