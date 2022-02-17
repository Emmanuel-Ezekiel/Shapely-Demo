module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({ 
        "home-pattern": "url('/src/assets/photo-1443527216320-7e744084f5a7-1.jpeg')"
      })
    },
  },
  plugins: [],
}
