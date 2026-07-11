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
        stadium: {
          900: '#0a0e1a',
          800: '#0d1117',
          700: '#1a1a2e',
        },
        pitch: {
          green: '#00ff87',
        },
        floodlight: {
          gold: '#ffd700',
          orange: '#f5a623',
        },
        electric: {
          cyan: '#04f5ff',
        },
      },
      fontFamily: {
        heading: ['var(--font-oswald)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
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
          '0%, 100%': { opacity: '1', boxShadow: '0 0 15px 2px rgba(0, 255, 135, 0.4)' },
          '50%': { opacity: '.8', boxShadow: '0 0 25px 5px rgba(0, 255, 135, 0.7)' },
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
