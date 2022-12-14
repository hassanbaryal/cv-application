/** @type {import('tailwindcss').Config} */
module.exports = {
  mod: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
