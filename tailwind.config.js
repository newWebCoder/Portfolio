module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a1814",
        "ink-soft": "#6b6760",
        "ink-muted": "#a09d98",
        paper: "#F7F4EF",
        "paper-warm": "#EDE9E2",
        "paper-card": "#FDFCFA",
        accent: "#C8563A",
        "accent-lt": "#F2DDD7",
        border: "#D9D4CC",
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "Georgia", "serif"],
        sans: ['"DM Sans"', "sans-serif"],
        mono: ['"DM Mono"', "monospace"],
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};