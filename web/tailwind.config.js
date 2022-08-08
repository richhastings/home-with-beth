module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ['Arsenica', 'serif'],
      body: ['"Raleway"', 'sans-serif'],
    },
    colors: {
      current: 'currentColor',
      champagne: '#F7E7CE',
      white: '#FFF',
      black: '#222',
      lightgrey: '#aaa',
      lightestgrey: '#eee',
      darkgrey: '#444',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '&:hover *')
    },
  ],
}
