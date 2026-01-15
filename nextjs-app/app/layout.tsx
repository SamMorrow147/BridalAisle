import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from '@/components/MobileNav';
import ErrorBoundary from '@/components/ErrorBoundary';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bridal Aisle',
  description: 'Bridal boutique and men\'s formal wear',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yko1pkk.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Announcement Bar */}
        <div className="announcement-bar">
          <div className="announcement-content">
            <h3 className="announcement-text">Our Anniversary Sale is Extended! Special savings on all Accessories and Mothers&apos; Dresses!</h3>
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
            </div>
            
            <div className="footer-links-section">
              <h3>LINKS</h3>
              <ul>
                <li><a href="/appointments">APPOINTMENTS</a></li>
                <li><a href="/contact">CONTACT & LOCATION</a></li>
                <li><a href="/appointments#faq">FAQ&apos;S</a></li>
                <li><a href="https://budgetbridaloutlet.com/" target="_blank" rel="noopener">BUDGET BRIDAL OUTLET</a></li>
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
            
            <div className="footer-instagram-section">
              <div className="instagram-widget">
                <div className="instagram-grid">
                  <Image src="/home/610559507-18549172159010363-3616446910417261816-n-112e522e.jpg" alt="Instagram post" width={100} height={100} style={{ objectFit: 'cover' }} />
                  <Image src="/home/610875462-18548828374010363-9086914678723352438-n-c7826798.jpg" alt="Instagram post" width={100} height={100} style={{ objectFit: 'cover' }} />
                  <Image src="/home/608824601-18548315188010363-8965851590628744458-n-99fbf121.jpg" alt="Instagram post" width={100} height={100} style={{ objectFit: 'cover' }} />
                  <Image src="/home/609222673-18548056630010363-1945993448068693045-n-642c9fa4.jpg" alt="Instagram post" width={100} height={100} style={{ objectFit: 'cover' }} />
                  <Image src="/home/608857184-18547552804010363-3454360656921616067-n-6948d95c.jpg" alt="Instagram post" width={100} height={100} style={{ objectFit: 'cover' }} />
                  <Image src="/home/608046442-1413971036745380-3783511421422416122-n-1300d48f.jpg" alt="Instagram post" width={100} height={100} style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>©2025-26 BRIDAL AISLE BOUTIQUE, LLC. | ALL RIGHTS RESERVED</p>
              <div className="footer-bottom-links">
                <a href="https://www.naomigoff.com/" target="_blank" rel="noopener">SITE DESIGN CREDIT</a>
                <span>|</span>
                <a href="/credit">PHOTO CREDIT</a>
                <span>|</span>
                <a href="/privacy-policy">PRIVACY POLICY</a>
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
