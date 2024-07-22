import type { Config } from "tailwindcss";
import { white } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white,
      primary: {
        "500": "#E74694",
        "600": "#B93876",
        "900": "#45152C",
      },
      green: { "400": "#31C48D", "500": "#0E9F6E" },
      red: { "500": "#F05252" },
      gray: {
        "300": "#898587",
        "400": "#4F494C",
        "500": "#2F2C2D",
        "600": "#252223",
        "800": "#151314",
        "900": "#100E0F",
      },
    },
  },
  plugins: [],
};
export default config;
