'use client';

import AppointmentsHeroSlideshow from '@/components/AppointmentsHeroSlideshow';
import AppointmentDetailSlideshow from '@/components/AppointmentDetailSlideshow';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQ from '@/components/FAQ';
import PageHead from '@/components/PageHead';
import Image from 'next/image';
import Link from 'next/link';

export default function AppointmentsPage() {
  const heroSlides = [
    { image: '/appointments/hero-1.jpg', alt: 'Wedding dress detail' },
    { image: '/appointments/hero-2.jpg', alt: 'Bridal gown' },
    { image: '/appointments/hero-3.jpg', alt: 'Wedding dress' },
    { image: '/appointments/hero-4.jpg', alt: 'Bridal detail' },
    { image: '/appointments/hero-5.jpg', alt: 'Wedding dress' },
    { image: '/appointments/hero-6.jpg', alt: 'Bridal gown' },
  ];

  return (
    <>
      <PageHead
        title="Book Your Bridal Appointment"
        description="Schedule your personalized bridal appointment at Minnesota's premier boutique. Try on 2,000+ designer gowns with expert stylists. Same-day take home available. Book now!"
        canonicalPath="/appointments"
      />
      <main className="page-container">
      {/* Hero Section */}
      <section className="appointments-hero-section">
        <AppointmentsHeroSlideshow slides={heroSlides} interval={5000} />
      </section>

      {/* Form Section */}
      <section className="content-section centered" style={{ 
        padding: '8rem 3rem', 
        background: '#f4f6f4',
        minHeight: '70vh'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#2c2c2c' }}>
          Book an Appointment
        </h1>
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
          <h1 className="appointment-menu-title">BRIDAL AISLE</h1>
          <h2 className="appointment-menu-subtitle">Appointment Menu</h2>
          <div className="appointment-menu-grid">
            <a href="#appointment-1" className="appointment-menu-item">
              <h3>Bridal Aisle Dress Appointment</h3>
            </a>
            <a href="#appointment-2" className="appointment-menu-item">
              <h3>Budget Bridal Outlet Dress Appointment</h3>
            </a>
            <a href="#appointment-3" className="appointment-menu-item">
              <h3>VIP Bridal Experience</h3>
            </a>
            <a href="#appointment-5" className="appointment-menu-item">
              <h3>Men&apos;s Suit<br />Appointment</h3>
            </a>
            <a href="#appointment-4" className="appointment-menu-item">
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
            { image: '/appointments/appt-1.jpg', alt: 'Bridal appointment' },
            { image: '/appointments/appt-1-1.jpg', alt: 'Bridal appointment' },
            { image: '/appointments/appt-1-2.jpg', alt: 'Bridal appointment' },
            { image: '/appointments/appt-1-3.jpg', alt: 'Bridal appointment' },
            { image: '/appointments/appt-1-4.jpg', alt: 'Bridal appointment' },
            { image: '/appointments/appt-1-5.jpg', alt: 'Bridal appointment' }
          ]} />
          <div className="appointment-detail-content">
            <h1 className="appointment-detail-title">Bridal Aisle Dress Appointment</h1>
            <h3 className="appointment-detail-subtitle">APPT. FEE | $25.00 (APPLIED TO DRESS SALE WHEN PURCHASED THE SAME DAY AS THE APPOINTMENT)</h3>
            <p>The Bride + 4 guests will enjoy a 90-minute bridal appointment with a personal stylist to assist you in finding &apos;the one&apos;! While your guests relax in their designated seating area, your expert stylist will guide you in selecting and trying on dresses that suit your style, body shape, and wedding vision.</p>
            <p>The bride will have access to all dresses in the store including the Budget Bridal Outlet to try on. This appointment type is recommended for brides with a budget higher than $700.</p>
            <p>All dresses range from $350 - $2,500.</p>
            <Link href="#appointment-1" className="appointment-cta-btn">SCHEDULE YOUR APPOINTMENT</Link>
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
            <h1 className="appointment-detail-title">Budget Bridal Outlet Dress Appointment</h1>
            <h3 className="appointment-detail-subtitle">APPT. FEE | $25.00 (APPLIED TO DRESS SALE WHEN PURCHASED THE SAME DAY AS THE APPOINTMENT)</h3>
            <p>The Bride + 4 guests will enjoy a 60-minute bridal appointment in our Budget Bridal Outlet section of the store where all dresses are priced $600 or less. While your guests relax in their designated seating area, your personal stylist will guide you in selecting and trying on dresses that suit your style, budget, body shape, and wedding vision.</p>
            <p>The bride will have access to only our Budget Bridal Dresses during their 60-minute appointment.</p>
            <Link href="#appointment-2" className="appointment-cta-btn">SCHEDULE YOUR APPOINTMENT</Link>
            <ul className="appointment-features-list">
              <li>$25 APPOINTMENT FEE</li>
              <li>UP TO 4 GUESTS</li>
              <li>60 MINUTES WITH A BRIDAL STYLIST</li>
              <li>ACCESS TO ONLY BUDGET BRIDAL DRESSES</li>
            </ul>
          </div>
          <AppointmentDetailSlideshow slides={[
            { image: '/appointments/appt-2.jpg', alt: 'Budget bridal appointment' },
            { image: '/appointments/appt-2-1.jpg', alt: 'Budget bridal appointment' },
            { image: '/appointments/appt-2-2.jpg', alt: 'Budget bridal appointment' },
            { image: '/appointments/appt-2-3.jpg', alt: 'Budget bridal appointment' },
            { image: '/appointments/appt-2-4.jpg', alt: 'Budget bridal appointment' }
          ]} />
        </div>
      </section>

      {/* 3. VIP Bridal Experience */}
      <section id="appointment-3" className="appointment-detail-section">
        <div className="appointment-detail-container">
          <AppointmentDetailSlideshow slides={[
            { image: '/appointments/appt-3.jpg', alt: 'VIP bridal experience' },
            { image: '/appointments/appt-3-1.jpg', alt: 'VIP bridal experience' },
            { image: '/appointments/appt-3-2.jpg', alt: 'VIP bridal experience' },
            { image: '/appointments/appt-3-3.jpg', alt: 'VIP bridal experience' },
            { image: '/appointments/appt-3-4.jpg', alt: 'VIP bridal experience' },
            { image: '/appointments/appt-3-5.jpg', alt: 'VIP bridal experience' },
            { image: '/appointments/appt-3-6.jpg', alt: 'VIP bridal experience' }
          ]} />
          <div className="appointment-detail-content">
            <h1 className="appointment-detail-title">VIP Bridal Experience</h1>
            <h3 className="appointment-detail-subtitle">APPT. FEE | $100 (APPLIED TO DRESS SALE WHEN PURCHASED THE SAME DAY AS THE APPOINTMENT)</h3>
            <p>The Bride and up to 10 guests will enjoy a 90-minute bridal appointment with one of our senior stylists to assist you in finding &apos;the one&apos;! While your guests relax in their semi-private designated seating area, your expert stylist will guide you in selecting and trying on dresses that suit your style, body shape, and wedding vision.</p>
            <p>All dresses range from $350.00 - $2,500.</p>
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
            <h1 className="appointment-detail-title">Accessory/Bridal Styling Appointment</h1>
            <h3 className="appointment-detail-subtitle">WE CHARGE A $25 CANCELLATION FEE IF NOT CANCELLED AT LEAST 48 HOURS BEFORE APPOINTMENT</h3>
            <p>You found your perfect dress, now it&apos;s time to accessorize!</p>
            <p>This appointment is a 60-minute one-on-one consultation with a trained stylist to show you the perfect pairing of a veil or belt (& more) with your wedding dress!</p>
            <p>Feel free to bring in your dress to get the full effect and see how the accessories complement one another.</p>
            <Link href="#appointment-4" className="appointment-cta-btn">SCHEDULE YOUR APPOINTMENT</Link>
            <ul className="appointment-features-list">
              <li>60-MINUTES WITH A BRIDAL STYLIST</li>
              <li>BRING YOUR DRESS (OPTIONAL)</li>
              <li>$25 CANCELLATION FEE</li>
            </ul>
          </div>
          <AppointmentDetailSlideshow slides={[
            { image: '/appointments/appt-4.jpg', alt: 'Accessory appointment' },
            { image: '/appointments/appt-4-2.jpg', alt: 'Accessory appointment' },
            { image: '/appointments/appt-4-3.jpg', alt: 'Accessory appointment' },
            { image: '/appointments/appt-4-4.jpg', alt: 'Accessory appointment' },
            { image: '/appointments/appt-4-5.jpg', alt: 'Accessory appointment' }
          ]} />
        </div>
      </section>

      {/* 5. The Wood's Men's Suits */}
      <section id="appointment-5" className="appointment-detail-section">
        <div className="appointment-detail-container">
          <AppointmentDetailSlideshow slides={[
            { image: '/appointments/appt-5.jpg', alt: "Men's suits appointment" },
            { image: '/appointments/appt-5-1.jpg', alt: "Men's suits appointment" },
            { image: '/appointments/appt-5-2.jpg', alt: "Men's suits appointment" },
            { image: '/appointments/appt-5-3.jpg', alt: "Men's suits appointment" },
            { image: '/appointments/appt-5-4.jpg', alt: "Men's suits appointment" },
            { image: '/appointments/appt-5-5.jpg', alt: "Men's suits appointment" }
          ]} />
          <div className="appointment-detail-content">
            <h1 className="appointment-detail-title">The Wood&apos;s Men&apos;s Suits</h1>
            <p>We carry suits for rental or for purchase.</p>
            <p>During your 60 Minute appointment, you will have a designated stylist to assist you in selecting the perfect color and style for your wedding or event.</p>
            <p>It is suggested that the couple come in separate from their party members to make their selections. Once the styles are selected, party members are encouraged to make an appointment to get professionally measured with us and we will get your suits ordered!</p>
            <p>All orders and measurements must be provided a month prior to the event date to guarantee you suit rentals or two months prior to the event to guarantee suits for purchase.</p>
            <Link href="#appointment-5" className="appointment-cta-btn">SCHEDULE YOUR APPOINTMENT</Link>
            <ul className="appointment-features-list">
              <li>No Appointment Fee</li>
              <li>60 Minutes with a bridal stylist</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Prepare Section */}
      <section className="prepare-section">
        <div className="prepare-header">
          <h1>HOW TO PREPARE FOR YOUR APPOINTMENT</h1>
        </div>
        <div className="prepare-container">
          <div className="prepare-content">
            <h2 className="prepare-title">A smaller guest list makes for a more meaningful moment</h2>
            <p className="prepare-text">
              Finding your dress is a once-in-a-lifetime moment, and bringing just one or two trusted guests allows you to truly focus on what you love. For groups larger than four, please <Link href="/contact">contact us</Link> to book a private appointment for a more comfortable experience.
            </p>
            <div className="prepare-divider">
              <span>→</span>
            </div>
            <h2 className="prepare-title">We&apos;re a shoe-free boutique to keep our gowns pristine</h2>
            <p className="prepare-text">
              To protect our dresses from Minnesota&apos;s unpredictable weather, we kindly ask all guests to remove their shoes upon arrival. We&apos;ll provide slippers for you to wear during your appointment, or you may bring your own.
            </p>
          </div>
          <div className="prepare-image">
            <Image
              src="/contact/Contact-image.jpg"
              alt="Bridal boutique interior"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

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
        <h1 className="faq-heading">FAQ</h1>
        <FAQ faqs={[
          {
            question: "Do I need to set up an appointment to try on wedding dresses?",
            answer: "Yes. We require all brides to book appointments. Don't hesitate to make your appointment as we book up well in advance. Appointments allow us to provide you and your party with the attention and experience you deserve."
          },
          {
            question: "What is included in a bridal gown appointment?",
            answer: "During your bridal appointment, you are guaranteed one-on-one attention with a dedicated stylist to guide and assist with your selection, and the exclusive use of an area in the boutique. Our bridal gown appointments are 90 minutes for brides who are ready to take their dream dress home!"
          },
          {
            question: "How many people can I bring to my bridal appointment?",
            answer: "We welcome parties of up to 4 people plus the Bride. If you anticipate having 5 or more people for your bridal appointment, we offer a VIP appointment with a fee for your convenience."
          },
          {
            question: "Do you offer appointments to try on accessories, like veils and jewelry?",
            answer: "Absolutely! We find it's much easier to help you find the right additions to your gown when you can try them on together. Please call to get on our schedule or book online here."
          },
          {
            question: "What is your return/exchange policy?",
            answer: "All sales are final. No exchanges or refunds."
          },
          {
            question: "Can you hold a dress for me while I think it over?",
            answer: "We can hold your dresses for 24 hours for a non-refundable $50. The $50 will be applied to the purchase of your dress. If you do not purchase your dress within the 24 hour period, the $50 will be retained and the dress will be returned to the floor. This ensures we give every bride the best opportunity to find the dress of her dreams!"
          },
          {
            question: "What sizes do you carry?",
            answer: "You will find gowns ranging from size 0 to size 32 and all sizes in between when you shop at Bridal Aisle Boutique."
          },
          {
            question: "What is your price range?",
            answer: "Our dresses range in price from $700-$2,500 with the most average price being in the $1,000-$1,500 range."
          },
          {
            question: "What dresses do you carry?",
            answer: "We are excited to carry over 2,000 new wedding gowns for you to bring home today. Visit our Instagram or Facebook page for the most updated look at our newest arrivals. As a one-stop shop you will also find, mothers dresses, formal dresses and suits at Bridal Aisle Boutique."
          },
          {
            question: "Are alterations included?",
            answer: "Alterations are not included with the price of the dress. We will provide you with multiple trusted alteration specialists we refer our clients to around the Twin Cities area."
          },
          {
            question: "Do you offer payment plans?",
            answer: "You can say \"Yes!\" to the dress without the worry of paying the full amount upfront. At Bridal Aisle Boutique, we offer a 30 day layaway option! Ask a consultant for more details and make your dream come true!"
          },
          {
            question: "Can I bring drinks/food into the store?",
            answer: "We do not allow drinks or food within the store. Champagne and clear liquids are acceptable but all other substances will be asked to be left in our front waiting area. Champagne must be popped either in our restroom or outside."
          }
        ]} />
      </section>
    </main>
    </>
  );
}
