'use client';

import { useRef } from 'react';
import HeroSlideshow from '@/components/HeroSlideshow';
import BridesSlideshow from '@/components/BridesSlideshow';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FullwidthSlideshow from '@/components/FullwidthSlideshow';
import MobileNav, { MobileNavRef } from '@/components/MobileNav';
import FAQ from '@/components/FAQ';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePageContent() {
  const mobileNavRef = useRef<MobileNavRef>(null);
  const slides = [
    {
      image: '/home/174-a741457-enhanced-nr-ethanhanesphotography-eaa68822.jpg',
      alt: 'Happy Minnesota bride and groom in designer wedding attire from Bridal Aisle Boutique, Maple Grove MN'
    },
    {
      image: '/home/32-a740573-enhanced-nr-ethanhanesphotography-d7ea15a2.jpg',
      alt: 'Bride in off-the-rack designer wedding dress from Bridal Aisle Boutique — wedding dress shopping Minnesota'
    },
    {
      image: '/home/groomportraits-2021-07-30candaceandchase-31-laurenbakerphotography-ee15a496.jpg',
      alt: 'Groom in men\'s formal attire for wedding — Bridal Aisle Boutique, Minnesota'
    }
  ];

  const handleMenuOpen = () => {
    mobileNavRef.current?.openMenu();
  };

  return (
    <>
      {/* Hero Slideshow Section - Full Screen */}
      <HeroSlideshow slides={slides} interval={5000} onMenuOpen={handleMenuOpen} />
      
      {/* Sticky Navigation - appears after hero */}
      <header className="sticky-header home-nav">
        {/* Desktop Navigation */}
        <nav className="main-nav desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/appointments">Appointments</Link>
          <Link href="/bridal">Bridal</Link>
          <div className="nav-logo-center">
            <Link href="/">
              <Image
                src="/home/ba-submark-2x-e31c28b4.png"
                alt="Bridal Aisle Boutique logo — wedding dress shop in Maple Grove MN"
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
        <MobileNav ref={mobileNavRef} />
      </header>
      
      <main className="page-container home-page">

      {/* About Section - 3 Column */}
      <section className="about-section">
        <div className="about-three-column">
          <div className="about-image-left">
            <Image
              src="/home/3.jpg"
              alt="Bride in elegant bridal gown from Bridal Aisle Boutique — Minnesota's premier wedding dress shop"
              width={400}
              height={450}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: 'auto' }}
            />
          </div>
          
          <div className="about-content-center">
            <p className="about-label">MINNESOTA&apos;S MOST LOVED BRIDAL BOUTIQUE</p>
            <div className="divider-line"></div>
            <h2 className="about-title">Fall in love with the perfect dress & take it home</h2>
            <h3 className="about-subtitle">that same day.</h3>
            <Link href="/about" className="about-btn">LEARN ABOUT US</Link>
          </div>
          
          <div className="about-images-right">
            <div className="about-image-top">
              <Image
                src="/home/bridals-2021-07-30candaceandchasewedding-1-laurenbakerphotography-8914695a.jpg"
                alt="Bride in wedding dress"
                width={450}
                height={650}
                style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: 'auto' }}
              />
            </div>
            <div className="about-image-bottom">
              <Image
                src="/home/dsc07957-codeerosephotography-ecc57b89.jpg"
                alt="Couple kissing"
                width={400}
                height={350}
                style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section with Marquee */}
      <section className="philosophy-section">
        <div className="philosophy-content">
          <div className="flower-icon">
            <Image
              src="/home/flower-icon.png"
              alt=""
              width={100}
              height={125}
              style={{ filter: 'invert(1) opacity(0.9)' }}
            />
          </div>
          <p className="philosophy-text">
            At Bridal Aisle, we believe dress & suit shopping should be simple and stress-free. 
            With a curated collection of designer gowns, luxury suits, and a team that truly cares, 
            we're here to make your bridal experience fun, effortless and memorable.
          </p>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            <span>EVERY STYLE. EVERY BRIDE. THOUSANDS OF GOWNS. EVERY SIZE. </span>
            <span>EVERY STYLE. EVERY BRIDE. THOUSANDS OF GOWNS. EVERY SIZE. </span>
            <span>EVERY STYLE. EVERY BRIDE. THOUSANDS OF GOWNS. EVERY SIZE. </span>
            <span>EVERY STYLE. EVERY BRIDE. THOUSANDS OF GOWNS. EVERY SIZE. </span>
          </div>
        </div>
      </section>

      {/* Three Feature Cards - Dark Background with Arched Images */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="arched-image">
              <Image
                src="/home/bab-108web.jpg"
                alt="Showroom at Bridal Aisle Boutique — one of Minnesota's best wedding dress shops, Maple Grove MN"
                width={400}
                height={500}
                sizes="(max-width: 768px) 350px, (max-width: 900px) 45vw, 400px"
                priority={false}
              />
            </div>
            <p className="feature-label">OFF-THE-RACK</p>
            <h2 className="feature-title">Designer Gowns</h2>
            <p className="feature-description">
              Say yes and take it home the same day. With over 2,000 designer dresses to choose from, 
              Bridal Aisle offers an off-the-rack experience unlike any other. Find your dream dress 
              and take it home the very day you say "yes"—no long wait times, no stress, just pure 
              bridal excitement.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="arched-image arched-image--preserve-top">
              <Image
                src="/home/bab-102web.jpg"
                alt="Personal bridal stylist helping bride choose a designer wedding dress — wedding dress shopping Minnesota"
                width={400}
                height={500}
                sizes="(max-width: 768px) 350px, (max-width: 900px) 45vw, 400px"
                priority={false}
              />
            </div>
            <p className="feature-label">PERSONALIZED</p>
            <h2 className="feature-title">Stress-free Appointments</h2>
            <p className="feature-description">
              From your first hello to the dress of your dreams, our expert stylists make your appointment feel effortless and memorable.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="arched-image">
              <Image
                src="/home/bab-68web.jpg"
                alt="Close-up of affordable designer wedding dress — off-the-rack at Bridal Aisle Boutique, MN"
                width={400}
                height={500}
                sizes="(max-width: 768px) 350px, (max-width: 900px) 45vw, 400px"
                priority={false}
              />
            </div>
            <p className="feature-label">FLEXIBLE OPTIONS</p>
            <h2 className="feature-title">For Every Bride</h2>
            <p className="feature-description">
              Whether you're exploring our Budget Bridal section, taking advantage of layaway, or 
              booking a VIP appointment, we offer options to fit your timeline, preferences, and 
              budget—all while keeping the experience joyful and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Real Brides Horizontal Carousel */}
      <section className="slideshow-section">
        <BridesSlideshow slides={[
          { image: '/home/bn-wedding-72-2.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/dsc07551-codeerosephotography.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/168-a741428-enhanced-nr-ethanhanesphotography.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/tiffanyjoannphoto-56.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/1k1a8372.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/514962061-n.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/2.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/781a7553.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/carl-kirstencoupleportraits-emmahaletphotography2022-35.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/annaisidro-0112.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/bk-bride-groom-7.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/ericvestphotography-carmen-and-nick-swedding-276.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/annaisidro-0114.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/dsc097932-codeerosephotography.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/kaysha1.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/strongportraits-205-melissa-otto-photography.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/strongportraits-99-melissa-otto-photography.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/melmorrisphotography.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' },
          { image: '/home/groomportraits-2021-07-30candaceandchase-31-laurenbakerphotography-ee15a496.jpg', alt: 'Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Maple Grove MN' }
        ]} />
      </section>

      {/* Experience Section - 4 Steps with Center Image */}
      <section className="experience-section">
        <div className="experience-header">
          <p className="experience-label">THE BRIDAL AISLE</p>
          <h2 className="experience-title">Experience</h2>
          <p className="experience-subtitle">
            From the moment you slip into your first dress to the moment you say yes… we&apos;re here to make every step seamless.
          </p>
          <div className="experience-cta-mobile" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/bridal" className="experience-cta-btn">BROWSE BRIDAL COLLECTIONS</Link>
          </div>
        </div>
        
        <div className="experience-container">
          {/* Top Left - 01 */}
          <div className="experience-step step-top-left">
            <h3 className="step-number-script">01</h3>
            <h3 className="step-title-exp">GET ENGAGED</h3>
            <p>
              Take a moment to soak it all in, this season deserves to be celebrated. When you're 
              ready to find the dress, plan to start shopping about four months to a year before 
              your wedding day.
            </p>
          </div>
          
          {/* Bottom Left - 02 */}
          <div className="experience-step step-bottom-left">
            <h3 className="step-number-script">02</h3>
            <h3 className="step-title-exp">BROWSE GOWNS</h3>
            <p>
              Get inspired before your appointment. Follow us on{' '}
              <a href="https://instagram.com/bridal.aisle.mn" target="_blank" rel="noopener noreferrer">Instagram</a>
              {' '}or{' '}
              <a href="https://www.facebook.com/BridalAisleMN" target="_blank" rel="noopener noreferrer">Facebook</a>
              {' '}to see our newest arrivals and discover the styles waiting for you at Bridal Aisle.
            </p>
          </div>
          
          {/* Center Rounded Square Image */}
          <div className="experience-center-image">
            <Image
              src="/home/bab-103web.jpg"
              alt="Bride trying on designer gowns at bridal appointment — best wedding dress shop in Minnesota"
              width={400}
              height={450}
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          {/* Top Right - 03 */}
          <div className="experience-step step-top-right">
            <h3 className="step-number-script">03</h3>
            <h3 className="step-title-exp">BOOK APPOINTMENT</h3>
            <p>
              Gather your "I Do Crew" and schedule a time to shop with your dedicated stylist. With 
              thousands of designer gowns in a wide range of styles and sizes, you're sure to find 
              the one that feels like you.
            </p>
          </div>
          
          {/* Bottom Right - 04 */}
          <div className="experience-step step-bottom-right">
            <h3 className="step-number-script">04</h3>
            <h3 className="step-title-exp">SAY YES</h3>
            <p>
              When you find your dream dress, you shouldn't have to wait. Take it home the very 
              same day and celebrate saying yes!
            </p>
          </div>
        </div>
        
        <div className="experience-cta-desktop" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link href="/bridal" className="experience-cta-btn">BROWSE BRIDAL COLLECTIONS</Link>
        </div>
      </section>

      {/* Men's Suits Parallax Banner */}
      <section className="mens-suits-parallax">
        <div className="parallax-overlay"></div>
        <div className="parallax-content">
          <p className="parallax-label">TAILORED SUITS FOR LIFE&apos;S DEFINING MOMENTS</p>
          <h2 className="parallax-title">
            <span className="script-text">Timeless style</span>
            <span className="serif-text"> for every occasion.</span>
          </h2>
          <Link href="/mens-suits" className="parallax-btn">THE WOODS MEN&apos;S SUITS</Link>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
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

      {/* Secondary Fullwidth Slideshow */}
      <section className="secondary-slideshow-section">
        <FullwidthSlideshow slides={[
          { image: '/home/151-a741337-ethanhanesphotography.jpg', alt: 'Wedding couple' },
          { image: '/home/30-a740557-enhanced-nr-ethanhanesphotography.jpg', alt: 'Bride and groom' },
          { image: '/home/156-a741394-enhanced-nr-ethanhanesphotography.jpg', alt: 'Wedding portrait' },
          { image: '/home/154-a741347.jpg', alt: 'Couple photo' },
          { image: '/home/pachiawong-styledshoot-maisong-francis-photography-23-of-59.jpg', alt: 'Bridal shoot' }
        ]} interval={4000} />
      </section>

      {/* Designers Section */}
      <section className="designers-section">
        <h2 className="designers-heading">Designers We Work With</h2>
        <div className="designers-grid">
          <div className="designer-logo">
            <a href="https://barbieannebridal.com/collections/modest" target="_blank" rel="noopener noreferrer">
              <Image
                src="/home/barbie-anne-bridal-logo.png"
                alt="Barbie Anne Bridal — modest wedding dress designer at Bridal Aisle Boutique Minnesota"
                width={280}
                height={140}
                style={{ objectFit: 'contain' }}
              />
            </a>
          </div>
          
          <div className="designer-logo designer-text">
            <a href="https://www.valstefani.com" target="_blank" rel="noopener noreferrer">
              <h2 className="designer-name">Moonlight /</h2>
              <h3 className="designer-name">Val Steffani</h3>
            </a>
          </div>
          
          <div className="designer-logo">
            <a href="https://puresilkfabrics.com/suits/metro-suits/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/home/psf-logo.png"
                alt="Pure Silk Fabrics — men's formal attire brand at Bridal Aisle Boutique Minnesota"
                width={250}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </a>
          </div>
          
          <div className="designer-logo">
            <a href="https://www.dbformalwear.com/online-catalog" target="_blank" rel="noopener noreferrer">
              <Image
                src="/home/dubois-logo.png"
                alt="DuBois Formalwear — wedding suit brand at Bridal Aisle Boutique, Maple Grove MN"
                width={200}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section - Hidden on Desktop */}
      <section className="bridal-faq-section mobile-only">
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

      {/* Mobile Background Image Section - Only shows on mobile */}
      <section className="mobile-bg-section mobile-only">
        <div 
          className="mobile-bg-image"
          style={{
            backgroundImage: 'url(/home/pachiawong-styledshoot-maisong-francis-photography-23-of-59.jpg)',
            opacity: 0.373321
          }}
        />
      </section>
      </main>
    </>
  );
}
