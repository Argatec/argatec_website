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
        'macbook': "url('/images/hero/macbook.png')",
        'redes': "url('/images/hero/redes.png')",
        'seguridad': "url('/images/hero/seguridad.png')",

      },
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors:{
        argold: '#B8A150',
        argray: '#252525'
      }
    }
  },
  plugins: []
};