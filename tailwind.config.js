/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        orangeSoft: "#ff7b29",
        cyanBlue: "#31c3e0",
        limeGreen: "#d3ed68",
        darkBlue: "#132842"
      },
      prefix: "hs-",
      screens: {
        "2xl": "1320px",
      },
      animation: {
        "bounce-short": "bounce-short 1s .5",
      },
      keyframes: {
        "bounce-short": {
          "0%, 100%": {
            transform: "translateY(-35%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
};
