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
  // Ensure no trailing slashes in URLs - prevents duplicate pages
  trailingSlash: false,
  // Skip trailing slash redirects during middleware to avoid conflicts
  skipTrailingSlashRedirect: false,
};

module.exports = nextConfig;
