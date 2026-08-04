'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-32 px-4 sm:px-6 lg:px-8 bg-[url('/cta-crowd.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-[-0.04em] sm:tracking-[-0.05em] leading-[100%]">
            Are you <span className="text-brand-lilac">ready?</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-12 font-medium tracking-[-0.02em]">
            The pitch is set. The floodlights are on. <br className="hidden md:block" />
            All that is missing is you.
          </p>

          <Link
            href="/register"
            className="inline-block px-6 py-3.5 sm:px-10 sm:py-5 font-bold tracking-[-0.02em] text-base sm:text-xl md:text-2xl text-black bg-brand-lilac rounded-3xl transition-all hover:scale-105"
          >
            Register Now
          </Link>

          <p className="mt-6 text-sm text-white/60 tracking-widest uppercase font-semibold">
            Limited spots available for the 2026/27 season
          </p>
        </motion.div>
      </div>
    </section>
  )
}
