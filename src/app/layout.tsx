//src/app/layout


import './globals.css';
import Header from '@/components/Header';  // Assuming Header is in components folder
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "pexl - Decode Your Health",
  description: "Your AI-powered health companion for personalized wellness guidance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header></Header>
        <div className="pt-16">  {/* Space for fixed header */}
          {children}
        </div>
      </body>
    </html>
  );
}