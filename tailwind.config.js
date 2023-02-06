/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#fafafa',
          100: '#e1e1e1',
          200: '#c8c8c8',
          300: '#afafaf',
          400: '#969696',
          500: '#7d7d7d',
          600: '#646464',
          700: '#4b4b4b',
          800: '#323232',
          850: '#212121',
          900: '#191919',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
