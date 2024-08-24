/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '400px',
      'md': '680px',
      'lg': '1000px',
      'xl': '1115px',
      '2xl': '1250px'
    },
    colors: {
      'blue': '#0076D3',
      'red': '#B60000',
      'white': '#FFFFFF',
      'text': '#C32F00',
      'green': '#427B58',
      'orange': '#ffc82c',
      'pink': '#C31952',
      'gray': '#628C7C',
      'lightgray': '#E2E2E2',
      'brown': '#C32F00',
      'yellowish': '#FFFD92'
    },
    extend: {},
  },
  plugins: [],
}