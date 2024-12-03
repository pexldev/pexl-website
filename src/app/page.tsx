'use client';

import { useState, useEffect } from 'react';
import {  Eye, Lock } from 'lucide-react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [initPhase, setInitPhase] = useState(0);

  // Mysterious loading sequence
  useEffect(() => {
    const phases = [
      'INITIALIZING NEURAL MATRIX',
      'CALIBRATING NUTRITIONAL SENSORS',
      'ESTABLISHING QUANTUM LINK',
      'PEXL PROTOCOL READY'
    ];
    
    const interval = setInterval(() => {
      setInitPhase(prev => (prev < phases.length - 1 ? prev + 1 : prev));
    }, 800);

    setTimeout(() => {
      setLoaded(true);
      clearInterval(interval);
    }, 3200);

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
        setMessage('ACCESS GRANTED // STANDBY FOR PROTOCOL INITIALIZATION');
        setEmail('');
      } else {
        setMessage('CONNECTION ERROR // RETRY SEQUENCE');
      }
    } catch {  // Removed unused error variable
      setMessage('SYSTEM MALFUNCTION // PLEASE TRY AGAIN');
    }
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden bg-black text-cyan-500">
      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="animate-matrix font-mono text-sm">
          {Array.from({ length: 100 }, () => '01').join(' ')}
        </div>
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 scanline pointer-events-none"></div>

      {/* Main interface */}
      <div className="z-10 max-w-2xl w-full space-y-8 text-center relative">
        {/* Logo section */}
        <div className="mb-12 relative">
          <Eye className="w-16 h-16 mx-auto mb-4 hover-glow" />
          <h1 className="text-4xl font-mono font-bold tracking-wider mb-2 glitch-text">PEXL</h1>
          <div className="text-sm font-mono opacity-70">
            {loaded ? 'PROTOCOL ACTIVE' : `${['/', '-', '\\', '|'][initPhase % 4]} ${['INITIALIZING NEURAL MATRIX', 'CALIBRATING NUTRITIONAL SENSORS', 'ESTABLISHING QUANTUM LINK', 'PEXL PROTOCOL READY'][initPhase]}`}
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-4 mb-12">
          <p className="text-2xl font-mono glitch-text">DECODE YOUR HEALTH</p>
          <p className="text-sm font-mono opacity-70 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" />
            ACCESS LEVEL: RESTRICTED
          </p>
        </div>

        {/* Access form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER ACCESS CODE (EMAIL)"
              className="w-full bg-black border border-cyan-500 text-cyan-500 px-4 py-2 font-mono focus:outline-none focus:border-cyan-400 hover-glow"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 text-black py-2 font-mono hover:bg-cyan-400 transition-colors hover-glow"
          >
            INITIALIZE PROTOCOL
          </button>
        </form>

        {message && (
          <div className="text-sm font-mono text-cyan-400 mt-4 glitch-text">{message}</div>
        )}
      </div>
    </main>
  );
}