module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      colors: {
        body: "#333333",
        theme: "#5AC994",
        nav: "#000000",
        "dark-body": "#1C1C1C",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "940px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    keyframes: {
      shiftup: {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-30px)" },
      },
    },
    animation: {
      "spin-slow": "spin 3s linear infinite",
      wave: "shiftup 2s infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#5AC994",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
        },
      }
    ],
  },
};
