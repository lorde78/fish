/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Adjusted to include TypeScript files if you're using TypeScript
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}