module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        15: '0.938',
      },
      colors: {
        red: '#cc0202',
        orange: '#FF4E00',
        'light-orange': '#fe8237',
        green: '#007e34',
        blue: '#3999e3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}