/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['serif'],
      }
    },
    fontSize: {
      mm: '12px',
      sm: '13px',
      dm: '14px',
      xm: '16px',
      lg: '20px',
    },
  },
  container: {
    width: '100%',
  },
  plugins: [],
}

