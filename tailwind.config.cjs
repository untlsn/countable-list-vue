module.exports = {
  extract: {
    include: ['**/*.{vue,css}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#E22D40',
          dark: '#9E0E1D',
        },
        secondary: {
          main: '#2EB2EC',
          dark: '#0E79A8',
        },
        dark: {
          text: '#231F20',
        },
        divider: {
          shadow: {
            2: '#231F2014',
          },
          2: '#231F20',
        },
        background: '#F1F1F1',
        gray: {
          400: '#dadada',
        },
        success: {
          main: '#4CAF50',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
};
