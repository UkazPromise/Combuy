/** @type {import('tailwindcss').Config} */
export const content = [];
export const theme = {
  colors: {
    primary: "#ff0000",
    secondary: "mediumseagreen",
    blue: '#1fb6ff',
    purple: '#7e5bef',
    pink: '#ff49db',
    orange: '#ff7849',
    green: '#13ce66',
    yellow: '#ffc82c',
    graydark: '#273444',
    gray: '#8492a6',
    graylight: '#d3dce6',
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  textColor: {
    black: "#000000",
  },
  extend: {
    spacing: {
      '8xl': '96rem',
      '9xl': '128rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
    objectFit: ['hover', 'focus'],
  },
};
