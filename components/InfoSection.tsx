'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
      icon: <Users className="h-8 w-8 text-brand-lilac" />,
      title: 'Elite Competition',
      description:
        'Face off against the most tactical FPL managers. No casuals, only champions in the making.',
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-purple" />,
      title: 'Weekly Thrills',
      description:
        'Every gameweek matters. Manager of the Month awards and weekly high-score shoutouts keep the adrenaline pumping.',
    },
    {
      icon: <Trophy className="h-8 w-8 text-brand-evergreen" />,
      title: 'Season Glory',
      description:
        'Battle through 38 grueling gameweeks to lift the ultimate prize and etch your name in the Hall of Fame.',
    },
  ]

  return (
    <section className="py-24 bg-white relative border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center gap-10 mb-16"
        >
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 tracking-[-0.04em] sm:tracking-[-0.05em] leading-[100%] mb-4">
              Enter the <span className="text-brand-lilac">Arena</span>
            </h2>
            <p className="max-w-prose text-xl md:text-2xl font-medium leading-[130%] tracking-[-0.02em] text-ink-600">
              Every gameweek is a battle. Every rank on the table is bragging rights. This is where the most
              tactical FPL managers prove it.
            </p>
          </div>
          <div className="relative w-full md:w-72 h-48 md:h-56 shrink-0 rounded-2xl overflow-hidden shadow-sm">
            <Image src="/manager.jpg" alt="" fill className="object-cover" sizes="(min-width: 768px) 18rem, 100vw" />
          </div>
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
              className="group bg-white border border-hairline p-8 rounded-2xl hover:border-brand-lilac/30 hover:bg-brand-lilac/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-ink-100 inline-block rounded-lg border border-hairline group-hover:border-brand-lilac/30 transition-colors">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold text-ink-900 tracking-[-0.03em] mb-3 group-hover:text-brand-lilac transition-colors">
                {card.title}
              </h3>

              <p className="text-ink-600 leading-relaxed tracking-[-0.01em]">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
