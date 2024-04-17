export const accordionTailwind =
`/** @type {import('tailwindcss').Config} */
  module.exports = {
    theme: {
      extend: {
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: '50px' },
          },
          'accordion-up': {
            from: { height: '50px' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-in-out',
          'accordion-up': 'accordion-up 0.2s ease-in-out',
        },
        colors:{
          orange: {
            100: '#faaa3d',
            200: '#f47833',
          },
        }
      }
    },
  };`;

export const generalTailwind = `/** @type {import('tailwindcss').Config} */
  module.exports = {
    theme: {
      extend: {
        colors: {
          orange: {
            100: '#faaa3d',
            200: '#f47833',
          },
        }
      }
    },
  }`;

export const formsTailwind = `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      orange: {
        100: '#faaa3d',
        200: '#f47833',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}`;

export const entireTailwind = `
  /** @type {import('tailwindcss').Config} */
  (module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './lib/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
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
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: '50px' },
          },
          'accordion-up': {
            from: { height: '50px' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-in-out',
          'accordion-up': 'accordion-up 0.2s ease-in-out',
        },
      },
    },
    plugins: [require('@tailwindcss/forms')],
  });`;

export const stylesCode = `@tailwind base;
@tailwind components;
@tailwind utilities;`;
