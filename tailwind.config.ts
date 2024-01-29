import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        primary: "# 5454D4",
        lite: "rgba(255, 255, 255, 0.7)",
        black: {
          full: "#0000",
          primary: "#19191B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
