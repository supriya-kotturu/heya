const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0B132B",
        secondary: "#6FFFE9",
        "dark-001": "#0B132B",
        "dark-002": "#1C2541",
        "medium-001": "#3A506B",
        "color-001": "#5BC0BE",
        "color-002": "#6FFFE9",
        "white-001": "#d8def0",
        "white-002": "#e9ebf0",
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["@tailwindcss/forms", "@tailwindcss/line-clamp"],
};
