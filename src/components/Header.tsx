// src/components/Header


'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold text-blue-400 hover:text-blue-300 transition-colors">
            pexl
          </Link>

          <div className="flex items-center space-x-8">
            <Link 
              href="/live-updates" 
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              Live Updates
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}