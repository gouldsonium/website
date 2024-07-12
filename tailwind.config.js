require('dotenv').config()

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        heading: ["JetBrains Mono", 'monospace'],
        text: ["Open Sans", 'sans-serif'],
      },
      colors: {
        secondary: '#ffa500'
      },
      screens: {
        xs: '495px'
      },
      order: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        // add other order values if needed
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
  
  