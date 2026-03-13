import type { Metadata } from 'next';
import BridalPageContent from './BridalPageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Buy Wedding Dresses in Minnesota | Designer & Affordable Bridal Gowns — Bridal Aisle Boutique near Maple Grove MN',
  description: 'Shop designer wedding dresses, modest bridal gowns, bridesmaid dresses & wedding guest attire at Bridal Aisle Boutique near Maple Grove MN. 2,000+ off-the-rack gowns, sizes 0–32.',
  alternates: {
    canonical: '/bridal',
  },
  openGraph: {
    title: 'Buy Wedding Dresses in Minnesota | Designer & Affordable Bridal Gowns — Bridal Aisle Boutique near Maple Grove MN',
    description: 'Shop designer wedding dresses, modest bridal gowns, bridesmaid dresses & wedding guest attire at Bridal Aisle Boutique near Maple Grove MN. 2,000+ off-the-rack gowns, sizes 0–32.',
    url: `${SITE_URL}/bridal`,
  },
};

export default function BridalPage() {
  return <BridalPageContent />;
}
