/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D2D2D",
        secondary: "#FFFFFF",
        tertiary: {
          DEFAULT: "#737373",
          100: "#D2D2D2",
          200: "#F6F6F6",
          300: "#b8b8b9",
        },
      },
    },
  },
  plugins: [],
};
