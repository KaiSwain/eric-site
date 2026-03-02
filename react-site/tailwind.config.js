/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#8B4513',
        'primary-dark': '#654321',
        secondary: '#D4AF37',
        accent: '#1E3A5F',
        'warm-white': '#FAF8F5',
        'warm-cream': '#F5F1E8',
      },
    },
  },
  plugins: [],
}
