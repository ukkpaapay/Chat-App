/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rhineLabTitle1: {
          '0%,60%': {
            transform: 'translateX(50%)',
            opacity: '0'
          },

          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        rhineLabTitle2: {
          '0%,63%': {
            transform: 'translateX(50%)',
            opacity: '0',
          },

          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          }
        },
        rhineLabTitle3: {
          '0%,65%': {
            transform: 'translateX(50%)',
            opacity: '0',
          },

          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          }
        },
        slideLeftFromRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },

          '50%': {
            transform: 'translateX(100%)',
            opacity: 1,
          },

          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },

          '30%': {
            opacity: '0',
          },

          '100%': {
            opacity: '1',
          }
        },
        sideMenu: {
          '0%': {
            transform: 'rotate(-180deg) scale(0)'

          },
          '100%': {
            transform: 'rotate(0deg) scale(1)'

          }
        },
      }
    },
  },
  plugins: [],
}
