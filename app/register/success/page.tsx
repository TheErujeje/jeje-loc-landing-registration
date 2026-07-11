'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react'
import { verifyPayment } from '@/lib/api'

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
      className="min-h-screen pt-40 pb-24 bg-stadium-900 flex flex-col items-center text-center px-4"
    >
      {status === 'checking' && (
        <>
          <Loader2 className="h-16 w-16 text-pitch-green animate-spin mb-6" />
          <h1 className="text-3xl font-heading font-bold text-white">Confirming your payment…</h1>
        </>
      )}
      {status === 'success' && (
        <>
          <CheckCircle2 className="h-16 w-16 text-pitch-green mb-6" />
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            WELCOME TO THE <span className="text-pitch-green">LEAGUE</span>
          </h1>
          <p className="text-gray-400 max-w-md">
            Your spot is confirmed. Log in to your LOC dashboard to track standings and payouts.
          </p>
        </>
      )}
      {status === 'failed' && (
        <>
          <XCircle className="h-16 w-16 text-red-400 mb-6" />
          <h1 className="text-3xl font-heading font-bold text-white mb-4">Payment not confirmed</h1>
          <p className="text-gray-400 max-w-md">
            We couldn&apos;t confirm this payment yet. If you were charged, contact us and we&apos;ll sort it out.
          </p>
        </>
      )}
    </motion.div>
  )
}
