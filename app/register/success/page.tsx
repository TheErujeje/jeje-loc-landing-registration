'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, Loader2, ArrowRight } from 'lucide-react'
import { verifyPayment } from '@/lib/api'

const USER_PORTAL_URL = process.env.NEXT_PUBLIC_USER_PORTAL_URL || 'http://localhost:3051'

export default function RegisterSuccessPage() {
  const params = useSearchParams()
  const reference = params.get('reference') || params.get('trxref')
  const [status, setStatus] = useState<'checking' | 'success' | 'failed'>('checking')

  useEffect(() => {
    if (!reference) {
      setStatus('failed')
      return
    }
    verifyPayment(reference)
      .then((res) => setStatus(res.status === 'success' ? 'success' : 'failed'))
      .catch(() => setStatus('failed'))
  }, [reference])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-40 pb-24 bg-white flex flex-col items-center text-center px-4"
    >
      {status === 'checking' && (
        <>
          <Loader2 className="h-16 w-16 text-brand-lilac animate-spin mb-6" />
          <h1 className="text-3xl font-bold text-ink-900 tracking-[-0.03em]">Confirming your payment…</h1>
        </>
      )}
      {status === 'success' && (
        <>
          <CheckCircle2 className="h-16 w-16 text-status-success mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold text-ink-900 tracking-[-0.03em] mb-4">
            Welcome to the <span className="text-brand-lilac">League</span>
          </h1>
          <p className="text-ink-600 max-w-md mb-8">
            Your spot is confirmed. We&apos;ve also emailed you the league join code — log in below to
            track standings and payouts.
          </p>
          <a
            href={`${USER_PORTAL_URL}/login`}
            className="flex items-center gap-2 bg-brand-lilac hover:bg-brand-purple text-black hover:text-white font-bold tracking-[-0.02em] text-base sm:text-lg px-5 py-3 sm:px-8 sm:py-4 rounded-3xl transition-colors"
          >
            Go to your Dashboard
            <ArrowRight className="h-5 w-5" />
          </a>
        </>
      )}
      {status === 'failed' && (
        <>
          <XCircle className="h-16 w-16 text-status-danger mb-6" />
          <h1 className="text-3xl font-semibold text-ink-900 tracking-tight mb-4">Payment not confirmed</h1>
          <p className="text-ink-600 max-w-md">
            We couldn&apos;t confirm this payment yet. If you were charged, contact us and we&apos;ll sort it out.
          </p>
        </>
      )}
    </motion.div>
  )
}
