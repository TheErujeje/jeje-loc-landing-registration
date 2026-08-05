'use client'

import { motion } from 'framer-motion'
import { Trophy, Medal } from 'lucide-react'

export function PrizesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section id="prizes" className="py-24 bg-ink-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 tracking-[-0.04em] sm:tracking-[-0.05em] leading-[100%] mb-4">
            Glory <span className="text-brand-purple">Awaits</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-purple to-transparent mx-auto md:mx-0"></div>
          <p className="mt-6 text-xl md:text-2xl font-medium tracking-[-0.02em] text-ink-600 max-w-2xl mx-auto md:mx-0">
            The stakes are high. Prove your managerial prowess and walk away with the ultimate prize
            pot — plus weekly gameweek payouts along the way.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end"
        >
          <motion.div
            variants={itemVariants}
            className="order-2 md:order-1 bg-white border border-hairline shadow-sm p-8 rounded-card relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-ink-400"></div>
            <div className="flex flex-col items-center text-center">
              <Medal className="h-12 w-12 text-ink-400 mb-4" />
              <span className="label-eyebrow mb-2">Runner Up</span>
              <h3 className="text-3xl font-bold text-ink-900 tracking-[-0.03em] mb-2">2nd Place</h3>
              <div className="text-4xl font-semibold text-ink-700 tracking-tight mb-6">₦30,000</div>
              <p className="text-sm text-ink-500">So close, yet so far.</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2 bg-white border-2 border-brand-lilac p-10 rounded-card relative overflow-hidden transform md:-translate-y-8 shadow-[0_0_30px_rgba(212,153,185,0.15)] group"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ink-100/60 to-transparent group-hover:animate-shimmer"></div>

            <div className="absolute top-0 left-0 w-full h-2 bg-brand-lilac"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <Trophy className="h-16 w-16 text-brand-lilac mb-4" />
              <span className="text-brand-lilac tracking-widest text-sm mb-2 font-semibold uppercase">
                Champion
              </span>
              <h3 className="text-4xl font-bold text-ink-900 tracking-[-0.03em] mb-2">1st Place</h3>
              <div className="text-5xl font-semibold text-brand-lilac tracking-tight mb-6">
                ₦50,000
              </div>
              <p className="text-sm text-ink-600">+ The Jeje&apos;s <span className="font-semibold">League of Champions</span> Trophy</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-3 md:order-3 bg-white border border-hairline shadow-sm p-8 rounded-card relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-amber-600"></div>
            <div className="flex flex-col items-center text-center">
              <Medal className="h-12 w-12 text-amber-600 mb-4" />
              <span className="label-eyebrow mb-2 text-amber-700">Bronze</span>
              <h3 className="text-3xl font-bold text-ink-900 tracking-[-0.03em] mb-2">3rd Place</h3>
              <div className="text-4xl font-semibold text-amber-600 tracking-tight mb-6">₦20,000</div>
              <p className="text-sm text-ink-500">A respectable finish.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
