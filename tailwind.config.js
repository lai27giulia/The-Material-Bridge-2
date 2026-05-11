/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brutalist: {
          steel: "#71717A",
          black: "#000000",
          dirty: "#F4F4F5",
          safety: "#F97316",
        },
      },
      fontFamily: {
        mono: ["'Courier New'", "monospace"],
        sans: ["-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
      },
      borderWidth: {
        brutal: "4px",
      },
      boxShadow: {
        brutal: "4px 4px 0px rgba(0,0,0,0.25)",
        "brutal-lg": "8px 8px 0px rgba(0,0,0,0.3)",
        "brutal-inner": "inset 2px 2px 0px rgba(0,0,0,0.1)",
      },
      animation: {
        blink: "blink 0.7s infinite",
        ticker: "ticker 40s linear infinite",
        glitch: "glitch 0.3s ease-in-out",
      },
      keyframes: {
        blink: {
          "0%, 49%, 100%": { opacity: "1" },
          "50%, 99%": { opacity: "0.3" },
        },
        ticker: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
      },
    },
  },
  plugins: [],
};
