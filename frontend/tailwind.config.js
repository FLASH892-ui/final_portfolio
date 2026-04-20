/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#050a15',
        textLight: '#f3f4f6',
        textMuted: '#9ca3af',
        accentBlue: '#3b82f6',
        accentPurple: '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'page-fade': 'pageFadeIn 0.6s ease-in-out forwards',
        'pulse-slow': 'pulse-ambient 12s ease-in-out infinite alternate',
        'typing': 'typing 2.5s steps(30, end) forwards, blink-cursor .75s step-end infinite',
        'pulse-dot': 'pulse-dot 2s infinite cubic-bezier(0.66, 0, 0, 1)',
      },
      keyframes: {
        pageFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-ambient': {
          '0%': { transform: 'translate(-50%, -50%) scale(0.9)', opacity: '0.8' },
          '100%': { transform: 'translate(-50%, -50%) scale(1.1)', opacity: '1' },
        },
        typing: {
          from: { maxWidth: '0' },
          to: { maxWidth: '100%' },
        },
        'blink-cursor': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#8b5cf6' },
        },
        'pulse-dot': {
          to: { boxShadow: '0 0 0 10px rgba(16, 185, 129, 0)' },
        }
      }
    },
  },
  plugins: [],
}
