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
        // Image used in as background in the hero banner
        'hero-image': "url(/feria_background.webp)",
      },
      // Festa Local color palette
      colors: {
        "festa-yellow": "#F2C87D",
        "festa-beige": "#fff7ed",
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

