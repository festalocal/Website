/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {

    },
    extend: {
      backgroundImage: {
        'hero-image': "url(/feria_background.jpg)",
      },
      // Festa Local color palette
      colors: {
        "festa-yellow": "#F2C87D",
        "festa-beige": "#FCEFDE",
        "festa-light-blue": "#A7CDEE",
        "festa-blue": "#4089C8",
        "festa-dark-blue": "#283F92",
        "festa-red": "#EA5866",
        "festa-pink": "#F4B8B8",
      },
    },
  },
  plugins: [],
}

