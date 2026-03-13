# SEO Changelog — Bridal Aisle Boutique

All SEO changes made to bridalaislemn.com, tracked in order.

---

## Step 1 — Titles, Meta Descriptions & OG URLs
**Date:** 2026-03-12

### Files Changed
- `nextjs-app/app/page.tsx`
- `nextjs-app/app/appointments/page.tsx`
- `nextjs-app/app/bridal/page.tsx`
- `nextjs-app/app/mens-suits/page.tsx`
- `nextjs-app/app/about/page.tsx`
- `nextjs-app/app/contact/page.tsx`

### Changes

#### Home (`/`)
- **Title:** `Minnesota's Premier Bridal & Formalwear Destination | Bridal Aisle Boutique`
  → `Buy Wedding Dresses in Minnesota | Bridal Aisle Boutique — Wedding Dress Shop Osseo MN`
- **Description:** replaced existing description
  → `Shop 2,000+ designer wedding dresses at Bridal Aisle Boutique — Minnesota's best wedding dress shop in Osseo MN. Take your dream gown home the same day. Book now.`
- **OG URL:** `https://bridalaisle.com` → `SITE_URL` (`https://www.bridalaislemn.com`)

#### Appointments (`/appointments`)
- **Title:** `Book Your Bridal Appointment | Bridal Aisle Boutique`
  → `Book a Bridal Appointment in Minnesota | Bridal Aisle Boutique — Osseo MN`
- **Description:** replaced existing description
  → `Book your bridal appointment at Bridal Aisle Boutique — Minnesota's best wedding dress shop. Bridal, VIP, Budget & Men's Suit appointments. Same-day dress purchase in Osseo MN.`
- **OG URL:** `https://bridalaisle.com/appointments` → `SITE_URL/appointments`

#### Bridal (`/bridal`)
- **Title:** `Wedding Dresses - 2,000+ Designer Gowns | Bridal Aisle Boutique`
  → `Buy Wedding Dresses in Minnesota | Designer & Affordable Bridal Gowns — Bridal Aisle Boutique near Maple Grove MN`
- **Description:** replaced existing description
  → `Shop designer wedding dresses, modest bridal gowns, bridesmaid dresses & wedding guest attire at Bridal Aisle Boutique near Maple Grove MN. 2,000+ off-the-rack gowns, sizes 0–32.`
- **OG URL:** `https://bridalaisle.com/bridal` → `SITE_URL/bridal`

#### Men's Suits (`/mens-suits`)
- **Title:** `Men's Suits - Rentals & Custom Fits | Bridal Aisle Boutique`
  → `Men's Formal Attire for Weddings in Minnesota | Custom Suits & Formal Wear — Bridal Aisle Boutique near Maple Grove MN`
- **Description:** replaced existing description
  → `Shop men's wedding suits, tuxedos & formal wear at Bridal Aisle Boutique near Maple Grove MN. Suit rentals & custom-made suits for weddings in Minnesota. Book your appointment.`
- **OG URL:** `https://bridalaisle.com/mens-suits` → `SITE_URL/mens-suits`

#### About (`/about`)
- **Title:** `About Us | Bridal Aisle Boutique`
  → `About Bridal Aisle Boutique — One of Minnesota's Best Wedding Dress Shops | Osseo MN Since 2013`
- **Description:** replaced existing description
  → `Learn about Bridal Aisle Boutique — one of Minnesota's best wedding dress shops since 2013. Award-winning bridal boutique in Osseo MN. Designer gowns, suits & stress-free appointments.`
- **OG URL:** `https://bridalaisle.com/about` → `SITE_URL/about`

#### Contact (`/contact`)
- **Title:** `Contact Us & Location | Bridal Aisle Boutique`
  → `Contact Bridal Aisle Boutique — Wedding Dress Shop Osseo MN | Moving to Maple Grove MN | Book a Bridal Appointment`
- **Description:** replaced existing description
  → `Contact Bridal Aisle Boutique — wedding dress shop in Osseo MN, moving to Maple Grove soon. Call (763) 220-2319 or book a bridal appointment. Formal wear & bridal gowns near Maple Grove MN.`
- **OG URL:** `https://bridalaisle.com/contact` → `SITE_URL/contact`

