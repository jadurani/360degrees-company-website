import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      neutral: {
        0: "#FFFFFF",
        50: "#FAFAFA",
        100: "#F3F3F3",
        200: "#EFEFEF",
        300: "#E0E0E0",
        400: "#C0C0C0",
        500: "#A7A7A7",
        600: "#777374",
        700: "#635F60",
        800: "#444041",
        900: "#231F20",
      },
      primary: {
        50: "#E7F6E9",
        100: "#C6E8C8",
        200: "#A0D9A5",
        300: "#79CB81",
        400: "#5AC065",
        500: "#39B449",
        600: "#30A540",
        700: "#239335",
        800: "#16822A",
        900: "#006316",
      },
      accent: {
        50: "#F5E4F1",
        100: "#E5BBDE",
        200: "#D48DC9",
        300: "#C25FB3",
        400: "#B439A4",
        500: "#A50695",
        600: "#980190",
        700: "#870089",
        800: "#770082",
        900: "#5B0075",
      },
      red: "#EB5757",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      body2: "0.8rem",
      body1: "1rem",
      h6: "1rem",
      h5: "1.25rem",
      h4: "1.563rem",
      h3: "1.953rem",
      h2: "2.441rem",
      h1: "3.052rem",
    },
    extend: {
      fontFamily: {
        header: ["var(--font-montserrat)", ...fontFamily.sans],
        body: ["var(--font-kumbh-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
