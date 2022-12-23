/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
    },
  },
  plugins: [],
}
