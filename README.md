# LOC Landing & Registration

Next.js 14 (App Router) + Tailwind marketing site and registration flow for Jeje's League of Champions. Design system ported from the earlier `fpl-web` prototype (dark stadium theme, pitch-green/floodlight-gold palette, Oswald + Inter, framer-motion).

## Setup

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_API_BASE_URL to your backend
npm run dev
```

## Pages

- `/` — landing page (hero, prizes, rules, CTA).
- `/register` — real registration form: full name, email, password, phone, FPL Team ID, optional H2H opt-in, bank details (for payouts). Submits to the backend's `POST /registration`, which verifies the FPL ID live and returns a Paystack checkout URL to redirect to.
- `/register/success` — Paystack redirects here after checkout; calls `GET /payments/verify/{reference}` as a fallback in case the webhook hasn't landed yet.
- `/winners` — Hall of Fame; currently static, wire up to a backend winners endpoint once a season completes.

## Notes

`lib/banks.ts` has a static Nigerian bank list for the account-number field — swap for a live Paystack bank list once there's a backend proxy endpoint for it (needs the secret key, can't call Paystack directly from the browser).

`public/fplstadium.jpg` referenced in `HeroSection` needs to be added — grab any stadium/floodlight photo that fits the theme.
