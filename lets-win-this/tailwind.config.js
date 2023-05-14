module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        custom: {
          'light-blue': '#ebf4f6',
          'pale-blue': '#bdeaee',
          'blue-green': '#76b4bd',
          'deep-blue': '#58668b',
          'dark-gray': '#5e5656',
          'yellow': '#ffeead',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
