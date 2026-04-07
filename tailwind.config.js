/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: 'rgb(var(--navy-blue-rgb) / <alpha-value>)',
        cobalt: 'rgb(var(--cobalt-rgb) / <alpha-value>)',
        coral: 'rgb(var(--coral-rgb) / <alpha-value>)',
        iceblue: 'rgb(var(--ice-blue-rgb) / <alpha-value>)',
        'ice-blue': 'rgb(var(--ice-blue-rgb) / <alpha-value>)',
        beige: 'rgb(var(--beige-rgb) / <alpha-value>)',
        'salmon-red': 'rgb(var(--salmon-red-rgb) / <alpha-value>)',
        'light-yellow': 'rgb(var(--light-yellow-rgb) / <alpha-value>)',
        lavender: 'rgb(var(--lavender-rgb) / <alpha-value>)',
        'blush-pink': 'rgb(var(--blush-pink-rgb) / <alpha-value>)',
        white: 'rgb(var(--white-rgb) / <alpha-value>)',
        black: 'rgb(var(--black-rgb) / <alpha-value>)',
        blue: {
          DEFAULT: 'rgb(var(--navy-blue-rgb) / <alpha-value>)',
          dark: 'rgb(var(--cobalt-rgb) / <alpha-value>)',
          light: 'rgb(var(--ice-blue-rgb) / <alpha-value>)',
        },
        orange: {
          DEFAULT: 'rgb(var(--salmon-red-rgb) / <alpha-value>)',
          dark: 'rgb(var(--salmon-red-rgb) / <alpha-value>)',
        },
        dark: 'rgb(var(--black-rgb) / <alpha-value>)',
        brand: {
          navy: 'rgb(var(--navy-blue-rgb) / <alpha-value>)',
          cobalt: 'rgb(var(--cobalt-rgb) / <alpha-value>)',
          coral: 'rgb(var(--coral-rgb) / <alpha-value>)',
          iceblue: 'rgb(var(--ice-blue-rgb) / <alpha-value>)',
          'ice-blue': 'rgb(var(--ice-blue-rgb) / <alpha-value>)',
          beige: 'rgb(var(--beige-rgb) / <alpha-value>)',
          white: 'rgb(var(--white-rgb) / <alpha-value>)',
          'salmon-red': 'rgb(var(--salmon-red-rgb) / <alpha-value>)',
          'light-yellow': 'rgb(var(--light-yellow-rgb) / <alpha-value>)',
          lavender: 'rgb(var(--lavender-rgb) / <alpha-value>)',
          'blush-pink': 'rgb(var(--blush-pink-rgb) / <alpha-value>)',
          black: 'rgb(var(--black-rgb) / <alpha-value>)',
          blue: 'rgb(var(--navy-blue-rgb) / <alpha-value>)',
          orange: 'rgb(var(--salmon-red-rgb) / <alpha-value>)',
          dark: 'rgb(var(--black-rgb) / <alpha-value>)',
          light: 'rgb(var(--ice-blue-rgb) / <alpha-value>)',
          'light-blue': 'rgb(var(--ice-blue-rgb) / <alpha-value>)',
          gray: 'rgb(var(--black-rgb) / <alpha-value>)',
        }
      },
      fontFamily: {
        head: ['Avenir', 'Avenir Next', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Avenir', 'Avenir Next', 'Helvetica', 'Arial', 'sans-serif'],
        accent: ['Operatta 8', 'Georgia', 'serif'],
      },
      boxShadow: {
        'brand-blue': '0 4px 16px rgb(var(--navy-blue-rgb) / 0.3)',
        'brand-dark': '0 8px 24px rgb(var(--black-rgb) / 0.2)',
        'brand-menu': '0 8px 32px rgb(var(--navy-blue-rgb) / 0.12)',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
