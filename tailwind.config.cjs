/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        '_almost-white': '#fafafa',
        '_medium-gray':  '#696969',
        '_almost-black': '#141414'
      },
      fontFamily: {
        'sans': ['Epilogue', 'sans-serif']
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
