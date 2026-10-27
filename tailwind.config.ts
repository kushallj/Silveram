import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: {
          DEFAULT: "#200D0B",
          secondary: "#351713",
          surface: "#4A211A",
        },
        ivory: {
          DEFAULT: "#F5E9D5",
          card: "#F5E9D5",
          muted: "#C6B1A2",
          dark: "#200D0B",
        },
        terracotta: {
          DEFAULT: "#A94E38",
          light: "#B85A41",
          dark: "#8A3D2C",
        },
        copper: {
          DEFAULT: "#C17C5A",
          dark: "#6B3A2A",
          deep: "#3A1B14",
        },
        gold: {
          DEFAULT: "#C7A15C",
          light: "#DFC38A",
          muted: "rgba(199, 161, 92, 0.4)",
        },
      },
      borderColor: {
        subtle: "rgba(245, 233, 213, 0.14)",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        emphasis: ["'Cormorant Garamond'", "Georgia", "serif"],
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        glow: "0 0 25px rgba(199, 161, 92, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
