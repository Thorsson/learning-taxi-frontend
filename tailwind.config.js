/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'woodsmoke': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#1a1a1a',
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
        'dodger-blue': {
          '50': '#eef9ff',
          '100': '#d8f1ff',
          '200': '#bae7ff',
          '300': '#8bdbff',
          '400': '#54c5ff',
          '500': '#2ca6ff',
          '600': '#1d8dfb',
          '700': '#0e71e7',
          '800': '#125abb',
          '900': '#154e93',
          '950': '#123059',
        },
    },
  },
  plugins: [],
}
}
