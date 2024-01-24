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
        "sol-blue": "#00252f",
        "sol-blue-accent": "#073642",
        "sol-grey-dark": "#657b83",
        "sol-grey": "#9eacad",
        "sol-grey-accent": "#EEE8D5",
        "sol-yellow": "#b58900",
        "sol-yellow-accent": "#d6a60f",
        "sol-green": "#859900",
        "sol-brred": "#cb4b16",
        "sol-bright-blue": "#268bd2",
        "sol-magenta": "#D33682",
      },
    },
  },
  plugins: [],
};
