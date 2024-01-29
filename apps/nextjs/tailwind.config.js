import { fontFamily } from 'tailwindcss/defaultTheme'
import { customColor } from './custom-color'
import { customTypograpy } from './custom-typography'
import { customSpacing } from './custom-spacing'

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
      colors: customColor,
      fontSize: customTypograpy,
      spacing: customSpacing,
      gap: customSpacing,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
}
