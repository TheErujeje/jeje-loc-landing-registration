'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative flex w-full min-h-screen items-center overflow-hidden bg-[url('/hero-stadium.jpg')] bg-cover bg-center bg-no-repeat pt-40 pb-20 px-4 sm:px-6 md:px-10 lg:px-15">
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl w-full py-12 lg:py-20">
        <motion.div
          className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold tracking-[-0.01em]">
            Season 2026/27 registration open
          </span>

          <h1 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] sm:tracking-[-0.05em] text-white font-bold leading-[100%]">
            Jeje&apos;s League
            <br />
            <span className="text-brand-lilac">of Champions</span>
          </h1>

          <div className="flex max-w-xl flex-col items-start gap-6 sm:gap-8 lg:gap-10">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="text-left text-xl md:text-2xl font-medium leading-[130%] tracking-[-0.02em] text-white/80"
            >
              The Ultimate Fantasy Premier League Battleground. Assemble your squad. Dominate the pitch. Claim
              eternal glory.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-3xl px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold tracking-[-0.02em] bg-brand-lilac text-black transition-all hover:scale-105"
              >
                Join the League
              </Link>
              <a
                href="#prizes"
                className="inline-flex items-center justify-center rounded-3xl px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold tracking-[-0.02em] text-white border border-white/25 bg-white/10 hover:bg-white/15 transition-all"
              >
                View Prizes
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
