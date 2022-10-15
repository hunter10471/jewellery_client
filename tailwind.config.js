/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      },
      color: {
        primary: '#FDF8EC',
        secondary: '#28282B',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['bumblebee'],
  },
};
