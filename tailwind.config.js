module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        46: '180px',
      },
      colors: {
        yellow: {
          450: '#EFCE4B',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
