'use client'

import { HeroSection } from '@/components/HeroSection'
import { InfoSection } from '@/components/InfoSection'
import { PrizesSection } from '@/components/PrizesSection'
import { RulesSection } from '@/components/RulesSection'
import { CTASection } from '@/components/CTASection'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <InfoSection />
      <PrizesSection />
      <RulesSection />
      <CTASection />
    </motion.div>
  )
}
