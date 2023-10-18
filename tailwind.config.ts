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
        "light-brown": "#B3978B",
        "dark-brown": "#614233",
      },
      spacing: {
        "25%": "25%",
      },
    },
  },
  plugins: [],
};
export default config;
