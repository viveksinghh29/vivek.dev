/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { primary: '#DEDBC8', 'blue-accent': '#60a5fa' },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['Almarai', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
