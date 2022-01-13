module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./src/assets/background.jpg')"
      },
      fontFamily: {
        Barlow: "Barlow Condensed, sans-serif",
        Bellefair: "Bellefair"
      },
      container: {
        padding: '3.5rem',
        center: true
      }
    },
  },
  plugins: [],
}
