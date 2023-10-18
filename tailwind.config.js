/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
  "./node_modules/tw-elements/dist/js/**/*.js"
],
  theme: {
    extend: {
      margin: {
        '11': '6.5rem',              
      },
      width: {
        'w-98': '390px',
      },
      screens: {
        'xs': '320px',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],  
}

