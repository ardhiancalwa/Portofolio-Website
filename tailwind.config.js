/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#8b5cf6',
        dark : '#030712',
        secondary : '#64748b'
      },
      screens: {
        '2xl' : '1230px'
      }
    },
  },
  plugins: [],
}