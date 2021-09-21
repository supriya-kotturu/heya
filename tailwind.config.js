const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#211A1D',
        secondary: '#8075FF',
        'white-01': '#f9f9fb',
        'dark-01': '#201f33',
        'dark-02': '#28273b',
        'color-01': '#36e3cc',
        'color-02': '#5c5cf3',
        'medium-01': '#9794e1',
        'medium-02': '#6262b0',
        'dark-001': '#0B132B',
        'dark-002': '#232e21ff',
        'dark-003': '#3C1642',
        'dark-004': '#211A1D',
        'dark-005': '#1C2541',
        'dark-006': '#2a2d43ff',
        'dark-007': 'ffa9e7ff',
        'medium-001': '#3A506B',
        'medium-002': '#414361ff',
        'medium-003': '#4d418f',
        'medium-004': '#1a097a',
        'color-001': '#5BC0BE',
        'color-002': '#6FFFE9',
        'white-001': '#d8def0',
        'white-002': '#e9ebf0',
        'white-003': '#F8F0FB',
        'blue-001': '#b8b8f3ff',
        'blue-002': '#8075FF',
        'blue-003': '#6320EE',
        'pink-001': '#ffb8deff',
        'pink-002': '#ff84e8ff',
        'pink-003': '#ff74d4ff',
        'pink-004': '#ff36abff',
        'pink-005': '#f42272ff',
        'purple-001': '#d7b8f3ff',
        'purple-002': '#7f2ccbff',
        'purple-003': '#642ca9ff',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      resize: ['hover', 'focus'],
    },
  },
  plugins: ['@tailwindcss/forms', '@tailwindcss/line-clamp'],
};
