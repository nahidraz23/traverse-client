/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary-color" : '#29D9D5',
        "secondary-color": '#7BBCB0',
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
