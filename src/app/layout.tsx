import '@fontsource/inter'  // Add this line
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'pexl | Your Health Journey',
  description: 'Transform your nutrition data into clear, actionable insights.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}