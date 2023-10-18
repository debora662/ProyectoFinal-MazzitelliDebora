/** @type {import('tailwindcss').Config} */
export const content = ["./**/*.{html,js}",
  "./node_modules/tw-elements/dist/js/**/*.js"
];
export const theme = {
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
};
export const plugins = [require("tw-elements/dist/plugin.cjs")];

