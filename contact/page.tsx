"use client";

import React from "react";
import { Mail, Github, Twitter } from "lucide-react";
import { SiReddit } from "react-icons/si";
import Image from "next/image";

const GITHUB_LINK = process.env.NEXT_PUBLIC_GITHUB_LINK || "https://google.com";
const TWITTER_LINK = process.env.NEXT_PUBLIC_TWITTER_LINK || "https://twitter.com";
const REDDIT_LINK = process.env.NEXT_PUBLIC_REDDIT_LINK || "https://reddit.com";
const GMAIL_LINK = process.env.NEXT_PUBLIC_GMAIL_LINK || "https://gmail.com";

console.log("Environment Variables:", {
    github: process.env.NEXT_PUBLIC_GITHUB_LINK,
    twitter: process.env.NEXT_PUBLIC_TWITTER_LINK,
    reddit: process.env.NEXT_PUBLIC_REDDIT_LINK,
    gmail: process.env.NEXT_PUBLIC_GMAIL_LINK
  });

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isCustomIcon?: boolean;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <a
    href={href}
    className="group flex items-center space-x-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700 
               hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-blue-500/10 transition-colors">
      <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
    </div>
    <span className="text-slate-400 group-hover:text-slate-200">{label}</span>
  </a>
);

const ContactSection = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 py-20 relative">
          {/* Modern Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Let's Connect
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Join us in building a healthy future
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-col items-center space-y-6">
                {/* Profile Image */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-700">
                    <Image
                      src="/images/default-avatar.png"
                      alt="PEXL Team Profile"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-semibold text-slate-200">pexl Team</h2>
                  <p className="text-slate-400">Decode Your Health Journey</p>
                </div>

                {/* Contact Button */}
                <a
                  href={`mailto:${GMAIL_LINK}`}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 
                           text-white rounded-xl font-medium hover:from-blue-500 hover:to-cyan-500 
                           transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg 
                           hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <Mail className="w-5 h-5" />
                  <span>{GMAIL_LINK.replace("mailto:", "")}</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-200 mb-6">Connect With Us</h3>
              
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
                label="Join our Reddit community"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-2">24/7</div>
              <p className="text-slate-400">Community Support</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-2">100%</div>
              <p className="text-slate-400">Transparency</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-2">Open</div>
              <p className="text-slate-400">Source Project</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactSection;