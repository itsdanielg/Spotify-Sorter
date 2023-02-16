/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#49d667",
        black: "#000000",
        white: "#fffff1",
        "gray-1": "#b3b3b3", // subtext
        "gray-2": "#222222", // header
        "gray-3": "#181818", // table header
        "gray-4": "#251b1c", // background
        "gray-5": "#2b292a", // playlist
        "gray-6": "#4a4545", // playlist hover
      },
    },
  },
  plugins: [],
};
