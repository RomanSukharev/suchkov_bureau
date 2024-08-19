/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mabry': ['Mabry Pro Regular', 'sans-serif'],
        'akrobat': ['Akrobat Bold', 'sans-serif'],
      },
      colors: {
        'custom-bg': '#F1F1ED',
      }
    },
  },
  plugins: [],
}