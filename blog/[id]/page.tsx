"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface BlogPost {
  title: string;
  description: string;
  content: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readingTime: string;
  category: string;
  image: string;
}

export default function BlogPost({ params: _params }: { params: { id: string } }) {

    
  const [imageLoading, setImageLoading] = useState(true);
  
  
  const post: BlogPost = {
    title: "pexl.xyz is Now Live - Your Journey to Better Health Begins Here",
    description: "Join us on our mission to revolutionize personal health and wellness with an AI companion that understands, adapts, and grows with you.",
    content: [
      "We're thrilled to announce that pexl.xyz is now live! This marks the beginning of our journey to transform how you approach health and wellness through personalized AI companionship.",
      "What makes pexl different? We're building more than just another health app - we're creating an AI companion that truly understands the human side of health. One that adapts to your needs, celebrates your progress, and supports you through challenges.",

      "Coming Soon:",
      "• Intelligent Conversation: An AI companion that listens, understands, and provides personalized guidance",
      "• Smart Progress Tracking: Visual insights and adaptive recommendations tailored to your journey",
      "• Holistic Health Approach: Balanced focus on both physical and mental well-being",
      "• Community-Driven Development: Your feedback shapes our evolution",
  
      "Behind the Scenes:",
      "Our team is working tirelessly to bring you an experience that combines cutting-edge AI technology with genuine empathy. Every feature we're developing is designed with one goal in mind: helping you lead a happier, healthier life.",
      
      "Join us on this exciting journey. Sign up now to be among the first to experience the future of personalized health guidance."
    ],
    author: {
      name: "Prateek",
      avatar: "/images/default-avatar.png",
      role: "Founder"
    },
    publishedAt: "Dec 8, 2024",
    readingTime: "3 min read",
    category: "Technology",
    image: "/images/Our-website-is-live.png"
  };

  const emailLink = process.env.NEXT_PUBLIC_GMAIL_LINK || "contact@pexl.com";

  return (
    <>
      {/* First, our global header */}
  <header className="fixed top-0 left-0 right-0 z-50"> {/* z-50 makes sure it's above everything */}
    <div className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link href="/" className="block text-center">
          <span className="text-white text-xl font-medium hover:text-blue-400 transition-colors">
            pexl
          </span>
        </Link>
      </div>
    </div>
  </header>


      {/* Main Content */}
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Navigation section - with proper spacing from header */}
        <div className="pt-20 pb-6"> {/* pt-20 gives breathing room below the header */}
          <Link 
            href="/live-updates" 
            className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Updates
          </Link>
        </div>

        {/* Meta information */}
        <div className="flex items-center space-x-2 text-sm text-slate-400 mb-4">
          <span>{post.publishedAt}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
          <span>•</span>
          <Link href="#" className="text-blue-400 hover:text-blue-300">
            {post.category}
          </Link>
        </div>


   
            {/* Post Header */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">{post.title}</h2>
              <p className="text-xl text-slate-300">{post.description}</p>
            </div>

            {/* Main Image */}
            <div className="relative h-96 mb-12 rounded-xl overflow-hidden bg-slate-800">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <Image
                src={post.image}
                alt={post.title}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoadingComplete={() => setImageLoading(false)}
                priority
              />
            </div>

            {/* Content */}
            <article className="prose prose-invert prose-lg max-w-none mb-16">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-slate-300 mb-6">
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Author */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-sm mb-12 border border-slate-700">
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-white">{post.author.name}</h3>
                  <p className="text-slate-400">{post.author.role}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-500/20 text-white p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold mb-4">Learn more about the pexl journey</h2>
              <p className="mb-6 text-slate-300">Get in touch with us</p>
              <Link
                href={`mailto:${emailLink}`}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}