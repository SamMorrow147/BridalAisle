import type { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us & Location | Bridal Aisle Boutique',
  description: 'Visit Bridal Aisle Boutique in Osseo, MN. Hours, directions, parking & contact info. Call (763) 220-2319 or book online. We can\'t wait to meet you!',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us & Location | Bridal Aisle Boutique',
    description: 'Visit Bridal Aisle Boutique in Osseo, MN. Hours, directions, parking & contact info. Call (763) 220-2319 or book online.',
    url: 'https://bridalaisle.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
