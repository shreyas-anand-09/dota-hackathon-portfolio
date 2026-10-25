/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#080A0E",
        navy: {
          deep: "#050811",
          DEFAULT: "#0A0F1D",
          surface: "#0F172A",
          elevated: "#1E293B",
          border: "#334155",
        },
        charcoal: {
          DEFAULT: "#12161C",
          deep: "#0A0D11",
          surface: "#181D24",
          elevated: "#222933",
          border: "#2A3340",
        },
        racing: {
          red: "#E10600",
          redDark: "#A80000",
          redGlow: "rgba(225, 6, 0, 0.25)",
          amber: "#FF9800",
          green: "#00E676",
          greenMuted: "#059669",
        },
        electric: {
          blue: "#2563EB",
          sky: "#38BDF8",
          cyan: "#06B6D4",
          indigo: "#4F46E5",
        },
        vivid: {
          purple: "#7C3AED",
          violet: "#8B5CF6",
          fuchsia: "#C026D3",
        },
        warm: {
          white: "#F8FAFC",
          muted: "#CBD5E1",
        },
        silver: {
          DEFAULT: "#94A3B8",
          light: "#CBD5E1",
          dark: "#64748B",
        },
      },
      fontFamily: {
        display: ["Syne", "Space Grotesk", "sans-serif"],
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "Consolas", "monospace"],
      },
      backgroundImage: {
        'circuit-grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
        'hero-mesh': 'radial-gradient(ellipse at top, rgba(37,99,235,0.15), transparent 70%), radial-gradient(ellipse at bottom right, rgba(124,58,237,0.12), transparent 60%)',
        'f1-mesh': 'radial-gradient(circle at 80% 20%, rgba(225,6,0,0.14), transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,152,0,0.06), transparent 50%)',
        'garage-mesh': 'radial-gradient(ellipse at 30% 20%, rgba(6,182,212,0.12), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(37,99,235,0.10), transparent 55%)',
        'achieve-mesh': 'radial-gradient(circle at 20% 30%, rgba(245,158,11,0.14), transparent 50%), radial-gradient(circle at 80% 70%, rgba(6,182,212,0.10), transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
