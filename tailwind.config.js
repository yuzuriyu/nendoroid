/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Arial", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        custom1: "#352F44",
        custom2: "#5C5470",
        gold: "#FFD700",
      },
    },
  },
  plugins: [],
};
