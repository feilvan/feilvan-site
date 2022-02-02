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
  variants: {
    display: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
  },
  plugins: [require("tailwindcss-children")],
};
