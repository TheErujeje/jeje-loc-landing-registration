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
    <section id="prizes" className="py-24 bg-stadium-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-floodlight-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            GLORY <span className="text-floodlight-gold text-glow-gold">AWAITS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-floodlight-gold to-transparent mx-auto md:mx-0"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto md:mx-0">
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
            className="order-2 md:order-1 bg-stadium-900 border border-gray-400/30 p-8 rounded-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-400"></div>
            <div className="flex flex-col items-center text-center">
              <Medal className="h-12 w-12 text-gray-400 mb-4" />
              <span className="font-heading text-gray-400 tracking-widest text-sm mb-2">RUNNER UP</span>
              <h3 className="text-3xl font-heading font-bold text-white mb-2">2ND PLACE</h3>
              <div className="text-4xl font-bold text-gray-300 font-heading tracking-wider mb-6">₦30,000</div>
              <p className="text-sm text-gray-500">So close, yet so far.</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2 bg-stadium-900 border-2 border-floodlight-gold p-10 rounded-sm relative overflow-hidden transform md:-translate-y-8 shadow-[0_0_30px_rgba(255,215,0,0.15)] group"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer"></div>

            <div className="absolute top-0 left-0 w-full h-2 bg-floodlight-gold"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <Trophy className="h-16 w-16 text-floodlight-gold mb-4 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
              <span className="font-heading text-floodlight-gold tracking-widest text-sm mb-2 font-bold">
                CHAMPION
              </span>
              <h3 className="text-4xl font-heading font-bold text-white mb-2">1ST PLACE</h3>
              <div className="text-5xl font-bold text-floodlight-gold font-heading tracking-wider mb-6 text-glow-gold">
                ₦50,000
              </div>
              <p className="text-sm text-gray-400">+ The Jeje&apos;s League Trophy</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-3 md:order-3 bg-stadium-900 border border-amber-700/50 p-8 rounded-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-amber-700"></div>
            <div className="flex flex-col items-center text-center">
              <Medal className="h-12 w-12 text-amber-700 mb-4" />
              <span className="font-heading text-amber-700 tracking-widest text-sm mb-2">BRONZE</span>
              <h3 className="text-3xl font-heading font-bold text-white mb-2">3RD PLACE</h3>
              <div className="text-4xl font-bold text-amber-600 font-heading tracking-wider mb-6">₦20,000</div>
              <p className="text-sm text-gray-500">A respectable finish.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
