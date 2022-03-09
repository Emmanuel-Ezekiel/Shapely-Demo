module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({ 
        "home-pattern": "url('/src/assets/photo-1443527216320-7e744084f5a7-1.jpeg')",
        "section-pattern": "url('/src/assets/photo-1452723312111-3a7d0db0e024.jpeg')",
        "new-pattern": "url('/src/assets/photo-1440557653082-e8e186733eeb-1.jpeg')",

      })
    },
  },
  plugins: [],
}
