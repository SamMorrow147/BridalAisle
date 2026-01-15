'use client';

import { useEffect } from 'react';

interface PageHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  canonicalPath: string;
}

export default function PageHead({ title, description, ogImage = '/og-image.jpg', canonicalPath }: PageHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Bridal Aisle Boutique`;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    
    // Open Graph tags
    updateMetaTag('og:title', `${title} | Bridal Aisle Boutique`, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `https://bridalaisle.com${ogImage}`, true);
    updateMetaTag('og:url', `https://bridalaisle.com${canonicalPath}`, true);
    updateMetaTag('og:type', 'website', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', `${title} | Bridal Aisle Boutique`);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `https://bridalaisle.com${ogImage}`);
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://bridalaisle.com${canonicalPath}`;
  }, [title, description, ogImage, canonicalPath]);

  return null; // This component doesn't render anything
}