### Additional Fix
- All 6 pages now import `SITE_URL` from `app/lib/site.ts` for OG URLs instead of hardcoding a wrong domain.

---

## Step 2 — Heading Tag Changes: Home (`/`)
**Date:** 2026-02-13

### Files Changed
- `nextjs-app/components/HeroSlideshow.tsx`
- `nextjs-app/app/HomePageContent.tsx`
- `nextjs-app/components/TestimonialCarousel.tsx`
- `nextjs-app/app/globals.css`

### Changes
Reduced page from **8 × `<h1>`** to exactly **1 × `<h1>`** ("IS AT BRIDAL AISLE").

| Heading Text | Old Tag | New Tag |
|---|---|---|
| your dream dress | `h3` | `p` |
| Fall in love with the perfect dress | `h1` | `h2` |
| that same day. | `h2` | `h3` |
| MINNESOTA'S MOST LOVED BRIDAL BOUTIQUE | `h3` | `p` |
| Designer Gowns | `h1` | `h2` |
| OFF-THE-RACK | `h3` | `p` |
| Stress-free Appointments | `h1` | `h2` |
| PERSONALIZED | `h3` | `p` |
| For Every Bride | `h1` | `h2` |
| FLEXIBLE OPTIONS | `h3` | `p` |
| Experience | `h1` | `h2` |
| THE BRIDAL AISLE | `h3` | `p` |
| 01–04 step headings | `h2` | `h3` |
| Timeless style for every occasion. | `h1` | `h2` |
| TAILORED SUITS FOR LIFE'S DEFINING MOMENTS | `h3` | `p` |
| Testimonial quote | `h1` | `blockquote` |
| Testimonial name | `h3` | `p` |
| Designers We Work With | `h1` | `h2` |
| FAQ | `h1` | `h2` |

### CSS Fixes (globals.css)
- `.about-subtitle`: added `text-transform: none; letter-spacing: 0` (prevented global `h3` from overriding cursive script style)
- `.about-label`: added `text-align: center; line-height: 1.2` (restored centering after `h3`→`p`)
- `.feature-title`: added `margin-top: 0` (removed 3rem gap introduced by global `h2` margin)

---

## Step 3 — Heading Tag Changes: Appointments (`/appointments`)
**Date:** 2026-02-13

### Files Changed
- `nextjs-app/components/AppointmentsHeroSlideshow.tsx`
- `nextjs-app/app/appointments/AppointmentsPageContent.tsx`
- `nextjs-app/app/globals.css`

### Changes
Reduced page from **7 × `<h1>`** to exactly **1 × `<h1>`** ("APPOINTMENT").

| Heading Text | Old Tag | New Tag |
|---|---|---|
| book your | `h3` | `p` |
| We carry The Largest selection… | `h3` | `h2` |
| Book an Appointment | `h1` | `h2` |
| BRIDAL AISLE | `h1` | `p` |
| Appointment Menu | `h2` | `h3` |
| Bridal Aisle Dress Appointment | `h1` | `h2` |
| Budget Bridal Outlet Dress Appointment | `h1` | `h2` |
| VIP Bridal Experience | `h1` | `h2` |
| Accessory/Bridal Styling Appointment | `h1` | `h2` |
| The Wood's Men's Suits | `h1` | `h2` |
| HOW TO PREPARE FOR YOUR APPOINTMENT | `h1` | `h2` |
| A smaller guest list… | `h2` | `h3` |
| We're a shoe-free boutique… | `h2` | `h3` |
| FAQ | `h1` | `h2` |

### CSS Fixes (globals.css)
- `.appointment-detail-title`: added `margin-top: 0`
- `.appointment-menu-subtitle`: added `text-transform: none`
- `.prepare-title`: added `text-transform: none; letter-spacing: normal`
- `.faq-heading`: added `margin-top: 0` (applies site-wide to all FAQ sections)
- `.prepare-header h1` selector → `.prepare-header h2` (desktop + mobile breakpoint)
- `.prepare-header--btn`: changed `border: none` → `border: 1.5px solid rgba(214, 192, 162, 0.55)` (visual button treatment)

---

## Step 4 — Heading Tag Changes: Bridal (`/bridal`)
**Date:** 2026-02-13

### Files Changed
- `nextjs-app/app/bridal/BridalPageContent.tsx`
- `nextjs-app/app/globals.css`

