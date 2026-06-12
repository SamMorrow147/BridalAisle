import type { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Contact Bridal Aisle Boutique — Wedding Dress Shop Maple Grove, MN',
  description: 'Visit Bridal Aisle Boutique in Maple Grove, MN. Open Tue–Sun. Call (763) 220-2319 or email info@bridalaislemn.com. We respond within 2 business days.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Bridal Aisle Boutique — Wedding Dress Shop Maple Grove, MN',
    description: 'Visit Bridal Aisle Boutique in Maple Grove, MN. Open Tue–Sun. Call (763) 220-2319 or email info@bridalaislemn.com. We respond within 2 business days.',
    url: `${SITE_URL}/contact`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bridalaislemn.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.bridalaislemn.com/contact' },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageContent />
    </>
  );
}
