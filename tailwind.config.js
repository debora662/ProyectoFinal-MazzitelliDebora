/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        'w-98': '390px',
      },
      screens: {
        'xs': '320px',
      },
    },
  },
  plugins: [],
}

