'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="page-container">
        <div className="contact-thank-you">
          <h1>Thank you!</h1>
          <p>We&apos;ll be in touch soon!</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-container">
      <section className="contact-page-section">
        <div className="contact-page-container">
          {/* Left Side - Image with Arched Top and Logo */}
          <div className="contact-image-side">
            <div className="contact-image-arched">
              <Image
                src="/contact/Contact.jpg"
                alt="Couple at Bridal Aisle"
                fill
                className="contact-main-image"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="contact-image-logo">
                <Image
                  src="/home/flower-icon.png"
                  alt="Flower icon"
                  width={80}
                  height={100}
                  style={{ objectFit: 'contain', filter: 'invert(1) opacity(0.6)' }}
                />
              </div>
            </div>

            {/* Contact Info Grid - Below Image */}
            <div className="contact-info-grid">
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

            <h2 className="contact-welcome-heading">We are excited to connect with you!</h2>
            <p className="contact-intro-text">
              Fill out the form below & we will be in touch with you within 2 business days! 
              If you&apos;re looking to book an appointment, <Link href="/appointments">click here</Link>.
            </p>

            <form onSubmit={handleSubmit} className="contact-main-form">
              <input
                type="text"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="PHONE NUMBER"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <textarea
                placeholder="Leave a message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={8}
                required
              ></textarea>
              <button type="submit" className="contact-send-btn">
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
