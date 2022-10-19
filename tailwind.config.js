/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redHat: "'Red Hat Display', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
