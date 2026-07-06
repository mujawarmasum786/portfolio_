import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        bg2: "#0b1328",
        panel: "#0d1730",
        cyan: "#0de5ff",
        blue: "#3b82f6",
        purple: "#8b5cf6",
        dim: "#8b93a7",
        line: "rgba(139,147,167,0.18)",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        exo: ["var(--font-exo)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(13,229,255,0.4)",
        glowPurple: "0 0 24px rgba(139,92,246,0.4)",
        glowBlue: "0 0 24px rgba(59,130,246,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
