/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url("/images/landing-background1.jpg")',
      },
      colors: {
        'primary': '#34506B',
        'primary-light-1': '#46617d',
        'primary-light-2': '#617c99',
        'secondary': '#c59e5b',
        'third': '#e0e0e0',
      }
    },
  },
  plugins: [],
})
