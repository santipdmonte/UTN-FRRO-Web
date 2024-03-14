/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#525252',
        accent: {
          DEFAULT: 'rgb(96 165 250)',
          secondary: 'rgb(147 197 253)',
          tertiary: 'rgb(23 37 84)', 
        },
      },
    },
    boxShadow: {
      custom1: '0 2px 40px 0px rgba(8, 70, 78, 0.08)',
      custom2: '0 8px 40px 0px rgba(8, 73, 81, 0.06)'
    },
  },
  plugins: [animations],
}

