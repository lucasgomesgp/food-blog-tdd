/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-principal": "#000638",
        "blue-tag": "#283A61",
        "gray-principal": "#605C59",
        "gray-footer-principal": "#F5F5F5",
        "gray-input": "#FEFEFE",
        "gray-icons": "#DDDDDD",
        "gray-footer": "#544B44",
        "gray-black": "#3E3E3E",
        "gray-time": "#515151"
      },
      fontFamily: {
        inter: "var(--font-inter)",
        roboto: "var(--font-roboto)",
        merriweather: "var(--font-merriweather)",
      }
    },
  },
  plugins: [],
}