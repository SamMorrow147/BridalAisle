import type { Metadata } from 'next';
import MensSuitsPageContent from './MensSuitsPageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: "Men's Formal Attire for Weddings in Minnesota | Custom Suits & Formal Wear — Bridal Aisle Boutique near Maple Grove MN",
  description: "Shop men's wedding suits, tuxedos & formal wear at Bridal Aisle Boutique near Maple Grove MN. Suit rentals & custom-made suits for weddings in Minnesota. Book your appointment.",
  alternates: {
    canonical: '/mens-suits',
  },
  openGraph: {
    title: "Men's Formal Attire for Weddings in Minnesota | Custom Suits & Formal Wear — Bridal Aisle Boutique near Maple Grove MN",
    description: "Shop men's wedding suits, tuxedos & formal wear at Bridal Aisle Boutique near Maple Grove MN. Suit rentals & custom-made suits for weddings in Minnesota. Book your appointment.",
    url: `${SITE_URL}/mens-suits`,
  },
};

export default function MensSuitsPage() {
  return <MensSuitsPageContent />;
}
