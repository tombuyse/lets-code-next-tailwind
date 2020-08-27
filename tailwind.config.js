const { colors, fontSize } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    typography: {
      default: {
        css: {
          color: colors.gray[400],
          h1: {
            color: colors.gray[300],
            fontSize: fontSize["5xl"],
          },
          a: {
            color: "#3182ce",
            "&:hover": {
              color: "#2c5282",
            },
          },
        },
      },
    },
    extend: {
      colors: {
        background: {
          100: "#f1fdf4",
          200: "#cdf8d8",
          300: "#a5f3b8",
          400: "#81ee9c",
          500: "#58e97d",
          600: "#1ee14f",
          700: "#16a73a",
          800: "#0e6824",
          900: "#062d10",
        },
        secondary: {
          100: "#fdf4f2",
          200: "#f4cdc2",
          300: "#eca693",
          400: "#e48368",
          500: "#db5c38",
          600: "#ba4221",
          700: "#8a3119",
          800: "#5b2010",
          900: "#2b0f08",
        },
      },
      fontFamily: {
        titleFont: ["Marck Script", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
