import type { Metadata } from 'next';
import AppointmentsPageContent from './AppointmentsPageContent';

export const metadata: Metadata = {
  title: 'Book Your Bridal Appointment | Bridal Aisle Boutique',
  description: 'Schedule your personalized bridal appointment at Minnesota\'s premier boutique. Try on 2,000+ designer gowns with expert stylists. Same-day take home available. Book now!',
  alternates: {
    canonical: '/appointments',
  },
  openGraph: {
    title: 'Book Your Bridal Appointment | Bridal Aisle Boutique',
    description: 'Schedule your personalized bridal appointment at Minnesota\'s premier boutique. Try on 2,000+ designer gowns with expert stylists. Same-day take home available.',
    url: 'https://bridalaisle.com/appointments',
  },
};

export default function AppointmentsPage() {
  return <AppointmentsPageContent />;
}
