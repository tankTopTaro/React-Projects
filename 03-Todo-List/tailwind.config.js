/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
        animation: {
          'spin-slow': 'spin 5s linear infinite',
      },
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


