/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bigstar: "url('/src/assets/big_star.png')",
      },
    },
  },
  plugins: [],
}
