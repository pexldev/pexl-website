// src/app/page.tsx


"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("INITIALIZATION SEQUENCE COMPLETE");
        setEmail("");
      } else {
        setMessage("SEQUENCE FAILED // PLEASE RETRY");
      }
    } catch {
      setMessage("CONNECTION LOST // RETRY SEQUENCE");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-32 relative">
          {/* Modern Header with Gradient Text */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              pexl
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Decode your health journey with AI-powered insights
            </p>
          </div>

          {/* Feature Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {/* Live Updates Card */}
        <Link href="/live-updates" className="group">
          <div className="h-full bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                Live Updates
              </h2>
              <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-slate-400">Track our development journey in real-time as we build the future of health tech</p>
          </div>
        </Link>

        {/* Contact US Card */}
        <Link href="/contact" className="group">
          <div className="h-full bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                Contact Us
              </h2>
              <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-slate-400">Personalized guidance powered by advanced machine learning // Coming Soon</p>
          </div>
        </Link>
      </div>

          {/* Modern Sign Up Section */}
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-slate-200 mb-3">Join the Evolution</h2>
              <p className="text-slate-400">Be part of the next generation of health technology</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-200 placeholder:text-slate-500 
                           focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-medium 
                         hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:-translate-y-0.5
                         focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
              >
                Initialize Sequence
              </button>
            </form>
            
            {message && (
              <div className="mt-4 text-sm font-mono text-slate-300 bg-slate-800/50 border border-slate-700 p-4 rounded-xl">
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}