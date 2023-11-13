/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: '#2065D1FF',
        primaryLight: 'rgba(32, 101, 209, 0.08)',
        primaryDark: '#3c4fdc',

        secondary: '#14171A',
        tertiary: '#657786',

        alert: '#AA00AA',
        success: '#17BF63',

        dark: '#000000',
        light: 'rgb(255, 252, 252)',
        lightTransparent: "rgb(255, 252, 252, 0.8)",

        blueLogo: "#58B5EF",
        grayIcon: "rgba(99,115,129,0.71)",

        textDark: 'rgb(33, 43, 54)',
        textGray: '#7f8993',
      },

      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      }
    },
  },
  plugins: [],
}