module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#f5f5f1",
        "ink-soft": "#b9b7b3",
        "ink-muted": "#85827e",
        paper: "#090909",
        "paper-warm": "#111111",
        "paper-card": "#181818",
        accent: "#e50914",
        "accent-lt": "#2a1113",
        border: "#303030",
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