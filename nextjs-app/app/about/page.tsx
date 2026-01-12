import Image from 'next/image';
import contentData from '@/content/about/content.json';
import imagesData from '@/content/about/images.json';
import TeamSection from '@/components/TeamSection';
import FAQ from '@/components/FAQ';

export default function AboutPage() {
  const content = contentData.content;
  
  // Find key content pieces
  const heroHeading = content.find(c => c.text.includes("Where every bride"))?.text || "";
  const heroSubheading = content.find(c => c.text === "BEHIND THE BOUTIQUE")?.text || "";
  const heroDescription = content.find(c => c.text.includes("Experience a thoughtfully curated"))?.text || "";
  
  const quote = content.find(c => c.text.includes("We believe every couple"))?.text || "";
  const quoteAuthor = content.find(c => c.text.includes("Annette hall"))?.text || "";
  
  // Find hero image
  const heroImage = imagesData.images.find(img => 
    img.localPath.includes('carl-kirsten') || img.localPath.includes('couple')
  );
  
  // Background image - 8.jpg
  const backgroundImageName = '8.jpg';
  
  return (
    <>
    <main className="page-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-background">
          <Image
            src={`/about/${backgroundImageName}`}
            alt="Couple at wedding background"
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
                  alt="Couple at wedding"
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
            <h3>{heroSubheading}</h3>
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
            alt="Bridal Aisle Boutique"
            width={180}
            height={180}
            style={{ width: '180px', height: 'auto' }}
          />
        </div>
        <h3>Bridal Luxury, Simplified</h3>
        <h1>Minnesota&apos;s Destination for<br />Effortless Bridal Style</h1>
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
            alt=""
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="quote-section-overlay"></div>
        </div>
        <div className="quote-section-content">
          <h2>{quote}</h2>
          <h3>{quoteAuthor}</h3>
        </div>
      </section>

      {/* Mission Section */}
      <section className="content-section mission-section">
        <div className="mission-container">
          <div className="mission-content">
            <h1>A bridal boutique built on heart & honesty</h1>
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
                  src="/about/tiffanyjoannphoto-198.jpg"
                  alt=""
                  width={300}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="mission-image mission-image-2">
                <Image
                  src="/about/bab-68web.jpg"
                  alt=""
                  width={300}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="mission-flower-icon">
                <Image
                  src="/home/flower-icon.png"
                  alt="Flower icon"
                  width={80}
                  height={100}
                  style={{ objectFit: 'contain', filter: 'invert(1) opacity(0.6)' }}
                />
              </div>
            </div>
            <div className="mission-icon">
              <Image
                src="/about/ba-icon-bouquet-2x.png"
                alt=""
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
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
                alt=""
                width={750}
                height={750}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="history-image history-image-2">
              <div className="history-image-cutout">
                <Image
                  src="/about/annette_and_brad.jpg"
                  alt="Annette and Brad"
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
            <h1>A legacy of love & dedication</h1>
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
              offering gowns priced at $600 and under to ensure every bride can find something beautiful 
              within reach.
            </p>
            <p>
              Now home to Bridal Aisle Boutique and Budget Bridal Outlet, as well as discounted suit 
              rentals for wedding parties, we remain committed to making every "yes" joyful, authentic, 
              and stress-free.
            </p>
            <div className="history-divider"></div>
            <h3>MEET THE FOUNDERS</h3>
          </div>
        </div>
      </section>

      {/* Full Width Background Image Section */}
      <section className="about-bg-image-section">
        <div className="about-bg-image-container">
          <Image
            src="/about/img-0257-bg.jpg"
            alt=""
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
            alt="I Said Yes at Bridal Aisle"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="experience-content">
          <h2 className="experience-heading">Your day, done your way</h2>
          <p className="experience-text">
            From the moment you walk in, our team is here to make your experience as special as your wedding day. Choose from three appointment options, enjoy one-on-one styling guidance, and say yes to your dress or suit with confidence.
          </p>
          <p className="experience-text">
            Every appointment is crafted to reflect your personality, your budget, and your vision.
          </p>
          <a href="/appointments" className="experience-button">
            SCHEDULE YOUR APPOINTMENT
          </a>
        </div>
      </div>
    </section>

    {/* Awards Section */}
    <section id="awards" className="awards-section">
      <h1>Our Awards</h1>
      <div className="awards-grid">
        <Image src="/about/award-1.png" alt="Metro North Chamber of Commerce" width={200} height={150} style={{ objectFit: 'contain' }} />
        <Image src="/about/award-2.png" alt="The Knot Best of Weddings Hall of Fame" width={200} height={150} style={{ objectFit: 'contain' }} />
        <Image src="/about/award-3.png" alt="Minnesota's Best" width={200} height={150} style={{ objectFit: 'contain' }} />
        <Image src="/about/award-4.png" alt="Biz Winner" width={200} height={150} style={{ objectFit: 'contain' }} />
        <Image src="/about/award-5.png" alt="Family Business of the Year" width={200} height={150} style={{ objectFit: 'contain' }} />
      </div>
    </section>

    {/* Testimonial Section */}
    <section id="testimonial" className="about-testimonial-section">
      <div className="about-testimonial-background">
        <Image
          src="/about/pints-072.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="about-testimonial-overlay"></div>
      </div>
      <div className="about-testimonial-content">
        <h3>LOVE FROM PAST BRIDES</h3>
        <div className="about-testimonial-divider"></div>
        <h1>
          Is there a way I can add more than 5 stars? Because this place deserves it!! Not only are the owners and employees extremely friendly and helpful, but they also listened to what my vision was and then made it come to life significantly under my budget. I loved that they let me look around first to show them what I wanted. Found the dress of my dreams for only $800, and took it home that same day, and I will recommend this place to everyone looking for formal attire.&quot;
        </h1>
        <h2>Hannah Davis</h2>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="bridal-faq-section">
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
          answer: "We can hold your dresses for 24 hours for a non-refundable $50. The $50 will be applied to the purchase of your dress.If you do not purchase your dress within the 24 hour period, the $50 will be retained and the dress will be returned to the floor. This ensures we give every bride the best opportunity to find the dress of her dreams!"
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
          answer: "We are excited to carry over 2,000 new wedding gowns for you to bring home today. Visit our Instagram or Facebook page for the most updated look at our newest arrivals.As a one-stop shop you will also find, mothers dresses, formal dresses and suits at Bridal Aisle Boutique."
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
    </>
  );
}
