/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blood: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        gold: {
          300: '#f0d78c',
          400: '#d4a373',
          500: '#c9a96e',
          600: '#b8963a',
        },
        dark: {
          50: '#262626',
          100: '#1a1a1a',
          200: '#141414',
          300: '#111111',
          400: '#0e0e0e',
          500: '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
}
