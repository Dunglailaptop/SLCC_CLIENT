/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    fontFamily: {
       main: ["Roboto"]
    },
    extend: {
      fontSize: {
        main: "14px"
      },
      width: {
        main: "1220px"
      },
      backgroundColor: {
        main: "#ffffff"
      },
      colors: {
        main: "#f5f5f5",
      }
    },
  },
  plugins: [],
}