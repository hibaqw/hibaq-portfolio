/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./js/**/*.{html,js}", './index.html'],
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
      "purple-gray":"#4E3A5F",
      "creamy-beige":"#E3DBD8",
      "gray-beige":"#D6CBCB",
      "plum-gray":"#494A71",
      "indigo-gray":"#1E1F36"

    },
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      }
    },
  },
  plugins: [],
}

