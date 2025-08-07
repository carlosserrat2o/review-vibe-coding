/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 15px rgba(0, 191, 255, 0.5)',
      },
      colors: {
        'neon-blue': '#00bfff',
        'neon-purple': '#ff00ff',
        'neon-green': '#00ff00',
      },
    },
  },
  plugins: [],
}; 