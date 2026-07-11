'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Trophy } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Past Winners', path: '/winners' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stadium-900/90 backdrop-blur-md border-b border-stadium-700/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Trophy className="h-6 w-6 text-floodlight-gold group-hover:text-pitch-green transition-colors" />
            <span className="font-heading font-bold text-xl tracking-wider text-white group-hover:text-glow-gold transition-all">
              JEJE&apos;S <span className="text-floodlight-gold">LEAGUE</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-heading tracking-wide text-sm transition-colors hover:text-pitch-green ${
                  pathname === link.path ? 'text-pitch-green' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/register"
              className="font-heading tracking-wider bg-pitch-green text-stadium-900 px-6 py-2 rounded-sm font-bold hover:bg-white hover:text-stadium-900 transition-all animate-glow-pulse"
            >
              REGISTER NOW
            </Link>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-stadium-800 border-b border-stadium-700 shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-heading tracking-wide text-lg py-2 border-b border-stadium-700 ${
                    pathname === link.path ? 'text-pitch-green' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading tracking-wider bg-pitch-green text-stadium-900 px-6 py-3 rounded-sm font-bold text-center mt-4 animate-glow-pulse"
              >
                REGISTER NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
