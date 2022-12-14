/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        grafit: "#1D2E26",
        pink: "#FFA17A",
      }
    },
  },
  plugins: [],
}
