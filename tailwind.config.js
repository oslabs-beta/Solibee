/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./lib/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        border: "var(--border)",
        yellow: {
          100: "var(--lightyellow)",
          200: "var(--darkyellow)",
        },
        orange: {
          100: "var(--lightorange)",
          200: "var(--darkorange)",
        },
        black: "var(--black)",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      fontFamily: {
        serif: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
