// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // This covers all files in src
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        stone: {
          50: '#FAFAF9',
        },
        orange: {
          50: '#FFF7ED',
        },
        green: {
          500: '#22C55E',
          600: '#16A34A',
        },
      },
      backgroundColor: {
        'white-60': 'rgba(255, 255, 255, 0.6)',
      },
      backgroundImage: {
        'gradient-coffee': 'linear-gradient(to bottom right, var(--stone-50), var(--orange-50))',
      },
    },
  },
  plugins: [],
}