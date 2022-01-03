const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4b5dff",
        },
      },
      fontFamily: {
        readex: ["Readex Pro", ...fontFamily.sans],
        inter: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
