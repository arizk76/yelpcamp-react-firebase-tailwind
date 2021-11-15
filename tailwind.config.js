module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'floral-white': '#f9f6f1',
        'baby-blue': '#7AC5EA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
