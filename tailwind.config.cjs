/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        heroBgColor: "rgba(0,0,0,0.5)",
      }
    },
  },
  plugins: [],
}