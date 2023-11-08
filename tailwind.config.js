/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3c4fdc',
        secondary: '#14171A',
        tertiary: '#657786',
        alert: '#E0245E',
        success: '#17BF63',
        dark: '#000000',
        light: '#FFFFFF',
        blueLogo: "#58B5EF",
      },

      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      }
    },
  },
  plugins: [],
}