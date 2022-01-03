module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen: {
        mx: "1152px",
      },
      colors: {
        brand: {
          DEFAULT: "#4b5dff",
        },
      },
      fontFamily: {
        readex: ["ReadexPro", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
