/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '3px 4px 0px 1px #000',
        '2xl': '2px 4px 0px 1px #000',
      }
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};
