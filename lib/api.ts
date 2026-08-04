const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

export interface ActiveSeason {
  id: string
  label: string
  entry_fee_kobo: number
  currency: string
}

export interface RegisterPayload {
  fpl_entry_id: number
  email: string
  password: string
  phone: string
  full_name: string
  season_id: string
  in_h2h: boolean
  bank_account_number: string
  bank_code: string
}

export interface RegisterResponse {
  user: { fpl_entry_id: number; email: string; full_name: string; fpl_team_name: string }
  league_entry_id: string
  payment_authorization_url: string
  payment_reference: string
}

async function handle<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.detail || `Request failed (${res.status})`)
  }
  return res.json()
}

export async function getActiveSeason(): Promise<ActiveSeason> {
  const res = await fetch(`${API_BASE_URL}/registration/seasons/active`)
  return handle<ActiveSeason>(res)
}

export interface FplEntryLookup {
  team_name: string
  player_first_name: string | null
  player_last_name: string | null
}

export async function lookupFplEntry(fplEntryId: number): Promise<FplEntryLookup> {
  const res = await fetch(`${API_BASE_URL}/registration/lookup-entry/${fplEntryId}`)
  return handle<FplEntryLookup>(res)
}

export async function registerForLeague(payload: RegisterPayload): Promise<RegisterResponse> {
  const res = await fetch(`${API_BASE_URL}/registration`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  return handle<RegisterResponse>(res)
}

export async function verifyPayment(reference: string): Promise<{ status: string }> {
  const res = await fetch(`${API_BASE_URL}/payments/verify/${reference}`)
  return handle<{ status: string }>(res)
}
