import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // FPL-inspired brand accents
        brand: {
          blue: '#0EA5E9',
          'blue-light': '#E0F7FF',
          purple: '#38003C',
          'purple-light': '#F3E8F5',
          lilac: '#D499B9',
          evergreen: '#053225',
        },
        // Warm grayscale text/border scale
        ink: {
          100: '#FAFAFA', 200: '#F0F0F0', 300: '#E0E0E0', 400: '#BDBDBD', 500: '#8C8C8C',
          600: '#5C5C5C', 700: '#3A3A3A', 800: '#1F1F1F', 900: '#0F0F12',
        },
        surface: '#FFFFFF',
        hairline: '#ECECEC',
        status: { success: '#16A34A', warning: '#D97706', danger: '#DC2626', pending: '#6B7280' },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
      },
      animation: {
        spotlight: 'spotlight 10s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        spotlight: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.3' },
          '100%': { transform: 'translate(-30%, -30%) scale(1.2)', opacity: '0.6' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 15px 2px rgba(212, 153, 185, 0.4)' },
          '50%': { opacity: '.8', boxShadow: '0 0 25px 5px rgba(212, 153, 185, 0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
