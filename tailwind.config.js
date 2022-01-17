module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      colors: {
        'body': '#333333',
        'theme': '#5AC994',
        'nav': '#000000',
        'dark-body': '#1C1C1C',
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "800px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};