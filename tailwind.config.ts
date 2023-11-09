import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          0: "#fafafa",
          100: "#e1e1e1",
          200: "#c8c8c8",
          300: "#afafaf",
          400: "#969696",
          500: "#7d7d7d",
          600: "#646464",
          700: "#4b4b4b",
          800: "#323232",
          850: "#212121",
          900: "#191919",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
