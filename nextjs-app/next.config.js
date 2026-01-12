/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Enable Next.js image optimization
  },
  // Enable React strict mode for better development warnings
  reactStrictMode: true,
  // Remove powered-by header for security
  poweredByHeader: false,
};

module.exports = nextConfig;
