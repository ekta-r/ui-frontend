/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'grey': '#e3e3e5',
        },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),    
  ],
}

