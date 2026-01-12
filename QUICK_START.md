# Quick Start Guide

## Complete Workflow in 4 Steps

### Step 1: Install Dependencies (2 minutes)

```bash
npm install
npx playwright install chromium
```

### Step 2: Scrape All Pages (5-10 minutes)

```bash
npm run scrape:all
```

This will scrape all 5 pages and download all assets automatically.

### Step 3: Generate Next.js App (30 seconds)

```bash
npm run scaffold
```

### Step 4: Run Your Site (1 minute)

```bash
cd nextjs-app
npm install
npm run dev
```

Open http://localhost:3000

---

## What You Get

✅ **5 Complete Pages**
- /appointments (with Jotform embed)
- /bridal
- /mens-suits
- /about
- /contact (with Jotform embed)

✅ **All Content Extracted**
- Headings, paragraphs, lists
- All links and CTAs
- Complete text content

✅ **All Images Downloaded**
- From `<img>` tags
- From `srcset` attributes
- From CSS backgrounds
- Organized and deduplicated

✅ **Responsive Screenshots**
- Desktop (1440x900)
- Tablet (820x1180)
- Mobile (390x844)

✅ **Working Next.js App**
- Routes matching original URLs
- Content rendered from JSON
- Images optimized with Next.js
- Responsive design
- Jotform components ready

---

## Next Steps

1. **Configure Jotform IDs** (if using forms)
   - Edit `nextjs-app/app/appointments/page.tsx`
   - Edit `nextjs-app/app/contact/page.tsx`
   - Replace `YOUR_JOTFORM_ID_HERE` with actual form IDs

2. **Customize Styling**
   - Edit `nextjs-app/app/globals.css`
   - Adjust colors, fonts, spacing to match brand

3. **Review Content**
   - Check `rebuild-kit/[slug]/` folders
   - Review JSON files for accuracy
   - Compare with screenshots

4. **Deploy**
   ```bash
   cd nextjs-app
   npm run build
   ```
   
   Deploy to Vercel, Netlify, or any hosting platform

---

## Individual Page Testing

Want to test one page first?

```bash
# Scrape just the about page
npm run scrape:single https://bridalaislemn.com/about about

# Download its assets
npm run download about

# Generate the Next.js app
npm run scaffold

# Test it
cd nextjs-app
npm install
npm run dev
```

---

## File Locations

- **Scraped Data**: `rebuild-kit/[slug]/`
- **Next.js App**: `nextjs-app/`
- **Scripts**: `scripts/`
- **Documentation**: `README.md`, `USAGE.md`

---

## Troubleshooting

**Error: Playwright not installed**
```bash
npx playwright install chromium
```

**Error: Page not loading in Next.js**
- Make sure you scraped that page first
- Check `rebuild-kit/[slug]/` exists
- Re-run `npm run scaffold`

**Images not showing**
- Check `nextjs-app/public/[slug]/` for images
- Verify paths in `images.json`
- Ensure `npm run download` completed successfully

---

## Support

For detailed documentation:
- **README.md** - Project overview
- **USAGE.md** - Comprehensive guide

Happy rebuilding! 🚀


