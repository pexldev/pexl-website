// src/app/live-updates/page.tsx


'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import UpdateCard from '@/components/updates/UpdateCard';
import { updates } from '@/app/data/updateData';

export default function LiveUpdates() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative">
        {/* That beautiful gradient overlay you've got */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-32 relative">
          {/* Navigation with that smooth hover effect */}
          <Link 
            href="/" 
            className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header Section with your signature gradient text */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Latest Updates
            </h1>
            <p className="text-lg text-slate-400">Follow our journey in revolutionizing health tech</p>
          </div>

          {/* Filter Section - Let's make it fancy! */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {['All', 'Technology', 'Health', 'Feature'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-blue-400 
                         transition-all duration-300 hover:-translate-y-0.5"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Updates Grid with responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update) => (
              <UpdateCard key={update.id} {...update} />
            ))}
          </div>

          {/* Empty State - Just in case */}
          {updates.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 mb-4">No updates yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

