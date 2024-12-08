'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import UpdateCard from './components/UpdateCard'
import { updates } from './data/udpateData';

export default function LiveUpdates() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-32 relative">
          {/* Back Navigation */}
          <Link 
            href="/" 
            className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Latest Updates
            </h1>
            <p className="text-lg text-slate-400">Follow our journey in revolutionizing health tech</p>
          </div>

          {/* Updates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update) => (
              <UpdateCard key={update.id} {...update} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}