/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#0B0D10",
        charcoal: {
          DEFAULT: "#15191E",
          deep: "#0F1216",
          surface: "#1C2229",
          elevated: "#242C35",
          border: "#2F3844",
        },
        racing: {
          red: "#E53935",
          redDark: "#B71C1C",
          redGlow: "rgba(229, 57, 53, 0.25)",
          amber: "#FFB300",
          green: "#00E676",
          greenMuted: "#A8D5B0",
        },
        warm: {
          white: "#F3F1EB",
          muted: "#D6D3CC",
        },
        silver: {
          DEFAULT: "#858C95",
          light: "#A4ACB5",
          dark: "#545A63",
        },
      },
      fontFamily: {
        display: ["Syne", "Space Grotesk", "sans-serif"],
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "Consolas", "monospace"],
      },
      backgroundImage: {
        'circuit-grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
        'telemetry-scan': 'linear-gradient(180deg, transparent 0%, rgba(229,57,53,0.08) 50%, transparent 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'telemetry-scan': 'scan 6s ease-in-out infinite',
        'apex-glow': 'apexGlow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
        },
        apexGlow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 4px rgba(229, 57, 53, 0.4))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 16px rgba(229, 57, 53, 0.8))' },
        },
      },
    },
  },
  plugins: [],
}
