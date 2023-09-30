/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        grayColor:"#2c2d29",
        cyanColor:"#51bbb7"
      }
    },
  },
  plugins: [
],
}