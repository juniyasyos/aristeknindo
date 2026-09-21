/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#0B0F17",
          alt: "#111724",
          card: "#161F30",
          hover: "#1D283D",
        },
        brand: {
          red: "#DC2626",
          hover: "#B91C1C",
          light: "#EF4444",
          dark: "#0F1115",
          glow: "rgba(220, 38, 38, 0.25)",
        },
        slate: {
          text: "#F8FAFC",
          muted: "#94A3B8",
          subtle: "#64748B",
          border: "#1E293B",
          active: "#334155",
        },
        tech: {
          cyan: "#0284C7",
          whatsapp: "#22C55E",
          amber: "#F59E0B",
        }
      },
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "wa-glow": "waGlow 2.5s ease-out infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.75 },
        },
        waGlow: {
          "0%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.5)" },
          "70%": { boxShadow: "0 0 0 14px rgba(34, 197, 94, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0)" },
        }
      }
    },
  },
  plugins: [],
}
