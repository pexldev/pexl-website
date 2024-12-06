'use client';

import { useState, useEffect } from 'react';
import { Eye, Lock, ChevronRight } from 'lucide-react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [initPhase, setInitPhase] = useState(0);
  const phases = ['Initializing', 'Connecting', 'Ready'];


  useEffect(() => {
    const phases = [
      'Initializing',
      'Connecting',
      'Ready'
    ];
    
    const interval = setInterval(() => {
      setInitPhase(prev => (prev < phases.length - 1 ? prev + 1 : prev));
    }, 800);

    setTimeout(() => {
      setLoaded(true);
      clearInterval(interval);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thanks for joining! We will be in touch soon.');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setMessage('Unable to process request. Please try again later.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 relative bg-gradient-to-b from-gray-900 to-black text-cyan-400">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="z-10 max-w-xl w-full space-y-12 text-center relative">
        {/* Brand section */}
        <div className="space-y-6">
          <div className="relative inline-block">
            <Eye className="w-12 h-12 mx-auto transition-all hover:text-cyan-300" />
            <div className="absolute -inset-2 bg-cyan-500/20 blur-xl rounded-full -z-10"></div>
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
            PEXL
          </h1>
          
          <p className="text-lg text-cyan-100 font-light">
            Your AI-powered nutrition companion
          </p>
          
          <div className="text-sm text-cyan-300/70">
            {loaded ? 'System Ready' : phases[initPhase]}
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-light">Decode Your Health Journey</h2>
            <p className="text-cyan-300/70 max-w-md mx-auto">
              Join our community of health enthusiasts and get early access to our revolutionary nutrition tracking platform.
            </p>
          </div>

          {/* Access form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-100 px-4 py-3 rounded-lg font-light
                         focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-cyan-500 text-black py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2
                       hover:bg-cyan-400 transition-colors group"
            >
              Get Early Access
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {message && (
            <div className="text-sm text-cyan-400/90 animate-fade-in">
              {message}
            </div>
          )}
        </div>

        {/* Trust indicator */}
        <div className="text-sm text-cyan-400/60 flex items-center justify-center gap-2">
          <Lock className="w-4 h-4" />
          Your data is secure with us
        </div>
      </div>
    </main>
  );
}