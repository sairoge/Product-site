/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //gray: "#C6C6C6",
        main: "#00EFBC",
        subMain: "#F3F9FF",
        border: "#F1F8FF",
        around: "#545454",
      },
      screens: {
        xs: "475px",
      },
      fontFamily: {
        main: ["Roboto Slab", "serif"],
        subMain: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
  breakpoints: {
    md: '400px',
  },
};

// Deleted colors
// #00EFBC
//gray for hamburger menu



