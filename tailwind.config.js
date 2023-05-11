/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
     fontFamily: {
      display: ["Calistoga", "cursive"],
    },
    colors: {
      "snow": "#fbf5f3",
      "orchid": "#faa6ff",
      "violet": "#7353ba",
      "violet-dark": "#2f195f",
      "plum": "#0f1020",
      "purple-light": "#efc3f5",
      "purple-gray":"#4E3A5F"

    },
    extend: {},
  },
  plugins: [],
}

