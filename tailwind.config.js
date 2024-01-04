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

        secondary: '#14171A',
        tertiary: '#657786',

        alert: '#AA00AA',
        danger: '#ff5630',
        success: '#17BF63',

        primaryBg: 'rgba(250,250,250)',
        primaryBgLight: 'rgba(250,250,250,0.8)',

        light: 'rgb(255, 252, 252)',

        grayIcon: "rgba(99,115,129,0.71)",

      },

      color: {
        semiDark: 'rgb(33, 43, 54)',
      },

      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },

      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}