# Google Analytics Setup Instructions

## Step 1: Get Your GA4 Measurement ID

1. Go to https://analytics.google.com/
2. Create a new GA4 property (or use existing)
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)

## Step 2: Add to Your Project

Create a file `.env.local` in the `nextjs-app` folder with:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

## Step 3: Add GoogleAnalytics Component to Layout

The GoogleAnalytics component has been created at:
`/components/GoogleAnalytics.tsx`

You need to import and add it to your layout.tsx file (already done below).

## Step 4: Verify It's Working

1. Deploy your site or run locally
2. Open your site in a browser
3. Check Google Analytics Real-Time reports
4. You should see your visit appear within 30 seconds

## Testing Locally

When testing locally, GA will track localhost visits. To avoid this in production data:
- Use a separate GA4 property for development
- Or add `localhost` to your GA4 filters

---

**Note**: The GoogleAnalytics component automatically:
- Won't load if no ID is set
- Uses `afterInteractive` strategy for optimal performance
- Tracks page views automatically
