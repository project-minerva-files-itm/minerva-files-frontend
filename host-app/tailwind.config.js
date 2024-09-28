/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    // Tus rutas de archivos
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px', // Ejemplo de breakpoint personalizado
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const myUtilities = {
        ".app-bg-blue": { background: "#008dcc" },
        ".h-100": { height: "30rem" },

      };
      addUtilities(myUtilities);
    }),
  ],
}

