import Link from 'next/link';
import Image from 'next/image';
import BridesSlideshow from '@/components/BridesSlideshow';
import WoodsHowItWorks from '../WoodsHowItWorks';
import WoodsDetailsPhoto from '../WoodsDetailsPhoto';
import WoodsDetailsTitle from '../WoodsDetailsTitle';
import WoodsHero from '../WoodsHero';
import WoodsPhotoReveal from '../WoodsPhotoReveal';

const STEPS = [
  { title: 'Book your fitting', text: "Come in. We'll take it from there." },
  { title: 'Pick the look', text: 'Suit, shirt, tie, and shoes.' },
  { title: 'Get measured', text: 'You and anyone coming with you.' },
  { title: 'Try it on', text: 'Everything gets checked before the big day.' },
  { title: 'Show up sharp', text: 'The photos are forever, and the suit can be too.' },
];

export default function EveryOccasionPageContent() {
  return (
    <>
    <main className="page-container">
      <WoodsHero
        title={<>For the Gala,<br />the Graduation,<br />or the Office</>}
      />

      <section className="woods-details-section">
        <div className="woods-details-grid">
          <WoodsDetailsPhoto />
          <div className="woods-details-copy">
            <p className="woods-details-label">
              Bring a friend. Make it a thing or not.
            </p>
            <WoodsDetailsTitle />
            <p className="woods-details-text">
              You don&apos;t need to become a stylist for this. Tell us the occasion, bring whoever&apos;s
              coming with you, and we&apos;ll match the full look, from the suit and shoes to the smaller details.
              Then we&apos;ll take the measurements so nobody is guessing the week of the event.
            </p>
            <p className="woods-details-text">
              One appointment. Everyone covered. You leave knowing it&apos;s handled.
            </p>
            <div className="woods-details-cta">
              <Link href="/appointments#book-appointment" className="woods-cta-btn">Get it done</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Suit Rentals */}
      <section className="mens-rentals-section">
        <div className="mens-two-column">
          <div className="mens-content-left">
            <h2 className="mens-section-title woods-rentals-title">
              Don&apos;t need a suit
              <br />
              <span className="woods-rentals-title-line">in your closet?</span>
              <br />
              <strong>Rent one.</strong>
            </h2>
            
            <p className="mens-section-text">
              Black-tie event, gala, graduation, or something in between. Get the look without
              buying a suit you&apos;ll barely wear after. We&apos;ll fit you or your whole group
              and help pull the full look together.
            </p>

            <p className="mens-section-text">
              Our partnership with <strong>DuBois Formalwear</strong> ensures every suit meets the highest
              standard of fit and finish.
            </p>

            <p className="mens-section-text">
              Good suits. Good fit. No guesswork.
            </p>
            
            <div style={{ marginTop: '2.5rem', marginBottom: '3rem' }}>
              <Link href="/appointments#book-appointment" className="woods-cta-btn woods-cta-btn-on-dark">Book Your Fitting</Link>
            </div>
            
            <div className="mens-logos">
              <a href="https://www.dbformalwear.com/online-catalog" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/home/dubois-logo.png"
                  alt="DB Formalwear — men's formal attire for weddings, available at Bridal Aisle Boutique Minnesota"
                  width={160}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </div>
          </div>
          
          <div className="mens-image-right">
            <Image
              src="/mens-suits/woods-rentals.jpg"
              alt="Wedding party in brown and tan suits from The Woods at Bridal Aisle Boutique"
              fill
              unoptimized
              quality={95}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            />
            <WoodsPhotoReveal />
          </div>
        </div>
      </section>

      <WoodsHowItWorks steps={STEPS} />

      {/* Section 4 - Own your suit */}
      <section className="mens-silk-suits-section woods-own-section">
        <div className="woods-own-photo">
          <Image
            src="/mens-suits/hero-groom.jpg"
            alt="Tailored charcoal suit from The Woods — a suit for every occasion"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
        <div className="silk-suits-content woods-own-copy">
          <h2 className="silk-suits-title">Own Your Suit</h2>
          <p className="silk-suits-label">A Suit Made for the Occasion—and What Comes After</p>
          
          <p className="silk-suits-text">
            If you&apos;d rather own than rent, Bridal Aisle offers Pure Silk or Allure suits
            designed to stay in your wardrobe long after the big day.
          </p>
          
          <p className="silk-suits-text">
            Choose your style, customize the fit, and make it your own with a shirt, tie,
            pocket square, and other finishing details selected with help from our stylists.
          </p>

          <p className="silk-suits-text">
            The result is a suit that feels right for the occasion, but works just as well
            for dinners, work, celebrations, and whatever comes next.
          </p>
          
          <div style={{ marginTop: '3rem' }}>
            <Link href="/appointments#book-appointment" className="woods-cta-btn">Book Your Fitting</Link>
          </div>

          <div className="mens-logos">
            <a href="https://puresilkfabrics.com/suits/metro-suits/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/home/psf-logo.png"
                alt="Pure Silk Fabrics — custom made suits in Maple Grove MN at Bridal Aisle Boutique"
                width={180}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </a>
            <a href="https://allurebridals.com/collections/mens" target="_blank" rel="noopener noreferrer">
              <Image
                src="/home/allure-suits-tuxedos.png"
                alt="Allure Suits & Tuxedos"
                width={180}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="mens-gallery-section woods-gallery-section">
        <BridesSlideshow slides={[
          { image: '/mens-suits/suit-slide-1.jpg', alt: 'Wedding party in matching sage suits from The Woods' },
          { image: '/mens-suits/detail-shoes.jpg', alt: 'Black leather dress shoes from The Woods' },
          { image: '/mens-suits/suit-slide-2.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/suit-slide-3.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/detail-studs.jpg', alt: 'White bow tie, studs, and cufflinks laid out with black dress shoes' },
          { image: '/mens-suits/suit-slide-4.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/suit-slide-5.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/suit-slide-6.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/suit-slide-7.jpg', alt: 'Metro suit' },
          { image: '/mens-suits/groom-suit-brick.jpg', alt: 'Groom in suit' },
          { image: '/mens-suits/hero-groom.jpg', alt: 'Groom formalwear' },
          { image: '/home/groomportraits-2021-07-30candaceandchase-31-laurenbakerphotography-ee15a496.jpg', alt: 'Groom portrait' },
          { image: '/home/bk-bride-groom-7.jpg', alt: 'Bride and groom' }
        ]} />
      </section>
    </main>
    </>
  );
}
