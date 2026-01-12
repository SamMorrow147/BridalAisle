# Git Setup Guide - Bridal Aisle Website

Follow these steps to initialize Git and push your site to GitHub.

## 📋 Pre-Setup Summary

Your project is ready for Git with:
- ✅ `.gitignore` configured (excludes node_modules, .next, build files, etc.)
- ✅ `.gitattributes` configured (proper handling of binary files)
- ✅ Backup files removed
- ✅ Production build tested successfully
- ✅ Total project size: ~56MB (public assets)
- ✅ All 11 pages building correctly

## 🚀 Step-by-Step Git Setup

### Step 1: Initialize Git Repository

```bash
cd "/Users/sammorrow/Documents/Local Web Builds/Bridal Aisle"
git init
```

### Step 2: Stage All Files

```bash
git add .
```

This will add:
- `nextjs-app/` (your Next.js application)
- `vercel.json` (Vercel configuration)
- `.gitignore` (Git ignore rules)
- `.gitattributes` (Git file handling)
- `README.md`, `DEPLOYMENT.md`, `GIT_SETUP.md` (documentation)
- Other root-level files

**Note**: The following are automatically excluded by `.gitignore`:
- `node_modules/`
- `rebuild-kit/` (scraping toolkit - not needed for production)
- `scripts/` (build scripts - not needed for production)
- `.next/` (build output)
- `.DS_Store` and log files

### Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: Bridal Aisle Next.js website

- Next.js 14 app with App Router
- 11 pages: home, about, appointments, bridal, contact, credit, mens-suits, privacy-policy
- Responsive design with image optimization
- Production-ready configuration
- Vercel deployment setup"
```

### Step 4: Create GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `bridal-aisle-website` (or your preferred name)
3. Description: "Bridal Aisle - Wedding dresses and formal wear"
4. Choose **Private** or **Public** (recommend Private for business sites)
5. **DO NOT** check "Initialize with README" (you already have one)
6. Click "Create repository"

### Step 5: Connect to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/bridal-aisle-website.git
git branch -M main
git push -u origin main
```

### Step 6: Verify Push

Check that all files are on GitHub:
- Go to your repository on GitHub
- Verify you see `nextjs-app/`, `vercel.json`, `README.md`, etc.
- Verify `node_modules/` and `rebuild-kit/` are NOT present

## 🔐 Using SSH Instead of HTTPS (Optional)

If you prefer SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/bridal-aisle-website.git
git branch -M main
git push -u origin main
```

## 📊 What Gets Committed

### Included (Important Files):
- `nextjs-app/app/` - All pages and routes
- `nextjs-app/components/` - React components
- `nextjs-app/content/` - JSON content files
- `nextjs-app/public/` - Images, fonts, static assets (~56MB)
- `nextjs-app/package.json` - Dependencies
- `nextjs-app/next.config.js` - Next.js config
- `nextjs-app/tsconfig.json` - TypeScript config
- `vercel.json` - Vercel deployment config
- Documentation files

### Excluded (via .gitignore):
- `node_modules/` - Dependencies (reinstalled on deployment)
- `rebuild-kit/` - Scraping toolkit (not needed in production)
- `scripts/` - Build scripts (not needed in production)
- `.next/` - Build output (regenerated on deployment)
- `.DS_Store` - macOS system files
- `*.log` - Log files
- Backup files

## 🔄 Future Updates

After initial setup, to push changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

## 🌿 Branch Strategy (Optional)

For safer deployments, use branches:

```bash
# Create development branch
git checkout -b development

# Make changes, then commit
git add .
git commit -m "Your changes"
git push -u origin development

# When ready, merge to main via Pull Request on GitHub
```

## ⚠️ Important Notes

1. **Large Files**: Your `public/` directory is ~56MB. This is fine for GitHub (limit is 100MB per file, 1GB per repo). If you need to add more images later, consider:
   - Optimizing images before adding
   - Using Git LFS for very large files
   - Using a CDN for assets

2. **Sensitive Data**: The `.gitignore` excludes `.env` files. Never commit:
   - API keys
   - Passwords
   - Database credentials
   - Private keys

3. **Node Modules**: Never commit `node_modules/`. Always listed in `.gitignore`.

## 🐛 Troubleshooting

### "Repository not found" error
- Check your GitHub username is correct
- Verify the repository exists on GitHub
- Ensure you have write access to the repository

### "Large files" warning
- GitHub warns about files >50MB
- Your largest files should be images, which are fine
- If you get errors, check for accidentally committed build files

### Authentication issues
- Use a Personal Access Token instead of password
- Or set up SSH keys: [GitHub SSH Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

## ✅ Verification Checklist

After pushing to GitHub, verify:

- [ ] Repository exists on GitHub
- [ ] `nextjs-app/` directory is present
- [ ] `vercel.json` is present
- [ ] `node_modules/` is NOT present
- [ ] `rebuild-kit/` is NOT present
- [ ] `.next/` is NOT present
- [ ] All images in `public/` are present
- [ ] README.md displays correctly

## 🚀 Next Steps

After Git setup:
1. ✅ Code is in Git
2. → Deploy to Vercel (see `DEPLOYMENT.md`)
3. → Test live site
4. → Add custom domain (optional)

---

**Ready to push to Git!** 🎉

For deployment instructions, see `DEPLOYMENT.md`.

