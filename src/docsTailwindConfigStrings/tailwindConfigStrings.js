export const accordionTailwind = `
/** @type {import('tailwindcss').Config} */
  module.exports = {
    theme: {
      extend: {
        transitionProperty: {
          'max-height': 'max-height',
        }, 
        colors:{
          orange: {
            100: '#faaa3d',
            200: '#f47833',
          },
        }
      }
    },
  }`;


export const generalTailwind = 
`/** @type {import('tailwindcss').Config} */
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

export const formsTailwind = 
`/** @type {import('tailwindcss').Config} */
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

