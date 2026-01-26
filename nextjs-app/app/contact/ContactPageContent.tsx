'use client';

import Image from 'next/image';
import Link from 'next/link';
import PreparingForVisit from '@/components/PreparingForVisit';
import Script from 'next/script';

export default function ContactPageContent() {
  return (
    <>
    <main className="page-container">
      {/* Contact Hero Parallax - full width, shows top of image, "Contact Us" overlay */}
      <section className="contact-hero-parallax" aria-label="Contact Us">
        <div className="contact-hero-parallax-overlay" />
        <div className="contact-hero-parallax-content">
          <h1 className="contact-hero-parallax-title">Contact Us</h1>
        </div>
      </section>

      <section className="contact-page-section">
        <div className="contact-page-container">
          {/* Left Column: Image + Contact Info */}
          <div className="contact-image-arched-wrapper">
            <div className="contact-image-arched">
              <Image
                src="/contact/Contact.jpg"
                alt="Couple at Bridal Aisle"
                fill
                className="contact-main-image"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="contact-image-submark">
                <Image
                  src="/ba-submark2-dark_2x.png"
                  alt="Bridal Aisle submark"
                  width={120}
                  height={120}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* Contact Info - under the image, centered in left column */}
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <h3>EMAIL</h3>
              <a href="mailto:info@bridalaislemn.com">
                info@bridalaislemn.com
              </a>
            </div>
            
            <div className="contact-info-item">
              <h3>PHONE</h3>
              <a href="tel:7632202319">
                (763) 220-2319
              </a>
            </div>
            
            <div className="contact-info-item contact-location-item">
              <h3>OUR LOCATION</h3>
              <a 
                href="https://www.google.com/maps/place/Bridal+Aisle+Boutique" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                308 5th Ave. SE, Osseo, MN 55369
              </a>
            </div>
            
            <div className="contact-info-item contact-hours-item">
              <h3>HOURS</h3>
              <div className="contact-hours-list">
                <p>MON | CLOSED</p>
                <p>TUES | 10AM – 7PM</p>
                <p>WED | 10AM – 5PM</p>
                <p>THU | 10AM – 7PM</p>
                <p>FRI – SAT | 10AM – 5PM</p>
                <p>SUN | 12PM – 5PM</p>
              </div>
            </div>
          </div>

          {/* Right Side - Logo, INQUIRE, and Form */}
          <div className="contact-form-side">
            <div className="contact-top-branding">
              <Image
                src="/BA-logo-elongated@2x.png"
                alt="Bridal Aisle"
                width={300}
                height={60}
                style={{ objectFit: 'contain' }}
              />
              <h3 className="contact-inquire-label">INQUIRE</h3>
            </div>

            <h2 className="contact-welcome-heading">We are <span className="excited-ex">ex</span>cited to connect with you!</h2>
            <p className="contact-intro-text">
              Fill out the form below & we will be in touch with you within 2 business days! 
              If you&apos;re looking to book an appointment, <Link href="/appointments">click here</Link>.
            </p>

            <div className="contact-form-iframe-wrapper">
              <iframe
                id="JotFormIFrame-260125051379048"
                title="BRIDAL AISLE"
                onLoad={() => window.parent.scrollTo(0, 0)}
                // @ts-expect-error React expects lowercase allowtransparency for DOM passthrough; TS types use allowTransparency
                allowtransparency="true"
                allow="geolocation; microphone; camera; fullscreen; payment"
                src="https://form.jotform.com/260125051379048"
                style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </section>

      <PreparingForVisit />
      
      <Script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" strategy="afterInteractive" />
      <Script id="jotform-embed" strategy="afterInteractive">
        {`
          if (window.jotformEmbedHandler) {
            window.jotformEmbedHandler("iframe[id='JotFormIFrame-260125051379048']", "https://form.jotform.com/");
          }
        `}
      </Script>
    </main>
    </>
  );
}
