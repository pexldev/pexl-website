// src/app/contact/Page.tsx

"use client";

import { ArrowLeft } from 'lucide-react';
import React from "react";
import { Mail, Github, Twitter } from "lucide-react";
import { SiReddit } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

const GITHUB_LINK = process.env.NEXT_PUBLIC_GITHUB_LINK || "https://github.com";
const TWITTER_LINK = process.env.NEXT_PUBLIC_TWITTER_LINK || "https://twitter.com";
const REDDIT_LINK = process.env.NEXT_PUBLIC_REDDIT_LINK || "https://reddit.com";
const GMAIL_LINK = process.env.NEXT_PUBLIC_GMAIL_LINK || "pexldev@gmail.com";

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <a
    href={href}
    className="group flex items-center space-x-3 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 
               hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-0.5"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-blue-500/10 transition-colors">
      <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
    </div>
    <span className="text-slate-400 group-hover:text-blue-400 transition-colors">{label}</span>
  </a>
);

const ContactSection = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative">
        {/* Signature gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 pt-20 pb-32 relative">
          {/* Back Navigation */}
          <Link 
            href="/" 
            className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors mb-16 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Join the Evolution
            </h1>
            <p className="text-lg text-slate-400">Be part of the next generation of health technology</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-col items-center space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-slate-700">
                    <Image
                      src="/images/default-avatar.png"
                      alt="pexl Team"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-semibold text-white">pexl Team</h2>
                  <p className="text-slate-400">Decode Your Health Journey</p>
                </div>

                <a
                  href={`mailto:${GMAIL_LINK}`}
                  className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 
                           text-white rounded-xl font-medium hover:from-blue-500 hover:to-cyan-500 
                           transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-200 mb-6">Connect With Us</h3>
              
              <SocialLink 
                href={GITHUB_LINK}
                icon={Github}
                label="Follow our development progress"
              />
              
              <SocialLink 
                href={TWITTER_LINK}
                icon={Twitter}
                label="Latest updates and insights"
              />
              
              <SocialLink 
                href={REDDIT_LINK}
                icon={SiReddit}
                label="Join our community"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {['Transparency', 'Community', 'Innovation'].map((value) => (
              <div key={value} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="text-2xl font-bold text-white mb-2">{value}</div>
                <p className="text-slate-400">Core principles that guide our development</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactSection;