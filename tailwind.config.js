/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "390px",
        md: '600px',
        lg: "768px",
        xl: "1200px",
      },
      
      fontFamily: {
        sans: "Arial",
      },
    },
  },
  plugins: [],
};
