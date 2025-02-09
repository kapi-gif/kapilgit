/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'moving-border': 'borderMove 5s linear infinite',
      },
      keyframes: {
        borderMove: {
          '0%': { 
            borderTopColor: 'red',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent'
          },
          '25%': { 
            borderTopColor: 'transparent',
            borderRightColor: 'orange',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent'
          },
          '50%': { 
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'yellow',
            borderLeftColor: 'transparent'
          },
          '100%': { 
            // yha 75% percent tha 100 pecent kar diya
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'green'
          },
          '100%': { 
            borderTopColor: 'red',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent'
          },
        },
      },
    },
  },
  plugins: [],
};
