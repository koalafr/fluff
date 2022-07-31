/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      textColor: {
        me: {
          primary: "var(--color-primary)",
          accent: "var(--color-accent)",
          base: "var(--color-base)",
          light: "var(--color-light)",
          inverted: "var(--color-inverted)",
          secondary: "var(--color-secondary)",
        },
      },
      backgroundColor: {
        me: {
          primary: "var(--color-primary)",
          accent: "var(--color-accent)",
          base: "var(--color-base)",
          light: "var(--color-light)",
          inverted: "var(--color-inverted)",
          secondary: "var(--color-secondary)",
        },
      },
      borderColor: {
        me: {
          primary: "var(--color-primary)",
          accent: "var(--color-accent)",
          base: "var(--color-base)",
          light: "var(--color-light)",
          inverted: "var(--color-inverted)",
          secondary: "var(--color-secondary)",
        },
      },
      boxShadowColor: {
        me: {
          primary: "var(--color-primary)",
          accent: "var(--color-accent)",
          base: "var(--color-base)",
          light: "var(--color-light)",
          inverted: "var(--color-inverted)",
          secondary: "var(--color-secondary)",
        },
      },
      fontFamily: {
        sans: "'Open Sans'",
        lora: "'Lora'",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
