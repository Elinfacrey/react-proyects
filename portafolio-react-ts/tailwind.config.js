/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'aboutMeBgImage': "url('./public/img/fp4.jpg')",

      },
      colors: {
        "bgLandingColor": "rgb(15 23 42/var(--tw-bg-opacity))"
      }
    },
  },
  plugins: [],
}

