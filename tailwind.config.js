/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    screens: {
      tablet: "896px",
      desktop: "1152px",
    },
    extend: {
      colors: {
        primary: "#0F041C",
        white__text: "#fff",
        secondary: "#009379",
      },
      container: {
        center: true,
        width: "1408px",
        padding:{
          DEFAULT: "1rem",
        },
        screens:{
          DEFAULT: "100%;",
          tablet: "896px",
          desktop: "1150px",
        },
      },
      boxShadow: {
        "custom-shadow": "34.85px 29.63px 48.34px 0px #3366ff0d",
      },
    },
  },
  plugins: [],
};
