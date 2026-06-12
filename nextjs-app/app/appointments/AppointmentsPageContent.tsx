'use client';

import { useEffect } from 'react';
import AppointmentsHeroSlideshow from '@/components/AppointmentsHeroSlideshow';
import AppointmentDetailSlideshow from '@/components/AppointmentDetailSlideshow';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import PreparingForVisit from '@/components/PreparingForVisit';
import FAQ from '@/components/FAQ';
import Image from 'next/image';
import Link from 'next/link';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof window !== 'undefined') window.history.replaceState(null, '', '#' + id);
  }
}

export default function AppointmentsPageContent() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    }
  }, []);
  const heroSlides = [
    { image: '/appointments/hero-1.jpg', alt: 'Designer wedding dress at Bridal Aisle Boutique — book a bridal appointment in Minnesota' },
    { image: '/appointments/hero-2.jpg', alt: 'Designer wedding dress at Bridal Aisle Boutique — book a bridal appointment in Minnesota' },
    { image: '/appointments/hero-3.jpg', alt: 'Designer wedding dress at Bridal Aisle Boutique — book a bridal appointment in Minnesota' },
    { image: '/appointments/hero-4.jpg', alt: 'Designer wedding dress at Bridal Aisle Boutique — book a bridal appointment in Minnesota' },
    { image: '/appointments/hero-5.jpg', alt: 'Designer wedding dress at Bridal Aisle Boutique — book a bridal appointment in Minnesota' },
    { image: '/appointments/hero-6.jpg', alt: 'Designer wedding dress at Bridal Aisle Boutique — book a bridal appointment in Minnesota' },
  ];

  return (
    <>
      <main className="page-container">
      {/* Hero Section */}
      <section className="appointments-hero-section">
        <AppointmentsHeroSlideshow slides={heroSlides} interval={5000} />
      </section>

      {/* Form Section */}
      <section id="book-appointment" className="content-section centered" style={{ 
        padding: '8rem 3rem', 
        background: '#f4f6f4',
        minHeight: '70vh'
      }}>
        <h2 style={{ fontSize: '3rem', marginTop: '0', marginBottom: '2rem', color: '#2c2c2c' }}>
          Book an Appointment
        </h2>
        <div style={{ width: '100%', maxWidth: '900px', marginTop: '2rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <iframe 
            src="https://app.bridallive.com/forms.html?formType=scheduler&retailerId=b9c2f4ac&lang=en" 
            width="100%" 
            height="770" 
            frameBorder="0"
            style={{ display: 'block', margin: '0 auto' }}
          />
        </div>
      </section>

      {/* Appointment Menu Section */}
      <section className="appointment-menu-section">
        <div className="appointment-menu-container">
          <p className="appointment-menu-title">BRIDAL AISLE</p>
          <h3 className="appointment-menu-subtitle">Appointment Menu</h3>
          <div className="appointment-menu-grid">
            <a href="#appointment-1" className="appointment-menu-item" onClick={(e) => scrollToSection(e, 'appointment-1')}>
              <h3>Bridal Aisle Dress Appointment</h3>
            </a>
            <a href="#appointment-2" className="appointment-menu-item" onClick={(e) => scrollToSection(e, 'appointment-2')}>
              <h3>Budget Bridal Outlet Dress Appointment</h3>
            </a>
            <a href="#appointment-3" className="appointment-menu-item" onClick={(e) => scrollToSection(e, 'appointment-3')}>
              <h3>VIP Bridal Experience</h3>
            </a>
            <a href="#appointment-5" className="appointment-menu-item" onClick={(e) => scrollToSection(e, 'appointment-5')}>
              <h3>Men&apos;s Suit<br />Appointment</h3>
            </a>
            <a href="#appointment-4" className="appointment-menu-item" onClick={(e) => scrollToSection(e, 'appointment-4')}>
              <h3>ACCESSORY/Bridal Styling<br />Appointment</h3>
            </a>
          </div>
        </div>
      </section>

      {/* Appointment Detail Sections */}
      
      {/* 1. Bridal Aisle Dress Appointment */}
      <section id="appointment-1" className="appointment-detail-section">
        <div className="appointment-detail-container">
          <AppointmentDetailSlideshow slides={[
            { image: '/appointments/appt-1.jpg', alt: 'Bride trying on designer wedding gown during bridal appointment at Bridal Aisle Boutique, Maple Grove MN' },
            { image: '/appointments/appt-1-1.jpg', alt: 'Bride trying on designer wedding gown during bridal appointment at Bridal Aisle Boutique, Maple Grove MN' },
            { image: '/appointments/appt-1-2.jpg', alt: 'Bride trying on designer wedding gown during bridal appointment at Bridal Aisle Boutique, Maple Grove MN' },
            { image: '/appointments/appt-1-3.jpg', alt: 'Bride trying on designer wedding gown during bridal appointment at Bridal Aisle Boutique, Maple Grove MN' },
            { image: '/appointments/appt-1-4.jpg', alt: 'Bride trying on designer wedding gown during bridal appointment at Bridal Aisle Boutique, Maple Grove MN' },
            { image: '/appointments/appt-1-5.jpg', alt: 'Bride trying on designer wedding gown during bridal appointment at Bridal Aisle Boutique, Maple Grove MN' }
          ]} />
          <div className="appointment-detail-content">
            <h2 className="appointment-detail-title">Bridal Aisle Dress Appointment</h2>
            <h3 className="appointment-detail-subtitle">APPT. FEE | $25.00 (APPLIED TO DRESS SALE WHEN PURCHASED THE SAME DAY AS THE APPOINTMENT)</h3>
            <p>The Bride + 4 guests will enjoy a 90-minute bridal appointment with a personal stylist to assist you in finding &apos;The One&apos;! While your guests relax in their designated seating area, your expert stylist will guide you in selecting and trying on dresses that suit your style, body shape, and wedding vision.</p>
            <p>The bride will have access to all dresses in the store including the Budget Bridal Outlet to try on. This appointment type is recommended for brides with a budget higher than $900.</p>
            <p>Bridal Aisle dresses range from $900–$2,500 and Budget Bridal dresses range from $350–$800.</p>
            <Link href="#book-appointment" className="appointment-cta-btn" onClick={(e) => scrollToSection(e, 'book-appointment')}>SCHEDULE YOUR APPOINTMENT</Link>
            <ul className="appointment-features-list">
              <li>$25 APPOINTMENT FEE</li>
              <li>UP TO 4 GUESTS</li>
              <li>90 MINUTES WITH A BRIDAL STYLIST</li>
              <li>ACCESS TO ALL DRESSES IN THE STORE</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Budget Bridal Outlet Dress Appointment */}
      <section id="appointment-2" className="appointment-detail-section">
        <div className="appointment-detail-container">
          <div className="appointment-detail-content">
            <h2 className="appointment-detail-title">Budget Bridal Outlet Dress Appointment</h2>
            <h3 className="appointment-detail-subtitle">APPT. FEE | $25.00 (APPLIED TO DRESS SALE WHEN PURCHASED THE SAME DAY AS THE APPOINTMENT)</h3>
            <p>The Bride + 4 guests will enjoy a 90-minute bridal appointment in our Budget Bridal Outlet section of the store where all dresses are priced $800 or less. While your guests relax in their designated seating area, your personal stylist will guide you in selecting and trying on dresses that suit your style, budget, body shape, and wedding vision.</p>
            <p>The main focus will be on the budget bridal dresses; however, the bride will have access to shop the Bridal Aisle dresses ranging from $900–$2,500.</p>
            <Link href="#book-appointment" className="appointment-cta-btn" onClick={(e) => scrollToSection(e, 'book-appointment')}>SCHEDULE YOUR APPOINTMENT</Link>
            <ul className="appointment-features-list">
              <li>$25 APPOINTMENT FEE</li>
              <li>UP TO 4 GUESTS</li>
              <li>90 MINUTES WITH A BRIDAL STYLIST</li>
              <li>ACCESS TO ALL DRESSES IN THE STORE</li>
            </ul>
          </div>
          <AppointmentDetailSlideshow slides={[
            { image: '/appointments/appt-2.jpg', alt: 'Bride during affordable budget bridal appointment — designer wedding dresses $800 or less, Minnesota' },
            { image: '/appointments/appt-2-1.jpg', alt: 'Bride during affordable budget bridal appointment — designer wedding dresses $800 or less, Minnesota' },
            { image: '/appointments/appt-2-2.jpg', alt: 'Bride during affordable budget bridal appointment — designer wedding dresses $800 or less, Minnesota' },
            { image: '/appointments/appt-2-3.jpg', alt: 'Bride during affordable budget bridal appointment — designer wedding dresses $800 or less, Minnesota' },
            { image: '/appointments/appt-2-4.jpg', alt: 'Bride during affordable budget bridal appointment — designer wedding dresses $800 or less, Minnesota' }
          ]} />
        </div>
      </section>

      {/* 3. VIP Bridal Experience */}
      <section id="appointment-3" className="appointment-detail-section">
        <div className="appointment-detail-container">
          <AppointmentDetailSlideshow slides={[
            { image: '/appointments/appt-3.jpg', alt: 'Bride and guests during VIP bridal experience — exclusive wedding dress shopping in Minnesota' },
            { image: '/appointments/appt-3-1.jpg', alt: 'Bride and guests during VIP bridal experience — exclusive wedding dress shopping in Minnesota' },
            { image: '/appointments/appt-3-2.jpg', alt: 'Bride and guests during VIP bridal experience — exclusive wedding dress shopping in Minnesota' },
            { image: '/appointments/appt-3-3.jpg', alt: 'Bride and guests during VIP bridal experience — exclusive wedding dress shopping in Minnesota' },
            { image: '/appointments/appt-3-4.jpg', alt: 'Bride and guests during VIP bridal experience — exclusive wedding dress shopping in Minnesota' },
            { image: '/appointments/appt-3-5.jpg', alt: 'Bride and guests during VIP bridal experience — exclusive wedding dress shopping in Minnesota' },
            { image: '/appointments/appt-3-6.jpg', alt: 'Bride and guests during VIP bridal experience — exclusive wedding dress shopping in Minnesota' }
          ]} />
          <div className="appointment-detail-content">
            <h2 className="appointment-detail-title">VIP Bridal Experience</h2>
            <h3 className="appointment-detail-subtitle">APPT. FEE | $100 (APPLIED TO DRESS SALE WHEN PURCHASED THE SAME DAY AS THE APPOINTMENT)</h3>
            <p>The Bride and up to 10 guests will enjoy a 90-minute bridal appointment with one of our senior stylists to assist you in finding &apos;The One&apos;! While your guests relax in their semi-private designated seating area, your expert stylist will guide you in selecting and trying on dresses that suit your style, body shape, and wedding vision.</p>
            <p>The bride will have access to all dresses in the store.</p>
            <p>Bridal Aisle dresses range from $900–$2,500 and Budget Bridal dresses range from $350–$800.</p>
            <a href="tel:763-220-2319" className="appointment-cta-btn">CALL TO SCHEDULE</a>
            <ul className="appointment-features-list">
              <li>VIP APPOINTMENTS ARE BOOKED BY PHONE ONLY. CALL US TO RESERVE.</li>
              <li>$100 APPOINTMENT FEE</li>
              <li>UP TO 10 GUESTS</li>
              <li>90 MINUTES WITH A SENIOR BRIDAL STYLIST</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Accessory/Bridal Styling Appointment */}
      <section id="appointment-4" className="appointment-detail-section">
        <div className="appointment-detail-container">
          <div className="appointment-detail-content">
            <h2 className="appointment-detail-title">Accessory/Bridal Styling Appointment</h2>
            <h3 className="appointment-detail-subtitle">WE CHARGE A $25 CANCELLATION FEE IF NOT CANCELLED AT LEAST 48 HOURS BEFORE APPOINTMENT</h3>
            <p>You found your perfect dress, now it&apos;s time to accessorize!</p>
            <p>This appointment is a 60-minute one-on-one consultation with a trained stylist to show you the perfect pairing of a veil or belt (& more) with your wedding dress!</p>
            <p>Feel free to bring in your dress to get the full effect and see how the accessories complement one another.</p>
            <Link href="#book-appointment" className="appointment-cta-btn" onClick={(e) => scrollToSection(e, 'book-appointment')}>SCHEDULE YOUR APPOINTMENT</Link>
            <ul className="appointment-features-list">
              <li>60-MINUTES WITH A BRIDAL STYLIST</li>
              <li>BRING YOUR DRESS (OPTIONAL)</li>
              <li>$25 CANCELLATION FEE</li>
            </ul>
          </div>
          <AppointmentDetailSlideshow slides={[
            { image: '/appointments/appt-4-2.jpg', alt: 'Bride trying on wedding veils and accessories — styling appointment at Bridal Aisle Boutique MN' },
            { image: '/appointments/appt-4-3.jpg', alt: 'Bride trying on wedding veils and accessories — styling appointment at Bridal Aisle Boutique MN' },
            { image: '/appointments/appt-4-4.jpg', alt: 'Bride trying on wedding veils and accessories — styling appointment at Bridal Aisle Boutique MN' },
            { image: '/appointments/appt-4-5.jpg', alt: 'Bride trying on wedding veils and accessories — styling appointment at Bridal Aisle Boutique MN' }
          ]} />
        </div>
      </section>

      {/* 5. The Wood's Men's Suits */}
      <section id="appointment-5" className="appointment-detail-section">
        <div className="appointment-detail-container">
          <AppointmentDetailSlideshow slides={[
            { image: '/appointments/appt-5.jpg', alt: 'Groom selecting men\'s formal attire for wedding at Bridal Aisle Boutique — wedding suits Minnesota' },
            { image: '/appointments/appt-5-1.jpg', alt: 'Groom selecting men\'s formal attire for wedding at Bridal Aisle Boutique — wedding suits Minnesota' },
            { image: '/appointments/appt-5-2.jpg', alt: 'Groom selecting men\'s formal attire for wedding at Bridal Aisle Boutique — wedding suits Minnesota' },
            { image: '/appointments/appt-5-3.jpg', alt: 'Groom selecting men\'s formal attire for wedding at Bridal Aisle Boutique — wedding suits Minnesota' },
            { image: '/appointments/appt-5-4.jpg', alt: 'Groom selecting men\'s formal attire for wedding at Bridal Aisle Boutique — wedding suits Minnesota' },
            { image: '/appointments/appt-5-5.jpg', alt: 'Groom selecting men\'s formal attire for wedding at Bridal Aisle Boutique — wedding suits Minnesota' }
          ]} />
          <div className="appointment-detail-content">
            <h2 className="appointment-detail-title">The Wood&apos;s Men&apos;s Suits</h2>
            <p>We carry suits for rental or for purchase.</p>
            <p>During your 60 Minute appointment, you will have a designated stylist to assist you in selecting the perfect color and style for your wedding or event.</p>
            <p>It is suggested that the couple come in separate from their party members to make their selections. Once the styles are selected, party members are encouraged to make an appointment to get professionally measured with us and we will get your suits ordered!</p>
            <p>All orders and measurements must be provided a month prior to the event date to guarantee you suit rentals or two months prior to the event to guarantee suits for purchase.</p>
            <Link href="#book-appointment" className="appointment-cta-btn" onClick={(e) => scrollToSection(e, 'book-appointment')}>SCHEDULE YOUR APPOINTMENT</Link>
            <ul className="appointment-features-list">
              <li>No Appointment Fee</li>
              <li>60 Minutes with a bridal stylist</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Prepare Section */}
      <PreparingForVisit />

      {/* Testimonials Section */}
      <section className="testimonial-carousel-section">
        <TestimonialCarousel testimonials={[
          {
            name: 'CAITLIN MOSLEY, BRIDAL BOUTIQUE VIP APPOINTMENT',
            appointmentType: 'VIP APPOINTMENT',
            highlight: 'I found a dress that exceeded my expectations & I could not be happier!',
            quote: '"Alex was my consultant & I just want to say how amazing she was! She made this experience smooth & seamless, I instantly felt comfortable with her & she was extremely helpful through the entire process! I absolutely loved the privacy & how we felt as if we had the whole shop to ourselves! It made the experience so much more intimate & special. I found a dress that exceeded my expectations & I could not be happier!"',
            image: '/home/caitlin-mosley-bridal-aisle-boutique-vip-appointment-a19c0577.jpg'
          },
          {
            name: 'DANIELLE LAVEAU',
            appointmentType: 'BRIDAL BOUTIQUE',
            highlight: 'I was expecting to pay so much more for the dress',
            quote: '"I had a fantastic experience at Bridal Aisle. Kendra was so knowledgeable and helpful and made it her mission to help me narrow down some options. And there are SO MANY OPTIONS. Especially if you\'re a size 12. It was almost overwhelming. So many dresses were gorgeous and I could barely make up my mind. And the prices weren\'t bad at all in comparison to some other stores I visited. I was expecting to pay so much more for the dress and came away beyond pleased with my pick."',
            image: '/home/danielle-laveau-14991064.jpg'
          },
          {
            name: 'HANNAH DAVIS',
            appointmentType: 'BRIDAL BOUTIQUE',
            highlight: 'Found the dress of my dreams for only $800',
            quote: '"Is there a way I can add more than 5 stars? Because this place deserves it!! Not only are the owners and employees EXTREMELY friendly and helpful, but they also listened to what my vision was and then made it come to life significantly under my budget. I loved that they let me look around first to show them what I wanted and that almost all of the dresses I would get to take home that day, which is exactly what I did. Found the dress of my dreams for only $800 and I will recommend this place to everyone looking for formal attire."',
            image: '/home/hannah-davis-unknown-photographer-b0d77ef2.png'
          },
          {
            name: 'JESSICA MOTZKO',
            appointmentType: 'BRIDAL BOUTIQUE',
            highlight: 'I said YES to the dress and couldn\'t be happier!',
            quote: '"BEST experience ever! Stacy was great! She was super attentive to my dress dreams, my budget, and me/my bridal party. I said YES to the dress and couldn\'t be happier! Thank you Stacy and Bridal Aisle for making this experience so special, not only me but my bridal party as well!"',
            image: '/home/jessica-motzko-bridal-aisle-in-store-photo-813be1aa.png'
          }
        ]} />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bridal-faq-section">
        <h2 className="faq-heading">FAQ</h2>
        <FAQ faqs={[
          {
            question: "Do I need to set up an appointment to try on wedding dresses?",
            answer: "Yes. We require all brides to book appointments. Don't hesitate to make your appointment as we book up well in advance. Appointments allow us to provide you and your party with the attention and experience you deserve."
          },
          {
            question: "Why do you charge for bridal appointments?",
            answer: "Our appointment fee ensures that we can provide you with dedicated, personalized service and maintain our curated collection of designer gowns. This fee helps us offer you the exclusive, stress-free experience that makes Bridal Aisle special. Our bridal gown appointments are 90 minutes for brides who are ready to take their dream dress home!"
          },
          {
            question: "How many people should I bring with me to try on wedding dresses?",
            answer: "We welcome parties of up to 4 plus the Bride. We recommend bringing 2-4 people whose opinions you trust. Too many voices can make the decision harder, while a small, supportive group helps you focus on what feels right for you. If you anticipate having 5 or more people for your bridal appointment, we offer a VIP appointment with a fee for your convenience."
          },
          {
            question: "I want to find accessories for a wedding dress I already have. Am I allowed to bring it into the shop?",
            answer: "Absolutely! We find it's much easier to help you find the right additions to your gown when you can try them on together. Please call to get on our schedule or book online here."
          },
          {
            question: "What is your return/exchange policy?",
            answer: "All sales are final. No exchanges or refunds."
          },
          {
            question: "Can you hold a dress for me while I think it over?",
            answer: "We can hold your dresses for 24 hours for a non-refundable $50. The $50 will be applied to the purchase of your dress. If you do not purchase your dress within the 24-hour period, the $50 will be retained and the dress will be returned to the floor. This ensures we give every bride the best opportunity to find the dress of her dreams!"
          },
          {
            question: "What sizes do you carry?",
            answer: "We carry a wide range of sizes to accommodate every bride. Our collection includes sizes from 0-30+, and we're committed to helping every bride find her perfect dress."
          },
          {
            question: "What is the price range for your wedding dresses?",
            answer: "We offer something for every budget, including our Budget Bridal section with dresses starting at lower price points. Our dresses range from $350.00–$2,500. Bridal Aisle dresses range from $900–$2,500 and Budget Bridal dresses range from $350–$800."
          },
          {
            question: "What type of inventory do you carry?",
            answer: "We carry over 2,000 designer gowns from top bridal designers for you to bring home today! We also offer accessories, veils, and suits for purchase or rent through our men's department, The Woods Men's Suits."
          },
          {
            question: "What if I need alterations for a wedding dress I really like?",
            answer: "Alterations are not included with the price of the dress. We will provide you with multiple trusted alteration specialists we refer our clients to around the Twin Cities area."
          },
          {
            question: "Layaway: Are you interested in a dress, but need help making the purchase?",
            answer: "Yes! We offer layaway options to help make your dream dress more accessible. At Bridal Aisle Boutique, we offer a 30 day layaway option! Speak with your stylist during your appointment to learn about our flexible payment plans."
          },
          {
            question: "Can I bring drinks/food into the store?",
            answer: "We do not allow drinks or food within the store. Champagne and clear liquids are acceptable, but all other substances will be asked to be left in our front waiting area. Champagne must be popped either in our restroom or outside."
          }
        ]} />
      </section>
    </main>
    </>
  );
}
