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
  { title: 'Pick the look', text: "Suit, shirt, tie, and shoes. We'll match her dress if you want." },
  { title: 'Get measured', text: 'You and the rest of the crew.' },
  { title: 'Try it on', text: 'Everything gets checked before prom.' },
  { title: 'Own the night', text: 'The photos are forever, and the suit can be too.' },
];

export default function PromPageContent() {
  return (
    <>
    <main className="page-container">
      <WoodsHero
        title={<>For Prom Night,<br />the Whole Crew</>}
        imageLabel="Young man in a navy tuxedo fastening a cufflink"
        fgImage="/NewPromHero.png"
        bgImage="/PromBackground.png"
      />

      <section className="woods-details-section">
        <div className="woods-details-grid">
          <WoodsDetailsPhoto
            image="/PromMeasure.png"
            imageLabel="A tailor measuring a young man in a navy three-piece suit at The Woods"
          />
          <div className="woods-details-copy">
            <p className="woods-details-label">
              Bring the crew. Make it a thing or not.
            </p>
            <WoodsDetailsTitle />
            <p className="woods-details-text">
              You don&apos;t need to become a stylist for this. Bring your date&apos;s colors,
              bring the friends going with you, and we&apos;ll match the full look — suit, shoes,
              the smaller details. Then we&apos;ll take the measurements so nobody is guessing
              the week of prom.
            </p>
            <p className="woods-details-text">
              One appointment. The whole group. You leave knowing it&apos;s handled.
            </p>
            <div className="woods-details-cta">
              <Link href="/appointments#book-appointment" className="woods-cta-btn">Get it done</Link>
            </div>
          </div>
        </div>
      </section>

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
              Prom doesn&apos;t have to mean buying a suit you&apos;ll wear once. Rent.
              We&apos;ll fit you and the rest of the group, match your date&apos;s colors,
              and pull the look together — you don&apos;t have to shop it yourself.
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
                  alt="DB Formalwear — prom and formal attire at Bridal Aisle Boutique Minnesota"
                  width={160}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </div>
          </div>
          
          <div className="mens-image-right">
            <Image
              src="/PromRentals.jpg"
              alt="Couple in a burgundy tuxedo and emerald gown beside a limousine, dressed for prom"
              fill
              unoptimized
              quality={95}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            />
            <WoodsPhotoReveal />
          </div>
        </div>
      </section>

      <WoodsHowItWorks steps={STEPS} />

      <section className="mens-silk-suits-section woods-own-section">
        <div className="woods-own-photo">
          <Image
            src="/mens-suits/hero-groom.jpg"
            alt="Tailored charcoal suit from The Woods — a prom suit you can wear after"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
        <div className="silk-suits-content woods-own-copy">
          <h2 className="silk-suits-title">Own Your Suit</h2>
          <p className="silk-suits-label">A Suit Made for Prom—and What Comes After</p>
          
          <p className="silk-suits-text">
            If you&apos;d rather own than rent, Bridal Aisle offers Pure Silk or Allure suits
            designed for prom night that stay in your wardrobe after. Homecoming next year,
            graduation, interviews — not just the one dance.
          </p>
          
          <p className="silk-suits-text">
            Choose your style, customize the fit, and make it your own with a shirt, tie,
            pocket square, and other finishing details selected with help from our stylists.
          </p>

          <p className="silk-suits-text">
            The result is a suit that feels right for prom, and still works for interviews,
            dinners, and whatever comes next.
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

      <section className="mens-gallery-section woods-gallery-section">
        <BridesSlideshow slides={[
          { image: '/PromRentals.jpg', alt: 'Couple in a burgundy tuxedo and emerald gown beside a limousine, dressed for prom' },
          { image: '/mens-suits/detail-shoes.jpg', alt: 'Black leather dress shoes from The Woods' },
          { image: '/mens-suits/suit-slide-7.jpg', alt: 'Young men in blue suits from The Woods' },
          { image: '/mens-suits/detail-studs.jpg', alt: 'White bow tie, studs, and cufflinks laid out with black dress shoes' },
          { image: '/mens-suits/suit-slide-5.jpg', alt: 'Two young men in grey and blue suits from The Woods' },
          { image: '/mens-suits/suit-slide-2.jpg', alt: 'Young man in a rust three-piece suit from The Woods' },
          { image: '/mens-suits/suit-slide-4.jpg', alt: 'Three men in brown and cream suits from The Woods' },
        ]} />
      </section>
    </main>
    </>
  );
}
