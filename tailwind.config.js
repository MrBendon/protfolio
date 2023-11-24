/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    // sm: "640px",
    // md: "768px",
    // lg: "1024px",
    // xl: "1280px",
    // "2xl": "1536px",
    // "3xl": "1600px",
    // "4xl": "1960px",
    // },

    extend: {
      backgroundImage: {
        backgroundImage1: "url(./assets/images/pawel-czerwinski-uz4qt7utDD4-unsplash.jpg)",
      },
      keyframes: {
        mousescroll: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(15px)" },
        },
        showText: {
          "0%": { transform: "translateY(-3rem)", opacity: 0 },
          "50%": { transform: "translateY(-3rem)", opacity: 0 },
          "100%": { transform: "translateY(0rem)", opacity: 1 },
        },
      },
      animation: {
        mousescroll: "mousescroll 1.5s ease-in-out infinite",
        showTitle: "showText 1s ease-in-out 1",
        showDes: "showText 1.5s ease-in-out 1",
        showButton: "showText 2.25s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
