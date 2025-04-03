/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html, js}", "*.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        monterratb: ['Montserrat Bold'],
        raleway: ['Raleway'],
        ralewayb: ['Raleway Bold'],
      }
    },
  },
  plugins: [],
}

