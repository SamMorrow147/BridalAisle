import type { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Contact Bridal Aisle Boutique — Wedding Dress Shop Maple Grove MN | Book a Bridal Appointment',
  description: 'Contact Bridal Aisle Boutique — wedding dress shop at 15825 95th Ave N, Maple Grove MN. Call (763) 220-2319 or book a bridal appointment. Formal wear & bridal gowns.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Bridal Aisle Boutique — Wedding Dress Shop Maple Grove MN | Book a Bridal Appointment',
    description: 'Contact Bridal Aisle Boutique — wedding dress shop at 15825 95th Ave N, Maple Grove MN. Call (763) 220-2319 or book a bridal appointment. Formal wear & bridal gowns.',
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
