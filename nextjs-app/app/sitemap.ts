import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/app/lib/site';

/**
 * Route definitions for the sitemap.
 * Add new public pages here to include them automatically.
 * Paths should not have leading slashes for consistency with URL concatenation.
 */
const routes: Array<{
  path: string;
  changeFrequency: 'yearly' | 'monthly' | 'weekly' | 'daily' | 'hourly' | 'never';
  priority: number;
}> = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: 'appointments', changeFrequency: 'monthly', priority: 0.9 },
  { path: 'bridal', changeFrequency: 'weekly', priority: 0.9 },
  { path: 'mens-suits', changeFrequency: 'weekly', priority: 0.8 },
  { path: 'about', changeFrequency: 'monthly', priority: 0.7 },
  { path: 'contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'credit', changeFrequency: 'yearly', priority: 0.3 },
  { path: 'privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${SITE_URL}/${path}` : SITE_URL,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
