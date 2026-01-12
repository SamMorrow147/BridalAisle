# Bridal Aisle Rebuild Kit - Complete Usage Guide

This project provides a complete workflow to scrape the live Bridal Aisle website and rebuild it using Next.js.

## 📚 Table of Contents

1. [Installation](#installation)
2. [Phase 1: Scraping](#phase-1-scraping)
3. [Phase 2: Next.js Rebuild](#phase-2-nextjs-rebuild)
4. [Customization](#customization)
5. [Project Structure](#project-structure)

---

## Installation

### Step 1: Install Dependencies

```bash
npm install
npx playwright install chromium
```

This installs:
- Playwright for web scraping
- TypeScript and tsx for running scripts
- Chromium browser

---

## Phase 1: Scraping

### Option A: Scrape All Pages at Once

```bash
npm run scrape:all
```

This will:
1. Scrape all 5 pages (appointments, bridal, mens-suits, about, contact)
2. Download all images automatically
3. Take screenshots at 3 viewports per page
4. Create a complete rebuild-kit

**Duration:** ~5-10 minutes depending on network speed

### Option B: Scrape Individual Pages

```bash
npm run scrape:single https://bridalaislemn.com/about about
npm run download about
```

This gives you more control over the scraping process.

### What Gets Extracted?

For each page, the scraper creates:

```
rebuild-kit/[slug]/
├── content.json       # Structured text (headings, paragraphs, lists)
├── links.json         # All CTAs and links with href
├── images.json        # Image inventory with local paths
├── metadata.json      # Complete metadata
├── screenshots/
│   ├── desktop.png    # 1440x900
│   ├── tablet.png     # 820x1180
│   └── mobile.png     # 390x844
└── assets/
    └── images/        # All downloaded images with stable names
```

### Image Extraction Details

The scraper captures images from:
- `<img>` tags
- `<source srcset>` attributes (selects largest candidate)
- CSS `background-image` properties (computed styles)

All images are:
- Downloaded with stable, slugified filenames
- Deduplicated automatically
- Organized by page

---

## Phase 2: Next.js Rebuild

### Step 1: Generate the Next.js App

After scraping, create the Next.js application:

```bash
npm run scaffold
```

This creates a `nextjs-app/` directory with:
- Complete Next.js 14 App Router structure
- Pages for all scraped content
- Reusable components
- Copied images in `/public`
- Copied content JSON in `/content`

### Step 2: Install Next.js Dependencies

```bash
cd nextjs-app
npm install
```

### Step 3: Configure Jotform (if needed)

If you use Jotform for appointments/contact, edit the form IDs:

**File:** `nextjs-app/app/appointments/page.tsx`

```tsx
<JotformEmbed 
  formId="YOUR_JOTFORM_ID_HERE"  // Replace with actual form ID
  height={800}
/>
```

**File:** `nextjs-app/app/contact/page.tsx`

```tsx
<JotformEmbed 
  formId="YOUR_JOTFORM_ID_HERE"  // Replace with actual form ID
  height={800}
/>
```

### Step 4: Run the Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see your rebuilt site!

### Step 5: Build for Production

```bash
npm run build
npm start
```

---

## Customization

### Styling

Edit `nextjs-app/app/globals.css` to customize:
- Colors and fonts
- Layout spacing
- Responsive breakpoints
- Component styles

### Content

The content is rendered from JSON files in `nextjs-app/content/[slug]/`:
- `content.json` - Main text content
- `links.json` - All links and CTAs
- `images.json` - Image inventory

You can manually edit these JSON files to modify content.

### Components

Three main components are provided:

1. **ContentRenderer** (`components/ContentRenderer.tsx`)
   - Renders structured content blocks
   - Handles headings, paragraphs, lists
   - Preserves HTML formatting

2. **JotformEmbed** (`components/JotformEmbed.tsx`)
   - Embeds Jotform forms
   - Handles iframe messaging
   - Responsive and accessible

3. **ImageGallery** (`components/ImageGallery.tsx`)
   - Displays image galleries
   - Uses Next.js Image optimization
   - Responsive grid layout

### Adding New Pages

1. Scrape the new page:
   ```bash
   npm run scrape:single https://example.com/new-page new-page
   npm run download new-page
   ```

2. Re-run the scaffold to add the page:
   ```bash
   npm run scaffold
   ```

3. Or manually create the page in `nextjs-app/app/new-page/page.tsx`

---

## Project Structure

```
.
├── scripts/
│   ├── scrape.ts              # Core scraping logic
│   ├── download-assets.ts     # Asset downloading
│   ├── run-all.ts            # Full scraping workflow
│   └── scaffold-nextjs.ts    # Next.js generator
│
├── rebuild-kit/              # Scraped content (gitignored)
│   ├── appointments/
│   ├── bridal/
│   ├── mens-suits/
│   ├── about/
│   └── contact/
│
├── nextjs-app/               # Generated Next.js app (gitignored)
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ContentRenderer.tsx
│   │   ├── JotformEmbed.tsx
│   │   └── ImageGallery.tsx
│   ├── content/              # Copied JSON files
│   └── public/               # Copied images
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## Tips & Best Practices

### Scraping

- The scraper waits 2 seconds between pages to be respectful
- Network timeout is 30 seconds (configurable in scrape.ts)
- Images are downloaded with rate limiting (100ms between downloads)
- Screenshots are full-page captures for pixel-perfect reference

### Next.js

- Images use Next.js Image component for optimization
- Content is statically rendered (can be made dynamic if needed)
- CSS is basic - customize to match your brand
- All routes match the original URL structure

### Content Updates

If the live site changes:
1. Re-run the scraper for specific pages
2. Re-run the scaffold (it won't overwrite customizations)
3. Or manually update the JSON files

---

## Troubleshooting

### Playwright Errors

**Error:** "Chromium not found"
```bash
npx playwright install chromium
```

### Network Timeouts

Increase timeout in `scripts/scrape.ts`:
```typescript
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }); // 60 seconds
```

### Missing Images

Some images may fail to download due to:
- CORS restrictions
- 404 errors
- Network issues

Check the download logs and manually download failed images if needed.

### Next.js Build Errors

**Error:** "Cannot find module 'content/[slug]/content.json'"

Make sure you've scraped all pages before running the scaffold:
```bash
npm run scrape:all
npm run scaffold
```

---

## Next Steps

1. ✅ Scrape all pages
2. ✅ Review screenshots in `rebuild-kit/[slug]/screenshots/`
3. ✅ Generate Next.js app
4. ✅ Customize styles in `globals.css`
5. ✅ Add Jotform IDs
6. ✅ Test locally with `npm run dev`
7. ✅ Deploy (Vercel, Netlify, etc.)

---

## Support

For issues or questions:
1. Check the console output for detailed error messages
2. Review the generated JSON files for content accuracy
3. Compare screenshots with the live site for visual reference

Happy rebuilding! 🚀


