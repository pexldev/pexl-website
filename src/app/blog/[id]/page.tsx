// src/app/blog/[id]/page.tsx

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPost from './BlogPost';
import { blogPosts } from '@/app/data/blogData';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Helper function to get post data
async function getPost(params: Promise<{ id: string }>) {
  const { id } = await params;
  return blogPosts.find(post => post.id === id);
}

// Dynamic metadata generation based on the blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params);
  
  if (!post) {
    return {
      title: 'Post Not Found | pexl',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | pexl`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(params);
  
  if (!post) {
    return notFound();
  }

  return <BlogPost id={id} />;
}

// Optional: Generate static params for better performance
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}