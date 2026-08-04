'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, ArrowRight, Loader2, HelpCircle, CheckCircle2, XCircle } from 'lucide-react'
import Link from 'next/link'
import { getActiveSeason, lookupFplEntry, registerForLeague, type ActiveSeason, type FplEntryLookup } from '@/lib/api'
import { NIGERIAN_BANKS } from '@/lib/banks'
import { Select } from '@/components/ui/Select'

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

  const [teamLookup, setTeamLookup] = useState<{ status: 'idle' | 'loading' | 'found' | 'not_found'; entry?: FplEntryLookup }>({
    status: 'idle',
  })

  useEffect(() => {
    getActiveSeason()
      .then(setSeason)
      .catch(() => setSeasonError('Registration is not currently open. Check back soon.'))
  }, [])

  // Confirms the FPL Team ID is real and shows the team/manager name back to
  // the user before they fill out the rest of the form — debounced so we're
  // not hitting the FPL API on every keystroke.
  useEffect(() => {
    const id = formData.fplEntryId
    if (!id) {
      setTeamLookup({ status: 'idle' })
      return
    }

    setTeamLookup({ status: 'loading' })
    const timeout = setTimeout(() => {
      lookupFplEntry(Number(id))
        .then((entry) => setTeamLookup({ status: 'found', entry }))
        .catch(() => setTeamLookup({ status: 'not_found' }))
    }, 500)

    return () => clearTimeout(timeout)
  }, [formData.fplEntryId])

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
      className="min-h-screen pt-32 pb-24 bg-white relative"
    >
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-lilac/10 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-pitch-lines opacity-20 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-ink-900 tracking-[-0.04em] sm:tracking-[-0.05em] leading-[100%] mb-4">
            Join the <span className="text-brand-lilac">Champions</span>
          </h1>
          <p className="text-ink-600 text-lg">Secure your spot in the ultimate FPL battleground.</p>
        </div>

        <div className="bg-white border border-hairline p-6 sm:p-8 md:p-12 rounded-card shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lilac/5 rounded-bl-full pointer-events-none"></div>

          {seasonError && (
            <div className="mb-6 p-4 bg-status-danger/10 border border-status-danger/30 rounded-lg text-status-danger text-sm">
              {seasonError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Full Name">
                <input
                  type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                  className={inputClass} placeholder="e.g. Bukayo Saka"
                />
              </Field>

              <Field label="Email Address">
                <input
                  type="email" name="email" required value={formData.email} onChange={handleChange}
                  className={inputClass} placeholder="manager@example.com"
                />
              </Field>

              <Field label="Password">
                <input
                  type="password" name="password" required minLength={8} value={formData.password} onChange={handleChange}
                  className={inputClass} placeholder="At least 8 characters"
                />
              </Field>

              <Field label="Phone Number (WhatsApp)">
                <input
                  type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  className={inputClass} placeholder="+234 800 000 0000"
                />
              </Field>

              <Field
                label="FPL Team ID"
                labelExtra={
                  <Link
                    href="/help#team-id"
                    target="_blank"
                    className="text-ink-500 hover:text-brand-purple transition-colors"
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
                {teamLookup.status === 'idle' && (
                  <p className="text-xs text-ink-500 mt-1">
                    Found in your FPL points-page URL: fantasy.premierleague.com/entry/<b>YOUR_ID</b>/event/1
                  </p>
                )}
                {teamLookup.status === 'loading' && (
                  <p className="flex items-center gap-1.5 text-xs text-ink-500 mt-1">
                    <Loader2 className="h-3 w-3 animate-spin" /> Checking FPL Team ID…
                  </p>
                )}
                {teamLookup.status === 'found' && teamLookup.entry && (
                  <p className="flex items-center gap-1.5 text-xs text-status-success mt-1">
                    <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" />
                    {teamLookup.entry.team_name}
                    {(teamLookup.entry.player_first_name || teamLookup.entry.player_last_name) && (
                      <>
                        {' '}— {[teamLookup.entry.player_first_name, teamLookup.entry.player_last_name].filter(Boolean).join(' ')}
                      </>
                    )}
                  </p>
                )}
                {teamLookup.status === 'not_found' && (
                  <p className="flex items-center gap-1.5 text-xs text-status-danger mt-1">
                    <XCircle className="h-3.5 w-3.5 flex-shrink-0" />
                    Couldn&apos;t find a team with this ID — double-check it.
                  </p>
                )}
              </Field>

              <div className="space-y-2 flex items-end pb-2">
                <label className="flex items-center gap-3 text-ink-700 text-sm font-medium">
                  <input
                    type="checkbox" name="inH2h" checked={formData.inH2h} onChange={handleChange}
                    className="h-5 w-5 accent-brand-purple"
                  />
                  Also join the Head-to-Head cup
                </label>
              </div>

              <Field label="Bank">
                <Select
                  name="bankCode" required value={formData.bankCode} onChange={handleChange}
                  wrapperClassName="w-full" className={inputClass}
                >
                  <option value="">Select your bank</option>
                  {NIGERIAN_BANKS.map((bank) => (
                    <option key={bank.code} value={bank.code}>
                      {bank.name}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label="Account Number">
                <input
                  type="text" name="bankAccountNumber" required pattern="\d{10}" maxLength={10}
                  value={formData.bankAccountNumber} onChange={handleChange}
                  className={inputClass} placeholder="10-digit NUBAN"
                />
                <p className="text-xs text-ink-500 mt-1">This is where your winnings get paid out — automatically.</p>
              </Field>
            </div>

            {formError && (
              <div className="p-4 bg-status-danger/10 border border-status-danger/30 rounded-lg text-status-danger text-sm">
                {formError}
              </div>
            )}

            <div className="pt-6 mt-6 border-t border-hairline">
              <div className="flex items-center justify-between mb-6 bg-ink-100 p-4 rounded-lg border border-hairline">
                <span className="text-ink-700 font-medium">Entry Fee</span>
                <span className="font-semibold text-2xl text-ink-900 tnum">₦{entryFeeNaira}</span>
              </div>

              <button
                type="submit"
                disabled={submitting || !season}
                className="w-full flex items-center justify-center gap-2 bg-brand-lilac hover:bg-brand-purple disabled:opacity-50 disabled:cursor-not-allowed text-black hover:text-white font-bold tracking-[-0.02em] text-base sm:text-lg py-3 sm:py-4 rounded-3xl transition-colors"
              >
                {submitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <ShieldCheck className="h-5 w-5" />
                    Pay ₦{entryFeeNaira} with Paystack
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </>
                )}
              </button>

              <p className="text-center text-ink-500 text-xs mt-4">
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
  'h-11 w-full bg-ink-100 border border-hairline rounded-[10px] px-3.5 text-[13.5px] text-ink-900 placeholder:text-ink-400 focus:bg-white focus:outline-none focus:border-brand-purple transition-colors'

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
    <div className="space-y-1.5">
      <label className="flex items-center gap-2 text-[12.5px] font-medium text-ink-700">
        {label}
        {labelExtra}
      </label>
      {children}
    </div>
  )
}