### Changes
Reduced page from **7 × `<h1>`** to exactly **1 × `<h1>`** ("Discover Wedding Dresses that Feel Like You").

| Heading Text | Old Tag | New Tag |
|---|---|---|
| FOR THE MODERN BRIDE | `h3` | `p` |
| Thousands of designer gowns, ready when you are | `h1` | `h2` |
| OFF-THE-RACK WEDDING DRESSES | `h3` | `p` |
| Custom-designed gowns, made just for you | `h1` | `h2` |
| MADE TO ORDER FOR YOUR MOMENT | `h3` | `p` |
| Moonlight Bridal | `h1` | `h3` |
| Barbie Anne Bridal Modest Collection | `h1` | `h3` |
| COMPLETE YOUR BRIDAL LOOK | `h3` | `p` |
| The finishing touches that make it yours | `h1` | `h2` |
| FLEXIBLE OPTIONS FOR EVERY BRIDE | `h3` | `p` |
| Layaway Available | `h1` | `h2` |
| FAQ | `h1` | `h2` |

### CSS Fixes (globals.css)
- `.bridal-section-title`, `.bridal-mto-title`, `.accessories-title`, `.layaway-title`: added `margin-top: 0`
- `.designer-script-title`: added `text-transform: none; letter-spacing: normal` (preserved cursive "Printed Moments" font for designer names)

---

## Step 5 — Heading Tag Changes + Alt Texts: About (`/about`)
**Date:** 2026-02-13

### Files Changed
- `nextjs-app/app/about/page.tsx`
- `nextjs-app/components/TeamSection.tsx`
- `nextjs-app/app/globals.css`

### Heading Changes
Reduced page from **7 × `<h1>`** to exactly **1 × `<h1>`** ("Where every bride & groom's story begins.").

| Heading Text | Old Tag | New Tag |
|---|---|---|
| BEHIND THE BOUTIQUE | `h3` | `p.about-hero-label` |
| Minnesota's Destination for Effortless Bridal Style | `h1` | `h2.about-destination-heading` |
| Bridal Luxury, Simplified | `h3` | `p.about-page-label` |
| Annette Hall quote | `h2` | `blockquote` |
| Annette Hall attribution | `h3` | `cite` |
| A bridal boutique built on heart & honesty | `h1` | `h2` |
| MEET THE FOUNDERS | `h3` | `p.about-page-label` |
| A legacy of love & dedication | `h1` | `h2` |
| Your day, done your way | `h2` | `h3` |
| Our Awards | `h1` | `h2` |
| LOVE FROM PAST BRIDES | `h3` | `p.about-love-label` |
| Hannah Davis testimonial quote | `h1` | `blockquote` |
| FAQ | `h1` | `h2` |
| TELL US A BIT ABOUT YOURSELF (team bio labels × all stylists) | `h5` | `p.team-profile-label` |
| FAVORITE PART ABOUT BEING A BRIDAL STYLIST (× all stylists) | `h5` | `p.team-profile-label` |
| ONE PIECE OF ADVICE… (× all stylists) | `h5` | `p.team-profile-label` |

### Alt Text Updates (page.tsx)
- Hero background (`8.jpg`): added descriptive alt
- Carl & Kirsten portrait: updated alt
- Oval gray logo: updated alt
- Showroom (`1k1a8372`): **added missing alt** (was empty)
- Fitting area (`bab-68web`): **added missing alt** (was empty)
- Stylist photo (`tiffanyjoannphoto-198`): **added missing alt** (was empty)
- Bouquet icon: set to `alt=""` (decorative)
- Showroom wide (`bab-146web`): **added missing alt** (was empty)
- Annette & Brad founders portrait: updated alt
- Team photo (`img-0257-bg`): **added missing alt** (was empty)
- Experience photo ("I Said Yes"): updated alt
- 5 award images: updated alts with descriptive text
- Community event photo (`pints-072`): **added missing alt** (was empty)

