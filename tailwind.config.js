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
        darkblue: "#283246",
        "brand-1": "#AB3CF1",
        "brand-2": "#9378ff",
        "brand-3": "#00a6ff",
        "brand-4": "#6E46B5",
        "brand-5": "#ff36ff",
      },
    },
  },
  plugins: [],
}
