import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFFBF3",
        ink: "#1C1C1C",
        honey: "#E8A800",
        tomato: "#C8342A",
        sand: "#F6E9CF",
        cocoa: "#5C3A22",
        sage: "#7A8C58",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(28, 28, 28, 0.12)",
        card: "0 12px 34px rgba(92, 58, 34, 0.12)",
      },
      backgroundImage: {
        "warm-radial": "radial-gradient(circle at 20% 20%, rgba(232, 168, 0, 0.24), transparent 34%), radial-gradient(circle at 85% 12%, rgba(200, 52, 42, 0.12), transparent 24%), linear-gradient(135deg, #FFFBF3 0%, #F6E9CF 100%)",
      },
    },
  },
  plugins: [forms],
};

export default config;
