import type { Metadata } from 'next';
import MensSuitsPageContent from './MensSuitsPageContent';

export const metadata: Metadata = {
  title: "Men's Suits - Rentals & Custom Fits | Bridal Aisle Boutique",
  description: "Premium suit rentals & custom fits for weddings, prom & events. DuBois Formalwear partner. Pure silk suits available for purchase. Book your fitting in Osseo, MN.",
  alternates: {
    canonical: '/mens-suits',
  },
  openGraph: {
    title: "Men's Suits - Rentals & Custom Fits | Bridal Aisle Boutique",
    description: "Premium suit rentals & custom fits for weddings, prom & events. DuBois Formalwear partner. Pure silk suits available for purchase.",
    url: 'https://bridalaisle.com/mens-suits',
  },
};

export default function MensSuitsPage() {
  return <MensSuitsPageContent />;
}
