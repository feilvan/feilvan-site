module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
        space_grotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-children'),
  ]
};
