// src/app/blog/[id]/BlogPost.tsx

'use client';

import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { blogPosts } from '@/app/data/blogData';

type ContentBlock = {
  type: 'paragraph' | 'heading' | 'list' | 'image' | 'quote';
  content: string;
  items?: string[];
  imageUrl?: string;
  alt?: string;
};

export default function BlogPost({ id }: { id: string }) {
    const [imageLoading, setImageLoading] = useState(true);
    
    const post = blogPosts.find(post => post.id === id);

    const renderContent = (block: ContentBlock) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p className="text-slate-300 mb-8 leading-relaxed text-lg hover:text-slate-100 transition-colors">
                {block.content}
              </p>
            );
  
          case 'heading':
            return (
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-6 hover:scale-[1.01] transform transition-transform">
                {block.content}
              </h2>
            );
  
          case 'list':
            return (
              <div className="mb-8 bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {block.content}
                </h3>
                {block.items && (
                  <ul className="space-y-3">
                    {block.items.map((item, index) => (
                      <li key={index} className="text-slate-300 flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                        <span className="hover:text-slate-100 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
  
          case 'image':
            return (
              <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden group">
                {block.imageUrl && (
                  <Image
                    src={block.imageUrl}
                    alt={block.alt || ''}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onLoadingComplete={() => setImageLoading(false)}
                  />
                )}
              </div>
            );
  
          case 'quote':
            return (
              <blockquote className="my-8 pl-6 border-l-4 border-blue-500 bg-slate-800/30 py-4 pr-6 rounded-r-xl hover:border-cyan-400 hover:bg-slate-800/50 transition-all">
                <p className="text-slate-300 italic text-lg">
                    &ldquo;{block.content}&rdquo;
                </p>
              </blockquote>
            );
  
          default:
            return null;
        }
      };
    if (!post) {
      return null;
    }

    // Format the date nicely
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <main className="flex-grow relative px-4 md:px-0">

        {imageLoading && (
          <div className="loading-spinner">Loading...</div>
        )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-3xl mx-auto relative">
            {/* Navigation */}
            <nav className="py-12">
              <Link 
                href="/live-updates" 
                className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Updates
              </Link>
            </nav>

            {/* Enhanced Header Section */}
            <header className="mb-12">
              {/* Category Badge */}
              <div className="mb-6">
                <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
                  {post.category}
                </span>
              </div>

              {/* Title & Description */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                {post.description}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-slate-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.author.timeAgo}</span>
                </div>
              </div>

              {/* Author Card */}
              <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-700">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{post.author.role}</p>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            {post.image && (
              <div className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900/60 z-10 
                              group-hover:from-slate-900/0 group-hover:to-slate-900/80 transition-all duration-300" />
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onLoadingComplete={() => setImageLoading(false)}
                />
              </div>
            )}

            {/* Content */}
            <article className="prose prose-invert prose-lg max-w-none">
              {post.content.map((block, index) => (
                <div key={index} className="transition-all">
                  {renderContent(block)}
                </div>
              ))}
            </article>
          </div>
        </main>
      </div>
    );
}