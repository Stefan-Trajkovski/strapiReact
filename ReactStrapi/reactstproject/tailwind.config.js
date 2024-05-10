/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        milkyWhite: '#fcfbfb',
        tommyBlue:'#00174f'
       
      },
      fontFamily: {
        customFont: ['pek', 'Cinzel'], // Add your custom font
      },
    },
  },
  plugins: [],
}

