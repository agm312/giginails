/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff0f6',
          100: '#ffe4ef',
          200: '#ffc9df',
          300: '#ffa3c7',
          400: '#ff7aaf',
          500: '#ff4d94',
          600: '#ff1a75',
          700: '#ff0066',
          800: '#cc0052',
          900: '#99003d',
        },
      },
    },
  },
  plugins: [],
} 