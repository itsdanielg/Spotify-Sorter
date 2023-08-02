/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 0.5s 2.6s",
        linkFade: "fadeIn 0.25s"
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      }),
      colors: {
        green: { DEFAULT: "hsl(141, 73%, 42%)" },
        greenHover: { DEFAULT: "hsl(141, 73%, 62%)" },
        grayBackground: "#222222",
        "gray-1": "#b3b3b3", // subtext
        "gray-3": "#181818", // table header
        "gray-4": "#251b1c", // background
        "gray-5": "#2b292a", // playlist
        "gray-6": "#4a4545", // playlist hover
        "gray-7": "rgba(74, 69, 69, 0.7)" // playlist hover, opacity
      }
    }
  },
  plugins: []
};
