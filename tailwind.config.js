/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Archivo, sans-serif',
        sans: 'Inter, sans-serif',
      },
      backgroundImage: {
        hero: "url('/src/assets/hero.svg')",
      },
    },
  },
  plugins: [],
}
