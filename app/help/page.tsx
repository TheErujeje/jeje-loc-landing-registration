'use client'

import { motion } from 'framer-motion'
import { HelpCircle, Search, Link2, CheckCircle2 } from 'lucide-react'

export default function HelpPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-24 bg-white relative"
    >
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-lilac/10 to-transparent pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 text-brand-lilac mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 tracking-[-0.03em] mb-4">
            Registration <span className="text-brand-lilac">Help</span>
          </h1>
          <p className="text-ink-600 text-lg">Where to find the details you need to register.</p>
        </div>

        <div id="team-id" className="bg-white border border-hairline shadow-sm p-6 sm:p-10 rounded-card space-y-8 scroll-mt-32">
          <div>
            <h2 className="text-2xl font-bold text-ink-900 tracking-[-0.02em] mb-2 flex items-center gap-3">
              <Search className="h-6 w-6 text-brand-lilac" />
              Finding your FPL Team ID
            </h2>
            <p className="text-ink-600 text-sm leading-relaxed mb-6">
              Your Team ID (also called your Entry ID) is the number FPL uses to identify your team. It&apos;s
              what we use to pull your team name, points, and gameweek history.
            </p>

            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-purple text-white font-semibold flex items-center justify-center text-sm">1</span>
                <p className="text-ink-700 text-sm pt-1">
                  Log into your team at{' '}
                  <a
                    href="https://fantasy.premierleague.com/my-team"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-purple hover:underline"
                  >
                    fantasy.premierleague.com
                  </a>{' '}
                  — this is easiest on a desktop or mobile web browser rather than the FPL app.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-purple text-white font-semibold flex items-center justify-center text-sm">2</span>
                <p className="text-ink-700 text-sm pt-1">
                  Click <strong className="text-ink-900">&quot;Points&quot;</strong> in the top menu, or go to{' '}
                  <strong className="text-ink-900">&quot;Pick Team&quot;</strong> and open{' '}
                  <strong className="text-ink-900">&quot;View Gameweek History&quot;</strong>.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-purple text-white font-semibold flex items-center justify-center text-sm">3</span>
                <p className="text-ink-700 text-sm pt-1">
                  Look at the address bar — the URL will look like:
                </p>
              </li>
            </ol>

            <div className="mt-4 ml-11 bg-ink-100 border border-hairline rounded-lg px-4 py-3 font-mono text-sm text-ink-700 overflow-x-auto">
              fantasy.premierleague.com/entry/<span className="text-brand-purple font-semibold">1234567</span>/event/1
            </div>
            <p className="text-ink-500 text-xs mt-2 ml-11">
              The number after <span className="font-mono">/entry/</span> — <span className="text-brand-purple font-mono">1234567</span> in
              this example — is your Team ID. That&apos;s what goes in the &quot;FPL Team ID&quot; field.
            </p>
          </div>

          <div className="pt-8 border-t border-hairline">
            <h2 className="text-2xl font-bold text-ink-900 tracking-[-0.02em] mb-2 flex items-center gap-3">
              <Link2 className="h-6 w-6 text-brand-lilac" />
              After you register and pay
            </h2>
            <p className="text-ink-600 text-sm leading-relaxed">
              We&apos;ll email you the official league name, join code, and join link for our FPL classic
              league. Join using the <strong className="text-ink-900">same team</strong> you registered with —
              that&apos;s the one we track for standings and payouts.
            </p>
          </div>

          <div className="pt-8 border-t border-hairline flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-brand-lilac flex-shrink-0 mt-0.5" />
            <p className="text-ink-600 text-sm">
              Still stuck? Email us at{' '}
              <a href="mailto:fpl.jejefootball@gmail.com" className="text-brand-purple hover:underline">
                fpl.jejefootball@gmail.com
              </a>{' '}
              and we&apos;ll help you find it.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
