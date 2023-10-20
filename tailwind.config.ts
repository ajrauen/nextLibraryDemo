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
        "tan-brown": "#F4F2E9",
        "tan-dark-brown": "#D4D1BB",
        "idx-discover-begin-gradient": "#C3C0AB",
        "idx-discover-end-gradient": "#E1DDC7",
        white: "#FFFFFF",
        "off-white": "rgba(255,255,255,0)",
      },
      spacing: {
        "25%": "25%",
      },
      fontFamily: {
        copern: ["Copernicus", "Libre Baskerville", "Georgia", "serif"],
      },
      minWidth: {
        pageWidth: "126rem",
      },
    },
  },
  plugins: [],
};
export default config;
