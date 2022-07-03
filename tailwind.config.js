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
        heros: ["tex_gyre_herosregular", "sans-serif"],
        herosItalic: ["tex_gyre_herositalic", "sans-serif"],
        herosBold: ["tex_gyre_herosbold", "sans-serif"],
        herosBoldItalic: ["tex_gyre_herosbold_italic", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-children")],
};
