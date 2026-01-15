import type { Metadata } from 'next';
import BridalPageContent from './BridalPageContent';

export const metadata: Metadata = {
  title: 'Wedding Dresses - 2,000+ Designer Gowns | Bridal Aisle Boutique',
  description: 'Find your dream wedding dress! Shop 2,000+ new designer gowns off-the-rack. Budget Bridal from $350-$600. Take it home today. Sizes 0-32. Book your appointment!',
  alternates: {
    canonical: '/bridal',
  },
  openGraph: {
    title: 'Wedding Dresses - 2,000+ Designer Gowns | Bridal Aisle Boutique',
    description: 'Find your dream wedding dress! Shop 2,000+ new designer gowns off-the-rack. Budget Bridal from $350-$600. Take it home today. Sizes 0-32.',
    url: 'https://bridalaisle.com/bridal',
  },
};

export default function BridalPage() {
  return <BridalPageContent />;
}
