/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sol-dark-blue": "#001b21",
        "sol-blue": "#002b36",
        "sol-blue-accent": "#073642",
        "sol-grey": "#839496",
        "sol-grey-accent": "#93a1a1",
        "sol-yellow": "#b58900",
        "sol-green": "#859900",
      },
    },
  },
  plugins: [],
};
