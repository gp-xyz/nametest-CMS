/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Bowlby One', 'sans-serif'],
    }
  },
  plugins: [   
    require('tailwindcss'),
  require('autoprefixer'),],
}
