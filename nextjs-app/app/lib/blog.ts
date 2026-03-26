import postsData from '@/content/blog/posts.json';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
};

export function getAllPosts(): BlogPost[] {
  return postsData.posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return postsData.posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return postsData.posts.map((p) => p.slug);
}
