/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#4478d1',
          500: '#3366cc',
          600: '#2a4b8d',
        },
        accent: {
          400: '#2a4b8d',
        },
        secondary: {
          300: '#72777d',
          400: '#54595d',
        },
      },
      fontFamily: {
        inter: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
