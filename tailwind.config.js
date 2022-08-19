/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        aaron: "url('/aaron.svg')",
        "aaron-wink": "url('/aaronwink.svg')",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
