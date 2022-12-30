/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        main: 'rgba(2, 2, 3, .9)',
        bottom: '#15171B',
        black: '#000000',
        light_line: 'rgba(255,255,255,0.1)',
      },
      width: {
        title: '15ch',
      },
    },
  },
  plugins: [],
}
