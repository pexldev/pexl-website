import '@fontsource/jetbrains-mono'
import type { Metadata } from 'next'
import './globals.css'
import '@fontsource/inter' 
export const metadata: Metadata = {
  title: 'PEXL Protocol',
  description: 'Decode Your Nutrition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}