// tailwind.config.ts
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
        "brand-green": "#22C55E", // Verde para CTAs de compra
        "brand-green-dark": "#16A34A", // Hover
        "brand-blue": "#0072E3",
        "brand-orange": "#F97316", // Naranja vibrante para el banner
        "brand-red": "#EF4444", // Rojo para el gradiente del banner
        "brand-text-dark": "#1F2937", // Gris un poco más oscuro
        "brand-text-light": "#4B5563",
        "brand-bg-light": "#F9FAFB",
        "brand-bg-white": "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-roboto-condensed)", "sans-serif"],
      },
      animation: {
        "gradient-x": "gradient-x 5s ease infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "left center" },
          "50%": { backgroundPosition: "right center" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
