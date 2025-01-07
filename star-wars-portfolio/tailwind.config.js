/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        neonCyan: '#00FFFF',
        neonRed: '#FF3131',
        neonBlue: '#001f54',
      },
    },
  },
  plugins: [],
};

