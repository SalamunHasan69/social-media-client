/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "rgb(132 204 22)",

          "secondary": "#f4b74e",

          "accent": "#8bb6ef",

          "neutral": "#261B27",

          "base-100": "#EDEDEE",

          "info": "#58C0DF",

          "success": "#6EE7D1",

          "warning": "#ED8E07",

          "error": "#F33F69",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
