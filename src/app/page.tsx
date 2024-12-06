import { useState, useEffect } from 'react';
import { Lock, ChevronRight } from 'lucide-react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [initPhase, setInitPhase] = useState(0);
  const phases = ['Initializing', 'Connecting', 'Ready'];

  useEffect(() => {
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
    <main className="flex min-h-screen flex-col items-center justify-center p-8 relative bg-white">
      <div className="z-10 max-w-xl w-full space-y-12 text-center relative">
        {/* Brand section */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            pexl
          </h1>
          
          <p className="text-xl text-gray-600">
            Your AI-powered nutrition companion
          </p>
          
          <div className="text-sm text-gray-500">
            {loaded ? 'System Ready' : phases[initPhase]}
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-light text-gray-900">Decode Your Health Journey</h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
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
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-lg
                         focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-sky-500 text-white py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2
                       hover:bg-sky-400 transition-colors group"
            >
              Get Early Access
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {message && (
            <div className="text-sm text-gray-600 animate-fade-in">
              {message}
            </div>
          )}
        </div>

        {/* Trust indicator */}
        <div className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <Lock className="w-4 h-4" />
          Your data is secure with us
        </div>
      </div>
    </main>
  );
}