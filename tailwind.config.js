module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff5252',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    textColor: [
      'responsive',
      'hover',
      'focus',
      'group-hover',
      'dark',
      'dark-hover',
    ],
    backgroundColor: [
      'hover',
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
    ],
    borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
};
