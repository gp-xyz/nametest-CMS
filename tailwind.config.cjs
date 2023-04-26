/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      textColor:{
        skin:{
          base: 'var(--textcolor)',
          comp: 'var(--mycolor)',
          link: 'var(--linkcolor)',
        }
      },
      backgroundColor : {
        skin: {
          fill: 'var(--bg)',
          menu: 'var(--menucolor)',
          comp: 'var(--mycolor)',
          action: 'var(--actioncolor)'
        }
      },
      borderColor : {
        skin: {
          border: 'var(--myborder)',
          comp: 'var(--mycolor)'
        }
      }
    },
    fontFamily: {
      sans: ['Bowlby One', 'sans-serif'],
      serif: ['Noto Serif JP', 'serif'],
    }
  },
  plugins: [   
    require('tailwindcss'),
    require('autoprefixer'),],
}
