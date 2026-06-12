import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import contentData from '@/content/about/content.json';
import imagesData from '@/content/about/images.json';
import TeamSection from '@/components/TeamSection';
import FAQ from '@/components/FAQ';
import { SITE_URL } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'About Bridal Aisle Boutique — Wedding Dress Shop in Maple Grove, MN',
  description: 'Founded in 2013, Bridal Aisle Boutique in Maple Grove, MN is an award-winning wedding dress shop near Minneapolis. Meet our team, explore our story, and book your appointment today.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Bridal Aisle Boutique — Wedding Dress Shop in Maple Grove, MN',
    description: 'Founded in 2013, Bridal Aisle Boutique in Maple Grove, MN is an award-winning wedding dress shop near Minneapolis. Meet our team, explore our story, and book your appointment today.',
    url: `${SITE_URL}/about`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bridalaislemn.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.bridalaislemn.com/about' },
  ],
};

export default function AboutPage() {
  const content = contentData.content;
  
  // Find key content pieces
  const heroHeading = content.find(c => c.text.includes("Where every bride"))?.text || "";
  const heroSubheading = content.find(c => c.text === "BEHIND THE BOUTIQUE")?.text || "";
  const heroDescription = content.find(c => c.text.includes("Experience a thoughtfully curated"))?.text || "";
  
  const quote = content.find(c => c.text.includes("We believe every couple"))?.text || "";
  const quoteAuthor = content.find(c => c.text.includes("Annette hall"))?.text || "";
  
  // Find hero image
  const heroImage = imagesData.images.find((img: any) => 
    img.localPath.includes('carl-kirsten') || img.localPath.includes('couple')
  );
  
  // Background image - 8.jpg
  const backgroundImageName = '8.jpg';
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <main className="page-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-background">
          <Image
            src={`/about/${backgroundImageName}`}
            alt="Wedding couple in designer attire — real Minnesota bride and groom from Bridal Aisle Boutique"
            fill
            className="about-hero-bg-image"
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="about-hero-background-overlay"></div>
        </div>
        <div className="about-hero-container">
          <div className="about-hero-image-left">
            {heroImage && (
              <div className="about-hero-image-cutout">
                <Image
                  src={`/about/${heroImage.localPath.split('/').pop()}`}
                  alt="Carl and Kirsten — Bridal Aisle Boutique real couple, best wedding dress shop Minnesota 2022"
                  width={600}
                  height={800}
                  className="about-hero-image"
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
          <div className="about-hero-content-box">
            <p className="about-hero-label">{heroSubheading}</p>
            <h1>{heroHeading}</h1>
            <p>{heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="content-section centered">
        <div className="footer-logo-section" style={{ marginBottom: '2rem' }}>
          <Image
            src="/BA-oval-gray@2x.png"
            alt="Bridal Aisle Boutique — trusted wedding dress shop in Maple Grove MN since 2013"
            width={180}
            height={180}
            style={{ width: '180px', height: 'auto' }}
          />
        </div>
        <p className="about-page-label">Bridal Luxury, Simplified</p>
        <h2 className="about-destination-heading">Minnesota&apos;s Destination for<br />Effortless Bridal Style</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p>
            Welcome to Bridal Aisle Boutique, Minnesota's premier destination for new off-the-rack 
            designer wedding dresses and tailored suits. With over 2,000 gowns in a wide range of 
            styles and sizes, we make it simple to find the one that feels like you, and take it 
            home the very same day.
          </p>
          <p>
            Our boutique is known for its warm, welcoming atmosphere and experienced stylists who 
            make your experience joyful, stress-free, and unforgettable. Whether you're shopping 
            for a gown, a suit, or accessories to complete your look, you'll find everything you 
            need under one roof.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-section-background">
          <Image
            src="/about/1k1a8372-9f1aecd7.jpg"
            alt="Bridal Aisle Boutique showroom — buy wedding dresses in Minnesota, 2,000+ gowns in Maple Grove MN"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="quote-section-overlay"></div>
        </div>
        <div className="quote-section-content">
          <blockquote>{quote}</blockquote>
          <cite>{quoteAuthor}</cite>
        </div>
      </section>

      {/* Mission Section */}
      <section className="content-section mission-section">
        <div className="mission-container">
          <div className="mission-content">
            <h2 style={{ marginTop: 0 }}>A bridal boutique built on heart & honesty</h2>
            <div className="mission-divider"></div>
            <p>
              Bridal Aisle Boutique was created with a simple mission: to make the joy of wedding 
              dress and suit shopping feel effortless, authentic, and unforgettable. From our curated 
              collection to our personalized consultations, every detail is designed with you in mind.
            </p>
            <p>
              We take pride in offering exceptional service, honest guidance, and an inclusive 
              experience, so every couple feels seen, celebrated, and confident walking down the aisle.
            </p>
          </div>
          <div className="mission-images">
            <div className="mission-images-container">
              <div className="mission-image mission-image-1">
                <Image
              src="/about/bab-68web.jpg"
              alt="Bridal fitting area at Bridal Aisle Boutique — affordable wedding dress shop Maple Grove MN"
                  width={220}
                  height={290}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="mission-image mission-image-2">
                <Image
              src="/about/tiffanyjoannphoto-198.jpg"
              alt="Bridal Aisle Boutique stylist — personalised wedding dress shopping experience in Minnesota"
                  width={350}
                  height={460}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="mission-flower-icon">
                <Image
                src="/about/ba-icon-bouquet-2x.png"
                alt=""
                  width={120}
                  height={145}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="content-section history-section">
        <div className="history-images-row">
          <div className="history-images-container">
            <div className="history-image history-image-1">
              <Image
              src="/about/bab-146web.jpg"
              alt="Spacious showroom at Bridal Aisle Boutique — buy wedding dresses in Maple Grove MN, serving all of Minnesota"
                width={750}
                height={750}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="history-image history-image-2">
              <div className="history-image-cutout">
                <Image
                  src="/about/annette_and_brad.jpg"
                  alt="Annette and Brad Hall — founders of Bridal Aisle Boutique, best wedding dress shop Minnesota since 2013"
                  width={220}
                  height={308}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="history-container">
          <div className="history-content">
          <p className="about-page-label">MEET THE FOUNDERS</p>
          <h2>A legacy of love & dedication</h2>
            <p>
              Founded by Annette and Brad in 2013, Bridal Aisle began with a simple idea: brides 
              deserve stunning designer gowns without the designer price tag. What started as a small, 
              heartfelt endeavor has grown into a trusted name across the Midwest.
            </p>
            <p>
              With a background in fashion merchandising and a passion for exceptional service, Annette 
              shaped the foundation of the boutique on expertise, value, and genuine connection. Today, 
              Bridal Aisle continues to help couples find their perfect look—their way.
            </p>
            <p>
              From one intimate storefront to a spacious, sought-after boutique, Bridal Aisle has grown 
              alongside the couples we serve. In 2020, we expanded with Budget Bridal Outlet by BA, 
              offering gowns priced at $800 and under to ensure every bride can find something beautiful 
              within reach.
            </p>
            <p>
              Home to Bridal Aisle Boutique and Budget Bridal Outlet, and now The Woods Men&apos;s Suits offering suits for purchase and rentals for wedding parties, we remain committed to making every &ldquo;yes&rdquo; joyful, authentic, and stress-free.
            </p>
            <div className="history-divider"></div>
          </div>
        </div>
      </section>

      {/* Full Width Background Image Section */}
      <section className="about-bg-image-section">
        <div className="about-bg-image-container">
          <Image
            src="/about/img-0257-bg.jpg"
            alt="Bridal Aisle Boutique team — expert stylists at one of Minnesota's best wedding dress shops"
            fill
            priority
            style={{ objectFit: 'cover', opacity: 0.8 }}
          />
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </main>

    {/* Experience Section - Outside container for full width */}
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-image">
          <Image
            src="/about/photo-dec-12-2023-10-44-54-am.jpg"
            alt="Bride holding 'I Said Yes at Bridal Aisle' sign — buy your wedding dress in Minnesota today"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="experience-content">
          <h3 className="experience-heading">Your day, done your way</h3>
          <p className="experience-text">
            From the moment you walk in, our team is here to make your experience as special as your wedding day. Choose from three appointment options, enjoy one-on-one styling guidance, and say yes to your dress or suit with confidence.
          </p>
          <p className="experience-text">
            Every appointment is crafted to reflect your personality, your budget, and your vision.
          </p>
          <Link href="/appointments" className="experience-button">
            SCHEDULE YOUR APPOINTMENT
          </Link>
        </div>
      </div>
    </section>

    {/* Awards Section */}
    <section id="awards" className="awards-section">
      <h2>Our Awards</h2>
      <div className="awards-grid">
        <Image src="/about/award-1.png" alt="Metro North Chamber of Commerce award — Bridal Aisle Boutique, best wedding dress shop Maple Grove MN" width={200} height={150} style={{ objectFit: 'contain' }} />
        <Image src="/about/award-2.png" alt="The Knot Best of Weddings Hall of Fame — Bridal Aisle Boutique best wedding dress shop Minnesota" width={200} height={150} style={{ objectFit: 'contain' }} />
        <Image src="/about/award-3.png" alt="Minnesota's Best award — Bridal Aisle Boutique, top-rated wedding dress shop in Minnesota" width={200} height={150} style={{ objectFit: 'contain' }} />
        <Image src="/about/award-4.png" alt="Biz Winner award — Bridal Aisle Boutique, Maple Grove MN best bridal boutique" width={200} height={150} style={{ objectFit: 'contain' }} />
        <Image src="/about/award-5.png" alt="Family Business of the Year — Bridal Aisle Boutique, affordable wedding dresses Minnesota since 2013" width={200} height={150} style={{ objectFit: 'contain' }} />
      </div>
    </section>

    {/* Testimonial Section */}
    <section id="testimonial" className="about-testimonial-section">
      <div className="about-testimonial-background">
        <Image
          src="/about/pints-072.jpg"
          alt="Bridal Aisle Boutique team — Minnesota's best wedding dress shop, community event"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="about-testimonial-overlay"></div>
      </div>
      <div className="about-testimonial-content">
        <p className="about-love-label">LOVE FROM PAST BRIDES</p>
        <div className="about-testimonial-divider"></div>
        <blockquote>
          Is there a way I can add more than 5 stars? Because this place deserves it!! Not only are the owners and employees extremely friendly and helpful, but they also listened to what my vision was and then made it come to life significantly under my budget. I loved that they let me look around first to show them what I wanted. Found the dress of my dreams for only $800, and took it home that same day, and I will recommend this place to everyone looking for formal attire.&quot;
        </blockquote>
        <h2>Hannah Davis</h2>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="bridal-faq-section">
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
    </>
  );
}
