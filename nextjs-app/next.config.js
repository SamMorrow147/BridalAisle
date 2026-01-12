/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Enable Next.js image optimization
  },
  // Enable React strict mode for better development warnings
  reactStrictMode: true,
  // Remove powered-by header for security
  poweredByHeader: false,
  // Set output file tracing root to silence multiple lockfiles warning
  outputFileTracingRoot: require('path').join(__dirname),
};

module.exports = nextConfig;