### CSS Fixes (globals.css)
- `.about-hero-content-box h3` → `.about-hero-content-box .about-hero-label`
- `.content-section.centered h1` → `.content-section.centered .about-destination-heading`
- Added `.about-page-label` class (replicates global `h3` label style for `p` elements)
- `.quote-section h2` → `.quote-section blockquote`
- `.quote-section h3` → `.quote-section cite` (added `font-style: normal`)
- `.history-content h3` → `.history-content .about-page-label`
- `.history-content h1` → `.history-content h2` (added `margin-top: 0`)
- `#experience .experience-heading`: added `text-transform: none; letter-spacing: normal`
- `.awards-section h1` → `.awards-section h2` (desktop + mobile breakpoint)
- `.about-testimonial-content h3` → `.about-testimonial-content .about-love-label`
- `.about-testimonial-content h1` → `.about-testimonial-content blockquote` (desktop + mobile breakpoint)
- `.team-profile-section h5` → `.team-profile-section .team-profile-label`

---

## Step 6 — Heading Tag Changes + Alt Texts: Contact (`/contact`)
**Date:** 2026-02-13

### Files Changed
- `nextjs-app/app/contact/ContactPageContent.tsx`
- `nextjs-app/components/PreparingForVisit.tsx`

### Heading Changes
- All card titles in `PreparingForVisit.tsx` (8 total across 4 pages): `h2` → `h3`
- "Preparing for your visit to Bridal Aisle": kept as `h2`
- "We are excited to connect with you!": kept as `h2`
- EMAIL / PHONE / OUR LOCATION / HOURS: already `h3`, no change needed

### Alt Text Updates
- Hero image (`Contact.jpg`): updated alt
- Submark logo: updated alt
- Elongated logo: updated alt
- Boutique interior (PreparingForVisit): updated alt

---

## Step 7 — Men's Suits SSR Fix + Heading Tag Changes
**Date:** 2026-02-13

### Files Changed
- `nextjs-app/app/mens-suits/MensSuitsPageContent.tsx`
- `nextjs-app/app/globals.css`

### SSR Fix
**Problem:** Page rendered only "Loading..." to crawlers. All content was gated behind a `pageReady` state that only resolved in the browser via `useEffect`, making the page invisible to Google.

**Fix:** Removed the `pageReady` state, its `useEffect`, and the loading spinner block entirely. The Linda widget `useEffect` was preserved and continues to load after component mount. The page now server-renders all content immediately.

### Heading Changes
| Heading Text | Old Tag | New Tag |
|---|---|---|
| THE WOODS MEN'S SUITS | `h3` | `p` |
| For the groom, the groomsmen & beyond | `h1` | `h1` (kept) |
| Full-service suit rentals… | `h1` | `h2` |
| The Suit Rental Process | `h1` | `h2` |
| OWN YOUR SUIT | `h3` | `p` |
| Pure Silk Suits Designed to Last a Lifetime | `h1` | `h2` |

### CSS Fixes (globals.css)
- `.mens-section-title`, `.mens-process-heading`, `.silk-suits-title`: added `margin-top: 0`

---

## Step 8 — Alt Text Updates: Home, Appointments, Bridal, Men's Suits
**Date:** 2026-02-13

### Files Changed
- `nextjs-app/app/HomePageContent.tsx`
- `nextjs-app/components/HeroSlideshow.tsx`
- `nextjs-app/app/appointments/AppointmentsPageContent.tsx`
- `nextjs-app/app/bridal/BridalPageContent.tsx`
- `nextjs-app/app/mens-suits/MensSuitsPageContent.tsx`

### Home (`/`)

