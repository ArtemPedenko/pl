/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#02102D",
        green: "#197A81",
        light_green: "#e3e2dc",
      },
      fontFamily: {
        sans: "Arial",
      },
    },
  },
  plugins: [],
};
