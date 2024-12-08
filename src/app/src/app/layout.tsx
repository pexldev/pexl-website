import '@fontsource/jetbrains-mono'
import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'pexl',
  description: 'Decode Your Health',
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link 
    href={href}
    className="text-slate-400 hover:text-blue-400 transition-colors px-4 py-2"
  >
    {children}
  </Link>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-slate-900">
      <body>
        <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-semibold text-slate-200 hover:text-blue-400 transition-colors">
              pexl
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}