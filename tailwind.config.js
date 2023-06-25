/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'goldbtn': '#FFC700',
        'lightGray': '#F5F5F5',
        'labelColor': '#4D4D4D',
        'primaryBtn': '#1074E9' 
      }
    },
  },
  plugins: [],
}

