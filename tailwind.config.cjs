/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-1": "#49d667",
        "green-2": "#3fb85a",
        "green-3": "#4fe36f", // hover
        "white-1": "#fffff1",
        "gray-1": "#b3b3b3", // subtext
        "gray-2": "#222222", // header
        "gray-3": "#181818", // table header
        "gray-4": "#251b1c", // background
        "gray-5": "#2b292a", // playlist
        "gray-6": "#4a4545", // playlist hover
        "gray-7": "rgba(74, 69, 69, 0.8)" // playlist hover, opacity
      }
    }
  },
  plugins: []
};
