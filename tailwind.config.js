/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  darkMode: 'class',
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        body: [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
        crystal: {
            "50": "#F4F9FB",
            "100": "#EDF5F8",
            "200": "#DBECF0",
            "300": "#C5E0E7",
            "400": "#B3D7E0",
            "500": "#A1CDD8",
            "600": "#6BB0C2",
            "700": "#428C9F",
            "800": "#2D606C",
            "900": "#163036"
          },
        orchid: {
            "50": "#FBF4F9",
            "100": "#F8EDF5",
            "200": "#F0DBEC",
            "300": "#E7C5E0",
            "400": "#E0B3D7",
            "500": "#D8A1CD",
            "600": "#C26BB0",
            "700": "#9F428C",
            "800": "#6C2D60",
            "900": "#361630"
          },
        springbud: {
            "50": "#F9FBF4",
            "100": "#F5F8ED",
            "200": "#ECF0DB",
            "300": "#E0E7C5",
            "400": "#D7E0B3",
            "500": "#CDD8A1",
            "600": "#B0C26B",
            "700": "#8C9F42",
            "800": "#606C2D",
            "900": "#303616"
          },
        dark: {
          "50": "#17153B",
          "100": "#2E236C",
          "200": "#433D8B",
          "300": "#C8ACD6"

          },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography'),
  ],
  safelist: ['bg-green-100', 'bg-blue-100', 'bg-orange-100', 'bg-yellow-100'],
}