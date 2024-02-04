import defaultTheme from 'tailwindcss/defaultTheme';
import { customColor } from './src/styles/custom-color';
import { customTypograpy } from './src/styles/custom-typography';
import { customSpacing } from './src/styles/custom-spacing';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: customColor,
      fontSize: customTypograpy,
      spacing: customSpacing,
      gap: customSpacing,
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
