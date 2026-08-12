/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'garden-cream': '#fafaf7',
        'garden-warm': '#f5f0ea',
        'garden-stone': '#8a8a7a',
        'garden-dark': '#1a1a1a',
        'garden-border': '#e8e4dd',
        'garden-green': {
          DEFAULT: '#1a3a2a',
          50: '#f0f5f0',
          100: '#e0ebe0',
          200: '#c0d7c0',
          300: '#8fb08f',
          400: '#5a8a5a',
          500: '#3a6a3a',
          600: '#2a5a3a',
          700: '#1a3a2a',
          800: '#0d2619',
          900: '#06120d',
          pale: '#e8f0ea',
        },
        'garden-gold': {
          300: '#d4c090',
        },
      },
      fontFamily: {
        'display': ['"DM Serif Display"', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
