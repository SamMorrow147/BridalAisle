import type { Metadata } from 'next';
import AppointmentsPageContent from './AppointmentsPageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Book a Bridal Appointment in Minnesota | Bridal Aisle Maple Grove',
  description: 'Schedule your bridal appointment in Minnesota at Bridal Aisle Boutique in Maple Grove. Choose from standard, budget, VIP, or men\'s suit appointments. Slots fill fast — book now!',
  alternates: {
    canonical: '/appointments',
  },
  openGraph: {
    title: 'Book a Bridal Appointment in Minnesota | Bridal Aisle Maple Grove',
    description: 'Schedule your bridal appointment in Minnesota at Bridal Aisle Boutique in Maple Grove. Choose from standard, budget, VIP, or men\'s suit appointments. Slots fill fast — book now!',
    url: `${SITE_URL}/appointments`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bridalaislemn.com' },
    { '@type': 'ListItem', position: 2, name: 'Appointments', item: 'https://www.bridalaislemn.com/appointments' },
  ],
};

export default function AppointmentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AppointmentsPageContent />
    </>
  );
}
