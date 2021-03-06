module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
      colors: {
        darkblue: "rgb(40, 50, 70, 0.85)",
        "brand-1": "#9d46eb",
        "brand-2": "#7560da",
        "brand-3": "#00a6ff",
        "brand-4": "#527ace",
      },
      screens: {
        sm: "460px",
      },
    },
  },
  plugins: [],
  important: true,
}
