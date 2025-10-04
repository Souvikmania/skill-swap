/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          400: '#FF8B7B',
          500: '#FF6B5B',
          600: '#FF4B3B'
        }
      }
    },
  },
  plugins: [],
};
