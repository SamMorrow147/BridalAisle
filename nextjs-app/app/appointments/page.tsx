import type { Metadata } from 'next';
import AppointmentsPageContent from './AppointmentsPageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Book a Bridal Appointment in Minnesota | Bridal Aisle Boutique — Osseo MN',
  description: "Book your bridal appointment at Bridal Aisle Boutique — Minnesota's best wedding dress shop. Bridal, VIP, Budget & Men's Suit appointments. Same-day dress purchase in Osseo MN.",
  alternates: {
    canonical: '/appointments',
  },
  openGraph: {
    title: 'Book a Bridal Appointment in Minnesota | Bridal Aisle Boutique — Osseo MN',
    description: "Book your bridal appointment at Bridal Aisle Boutique — Minnesota's best wedding dress shop. Bridal, VIP, Budget & Men's Suit appointments. Same-day dress purchase in Osseo MN.",
    url: `${SITE_URL}/appointments`,
  },
};

export default function AppointmentsPage() {
  return <AppointmentsPageContent />;
}
