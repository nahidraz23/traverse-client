/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary-color" : '#FFDA32',
        "black" : '#030712',
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
