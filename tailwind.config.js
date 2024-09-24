/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],  // Add the Inter font
        poppins: ['Poppins', 'sans-serif'], // Add the Poppins font
        roboto: ['Roboto', 'sans-serif'], // Example of adding another font
        // You can add more fonts as needed
      },
    },
  },
  plugins: [],
}
