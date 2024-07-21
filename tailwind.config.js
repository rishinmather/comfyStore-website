/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-oyster": {
          50: "#f5f5f1",
          100: "#e6e4db",
          200: "#cecbba",
          300: "#b2ab92",
          400: "#998e6f",
          500: "#8d8165",
          600: "#796b55",
          700: "#625446",
          800: "#54493f",
          900: "#4a4039",
          950: "#29221f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["retro", "coffee"],
  },
};
