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
      className="min-h-screen pt-32 pb-24 bg-stadium-900 relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-floodlight-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-block mb-4"
          >
            <Crown className="h-12 w-12 text-floodlight-gold drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 text-glow-gold">
            HALL OF <span className="text-floodlight-gold">FAME</span>
          </h1>
          <p className="text-gray-400 text-xl font-light tracking-wide">Legends of the League</p>
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
              className={`relative bg-stadium-800 p-8 rounded-sm overflow-hidden group transition-all duration-300 hover:-translate-y-2 ${
                winner.isCurrent
                  ? 'border-2 border-floodlight-gold shadow-[0_0_30px_rgba(255,215,0,0.15)]'
                  : 'border border-stadium-700 hover:border-floodlight-gold/50'
              }`}
            >
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="bg-stadium-900 px-3 py-1 rounded-sm border border-stadium-700">
                  <span className="font-heading text-sm text-gray-300 tracking-wider">{winner.season}</span>
                </div>
                {winner.isCurrent ? (
                  <Star className="h-6 w-6 text-floodlight-gold fill-floodlight-gold" />
                ) : (
                  <Trophy className="h-6 w-6 text-gray-500 group-hover:text-floodlight-gold transition-colors" />
                )}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold text-white mb-1 truncate" title={winner.name}>
                  {winner.name}
                </h3>
                <p className="text-pitch-green text-sm mb-6 truncate" title={winner.team}>
                  {winner.team}
                </p>

                <div className="pt-4 border-t border-stadium-700 flex justify-between items-center">
                  <span className="text-gray-500 text-xs uppercase tracking-widest">Prize Won</span>
                  <span className={`font-heading font-bold text-lg ${winner.isCurrent ? 'text-floodlight-gold' : 'text-white'}`}>
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
