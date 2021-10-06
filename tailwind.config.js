module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('src/assets/img/hero.jpg')",
        'footer-background': "url('src/assets/img/footer.jpg')"
      }
    },
  },
  variants: {
    extend: {},
    container: []
  },
  plugins: [],
  corePlugins: {
    container: false
  }
}
