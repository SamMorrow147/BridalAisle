import HeroSlideshow from '@/components/HeroSlideshow';
import BridesSlideshow from '@/components/BridesSlideshow';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FullwidthSlideshow from '@/components/FullwidthSlideshow';
import MobileNav from '@/components/MobileNav';
import FAQ from '@/components/FAQ';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const slides = [
    {
      image: '/home/174-a741457-enhanced-nr-ethanhanesphotography-eaa68822.jpg',
      alt: 'Couple at wedding ceremony'
    },
    {
      image: '/home/32-a740573-enhanced-nr-ethanhanesphotography-d7ea15a2.jpg',
      alt: 'Bride and groom portrait'
    },
    {
      image: '/home/groomportraits-2021-07-30candaceandchase-31-laurenbakerphotography-ee15a496.jpg',
      alt: 'Groom portrait'
    }
  ];

  return (
    <>
      {/* Hero Slideshow Section - Full Screen */}
      <HeroSlideshow slides={slides} interval={5000} />
      
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
      
      <main className="page-container home-page">

      {/* About Section - 3 Column */}
      <section className="about-section">
        <div className="about-three-column">
          <div className="about-image-left">
            <Image
              src="/home/bridals-2021-07-30candaceandchasewedding-1-laurenbakerphotography-8914695a.jpg"
              alt="Bride in wedding dress"
              width={450}
              height={650}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: 'auto' }}
            />
          </div>
          
          <div className="about-content-center">
            <h3 className="about-label">MINNESOTA&apos;S MOST LOVED BRIDAL BOUTIQUE</h3>
            <div className="divider-line"></div>
            <h1 className="about-title">Fall in love with the perfect dress & take it home</h1>
            <h2 className="about-subtitle">that same day.</h2>
            <Link href="/about" className="about-btn">LEARN ABOUT US</Link>
          </div>
          
          <div className="about-images-right">
            <div className="about-image-top">
              <Image
                src="/home/dsc07957-codeerosephotography-ecc57b89.jpg"
                alt="Couple kissing"
                width={400}
                height={350}
                style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: 'auto' }}
              />
            </div>
            <div className="about-image-bottom">
              <Image
                src="/home/3.jpg"
                alt="Bride on balcony"
                width={400}
                height={450}
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
              alt="Flower icon"
              width={80}
              height={100}
              style={{ filter: 'invert(1) opacity(0.6)' }}
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
                src="/home/bab-68web.jpg"
                alt="Wedding dress detail"
                width={400}
                height={500}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="feature-label">OFF-THE-RACK</h3>
            <h1 className="feature-title">Designer Gowns</h1>
            <p className="feature-description">
              Say yes and take it home the same day. With over 2,000 designer dresses to choose from, 
              Bridal Aisle offers an off-the-rack experience unlike any other. Find your dream dress 
              and take it home the very day you say "yes"—no long wait times, no stress, just pure 
              bridal excitement.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="arched-image">
              <Image
                src="/home/bab-108web.jpg"
                alt="Bridal appointment"
                width={400}
                height={500}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="feature-label">PERSONALIZED</h3>
            <h1 className="feature-title">Stress-free Appointments</h1>
            <p className="feature-description">
              A bridal experience that's all about you. From your first hello to your final fitting, 
              our expert stylists make your appointment feel effortless and memorable. You'll enjoy 
              a warm, welcoming atmosphere and personalized guidance that helps you find the dress 
              that feels like you.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="arched-image">
              <Image
                src="/home/bab-102web.jpg"
                alt="Bride and consultant"
                width={400}
                height={500}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="feature-label">FLEXIBLE OPTIONS</h3>
            <h1 className="feature-title">For Every Bride</h1>
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
          { image: '/home/dsc07551-codeerosephotography.jpg', alt: 'Bride portrait' },
          { image: '/home/bn-wedding-72-2.jpg', alt: 'Real bride' },
          { image: '/home/168-a741428-enhanced-nr-ethanhanesphotography.jpg', alt: 'Bride outdoor' },
          { image: '/home/tiffanyjoannphoto-56.jpg', alt: 'Bride photo' },
          { image: '/home/1k1a8372.jpg', alt: 'Bride portrait' },
          { image: '/home/514962061-n.jpg', alt: 'Bride photo' },
          { image: '/home/2.jpg', alt: 'Bride portrait' },
          { image: '/home/781a7553.jpg', alt: 'Bride outdoor' },
          { image: '/home/carl-kirstencoupleportraits-emmahaletphotography2022-35.jpg', alt: 'Couple portrait' },
          { image: '/home/annaisidro-0112.jpg', alt: 'Bride photo' },
          { image: '/home/bk-bride-groom-7.jpg', alt: 'Bride and groom' },
          { image: '/home/ericvestphotography-carmen-and-nick-swedding-276.jpg', alt: 'Wedding couple' },
          { image: '/home/annaisidro-0114.jpg', alt: 'Bride portrait' },
          { image: '/home/dsc097932-codeerosephotography.jpg', alt: 'Bride photo' },
          { image: '/home/kaysha1.jpg', alt: 'Bride portrait' },
          { image: '/home/strongportraits-205-melissa-otto-photography.jpg', alt: 'Bride photo' },
          { image: '/home/strongportraits-99-melissa-otto-photography.jpg', alt: 'Bride portrait' },
          { image: '/home/melmorrisphotography.jpg', alt: 'Bride photo' },
          { image: '/home/groomportraits-2021-07-30candaceandchase-31-laurenbakerphotography-ee15a496.jpg', alt: 'Groom portrait' }
        ]} />
      </section>

      {/* Experience Section - 4 Steps with Center Image */}
      <section className="experience-section">
        <div className="experience-header">
          <h3 className="experience-label">THE BRIDAL AISLE</h3>
          <h1 className="experience-title">Experience</h1>
          <p className="experience-subtitle">
            From stepping into your first dress to the moment you say yes...we're here to make 
            every step seamless.
          </p>
        </div>
        
        <div className="experience-container">
          {/* Top Left - 01 */}
          <div className="experience-step step-top-left">
            <h2 className="step-number-script">01</h2>
            <h2 className="step-title-exp">GET ENGAGED</h2>
            <p>
              Take a moment to soak it all in, this season deserves to be celebrated. When you're 
              ready to find the dress, plan to start shopping about four months to a year before 
              your wedding day.
            </p>
          </div>
          
          {/* Bottom Left - 02 */}
          <div className="experience-step step-bottom-left">
            <h2 className="step-number-script">02</h2>
            <h2 className="step-title-exp">BROWSE GOWNS</h2>
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
              alt="Bride trying on dress"
              width={400}
              height={450}
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          {/* Top Right - 03 */}
          <div className="experience-step step-top-right">
            <h2 className="step-number-script">03</h2>
            <h2 className="step-title-exp">BOOK APPOINTMENT</h2>
            <p>
              Gather your "I Do Crew" and schedule a time to shop with your dedicated stylist. With 
              thousands of designer gowns in a wide range of styles and sizes, you're sure to find 
              the one that feels like you.
            </p>
          </div>
          
          {/* Bottom Right - 04 */}
          <div className="experience-step step-bottom-right">
            <h2 className="step-number-script">04</h2>
            <h2 className="step-title-exp">SAY YES</h2>
            <p>
              When you find your dream dress, you shouldn't have to wait. Take it home the very 
              same day and celebrate saying yes!
            </p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link href="/bridal" className="experience-cta-btn">BROWSE BRIDAL COLLECTIONS</Link>
        </div>
      </section>

      {/* Men's Suits Parallax Banner */}
      <section className="mens-suits-parallax">
        <div className="parallax-overlay"></div>
        <div className="parallax-content">
          <h3 className="parallax-label">TAILORED SUITS FOR LIFE&apos;S DEFINING MOMENTS</h3>
          <h1 className="parallax-title">
            <span className="script-text">Timeless style</span>
            <span className="serif-text"> for every occasion.</span>
          </h1>
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
        <h1 className="designers-heading">Designers We Work With</h1>
        <div className="designers-grid">
          <div className="designer-logo">
            <Image
              src="/home/barbie-anne-bridal-logo.png"
              alt="Barbie Anne Bridal"
              width={280}
              height={140}
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          <div className="designer-logo designer-text">
            <h2 className="designer-name">Moonlight /</h2>
            <h3 className="designer-name">Val Steffani</h3>
          </div>
          
          <div className="designer-logo">
            <Image
              src="/home/psf-logo.png"
              alt="Pure Silk Fabrics"
              width={250}
              height={100}
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          <div className="designer-logo">
            <Image
              src="/home/dubois-logo.png"
              alt="DB•FW"
              width={200}
              height={80}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section - Hidden on Desktop */}
      <section className="bridal-faq-section mobile-only">
        <h1 className="faq-heading">FAQ</h1>
        <FAQ faqs={[
          {
            question: "Do I need to set up an appointment to try on wedding dresses?",
            answer: "Yes. We require all brides to book appointments. Don't hesitate to make your appointment as we book up well in advance. Appointments allow us to provide you and your party with the attention and experience you deserve."
          },
          {
            question: "Why do you charge for bridal appointments?",
            answer: "Our appointment fee ensures that we can provide you with dedicated, personalized service and maintain our curated collection of designer gowns. This fee helps us offer you the exclusive, stress-free experience that makes Bridal Aisle special."
          },
          {
            question: "How many people should I bring with me to try on wedding dresses?",
            answer: "We recommend bringing 2-4 people whose opinions you trust. Too many voices can make the decision harder, while a small, supportive group helps you focus on what feels right for you."
          },
          {
            question: "I want to find accessories for a wedding dress I already have. Am I allowed to bring it into the shop?",
            answer: "Yes, you're welcome to bring your dress! We'd love to help you find the perfect accessories to complete your look. Just let us know when booking your appointment so we can prepare."
          },
          {
            question: "What is your return policy?",
            answer: "All sales are final. We want to make sure you're completely happy with your purchase, so we encourage you to take your time during your appointment and ask any questions you may have."
          },
          {
            question: "If I find a wedding dress but want to come back with a friend the next day, how long could you hold my dress until I return to the shop?",
            answer: "We can typically hold a dress for 24-48 hours. Please speak with your stylist about your specific situation, and we'll do our best to accommodate you."
          },
          {
            question: "What sizes do you carry?",
            answer: "We carry a wide range of sizes to accommodate every bride. Our collection includes sizes from 0-30+, and we're committed to helping every bride find her perfect dress."
          },
          {
            question: "What is the price range for your wedding dresses?",
            answer: "Our wedding dresses range from budget-friendly options to designer gowns. We offer something for every budget, including our Budget Bridal section with dresses starting at lower price points."
          },
          {
            question: "What type of inventory do you carry?",
            answer: "We carry over 2,000 designer gowns from top bridal designers, including off-the-rack dresses you can take home the same day. We also offer accessories, veils, and formal wear for mothers and wedding parties."
          },
          {
            question: "What if I need alterations for a wedding dress I really like?",
            answer: "We work with trusted local seamstresses and can provide recommendations for alterations. Many of our dresses can be taken home the same day, and we'll help you find the right professional for any needed adjustments."
          },
          {
            question: "Layaway: Are you interested in a dress, but need help making the purchase?",
            answer: "Yes! We offer layaway options to help make your dream dress more accessible. Speak with your stylist during your appointment to learn about our flexible payment plans."
          },
          {
            question: "Can I bring beverages to my appointment?",
            answer: "Yes, you're welcome to bring non-alcoholic beverages to enjoy during your appointment. We want you to feel comfortable and relaxed while you find your perfect dress."
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
