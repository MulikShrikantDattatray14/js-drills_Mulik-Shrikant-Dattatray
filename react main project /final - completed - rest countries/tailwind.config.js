/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-610": "#3f3f3f", // Use the hex value or adjust as needed
        "gray-620": "#4a4a4a",
        "gray-630": "#555555", // Add the color you want
      },
    },
  },
  plugins: [],
};
