import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#5A3964",
          secondary: "#7B5285",
          accent: "#E8D5E8",
          light: "#F8F4F9",
        },
        text: {
          primary: "#2D2D2D",
          secondary: "#666666",
        },
      },
      fontFamily: {
        logo: ["Allura", "cursive"],
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};

export default config;
