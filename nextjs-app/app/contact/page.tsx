import type { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Contact Bridal Aisle Boutique — Wedding Dress Shop Osseo MN | Moving to Maple Grove MN | Book a Bridal Appointment',
  description: 'Contact Bridal Aisle Boutique — wedding dress shop in Osseo MN, moving to Maple Grove soon. Call (763) 220-2319 or book a bridal appointment. Formal wear & bridal gowns near Maple Grove MN.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Bridal Aisle Boutique — Wedding Dress Shop Osseo MN | Moving to Maple Grove MN | Book a Bridal Appointment',
    description: 'Contact Bridal Aisle Boutique — wedding dress shop in Osseo MN, moving to Maple Grove soon. Call (763) 220-2319 or book a bridal appointment. Formal wear & bridal gowns near Maple Grove MN.',
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
