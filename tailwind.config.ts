import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      colors: {
        "night-900": "#06070e",
        "night-800": "#0b1021",
        "night-700": "#10162a",
        "cyber-teal": "#2dd4bf",
        "cyber-blue": "#60a5fa",
        "cyber-purple": "#c084fc",
        "grid-line": "rgba(255,255,255,0.04)"
      },
      boxShadow: {
        "glow-teal": "0 0 40px rgba(45, 212, 191, 0.35)",
        "glow-purple": "0 0 40px rgba(192, 132, 252, 0.35)"
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(var(--grid-color, rgba(255,255,255,0.04)) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color, rgba(255,255,255,0.04)) 1px, transparent 1px)"
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("light", ".light &");
    })
  ]
};

export default config;
