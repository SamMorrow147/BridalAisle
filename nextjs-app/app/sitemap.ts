import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/app/lib/site';
import { getAllPosts } from '@/app/lib/blog';

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
  { path: 'a-very-marry-day', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'about', changeFrequency: 'monthly', priority: 0.7 },
  { path: 'contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'blog', changeFrequency: 'monthly', priority: 0.6 },
  { path: 'credit', changeFrequency: 'yearly', priority: 0.3 },
  { path: 'privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pageEntries = routes.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${SITE_URL}/${path}` : SITE_URL,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogEntries = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date + 'T12:00:00'),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...pageEntries, ...blogEntries];
}
