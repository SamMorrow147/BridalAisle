import type { Metadata } from 'next';
import BridalPageContent from './BridalPageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Wedding Dresses in Minnesota — 2,000+ Gowns | Bridal Aisle',
  description: 'Shop 2,000+ designer wedding dresses in Minnesota at Bridal Aisle Boutique in Maple Grove. Off-the-rack gowns sized 0–32 from $350. Say yes and take yours home today!',
  alternates: {
    canonical: '/bridal',
  },
  openGraph: {
    title: 'Wedding Dresses in Minnesota — 2,000+ Gowns | Bridal Aisle',
    description: 'Shop 2,000+ designer wedding dresses in Minnesota at Bridal Aisle Boutique in Maple Grove. Off-the-rack gowns sized 0–32 from $350. Say yes and take yours home today!',
    url: `${SITE_URL}/bridal`,
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wedding Dress Shopping',
  provider: { '@type': 'LocalBusiness', name: 'Bridal Aisle Boutique' },
  description: 'Off-the-rack designer wedding dresses in sizes 0–32 priced $350–$2,500. Over 2,000 gowns in stock. Same-day purchase available. Located in Maple Grove, MN — serving the greater Minneapolis metro.',
  areaServed: ['Osseo MN', 'Maple Grove MN', 'Brooklyn Park MN', 'Minneapolis MN'],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://www.bridalaislemn.com/appointments',
  },
};

export default function BridalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BridalPageContent />
    </>
  );
}
