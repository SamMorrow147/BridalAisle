import type { Metadata } from 'next';
import HomePageContent from './HomePageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Buy Wedding Dresses in Minnesota | Bridal Aisle Boutique — Wedding Dress Shop Osseo MN',
  description: "Shop 2,000+ designer wedding dresses at Bridal Aisle Boutique — Minnesota's best wedding dress shop in Osseo MN. Take your dream gown home the same day. Book now.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Buy Wedding Dresses in Minnesota | Bridal Aisle Boutique — Wedding Dress Shop Osseo MN',
    description: "Shop 2,000+ designer wedding dresses at Bridal Aisle Boutique — Minnesota's best wedding dress shop in Osseo MN. Take your dream gown home the same day. Book now.",
    url: SITE_URL,
  },
};

export default function Home() {
  return <HomePageContent />;
}
