/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        swirl: "swirls 2s linear infinite",
      },
      keyframes: {
        swirls: {
          from: { strokeDashoffset: "0" },
          to: { strokeDashoffset: "300" },
        },
      },
    },
  },
  plugins: [],
};
