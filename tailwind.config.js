/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lochmara': {
          '50': '#effaff',
          '100': '#daf3ff',
          '200': '#beebff',
          '300': '#91dfff',
          '400': '#5ecbfc',
          '500': '#38aff9',
          '600': '#2293ee',
          '700': '#1976d2',
          '800': '#1c63b1',
          '900': '#1c548c',
          '950': '#163355',
        },
        'blue-ribbon': {
          '50': '#ecf1ff',
          '100': '#dde6ff',
          '200': '#c2d0ff',
          '300': '#9cb0ff',
          '400': '#7585ff',
          '500': '#535aff',
          '600': '#3d36f5',
          '700': '#342ad8',
          '800': '#2a25ae',
          '900': '#272689',
          '950': '#191650',
        },
        'zumthor': {
        '50': '#edf6ff',
        '100': '#dbecfe',
        '200': '#bfdffe',
        '300': '#93ccfd',
        '400': '#60affa',
        '500': '#3b8ef6',
        '600': '#256feb',
        '700': '#1d5ad8',
        '800': '#1e49af',
        '900': '#1e418a',
        '950': '#172954',
    },

      },
      fontFamily:{
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
