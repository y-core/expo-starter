/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1C3CAC', //- Persian Blue
        secondary: '#BAC4E6',
        tertiary: '#F49C0C', //- Buttercup
        dark: '#0F172A',
        light: '#CBD5E1',
        white: '#FF0000', //'#E2E8F0',
      },
    },
  },
  plugins: [],
};
