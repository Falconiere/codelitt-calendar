/** @type {import('tailwindcss').Config} */

const brandColors = {
  'background': '#D1DCF0',
  'darkblue': '#101277',
  "mediumBlue": "#394ABC",
  'white': '#FFFFFF',
  "grey": "#797979",
  "gray": "#626262",
  'darkerGray': '#384042',
  'darkGray': '#767A7B',
  "mediumGray": "#a9a9a9",
  'lightGray': '#D1DCF0',
  "error": "#D42222",
}

module.exports = {
  content: [
    './src/**/**/**/**/**/*.tsx',
  ],
  theme: {
    extend: {
      colors:{
        ...brandColors
      },
      boxShadow: {
        'cardShadow': '0px 4px 28px 2px #D1DCF0',
      },
    },
  },
  plugins: [],
}
