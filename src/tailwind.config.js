/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shake: {
      '0%, 100%': { transform: 'translateX(0)' },
      '25%': { transform: 'translateX(-5px)' },
      '50%': { transform: 'translateX(5px)' },
      '75%': { transform: 'translateX(-5px)' },
    }
      },

      animation: {
        slideUp: 'slideUp 0.4s ease forwards',
        shake: 'shake 0.4s ease-in-out'
      }
    },
  },
  plugins: [],
}

