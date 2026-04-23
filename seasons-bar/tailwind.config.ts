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
        night: "#07070e",
        "night-2": "#0d0d1a",
        "night-3": "#141428",
        gold: "#c9a96e",
        "gold-hover": "#e0c285",
        champagne: "#e8d5a3",
        ivory: "#f5f0e8",
        muted: "#7a7468",
        sage: "#7a9b80",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.5em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.1, 0, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
