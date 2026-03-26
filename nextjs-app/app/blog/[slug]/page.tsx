import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/app/lib/site';
import { getAllSlugs, getPostBySlug } from '@/app/lib/blog';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: 'Not Found' };
  }
  return {
    title: `${post.title} | Bridal Aisle Boutique Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="page-container">
      <article className="blog-section">
        <div className="blog-container">
          <p className="blog-back">
            <Link href="/blog">← Our Blog</Link>
          </p>
          <header className="blog-post-header">
            <time className="blog-date" dateTime={post.date}>
              {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1>{post.title}</h1>
          </header>
          <div className="blog-post-body">
            {post.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <p className="blog-back blog-back-bottom">
            <Link href="/blog">← Back to Our Blog</Link>
          </p>
        </div>
      </article>
    </main>
  );
}
