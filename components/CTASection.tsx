'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-stadium-900 border-t border-stadium-800">
      <div className="absolute inset-0 bg-gradient-to-b from-stadium-900 via-stadium-800 to-stadium-900"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-pitch-green/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
            ARE YOU <span className="text-pitch-green text-glow-green">READY?</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            The pitch is set. The floodlights are on. <br className="hidden md:block" />
            All that is missing is you.
          </p>

          <Link
            href="/register"
            className="inline-block px-10 py-5 font-heading font-bold text-xl md:text-2xl tracking-wider text-stadium-900 bg-pitch-green rounded-sm transition-all hover:scale-105 hover:bg-white animate-glow-pulse shadow-[0_0_30px_rgba(0,255,135,0.3)]"
          >
            REGISTER NOW
          </Link>

          <p className="mt-6 text-sm text-gray-500 font-heading tracking-widest uppercase">
            Limited spots available for the 2026/27 season
          </p>
        </motion.div>
      </div>
    </section>
  )
}
