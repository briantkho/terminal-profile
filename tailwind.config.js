/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        idleMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(.5rem)' },
        },
      },
      animation: { idle: 'idleMove 3s ease-in-out infinite alternate' },
    },
    colors: {
      transparent: 'transparent',
      red: '#FF3B30',
      yellow: '#FFCC00',
      green: '#28CD41',
      lightBlue: '#3D84B8',
      darkBlue: '#344FA1',
      gray: '#D9D9D9',
      bgBlack: '#00000060',
      white: 'FFFFFF',
    },
  },
  plugins: [],
};
