import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        // untitled ui colors
        primary: {
          25: '#fcfaff',
          50: '#f9f5ff',
          100: '#f4ebff',
          200: '#e9d7fe',
          300: '#dfbbfb',
          400: '#b692f6',
          500: '#9e77ed',
          600: '#7f56d9',
          700: '#6941c6',
          800: '#53389e',
          900: '#42307d',
        },
        gray: {
          100: '#F2F4F7',
          500: '#667085',
          900: '#101828',
        },
      },
      // untitled ui font
      fontSize: {
        'md-semibold': [
          '48px',
          {
            lineHeight: '60px',
            letterSpacing: '-0.96px',
            fontWeight: '600',
          },
        ],
        'xl-normal': [
          '20px',
          {
            lineHeight: '30px',
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
