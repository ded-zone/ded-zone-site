/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        aaron: "url('/aaron.svg')",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
