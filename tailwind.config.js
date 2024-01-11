/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9FAFB",
        "secondary-background": "#F3F4F6",
        gray: "#d1d5db",
        white: "#fff",
        black: "#111928",
        "gray-2": "#E5E7EB",
        placeholder: "#9CA3AF",
        orange: "#FF5A1F",
      },
    },
    fontFamily: {
      sans: ["Inter var"],
    },
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
  },
  plugins: [],
};
