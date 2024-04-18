/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "358px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend:{
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    }
  }
  },
  plugins: [],
}