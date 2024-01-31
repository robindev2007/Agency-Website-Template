import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5454D4",
        lite: "rgba(255, 255, 255, 0.7)",
        black: {
          dark: "#000000",
          primary: "#19191B",
        },
      },
      container: {
        center: true,
        padding: "0.5rem",
        screens: {
          sm: "1240px",
        },
      },
      fontSize: {
        "4xl": " 3.31844rem",
        "2xl": "2rem",
        "2.5xl": "2.5rem",
      },
    },
    lineHeight: {
      "1.5": "1.61775rem",
      "3.5": "3.48438rem",
      "3": "2.9rem",
    },
    letterSpacing: {
      "02": "-0.02725rem",
    },
  },
  plugins: [],
};
export default config;
