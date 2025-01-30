/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html/contact.html/about.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'bottom-only': '0 4px 6px -1px rgba(0, 0, 0, 0.7)',
      },
      fontFamily: {
        product:["arya", "serif"],
        ayan:["Cinzel"]
      },
      dropShadow: {
        'abc': '0 0 300px rgba(61 228 237 / 30%)', // Red shadow
       
      },
    },
  },
  plugins: [],
}