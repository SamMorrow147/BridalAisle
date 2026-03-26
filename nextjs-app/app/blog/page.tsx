import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/app/lib/site';
import { getAllPosts } from '@/app/lib/blog';

export const metadata: Metadata = {
  title: 'Our Blog | Bridal Aisle Boutique — Wedding Dress Shop Osseo MN',
  description:
    'Tips for Minnesota brides: bridal appointments, off-the-rack wedding dresses, and shopping at Bridal Aisle Boutique near Maple Grove.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Our Blog | Bridal Aisle Boutique',
    description:
      'Tips for Minnesota brides: appointments, off-the-rack gowns, and more from Bridal Aisle Boutique.',
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="page-container">
      <section className="blog-section">
        <div className="blog-container">
          <h1>Our Blog</h1>
          <p className="blog-intro">
            Ideas and advice from the team at Bridal Aisle Boutique—your Minnesota wedding dress shop
            in Osseo (moving to Maple Grove soon).
          </p>
          <ul className="blog-index-list">
            {posts.map((post) => (
              <li key={post.slug} className="blog-index-item">
                <time className="blog-date" dateTime={post.date}>
                  {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="blog-index-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="blog-read-more">
                  Read more
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
