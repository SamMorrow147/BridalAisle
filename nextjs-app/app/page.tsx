import type { Metadata } from 'next';
import HomePageContent from './HomePageContent';

export const metadata: Metadata = {
  title: "Minnesota's Premier Bridal & Formalwear Destination | Bridal Aisle Boutique",
  description: "Say yes to your dream dress today! Over 2,000 designer wedding gowns, suits & accessories. Off-the-rack, personalized appointments. Osseo, MN. Book now!",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Bridal Aisle Boutique | Minnesota's Premier Bridal & Formalwear Destination",
    description: "Say yes to your dream dress today! Over 2,000 designer wedding gowns, suits & accessories. Off-the-rack, personalized appointments. Osseo, MN.",
    url: 'https://bridalaisle.com',
  },
};

export default function Home() {
  return <HomePageContent />;
}
