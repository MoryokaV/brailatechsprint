/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sol-blue": "#002b36",
        "sol-blue-accent": "#073642",
        "sol-grey": "#839496",
        "sol-grey-accent": "#93a1a1",
      },
    },
  },
  plugins: [],
};
