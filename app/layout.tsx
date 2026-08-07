import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://jejefootball.com'),
  title: "Jeje's League of Champions",
  description: 'The Ultimate Fantasy Premier League Battleground',
  openGraph: {
    title: "Jeje's League of Champions",
    description: 'The Ultimate Fantasy Premier League Battleground',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jeje's League of Champions",
    description: 'The Ultimate Fantasy Premier League Battleground',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-ink-900 font-sans selection:bg-brand-lilac/20 selection:text-brand-purple">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
