/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heroBgColor: "rgba(0,0,0,0.5)",
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        "2xl": '1536px',
        "3xl": '1850',
        "4xl": '2400',
      },
    },
  },
  plugins: [],
}