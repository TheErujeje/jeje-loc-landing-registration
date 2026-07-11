'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Zap } from 'lucide-react'

export function InfoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const cards = [
    {
      icon: <Users className="h-8 w-8 text-electric-cyan" />,
      title: 'ELITE COMPETITION',
      description:
        'Face off against the most tactical FPL managers. No casuals, only champions in the making.',
    },
    {
      icon: <Zap className="h-8 w-8 text-pitch-green" />,
      title: 'WEEKLY THRILLS',
      description:
        'Every gameweek matters. Manager of the Month awards and weekly high-score shoutouts keep the adrenaline pumping.',
    },
    {
      icon: <Trophy className="h-8 w-8 text-floodlight-gold" />,
      title: 'SEASON GLORY',
      description:
        'Battle through 38 grueling gameweeks to lift the ultimate prize and etch your name in the Hall of Fame.',
    },
  ]

  return (
    <section className="py-24 bg-stadium-900 relative border-t border-stadium-800">
      <div className="absolute inset-0 bg-pitch-lines opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            ENTER THE <span className="text-pitch-green">ARENA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pitch-green to-transparent"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-stadium-800 border border-stadium-700 p-8 rounded-sm hover:border-pitch-green/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pitch-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="mb-6 p-4 bg-stadium-900 inline-block rounded-sm border border-stadium-700 group-hover:border-pitch-green/30 transition-colors">
                {card.icon}
              </div>

              <h3 className="text-xl font-heading font-bold text-white mb-3 tracking-wide group-hover:text-pitch-green transition-colors">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
