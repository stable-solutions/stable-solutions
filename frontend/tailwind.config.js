/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  // Poppins as main font
        roboto: ['Roboto', 'sans-serif'],    // Roboto as subtext font
      },
      colors: {
        'dark-blue': '#1d3b79',     // Dark Blue
        'olive-green': '#a7c500',   // Olive Green
        'purple': '#87289a',        // Purple
        'pale-blue': '#ecf9ff',     // Pale Blue
        'off-white': '#fff9f1',     // Off-white / Beige
        'pale-brown': '#736b53',    // Pale Brown
      },
    },
  },
  plugins: [],
}
