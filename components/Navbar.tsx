'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from './Logo'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Only the homepage opens on a dark, full-bleed hero — every other page is
  // white right under the nav, so the "transparent over dark" treatment only
  // applies there.
  const overDarkHero = pathname === '/' && !isScrolled

  const navLinks = [
    { name: 'Home', path: '/' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-hairline py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo className={`h-12 w-12 transition-colors ${overDarkHero ? 'text-white' : 'text-brand-lilac'}`} />
            <span
              className={`font-bold text-xl tracking-[-0.03em] transition-colors ${
                overDarkHero ? 'text-white' : 'text-ink-900'
              }`}
            >
              Jeje&apos;s <span className="text-brand-lilac">League of Champions</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-base font-semibold tracking-[-0.02em] transition-colors hover:text-brand-lilac ${
                  pathname === link.path ? 'text-brand-lilac' : overDarkHero ? 'text-white/85' : 'text-ink-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/register"
              className="font-bold tracking-[-0.02em] bg-brand-lilac text-black px-6 py-2.5 rounded-3xl hover:opacity-90 transition-all"
            >
              Register Now
            </Link>
          </div>

          <button
            className={`md:hidden ${overDarkHero ? 'text-white' : 'text-ink-600'} hover:text-brand-lilac`}
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
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-hairline shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg py-2 border-b border-hairline font-semibold tracking-[-0.02em] ${
                    pathname === link.path ? 'text-brand-lilac' : 'text-ink-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bold tracking-[-0.02em] bg-brand-lilac text-black px-6 py-3 rounded-3xl text-center mt-4"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
