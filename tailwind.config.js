/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'md': '751px',
      },
      width: {
        '13/20': '65%',
        '7/20': '35%',
        '9/10':'90%'
        
      }
    },
  },
  plugins: []
}

