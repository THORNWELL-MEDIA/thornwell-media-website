import type { Config } from "tailwindcss";

/**
 * Thornwell Media - editorial design system.
 * Warm paper-cream + ink-navy + warm-gold. Newsreader serif + Inter sans.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ink-navy
        ink: "#0A1530",

        navy: {
          50: "#F5F7FB",
          100: "#E9EEF6",
          200: "#CBD6E6",
          300: "#9DAFC9",
          400: "#5E78A1",
          500: "#2C426E",
          600: "#1A2C55",
          700: "#0F1E3D",
          800: "#0B1733",
          900: "#0A1530",
          950: "#070F22",
        },

        // Warm gold scale
        gold: {
          300: "#E5CFA1",
          400: "#D9BC85",
          500: "#C9A96E",
          600: "#A8884F",
          700: "#7C6334",
        },
        // Saffron alias maps to the same warm-gold values so V2-era references render correctly.
        saffron: {
          300: "#E5CFA1",
          400: "#D9BC85",
          500: "#C9A96E",
          600: "#A8884F",
          700: "#7C6334",
        },

        // Paper / cream surfaces
        paper: {
          DEFAULT: "#F8F6F1",
          deep: "#EFEAE0",
          edge: "#E3DDD0",
        },

        graphite: "#1F2937",
        quiet: "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Newsreader", "Georgia", "Times New Roman", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        display: ["Newsreader", "Georgia", "serif"],
      },
      maxWidth: {
        prose: "68ch",
        wide: "1320px",
      },
      letterSpacing: {
        "tightest-1": "-0.02em",
        "tightest-2": "-0.035em",
        "tightest-3": "-0.05em",
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw + 1rem, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.25rem, 3.5vw + 0.5rem, 4rem)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.875rem, 2.4vw + 0.75rem, 3rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        edge: "0 1px 0 rgba(10,21,48,0.06), 0 0 0 1px rgba(10,21,48,0.04)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
};

export default config;
