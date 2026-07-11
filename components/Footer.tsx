'use client'

import Link from 'next/link'
import { Trophy, Twitter, Instagram, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-stadium-800 border-t border-stadium-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Trophy className="h-6 w-6 text-floodlight-gold" />
              <span className="font-heading font-bold text-xl tracking-wider text-white">
                JEJE&apos;S <span className="text-floodlight-gold">LEAGUE</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The ultimate Fantasy Premier League battleground. Compete with the best, win weekly
              prizes, and secure eternal glory.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg text-white mb-4 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-pitch-green transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/winners" className="text-gray-400 hover:text-pitch-green transition-colors text-sm">
                  Past Winners
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-pitch-green transition-colors text-sm">
                  Register Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg text-white mb-4 tracking-wide">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-pitch-green" />
                <a href="mailto:hello@jejesleague.com" className="hover:text-white transition-colors">
                  hello@jejesleague.com
                </a>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-pitch-green transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pitch-green transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stadium-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Jeje&apos;s League of Champions. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">Not affiliated with the official Premier League.</p>
        </div>
      </div>
    </footer>
  )
}
