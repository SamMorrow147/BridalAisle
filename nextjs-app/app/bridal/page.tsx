'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from '@/components/FAQ';

export default function BridalPage() {
  useEffect(() => {
    // Load Linda widget script
    const container = document.getElementById('linda-widget-container');
    if (!container) return;

    const script = document.createElement('script');
    script.id = 'gb_widget_script';
    script.type = 'module';
    script.src = 'https://locations.linda.co/gb-widget.js';
    script.setAttribute('data-widget-token', 'e25b4c7cbee769617bfc85fafd3d29f9');
    
    // Append to container instead of body to ensure it renders in the right place
    container.appendChild(script);

    // Watch for widget content being injected elsewhere and move it to our container
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            const element = node as HTMLElement;
            // Check if this is a Linda widget element
            if (element.id?.includes('linda') || 
                element.className?.includes('linda') || 
                element.className?.includes('gb-widget') ||
                element.querySelector('[class*="linda"], [id*="linda"], [class*="gb-widget"]')) {
              // If it's not already in our container, move it
              if (!container.contains(element)) {
                container.appendChild(element);
              }
            }
          }
        });
      });
    });

    // Observe the body for any new elements
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      if (script && script.parentNode === container) {
        container.removeChild(script);
      }
      // Also clean up any widget elements
      const widgetElements = container.querySelectorAll('[class*="linda"], [id*="linda"], [class*="gb-widget"]');
      widgetElements.forEach(el => {
        if (el.parentNode) {
          el.remove();
        }
      });
    };
  }, []);
  return (
    <main className="page-container">
      {/* Hero Section */}
      <section className="bridal-hero">
        <div className="bridal-hero-overlay"></div>
        <div className="bridal-hero-content">
          <h3 className="bridal-hero-label">FOR THE MODERN BRIDE</h3>
          <h1 className="bridal-hero-title">Discover Wedding Dresses that Feel Like You</h1>
          <div className="hero-divider"></div>
          <p className="bridal-hero-text">
            At Bridal Aisle Boutique, we believe every bride deserves to fall in love...with her dress 
            and her bridal dress shopping experience. Our curated collection of new off-the-rack dresses 
            and orderable gowns blends designer quality with unmatched value, ensuring you find the 
            perfect fit, the perfect style, and the perfect moment to say yes.
          </p>
        </div>
      </section>

      {/* Off-the-Rack Section */}
      <section className="bridal-section-two">
        <div className="bridal-two-column">
          <div className="bridal-image-left">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <img 
                src="/bridal/bride-veil.jpg" 
                alt="Bride with flowing veil"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <div className="bridal-content-right">
            <h3 className="bridal-section-label">OFF-THE-RACK WEDDING DRESSES</h3>
            <h1 className="bridal-section-title">Thousands of designer gowns, ready when you are</h1>
            <div className="bridal-horizontal-divider"></div>
            
            <p className="bridal-section-text">
              Say yes and take your dream dress home the very same day.
            </p>
            <p className="bridal-section-text">
              Bridal Aisle Boutique carries thousands of new designer wedding dresses in a wide range 
              of styles and sizes (0–32)—all priced significantly lower than retail.
            </p>
            <p className="bridal-section-text">
              Our ever-changing inventory means there's always something new to discover. From timeless 
              silhouettes to modern designs, every gown is hand-selected with today's bride in mind.
            </p>
            <p className="bridal-section-text">
              Appointments are required and tend to fill quickly, so be sure to book early!
            </p>
            
            <Link href="/appointments" className="bridal-cta-btn">SCHEDULE YOUR APPOINTMENT</Link>
          </div>
        </div>
      </section>

      {/* Made to Order Section - Full Width Hero */}
      <section className="bridal-made-to-order">
        <div className="bridal-mto-overlay"></div>
        <div className="bridal-mto-content">
          <h3 className="bridal-mto-label">MADE TO ORDER FOR YOUR MOMENT</h3>
          <h1 className="bridal-mto-title">Custom-designed gowns, made just for you</h1>
          <p className="bridal-mto-text">
            In addition to our in-stock selection, Bridal Aisle Boutique offers made-to-order wedding 
            dresses from two exceptional designers—each known for their quality, craftsmanship, and 
            signature style.
          </p>
        </div>
      </section>

      {/* Section 4 - Moonlight Bridal */}
      <section className="bridal-designer-section">
        <div className="bridal-two-column">
          <div className="bridal-content-left">
            <h1 className="designer-script-title">Moonlight Bridal</h1>
            
            <p className="bridal-section-text">
              We offer the Tango, Collection, and Modest lines from Moonlight Bridal. While we don't 
              have every dress in-store, we can often request a loaner gown. Please note that we are 
              not able to request a specific size for loaner gowns.
            </p>
            
            {/* Image appears here on mobile - after first paragraph */}
            <div className="bridal-image-mobile-insert">
              <Image
                src="/bridal/moonlight-bride.jpg"
                alt="Moonlight Bridal"
                width={600}
                height={800}
                style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
              />
            </div>
            
            <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              <a href="https://www.moonlightbridal.com/Collection/MoonlightCollection/" target="_blank" rel="noopener noreferrer" className="view-collection-link">VIEW THE COLLECTION →</a>
            </div>
            
            <h3 className="designer-message-label">A MESSAGE FROM BRIDAL AISLE</h3>
            
            <p className="bridal-section-text">
              Elegant, romantic, and beautifully detailed, Moonlight Bridal offers gowns that reflect 
              your personality—whether you're sleek and modern or timelessly classic. Each dress is{' '}
              <em>made to order within 3–4 months</em> and available in a range of sizes (2–28).
            </p>
            
            <p className="bridal-section-text">
              If you have questions about a dress, please contact us — we're happy to help!
            </p>
            
            <div style={{ marginTop: '2rem' }}>
              <Link href="/appointments" className="bridal-cta-btn">SCHEDULE YOUR APPOINTMENT</Link>
            </div>
          </div>
          
          <div className="bridal-image-right">
            <Image
              src="/bridal/moonlight-bride.jpg"
              alt="Moonlight Bridal"
              width={600}
              height={800}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Section 5 - Barbie Anne Bridal */}
      <section className="bridal-designer-section alt">
        <div className="bridal-two-column reverse">
          <div className="bridal-image-left">
            <Image
              src="/bridal/barbie-anne-bride.jpg"
              alt="Barbie Anne Bridal Modest Collection"
              width={600}
              height={800}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: '100%' }}
            />
          </div>
          
          <div className="bridal-content-right">
            <h1 className="designer-script-title">Barbie Anne<br />Bridal Modest<br />Collection</h1>
            
            <p className="bridal-section-text">
              We currently only offer the Modest line from Barbie Anne Bridal. While we don't carry every 
              dress in-store to try on, we can usually request a loaner dress from the designer. Please 
              note that we are not able to request a specific size for loaner gowns.
            </p>
            
            {/* Mobile-only image insert */}
            <div className="bridal-image-mobile-insert">
              <Image
                src="/bridal/barbie-anne-bride.jpg"
                alt="Barbie Anne Bridal Modest Collection"
                width={600}
                height={800}
                style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
              />
            </div>
            
            <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              <a href="#" className="view-collection-link">VIEW THE COLLECTION →</a>
            </div>
            
            <h3 className="designer-message-label">A MESSAGE FROM BRIDAL AISLE</h3>
            
            <p className="bridal-section-text">
              For brides seeking a modest or traditional style, the Barbie Anne Bridal Modest Collection 
              combines elegance with intention. From intricate lacework to refined bead detailing, every 
              gown is <em>made to order (3–4 months)</em> with select styles available for faster shipping.
            </p>
            
            <p className="bridal-section-text">
              If you have questions about a particular dress, please contact us here — we're happy to help!
            </p>
            
            <div style={{ marginTop: '2rem' }}>
              <Link href="/appointments" className="bridal-cta-btn">SCHEDULE YOUR APPOINTMENT</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Accessories with 4 Corner Images */}
      <section className="bridal-accessories-section">
        <div className="accessories-grid">
          {/* Top Left Image - Desktop */}
          <div className="acc-img-top-left acc-desktop-only">
            <Image
              src="/bridal/acc-top-left.jpg"
              alt="Accessory detail"
              width={180}
              height={200}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
            />
          </div>
          
          {/* Top Left Image - Mobile (swapped with bottom-right) */}
          <div className="acc-img-top-left acc-mobile-only">
            <Image
              src="/bridal/accessories-img2.jpg"
              alt="Bride with consultant"
              width={180}
              height={200}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
            />
          </div>
          
          {/* Center Content - spans middle */}
          <div className="accessories-content-center">
            <h3 className="bridal-section-label">COMPLETE YOUR BRIDAL LOOK</h3>
            <h1 className="accessories-title">The finishing touches that make it yours</h1>
            
            <p className="bridal-section-text">
              Your dress tells your story—your accessories complete it. Bridal Aisle Boutique carries 
              hundreds of veils, belts, hair vines, and more, each carefully selected to complement our gowns.
            </p>
            
            <p className="bridal-section-text">
              Our stylists are here to help you create a look that feels cohesive and personal, from subtle 
              sparkle to statement elegance. We proudly carry designer accessories from{' '}
              <a href="#" style={{ textDecoration: 'underline', color: '#2f3233' }}>Marionat</a>,{' '}
              <a href="#" style={{ textDecoration: 'underline', color: '#2f3233' }}>JL Johnson</a>, and more.
            </p>
            
            <div style={{ marginTop: '2.5rem' }}>
              <Link href="/appointments" className="bridal-cta-btn">ACCESSORIES APPOINTMENTS</Link>
            </div>
          </div>
          
          {/* Top Right Image - Desktop */}
          <div className="acc-img-top-right acc-desktop-only">
            <Image
              src="/bridal/acc-top-right.jpg"
              alt="Dress detail"
              width={180}
              height={200}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
            />
          </div>
          
          {/* Top Right Image - Mobile (swapped with bottom-left) */}
          <div className="acc-img-top-right acc-mobile-only">
            <Image
              src="/bridal/accessories-img1.jpg"
              alt="Bride trying on dress"
              width={180}
              height={250}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
            />
          </div>
          
          {/* Bottom Left Image - Desktop */}
          <div className="acc-img-bottom-left acc-desktop-only">
            <Image
              src="/bridal/accessories-img1.jpg"
              alt="Bride trying on dress"
              width={180}
              height={250}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
            />
          </div>
          
          {/* Bottom Left Image - Mobile (swapped with top-right) */}
          <div className="acc-img-bottom-left acc-mobile-only">
            <Image
              src="/bridal/acc-top-right.jpg"
              alt="Dress detail"
              width={180}
              height={200}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
            />
          </div>
          
          {/* Bottom Right Image - Desktop */}
          <div className="acc-img-bottom-right acc-desktop-only">
            <Image
              src="/bridal/accessories-img2.jpg"
              alt="Bride with consultant"
              width={180}
              height={250}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
            />
          </div>
          
          {/* Bottom Right Image - Mobile (swapped with top-left) */}
          <div className="acc-img-bottom-right acc-mobile-only">
            <Image
              src="/bridal/acc-top-left.jpg"
              alt="Accessory detail"
              width={180}
              height={250}
              style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Section 7 - Layaway */}
      <section className="bridal-layaway-section">
        <div className="layaway-content-circle">
          <h3 className="layaway-label">FLEXIBLE OPTIONS FOR EVERY BRIDE</h3>
          <h1 className="layaway-title">Layaway Available</h1>
          <div className="layaway-divider"></div>
          <p className="layaway-text">
            Say yes to your dress with confidence. We offer a 30-day layaway option, allowing you 
            to secure your gown without the stress of paying in full at once. Ask your stylist for 
            details during your appointment.
          </p>
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
            question: "Why do you charge for bridal appointments?",
            answer: "During your bridal appointment, you are guaranteed one-on-one attention with a dedicated stylist to guide and assist with your selection, and the exclusive use of an area in the boutique. Our bridal gown appointments are 90 minutes for brides who are ready to take their dream dress home!"
          },
          {
            question: "How many people should I bring with me to try on wedding dresses?",
            answer: "We welcome parties of up to 4 people plus the Bride. If you anticipate having 5 or more people for your bridal appointment, we offer a VIP appointment with a fee for your convenience."
          },
          {
            question: "I want to find accessories for a wedding dress I already have. Am I allowed to bring it into the shop?",
            answer: "Absolutely! We find it's much easier to help you find the right additions to your gown when you can try them on together. Please call to get on our schedule or book online here."
          },
          {
            question: "What is your return policy?",
            answer: "All sales are final. No exchanges or refunds."
          },
          {
            question: "If I find a wedding dress but want to come back with a friend the next day, how long could you hold my dress until I return to the shop?",
            answer: "We can hold your dresses for 24 hours for a non-refundable $50. The $50 will be applied to the purchase of your dress. If you do not purchase your dress within the 24 hour period, the $50 will be retained and the dress will be returned to the floor. This ensures we give every bride the best opportunity to find the dress of her dreams!"
          },
          {
            question: "What sizes do you carry?",
            answer: "You will find gowns ranging from size 0 to size 32 and all sizes in between when you shop at Bridal Aisle Boutique."
          },
          {
            question: "What is the price range for your wedding dresses?",
            answer: "Our dresses range in price from $700-$2,500 with the most average price being in the $1,000-$1,500 range."
          },
          {
            question: "What type of inventory do you carry?",
            answer: "We are excited to carry over 2,000 new wedding gowns for you to bring home today. Visit our Instagram or Facebook page for the most updated look at our newest arrivals. As a one-stop shop you will also find, mothers dresses, formal dresses and suits at Bridal Aisle Boutique."
          },
          {
            question: "What if I need alterations for a wedding dress I really like?",
            answer: "Alterations are not included with the price of the dress. We will provide you with multiple trusted alteration specialists we refer our clients to around the Twin Cities area."
          },
          {
            question: "Layaway: Are you interested in a dress, but need help making the purchase?",
            answer: "You can say \"Yes!\" to the dress without the worry of paying the full amount upfront. At Bridal Aisle Boutique, we offer a 30 day layaway option! Ask a consultant for more details and make your dream come true!"
          },
          {
            question: "Can I bring beverages to my appointment?",
            answer: "We do not allow drinks or food within the store. Champagne and clear liquids are acceptable but all other substances will be asked to be left in our front waiting area. Champagne must be popped either in our restroom or outside."
          }
        ]} />
      </section>

      {/* Linda Widget Section */}
      <section className="linda-widget-section">
        <div id="linda-widget-container"></div>
      </section>
    </main>
  );
}
