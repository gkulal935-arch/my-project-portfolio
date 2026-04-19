/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        neonPurple: '#a855f7',
        neonPink: '#ec4899',
        neonBlue: '#3b82f6',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'hologram': 'hologram 1.5s ease-out forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 5px #a855f7)' },
          '50%': { opacity: 0.7, filter: 'drop-shadow(0 0 20px #ec4899)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'hologram': {
          '0%': { opacity: 0, transform: 'scaleY(0)', filter: 'brightness(2)' },
          '100%': { opacity: 1, transform: 'scaleY(1)', filter: 'brightness(1)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(to right, #a855f7, #ec4899, #3b82f6)',
      }
    },
  },
  plugins: [],
}
