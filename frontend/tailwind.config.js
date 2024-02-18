/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "brownish": "#FBF8EF",
      },
      fontFamily:{
        'dm-sans': ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}