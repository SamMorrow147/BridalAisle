# Bridal Aisle Rebuild Kit

> A complete toolkit to scrape and rebuild the Bridal Aisle website using Playwright and Next.js

## ✨ Features

- 🔍 **Smart Web Scraping** - Extracts structured content, links, and images using Playwright
- 🖼️ **Comprehensive Image Extraction** - Captures images from `<img>`, `srcset`, and CSS backgrounds
- 📸 **Responsive Screenshots** - Takes full-page captures at desktop, tablet, and mobile viewports
- 💾 **Asset Management** - Downloads and organizes all images with stable filenames
- ⚡ **Next.js Generator** - Scaffolds a complete Next.js 14 app with all extracted content
- 📱 **Jotform Integration** - Reusable component for embedding forms

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
npx playwright install chromium
```

### 2. Scrape the Website

Scrape all 5 pages at once:

```bash
npm run scrape:all
```

This will:
- ✅ Scrape appointments, bridal, mens-suits, about, and contact pages
- ✅ Extract all content, links, and images
- ✅ Download all assets locally
- ✅ Take screenshots at 3 viewports per page

### 3. Generate Next.js App

```bash
npm run scaffold
```

### 4. Run Your Rebuilt Site

```bash
cd nextjs-app
npm install
npm run dev
```

Visit http://localhost:3000 🎉

---

## 📋 What Gets Extracted

### For Each Page:

```
rebuild-kit/[slug]/
├── content.json          # Structured text (headings, paragraphs, lists)
├── links.json            # All CTAs and links with href
├── images.json           # Image inventory with local paths
├── metadata.json         # Complete scrape metadata
├── screenshots/
│   ├── desktop.png       # 1440x900
│   ├── tablet.png        # 820x1180
│   └── mobile.png        # 390x844
└── assets/
    └── images/           # Downloaded images
```

### Content Extraction
- **Headings** (h1-h6) with hierarchy
- **Paragraphs** with HTML preserved
- **Lists** (ordered and unordered)
- Document order maintained

### Link Extraction
- Link text and href
- Button/CTA detection
- ARIA labels
- All interactive elements

### Image Extraction
- `<img>` elements with src
- `srcset` attributes (largest candidate selected)
- CSS `background-image` URLs (computed styles)
- Alt text and CSS selectors

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run scrape:all` | Scrape all 5 pages + download assets |
| `npm run scrape:single <url> <slug>` | Scrape a single page |
| `npm run download [slug]` | Download assets for one or all pages |
| `npm run scaffold` | Generate Next.js app from scraped data |

---

## 📦 Project Structure

```
.
├── scripts/
│   ├── scrape.ts              # Core scraping logic
│   ├── download-assets.ts     # Asset downloading
│   ├── run-all.ts            # Full workflow orchestrator
│   └── scaffold-nextjs.ts    # Next.js app generator
│
├── rebuild-kit/              # Scraped content (auto-generated)
│   ├── appointments/
│   ├── bridal/
│   ├── mens-suits/
│   ├── about/
│   └── contact/
│
└── nextjs-app/               # Generated Next.js app
    ├── app/                  # Next.js 14 App Router
    ├── components/           # Reusable components
    ├── content/              # Copied JSON files
    └── public/               # Copied images
```

---

## 🎨 Next.js Components

The scaffold includes three powerful components:

### 1. ContentRenderer
Renders structured content blocks from JSON:
- Headings with proper hierarchy
- Paragraphs with HTML formatting
- Lists (ordered and unordered)

### 2. JotformEmbed
Embed Jotform forms with:
- Responsive iframe handling
- Message passing for dynamic sizing
- Accessibility features

**Usage:**
```tsx
<JotformEmbed formId="YOUR_FORM_ID" height={800} />
```

### 3. ImageGallery
Display image collections:
- Next.js Image optimization
- Responsive grid layout
- Automatic path resolution

---

## 🎯 Pages Scraped

- ✅ `/appointments` - Book an Appointment (with Jotform)
- ✅ `/bridal` - Bridal Collection
- ✅ `/mens-suits` - Men's Formal Wear
- ✅ `/about` - About Us
- ✅ `/contact` - Contact Form (with Jotform)

---

## 🔧 Configuration

### Viewport Sizes (in `scrape.ts`)
```typescript
const viewports = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 820, height: 1180 },
  mobile: { width: 390, height: 844 }
};
```

### Jotform Setup (in `nextjs-app/app/[page]/page.tsx`)
Replace `YOUR_JOTFORM_ID_HERE` with your actual form IDs:
```tsx
<JotformEmbed formId="YOUR_JOTFORM_ID_HERE" height={800} />
```

---

## 📝 Notes

- **Respectful Scraping**: 2-second delay between pages
- **Stable Filenames**: Images use slugified names + hash
- **Pixel Parity**: Screenshots for visual comparison
- **Human-Readable**: All JSON files are formatted

---

## 🔧 Troubleshooting

### Playwright Not Found
```bash
npx playwright install chromium
```

### Network Timeouts
Edit `scripts/scrape.ts` to increase timeout:
```typescript
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
```

### Missing Content
Some pages may require specific selectors. Review the scraped JSON files and adjust extraction logic in `scrape.ts` if needed.

---

## 📚 Documentation

- **[USAGE.md](USAGE.md)** - Comprehensive usage guide
- **[README.md](README.md)** - This file

---

## 🚀 Deployment

After customizing your Next.js app:

```bash
cd nextjs-app
npm run build
```

Deploy to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting

---

## ⚠️ Legal Notice

This tool is designed for legitimate use cases such as:
- Migrating your own website
- Creating backups
- Content audits
- Redesign projects

Always respect `robots.txt` and website terms of service.

---

## 📄 License

MIT - Use freely for your own projects.

---

**Built with ❤️ for the Bridal Aisle team**

