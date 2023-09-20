/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'mx-13': '48px',
      },
      screens: {
        'xs': '320px',
      },
    },
  },
  plugins: [],
}

