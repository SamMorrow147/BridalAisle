# Deployment Guide - Bridal Aisle Website

This guide will walk you through deploying your Bridal Aisle website to Vercel.

## ✅ Pre-Deployment Checklist

All items below have been completed:

- [x] `.gitignore` configured to exclude `node_modules`, `.next`, and build files
- [x] Backup files removed (`page.tsx.backup`)
- [x] Next.js configuration optimized for production
- [x] Production build tested successfully
- [x] Vercel configuration file created
- [x] All pages building correctly (11 routes)

## 🚀 Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   cd "/Users/sammorrow/Documents/Local Web Builds/Bridal Aisle"
   git init
   git add .
   git commit -m "Initial commit - Bridal Aisle website"
   ```

2. **Create GitHub Repository**
   - Go to [GitHub](https://github.com/new)
   - Create a new repository (e.g., "bridal-aisle-website")
   - Don't initialize with README (you already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/bridal-aisle-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration from `vercel.json`
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd "/Users/sammorrow/Documents/Local Web Builds/Bridal Aisle"
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 📋 Vercel Configuration

The `vercel.json` file is already configured:

```json
{
  "buildCommand": "cd nextjs-app && npm run build",
  "devCommand": "cd nextjs-app && npm run dev",
  "installCommand": "cd nextjs-app && npm install",
  "framework": "nextjs",
  "outputDirectory": "nextjs-app/.next"
}
```

This tells Vercel:
- The Next.js app is in the `nextjs-app` directory
- How to install dependencies
- How to build the project
- Where the build output is located

## 🔧 Build Information

Your site successfully builds with:
- **11 static pages** (all pre-rendered at build time)
- **Total bundle size**: ~104 KB first load JS
- **Build time**: ~10-15 seconds

### Pages Built:
- `/` (Home)
- `/about`
- `/appointments`
- `/bridal`
- `/contact`
- `/credit`
- `/mens-suits`
- `/privacy-policy`

## 🌐 Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `bridalaisle.com`)
4. Follow Vercel's DNS configuration instructions

## 🔍 Post-Deployment Checks

After deployment, verify:

1. ✅ All pages load correctly
2. ✅ Images display properly
3. ✅ Navigation works
4. ✅ Forms function (Jotform embeds)
5. ✅ Mobile responsiveness
6. ✅ Page load speed

## 🐛 Troubleshooting

### Build Fails

If the build fails, check:
- All dependencies are in `package.json`
- No TypeScript errors (`npm run build` locally)
- Image paths are correct

### Images Not Loading

- Ensure images are in `nextjs-app/public/`
- Check image paths start with `/` (e.g., `/bridal/hero-couple.jpg`)
- Verify `.gitignore` isn't excluding image files

### 404 Errors

- Check that all pages have a `page.tsx` file
- Verify folder structure matches routes
- Clear Vercel cache and redeploy

## 📊 Performance

Your site is optimized for performance:
- Static generation (fast loading)
- Image optimization enabled
- React strict mode enabled
- Minimal JavaScript bundle

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Run builds and tests

## 📝 Next Steps

1. Push your code to GitHub
2. Deploy to Vercel
3. Test the live site
4. Add custom domain (optional)
5. Monitor analytics in Vercel Dashboard

## 🆘 Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)

---

**Ready to deploy!** 🚀

