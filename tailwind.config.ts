import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primaryNavy: "#13223D",
        primaryTeal: "#1F9993",
        lightTeal: "#2ABFBF",
        lightGray: "#F7F8FA",
        textGray: "#5A6B80",
        subtleGray: "#8A9DB5"
      },
      backgroundImage: {
        heroGradient:
          "radial-gradient(circle at 20% 10%, rgba(42,191,191,0.3), transparent 35%), linear-gradient(135deg, #13223D 0%, #19305A 48%, #1F9993 100%)"
      },
      boxShadow: {
        card: "0 12px 30px rgba(19, 34, 61, 0.1)"
      }
    }
  },
  plugins: []
};

export default config;
