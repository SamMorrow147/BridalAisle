import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from '@/components/MobileNav';
import ErrorBoundary from '@/components/ErrorBoundary';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { SITE_URL } from '@/app/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bridal Aisle Boutique | Minnesota\'s Premier Bridal & Formalwear Destination',
  description: 'Say yes to your dream dress today! Over 2,000 designer wedding gowns, suits & accessories. Off-the-rack, personalized appointments. Maple Grove, MN. Book now!',
  keywords: 'bridal shop Minnesota, wedding dresses Minneapolis, off the rack wedding dresses, bridal boutique Maple Grove, mens suits, budget bridal, same day wedding dress',
  authors: [{ name: 'Bridal Aisle Boutique' }],
  creator: 'Bridal Aisle Boutique',
  publisher: 'Bridal Aisle Boutique',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Bridal Aisle Boutique',
    title: 'Bridal Aisle Boutique | Minnesota\'s Premier Bridal & Formalwear Destination',
    description: 'Say yes to your dream dress today! Over 2,000 designer wedding gowns, suits & accessories. Off-the-rack, personalized appointments. Maple Grove, MN.',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'Bridal Aisle Boutique - Minnesota Wedding Dresses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bridal Aisle Boutique | Minnesota\'s Premier Bridal Destination',
    description: 'Say yes to your dream dress today! Over 2,000 designer wedding gowns. Book your appointment now.',
    images: ['/og-image.jpg'], // Same image as OG
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '9_FyoXW5DB2wyhTHkVwh_ZNrxQiDWLGhLqdtetf5liQ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M824358H');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Mailchimp */}
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/632d6f51d6b447d5dd0aac702/69e49655636a18d4e1e744996.js");`,
          }}
        />
        {/* End Mailchimp */}
        {/* Favicons & App Icons */}
        <link rel="icon" type="image/png" href="/home/ba-submark-2x-e31c28b4.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/home/ba-submark-2x-e31c28b4.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/home/ba-submark-2x-e31c28b4.png" />
        <link rel="apple-touch-icon" href="/home/ba-submark-2x-e31c28b4.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/yko1pkk.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M824358H"
            height={0}
            width={0}
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <GoogleAnalytics />
        {/* Announcement Bar */}
        <div className="announcement-bar">
          <div className="announcement-content">
            <div className="announcement-spacer" aria-hidden="true" />
            <h3 className="announcement-text">Now in Our New Location</h3>
            <a href="tel:(763) 220-2319" className="announcement-phone">(763) 220-2319</a>
          </div>
        </div>
        
        <header className="sticky-header">
          {/* Desktop Navigation */}
          <nav className="main-nav desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/appointments">Appointments</Link>
            <Link href="/bridal">Bridal</Link>
            <div className="nav-logo-center">
              <Link href="/">
                <Image
                  src="/home/ba-submark-2x-e31c28b4.png"
                  alt="Bridal Aisle"
                  width={60}
                  height={80}
                />
              </Link>
            </div>
            <Link href="/mens-suits">Men&apos;s Suits</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          
          {/* Mobile Navigation */}
          <MobileNav />
        </header>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <footer className="main-footer">
          <div className="footer-content">
            <div className="footer-logo-section">
              <Image
                src="/home/ba-oval-tan-2x-779c6a0e.png"
                alt="Bridal Aisle Boutique"
                width={180}
                height={180}
              />
              <div className="footer-social-links">
                <a href="https://www.instagram.com/bridal.aisle.mn" target="_blank" rel="noopener noreferrer" aria-label="Bridal Aisle Boutique on Instagram" className="footer-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span>Instagram</span>
                </a>
                <a href="https://www.facebook.com/BridalAisleMN" target="_blank" rel="noopener noreferrer" aria-label="Bridal Aisle Boutique on Facebook" className="footer-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
            
            <div className="footer-links-section">
              <h3>LINKS</h3>
              <ul>
                <li><Link href="/appointments">APPOINTMENTS</Link></li>
                <li><Link href="/bridal">BRIDAL</Link></li>
                <li><Link href="/mens-suits">MEN&apos;S SUITS</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
                <li><Link href="/contact">CONTACT & LOCATION</Link></li>
                <li><Link href="/appointments#faq">FAQ&apos;S</Link></li>
                <li><Link href="/blog">OUR BLOG</Link></li>
              </ul>
            </div>
            
            <div className="footer-hours-section">
              <h3>HOURS</h3>
              <ul className="hours-list">
                <li>MON | CLOSED</li>
                <li>TUES | 10AM – 7PM</li>
                <li>WED | 10AM – 5PM</li>
                <li>THU | 10AM – 7PM</li>
                <li>FRI – SAT | 10AM – 5PM</li>
                <li>SUN | 12PM – 5PM</li>
              </ul>
            </div>
            
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>©2025-26 BRIDAL AISLE BOUTIQUE, LLC. | ALL RIGHTS RESERVED</p>
              <div className="footer-bottom-links">
                <a href="https://www.naomigoff.com/" target="_blank" rel="noopener">SITE DESIGN CREDIT</a>
                <span>|</span>
                <Link href="/credit">PHOTO CREDIT</Link>
                <span>|</span>
                <Link href="/privacy-policy">PRIVACY POLICY</Link>
              </div>
            </div>
            <div className="footer-badge">
              <p className="powered-by-text">powered by</p>
              <div className="badge-images">
                <a href="https://gac-mn.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/new-footer-1-600x101.webp"
                    alt="Footer badge 1"
                    width={80}
                    height={26}
                    style={{ objectFit: 'contain', height: 'auto', width: 'auto', maxHeight: '26px' }}
                  />
                </a>
                <span className="badge-separator">+</span>
                <a href="https://www.clubhausagency.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/CH_Tag.png"
                    alt="CH Tag"
                    width={80}
                    height={29}
                    style={{ objectFit: 'contain', height: 'auto', width: 'auto', maxHeight: '29px' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
