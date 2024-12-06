'use client';  // This fixes the useState and useEffect errors

import { useState } from 'react';
import { Eye } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Welcome to PEXL! Check your inbox for next steps.');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setMessage('Unable to connect right now. Please try again soon.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 p-6">
      <div className="max-w-4xl mx-auto pt-12 pb-20">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-6 hover:bg-blue-200 transition-colors">
            <Eye className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900">PEXL</h1>
          <p className="text-lg text-slate-600">Decode Your Health Journey</p>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Smart Insights</h2>
            <p className="text-slate-600">Transform your nutrition data into clear, actionable insights.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">AI Health Coach</h2>
            <p className="text-slate-600">Get personalized guidance that adapts to your unique goals.</p>
          </div>
        </div>

        {/* Simplified Sign Up */}
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6 text-slate-800">Join the Future of Health</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </form>
          
          {message && (
            <div className="mt-4 text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">
              {message}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}