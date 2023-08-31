/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '100rem',
        '9xl': '120rem',
      },
      backgroundImage: {
        'macbook': "url('/images/macbook.png')",
      },
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors:{
        argold: '#B8A150',
      }
    }
  },
  plugins: []
};