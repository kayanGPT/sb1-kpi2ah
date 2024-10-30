/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#001F3F',
        secondary: '#0076CE',
        accent: '#B42C01',
      },
    },
  },
  plugins: [],
};