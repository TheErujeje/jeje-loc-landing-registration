'use client'

import { motion } from 'framer-motion'
import { Trophy, Crown, Star } from 'lucide-react'

// TODO: replace with a live fetch from the backend once a season completes —
// GET {API_BASE_URL}/fpl/seasons/{season_id}/standings (season-end) or a
// dedicated /winners endpoint aggregating past seasons' payouts table.
export default function WinnersPage() {
  const winners = [
    { season: '2025/26', name: 'TBD', team: 'Season in progress', prize: '—', isCurrent: true },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-24 bg-white relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-block mb-4"
          >
            <Crown className="h-12 w-12 text-brand-purple" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-ink-900 tracking-[-0.04em] sm:tracking-[-0.05em] leading-[100%] mb-4">
            Hall of <span className="text-brand-purple">Fame</span>
          </h1>
          <p className="text-ink-600 text-xl font-light">Legends of the League</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {winners.map((winner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-white p-8 rounded-card shadow-sm overflow-hidden group transition-all duration-300 hover:-translate-y-1 ${
                winner.isCurrent
                  ? 'border-2 border-brand-purple'
                  : 'border border-hairline hover:border-brand-purple/40'
              }`}
            >
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="bg-ink-100 px-3 py-1 rounded-lg border border-hairline">
                  <span className="text-sm text-ink-700 font-medium">{winner.season}</span>
                </div>
                {winner.isCurrent ? (
                  <Star className="h-6 w-6 text-brand-purple fill-brand-purple" />
                ) : (
                  <Trophy className="h-6 w-6 text-ink-400 group-hover:text-brand-purple transition-colors" />
                )}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-ink-900 tracking-[-0.03em] mb-1 truncate" title={winner.name}>
                  {winner.name}
                </h3>
                <p className="text-brand-purple text-sm mb-6 truncate" title={winner.team}>
                  {winner.team}
                </p>

                <div className="pt-4 border-t border-hairline flex justify-between items-center">
                  <span className="label-eyebrow">Prize Won</span>
                  <span className={`font-bold text-lg ${winner.isCurrent ? 'text-brand-purple' : 'text-ink-900'}`}>
                    {winner.prize}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
