/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './lib/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow': {
          100: '#fcef46',
          200: '#ffd231',
        },
        'orange': {
          100: '#faaa3d',
          200: '#f47833'
        },
        'black': '#191818'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      fontFamily: {
        serif: ['Mulish', 'sans-serif']
      },
    },
  },
  plugins: [require('@tailwindcss/forms')]
};
