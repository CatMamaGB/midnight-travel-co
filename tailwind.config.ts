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
        midnight: "#0B132B",
        gold: "#FFD166",
        royal: "#26547C",
        accent: "#EF476F",
        charcoal: "#1F1F1F",
        cloud: "#F7F7F7",
        silver: "#BFC0C0",
      },
    },
  },
  plugins: [],
};

export default config;
