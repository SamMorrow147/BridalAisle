import type { Metadata } from 'next';
import HomePageContent from './HomePageContent';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Wedding Dress Shop in Minnesota | Bridal Aisle Boutique Maple Grove',
  description: 'Buy a wedding dress in Minnesota and take it home the same day. Bridal Aisle Boutique in Maple Grove carries 2,000+ designer gowns in every style and size. Book your appointment today!',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Wedding Dress Shop in Minnesota | Bridal Aisle Boutique Maple Grove',
    description: 'Buy a wedding dress in Minnesota and take it home the same day. Bridal Aisle Boutique in Maple Grove carries 2,000+ designer gowns in every style and size. Book your appointment today!',
    url: SITE_URL,
  },
  verification: {
    other: {
      'msvalidate.01': '87C730D8277F754A488388D1876F7B8B',
    },
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BridalShop',
  name: 'Bridal Aisle Boutique',
  url: 'https://www.bridalaislemn.com',
  telephone: '+17632202319',
  email: 'info@bridalaislemn.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '308 5th Ave. SE',
    addressLocality: 'Maple Grove',
    addressRegion: 'MN',
    postalCode: '55369',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.1194,
    longitude: -93.4013,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday'], opens: '10:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday', 'Friday', 'Saturday'], opens: '10:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '17:00' },
  ],
  priceRange: '$$',
  areaServed: ['Osseo MN', 'Maple Grove MN', 'Brooklyn Park MN', 'Plymouth MN', 'Minnetonka MN', 'Rogers MN', 'Champlin MN'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Bridal Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bridal Dress Appointment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Budget Bridal Outlet Appointment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VIP Bridal Experience' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Men's Suit Appointment" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Accessory & Styling Appointment' } },
    ],
  },
  sameAs: [
    'https://www.instagram.com/bridal.aisle.mn',
    'https://www.facebook.com/BridalAisleMN',
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bridal Aisle Boutique',
  url: 'https://www.bridalaislemn.com',
  logo: 'https://www.bridalaislemn.com/BA-logo-stacked.png',
  knowsAbout: [
    'Buy wedding dress in Minnesota',
    'Wedding dress shop Maple Grove MN',
    'Formal dresses Maple Grove MN',
    'Mens formal attire wedding Minnesota',
    'Modest wedding dresses Minnesota',
    'Bridesmaid dress shops Minnesota',
    'Book bridal appointment Minnesota',
    'Plus size wedding guest dresses Minnesota',
    'Wedding suits Maple Grove MN',
    'Best wedding dress shops Minnesota',
    'Designer wedding dresses near Maple Grove',
    'Affordable wedding dress shops Minnesota',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+17632202319',
    contactType: 'customer service',
    availableLanguage: 'English',
    hoursAvailable: 'Tu,Th 10:00-19:00 | We,Fr,Sa 10:00-17:00 | Su 12:00-17:00',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy a wedding dress in Minnesota and take it home the same day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bridal Aisle Boutique in Maple Grove, MN stocks over 2,000 off-the-rack designer gowns priced $350–$2,500. You can try dresses during a 90-minute appointment and take yours home the same day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the price range for wedding dresses at Bridal Aisle Boutique?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wedding dresses range from $350 to $2,500. Budget Bridal Outlet gowns are $800 and under. Layaway is available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an appointment to try on wedding dresses near Maple Grove MN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All appointments require a $25 fee, applied to your dress if purchased same day. Book 4–6 weeks in advance as slots fill quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Bridal Aisle Boutique carry modest wedding dresses in Minnesota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Barbie Anne Bridal Modest Collection is available. These are made-to-order gowns with full coverage in a range of sizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can men get fitted for wedding suits at Bridal Aisle Boutique near Minneapolis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Men's suit rentals and purchases are available by appointment. Rentals must be ordered one month ahead; purchases two months ahead.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageContent />
    </>
  );
}
