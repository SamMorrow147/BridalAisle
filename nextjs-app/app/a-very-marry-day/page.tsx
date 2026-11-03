import type { Metadata } from 'next';
import Link from 'next/link';
import AddToCalendar from '@/components/AddToCalendar';
import { SITE_URL } from '@/app/lib/site';

const SANTA_FB_EVENT = 'https://www.facebook.com/events/1153334607157888';
const ANNIVERSARY_FB_EVENT = 'https://www.facebook.com/events/1675159267306140';
const GOOGLE_MAP = 'https://maps.app.goo.gl/f9nDcyt7Fx1EwrBy6';

export const metadata: Metadata = {
  title: 'A Very Marry Day | Bridal Aisle Boutique',
  description:
    "Join us for A Very 'Marry' Day at Bridal Aisle on Sunday, Nov. 29, 10am–3pm. Santa from The Woods returns with reindeer and elves Sparkle & Sprinkle. Anniversary celebrations all November.",
  alternates: {
    canonical: '/a-very-marry-day',
  },
  openGraph: {
    title: "A Very 'Marry' Day at Bridal Aisle",
    description:
      'Sunday, Nov. 29, 10am–3pm. Santa, reindeer, elves Sparkle & Sprinkle, games, food trucks, and more.',
    url: `${SITE_URL}/a-very-marry-day`,
  },
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: "A Very 'Marry' Day at Bridal Aisle",
  startDate: '2026-11-29T10:00:00-06:00',
  endDate: '2026-11-29T15:00:00-06:00',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  image: [
    `${SITE_URL}/november-event/santa.jpg`,
    `${SITE_URL}/november-event/bride.jpg`,
  ],
  location: {
    '@type': 'Place',
    name: 'Bridal Aisle',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '15825 95th Ave N',
      addressLocality: 'Maple Grove',
      addressRegion: 'MN',
      postalCode: '55369',
      addressCountry: 'US',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Bridal Aisle Boutique',
    url: SITE_URL,
    telephone: '+1-763-220-2319',
  },
  description:
    "Our Community's beloved Santa from The Woods is returning with us this year along with his reindeer and Santa's elves, Sparkle & Sprinkle! Plus games for the kids (and kids at heart), food trucks, tours of our store, and more!",
  url: `${SITE_URL}/a-very-marry-day`,
  sameAs: [SANTA_FB_EVENT],
};

export default function VeryMarryDayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <main className="marry-page">
        <section className="marry-hero">
          <figure className="marry-polaroid marry-polaroid-left">
            <img src="/november-event/santa.jpg" alt="Santa holding a young girl" />
            <figcaption>Nov. 29</figcaption>
          </figure>
          <div className="marry-intro">
            <p className="marry-kicker">Sunday, Nov. 29</p>
            <h1 className="marry-title">
              <span>A Very</span>
              <span>Marry Day</span>
            </h1>
            <p className="marry-where">at Bridal Aisle</p>
            <p className="marry-when">Santa Claus, 10am – 3pm</p>
            <p className="marry-note">Bring your camera for photos!</p>
            <AddToCalendar className="marry-btn" />
          </div>
          <figure className="marry-polaroid marry-polaroid-right">
            <img src="/november-event/bride.jpg" alt="Bride in the snow holding a winter bouquet" />
            <figcaption>Anniversary</figcaption>
          </figure>
        </section>

        <section className="marry-meta" aria-label="Event date and location">
          <div className="marry-meta-item">
            <p className="marry-meta-label">When</p>
            <p className="marry-meta-value">NOV 29 2026</p>
            <p className="marry-meta-value">10:00 AM – 3:00 PM</p>
          </div>
          <div className="marry-meta-rule" aria-hidden="true" />
          <div className="marry-meta-item">
            <p className="marry-meta-label">Where</p>
            <p className="marry-meta-value">
              <a href={GOOGLE_MAP} target="_blank" rel="noopener noreferrer">
                15825 95th Ave N
              </a>
            </p>
            <p className="marry-meta-value">Maple Grove, MN</p>
          </div>
        </section>

        <section className="marry-photos" aria-label="Event photos">
          <figure className="marry-photo">
            <img
              src="/november-event/santa-family.png"
              alt="Families meeting Santa Claus at Bridal Aisle"
            />
          </figure>
          <figure className="marry-photo">
            <img
              src="/november-event/sleigh.png"
              alt="Guests riding in Santa's sleigh at Bridal Aisle"
            />
          </figure>
          <figure className="marry-photo">
            <img
              src="/november-event/brides-grooms.jpg"
              alt="Bride and groom — Brides & Grooms anniversary celebration at Bridal Aisle"
            />
          </figure>
        </section>

        <section className="marry-details">
          <div>
            <h2>The day</h2>
            <p>
              Our Community&apos;s beloved Santa from The Woods is returning with us this year along with his reindeer and Santa&apos;s elves, Sparkle &amp; Sprinkle!
            </p>
            <p>
              Plus games for the kids (and kids at heart), food trucks, tours of our store, and more!
            </p>
            <p>
              <a href={SANTA_FB_EVENT} target="_blank" rel="noopener noreferrer">
                See our Facebook event for details
              </a>
            </p>
          </div>
          <div>
            <h2>November is also Bridal Aisle&apos;s anniversary month!</h2>
            <p>
              We are celebrating with discounted{' '}
              <Link href="/appointments#appointment-3">weekday VIP appointments</Link> (upon availability), vendor giveaways &amp; bride swag.
            </p>
            <p>
              Purchase a dress, suit or secure your wedding date for suit rentals and you will be entered to win our Grand Prize! Winner will be announced at our event.
            </p>
            <p>
              <a href={ANNIVERSARY_FB_EVENT} target="_blank" rel="noopener noreferrer">
                Go to Facebook Event for Details!
              </a>
            </p>
          </div>
        </section>

        <section className="marry-charity">
          <a
            href="https://inspireandflourish.org"
            target="_blank"
            rel="noopener noreferrer"
            className="marry-charity-logo"
          >
            <img
              src="/november-event/inspire-flourish.png"
              alt="Inspire & Flourish Pet Rescue"
            />
          </a>
          <p>
            A percentage of all November proceeds will be donated to one of Bridal Aisle Boutique&apos;s favorite charity-
            Inspire &amp; Flourish, Pet Rescue.
          </p>
        </section>

        <section className="marry-visit">
          <p>
            <a href={GOOGLE_MAP} target="_blank" rel="noopener noreferrer">
              15825 95th Ave N
            </a>
          </p>
          <p>Maple Grove, MN 55369</p>
          <p>
            <a href="tel:7632202319">763-220-2319</a>
          </p>
        </section>
      </main>
    </>
  );
}