| Image | Old Alt | New Alt |
|---|---|---|
| Hero slide 1 (couple) | Couple at wedding ceremony | Happy Minnesota bride and groom in designer wedding attire from Bridal Aisle Boutique, Osseo MN |
| Hero slide 2 (bride + groom) | Bride and groom portrait | Bride in off-the-rack designer wedding dress from Bridal Aisle Boutique — wedding dress shopping Minnesota |
| Hero slide 3 (groom) | Groom portrait | Groom in men's formal attire for wedding — Bridal Aisle Boutique, Minnesota |
| Nav submark logo | Bridal Aisle | Bridal Aisle Boutique logo — wedding dress shop in Osseo MN |
| White stacked logo (hero overlay) | Bridal Aisle | Bridal Aisle Boutique — buy designer wedding dresses in Minnesota |
| Bride on balcony (3.jpg) | Bride on balcony | Bride in elegant bridal gown from Bridal Aisle Boutique — Minnesota's premier wedding dress shop |
| Boutique interior (bab-108web) | Bridal appointment | Showroom at Bridal Aisle Boutique — one of Minnesota's best wedding dress shops, Osseo MN |
| Stylist with bride (bab-102web) | Bride and consultant | Personal bridal stylist helping bride choose a designer wedding dress — wedding dress shopping Minnesota |
| Dress detail (bab-68web) | Wedding dress detail | Close-up of affordable designer wedding dress — off-the-rack at Bridal Aisle Boutique, MN |
| Gallery slideshow (19 slides) | Bride portrait / Bride photo / etc. | Real Minnesota bride in designer wedding gown from Bridal Aisle Boutique, Osseo MN |
| Step 03 center image (bab-103web) | Bride trying on dress | Bride trying on designer gowns at bridal appointment — best wedding dress shop in Minnesota |
| Flower icon | Flower icon | `""` (decorative — empty string) |
| Barbie Anne Bridal logo | Barbie Anne Bridal | Barbie Anne Bridal — modest wedding dress designer at Bridal Aisle Boutique Minnesota |
| Pure Silk Fabrics logo | Pure Silk Fabrics | Pure Silk Fabrics — men's formal attire brand at Bridal Aisle Boutique Minnesota |
| DB Formalwear logo | DB Formalwear | DuBois Formalwear — wedding suit brand at Bridal Aisle Boutique, Osseo MN |

### Appointments (`/appointments`)

| Image Group | Old Alt | New Alt |
|---|---|---|
| Hero slides (×6) | Wedding dress detail / Bridal gown / Bridal detail | Designer wedding dress at Bridal Aisle Boutique — book a bridal appointment in Minnesota |
| Bridal appt images — appt-1 series (×6) | Bridal appointment | Bride trying on designer wedding gown during bridal appointment at Bridal Aisle Boutique, Osseo MN |
| Budget bridal images — appt-2 series (×5) | Budget bridal appointment | Bride during affordable budget bridal appointment — designer wedding dresses under $600, Minnesota |
| VIP experience images — appt-3 series (×7) | VIP bridal experience | Bride and guests during VIP bridal experience — exclusive wedding dress shopping in Minnesota |
| Accessory appt images — appt-4 series (×4) | Accessory appointment | Bride trying on wedding veils and accessories — styling appointment at Bridal Aisle Boutique MN |
| Men's suits images — appt-5 series (×6) | Men's suits appointment | Groom selecting men's formal attire for wedding at Bridal Aisle Boutique — wedding suits Minnesota |

### Bridal (`/bridal`)

| Image | Old Alt | New Alt |
|---|---|---|
| Hero bride with veil | Bride with flowing veil | Bride in elegant designer wedding dress and veil — buy wedding dresses near Maple Grove MN |
| Moonlight Bridal model (×2) | Moonlight Bridal | Moonlight Bridal elegant wedding gown — designer bridal dress available near Maple Grove MN |
| Barbie Anne Bridal model (×2) | Barbie Anne Bridal Modest Collection | Barbie Anne Bridal modest wedding dress — modest bridal gowns Minnesota, available to order |
| acc-top-left.jpg (desktop + mobile) | Accessory detail | Bridal accessories — veil and hairpiece at Bridal Aisle Boutique, wedding dress shop Osseo MN |
| accessories-img2 (desktop + mobile) | Bride with consultant | Bride being styled with bridal accessories — elegant bridal dress styling near Maple Grove MN |
| acc-top-right.jpg (desktop + mobile) | Dress detail | Close-up of designer wedding gown detail — affordable designer dresses near Maple Grove MN |
| accessories-img1 (desktop + mobile) | Bride trying on dress | Bride trying on wedding dress and veil — best place to find bridesmaid & bridal dresses Minnesota |

### Men's Suits (`/mens-suits`)

| Image | Old Alt | New Alt |
|---|---|---|
| Hero groom | Groom in suit | Groom in tailored wedding suit from Bridal Aisle Boutique — formal wear near Maple Grove MN |
| DB Formalwear logo | DB Formalwear | DB Formalwear — men's formal attire for weddings, available at Bridal Aisle Boutique Minnesota |
| Pure Silk Fabrics logo | Pure Silk Fabrics | Pure Silk Fabrics — custom made suits near Maple Grove MN at Bridal Aisle Boutique |

---

*Remaining: Two blog posts pending content from client.*
