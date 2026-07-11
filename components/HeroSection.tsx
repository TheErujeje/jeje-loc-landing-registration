'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stadium-900 pt-20">
      <div className="absolute inset-0 bg-[url('/fplstadium.jpg')] bg-cover bg-center opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-stadium-900/70 via-stadium-900/80 to-stadium-900"></div>
      <div className="absolute inset-0 bg-spotlight opacity-50"></div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-pitch-green/20 rounded-full blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-floodlight-gold/20 rounded-full blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-stadium-800 border border-stadium-700 text-pitch-green text-sm font-bold tracking-widest mb-6">
            SEASON 2026/27 REGISTRATION OPEN
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-4 text-glow-gold">
            JEJE&apos;S LEAGUE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-floodlight-gold to-floodlight-orange">
              OF CHAMPIONS
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light"
        >
          The Ultimate Fantasy Premier League Battleground. <br className="hidden md:block" />
          Assemble your squad. Dominate the pitch. Claim eternal glory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            href="/register"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-heading font-bold text-lg tracking-wider text-stadium-900 bg-pitch-green overflow-hidden rounded-sm transition-all hover:scale-105 animate-glow-pulse"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative">JOIN THE LEAGUE</span>
          </Link>
          <a
            href="#prizes"
            className="inline-flex items-center justify-center px-8 py-4 font-heading font-bold text-lg tracking-wider text-white border border-stadium-700 bg-stadium-800/50 hover:bg-stadium-700 rounded-sm transition-all"
          >
            VIEW PRIZES
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scroll to explore</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="h-5 w-5 text-pitch-green" />
        </motion.div>
      </motion.div>
    </section>
  )
}
