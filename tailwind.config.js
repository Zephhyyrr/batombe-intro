/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts}',
    './node_modules/@nuxtjs/tailwindcss/dist/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81'
        }
        ,
        red: {
          50:  '#f6f7f9',
          100: '#e9edf2',
          200: '#cfe0ea',
          300: '#9ab3c7',
          400: '#5f7b93',
          500: '#314e62',
          600: '#253746',
          700: '#151D2A',
          800: '#0f141a',
          900: '#080b10',
          DEFAULT: '#151D2A'
        }
      }
    }
  },
  plugins: []
}
