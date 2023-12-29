/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        coal: "#151515",
        neon: "#4EE1A0",
        gray: "#d9d9d9",
        dark_gray: "#242424",
      },
    },
  },
  plugins: [],
};
