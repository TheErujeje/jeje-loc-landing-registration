'use client'

import { motion } from 'framer-motion'

export function RulesSection() {
  const rules = [
    {
      title: 'Register & Pay Entry Fee',
      description: 'Complete the registration form, add your bank details for payouts, and pay the entry fee via Paystack to secure your spot.',
    },
    {
      title: 'We Verify Your FPL Team',
      description: 'We check your FPL Team ID against the official Fantasy Premier League API the moment you register.',
    },
    {
      title: 'Set Your Squad Each Gameweek',
      description: 'Manage your budget, make transfers, and set your captain before the weekly deadline — on the official FPL app.',
    },
    {
      title: 'Compete Against Fellow Managers',
      description: 'Track your progress on the leaderboard in your LOC dashboard. Trash talk is encouraged in the official WhatsApp group.',
    },
    {
      title: 'Get Paid Automatically',
      description: 'Win a gameweek and get paid straight to your bank account once that gameweek is finalized and the payout is approved.',
    },
  ]

  return (
    <section className="py-24 bg-stadium-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            HOW TO <span className="text-pitch-green">PLAY</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pitch-green to-transparent mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-stadium-700"></div>

          <div className="space-y-12">
            {rules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start"
              >
                <div className="flex-shrink-0 relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-stadium-800 border-2 border-pitch-green text-pitch-green font-heading font-bold text-2xl shadow-[0_0_15px_rgba(0,255,135,0.2)]">
                  {index + 1}
                </div>

                <div className="flex-1 pt-3 pb-8 border-b border-stadium-800 md:border-b-0 relative">
                  <div className="md:hidden absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-pitch-green/50 to-transparent"></div>
                  <div className="hidden md:block absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-pitch-green/20 to-transparent"></div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-3 tracking-wide">{rule.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{rule.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
