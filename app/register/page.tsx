'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, ArrowRight, Loader2, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { getActiveSeason, registerForLeague, type ActiveSeason } from '@/lib/api'
import { NIGERIAN_BANKS } from '@/lib/banks'

export default function RegisterPage() {
  const [season, setSeason] = useState<ActiveSeason | null>(null)
  const [seasonError, setSeasonError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    fplEntryId: '',
    phone: '',
    inH2h: false,
    bankAccountNumber: '',
    bankCode: '',
  })

  useEffect(() => {
    getActiveSeason()
      .then(setSeason)
      .catch(() => setSeasonError('Registration is not currently open. Check back soon.'))
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!season) return
    setFormError(null)
    setSubmitting(true)

    try {
      const response = await registerForLeague({
        fpl_entry_id: Number(formData.fplEntryId),
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        full_name: formData.fullName,
        season_id: season.id,
        in_h2h: formData.inH2h,
        bank_account_number: formData.bankAccountNumber,
        bank_code: formData.bankCode,
      })

      window.location.href = response.payment_authorization_url
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Something went wrong. Try again.')
      setSubmitting(false)
    }
  }

  const entryFeeNaira = season ? (season.entry_fee_kobo / 100).toLocaleString() : '—'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-24 bg-stadium-900 relative"
    >
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-pitch-green/10 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-pitch-lines opacity-10 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            JOIN THE <span className="text-pitch-green">CHAMPIONS</span>
          </h1>
          <p className="text-gray-400 text-lg">Secure your spot in the ultimate FPL battleground.</p>
        </div>

        <div className="bg-stadium-800 border border-stadium-700 p-6 sm:p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pitch-green/5 rounded-bl-full pointer-events-none"></div>

          {seasonError && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-sm text-red-300 text-sm">
              {seasonError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="FULL NAME">
                <input
                  type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                  className={inputClass} placeholder="e.g. Bukayo Saka"
                />
              </Field>

              <Field label="EMAIL ADDRESS">
                <input
                  type="email" name="email" required value={formData.email} onChange={handleChange}
                  className={inputClass} placeholder="manager@example.com"
                />
              </Field>

              <Field label="PASSWORD">
                <input
                  type="password" name="password" required minLength={8} value={formData.password} onChange={handleChange}
                  className={inputClass} placeholder="At least 8 characters"
                />
              </Field>

              <Field label="PHONE NUMBER (WHATSAPP)">
                <input
                  type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  className={inputClass} placeholder="+234 800 000 0000"
                />
              </Field>

              <Field
                label="FPL TEAM ID"
                labelExtra={
                  <Link
                    href="/help#team-id"
                    target="_blank"
                    className="text-gray-500 hover:text-pitch-green transition-colors"
                    aria-label="How do I find my FPL Team ID?"
                    title="How do I find my FPL Team ID?"
                  >
                    <HelpCircle className="h-4 w-4" />
                  </Link>
                }
              >
                <input
                  type="number" name="fplEntryId" required value={formData.fplEntryId} onChange={handleChange}
                  className={inputClass} placeholder="e.g. 118126"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Found in your FPL points-page URL: fantasy.premierleague.com/entry/<b>YOUR_ID</b>/event/1
                </p>
              </Field>

              <div className="space-y-2 flex items-end pb-2">
                <label className="flex items-center gap-3 text-gray-300 text-sm font-heading tracking-wide">
                  <input
                    type="checkbox" name="inH2h" checked={formData.inH2h} onChange={handleChange}
                    className="h-5 w-5 accent-pitch-green"
                  />
                  Also join the Head-to-Head cup
                </label>
              </div>

              <Field label="BANK">
                <select name="bankCode" required value={formData.bankCode} onChange={handleChange} className={inputClass}>
                  <option value="">Select your bank</option>
                  {NIGERIAN_BANKS.map((bank) => (
                    <option key={bank.code} value={bank.code}>
                      {bank.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="ACCOUNT NUMBER">
                <input
                  type="text" name="bankAccountNumber" required pattern="\d{10}" maxLength={10}
                  value={formData.bankAccountNumber} onChange={handleChange}
                  className={inputClass} placeholder="10-digit NUBAN"
                />
                <p className="text-xs text-gray-500 mt-1">This is where your winnings get paid out — automatically.</p>
              </Field>
            </div>

            {formError && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-sm text-red-300 text-sm">
                {formError}
              </div>
            )}

            <div className="pt-6 mt-6 border-t border-stadium-700">
              <div className="flex items-center justify-between mb-6 bg-stadium-900 p-4 rounded-sm border border-stadium-700">
                <span className="font-heading text-gray-300 tracking-wide">ENTRY FEE</span>
                <span className="font-heading font-bold text-2xl text-white">₦{entryFeeNaira}</span>
              </div>

              <button
                type="submit"
                disabled={submitting || !season}
                className="w-full flex items-center justify-center gap-2 bg-[#00C853] hover:bg-[#00E676] disabled:opacity-50 disabled:cursor-not-allowed text-white font-heading font-bold text-lg tracking-wider py-4 rounded-sm transition-colors shadow-[0_0_20px_rgba(0,200,83,0.3)]"
              >
                {submitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <ShieldCheck className="h-5 w-5" />
                    PAY ₦{entryFeeNaira} WITH PAYSTACK
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-xs mt-4">
                Payments are securely processed by Paystack. We verify your FPL Team ID before checkout.
              </p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

const inputClass =
  'w-full bg-stadium-900 border border-stadium-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-pitch-green focus:ring-1 focus:ring-pitch-green transition-colors'

function Field({
  label,
  labelExtra,
  children,
}: {
  label: string
  labelExtra?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-heading tracking-wide text-gray-300">
        {label}
        {labelExtra}
      </label>
      {children}
    </div>
  )
}
