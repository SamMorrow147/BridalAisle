# Bridal Aisle Website

A modern Next.js 14 website for Bridal Aisle, featuring bridal collections, men's formal wear, appointments, and more.

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: Vercel

## 📁 Project Structure

```
nextjs-app/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── appointments/      # Appointments booking
│   ├── bridal/           # Bridal collections
│   ├── contact/          # Contact page
│   ├── credit/           # Credit application
│   ├── mens-suits/       # Men's formal wear
│   ├── privacy-policy/   # Privacy policy
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable React components
├── content/              # JSON content files
└── public/               # Static assets (images, fonts)
```

## 🎨 Key Features

- **Responsive Design**: Mobile-first approach
- **Image Optimization**: Next.js Image component
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Static generation where possible
- **Modern UI**: Clean, professional design

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Set the root directory to `nextjs-app`
4. Deploy!

Vercel will automatically:
- Detect Next.js
- Install dependencies
- Build the project
- Deploy to production

### Manual Deployment

```bash
npm run build
```

The build output will be in `.next/` directory.

## 📝 Environment Variables

No environment variables required for basic functionality.

## 🔧 Configuration

- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## 📄 License

Copyright © 2026 Bridal Aisle. All rights reserved.

