/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './lib/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        'light': "url('./assets/honeycomb.svg')",
        'dark': "url('./assets/honeycomb-dark.svg')"
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      colors: {
        background: 'rgba(var(--color-background))',
        font: 'rgba(var(--color-font))',
        subfont: 'rgba(var(--color-subfont))',
        h3font: 'rgba(var(--color-h3font))',
        footerfont: 'rgba(var(--color-footerfont))',
        boldfont: 'rgba(var(--color-boldfont))',
        hover: 'rgba(var(--color-hover))',

        yellow: {
          100: '#fcef46',
          200: '#ffd231',
        },
        orange: {
          100: '#faaa3d',
          200: '#f47833',
        },
        black: '#191818',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      fontFamily: {
        serif: ['Mulish', 'sans-serif'],
        pacifico: ['Pacifico', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
