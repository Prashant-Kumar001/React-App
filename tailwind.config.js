/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'rotate-slow': 'tilt 2s ease-in-out infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
      },
      colors: {
        // for dark mode
        'c-blue': '#007bff',
        'c-red': '#DC3545',
        'nav-light-gray': '#E0E0E0', // Light gray for regular nav items
        'nav-soft-blue': '#89CFF0',  // Soft blue option
        'nav-muted-yellow': '#F1C40F', // Muted yellow for hover
        'nav-cool-gray': '#B0BEC5',
        //for light mode
        'nav-dark-gray': '#333333',  // Dark gray for regular nav items
        'nav-navy-blue': '#2C3E50',  // Navy blue option
        'nav-deep-red': '#C0392B',   // Deep red option
        'nav-muted-purple': '#6C5B7B', // Muted purple option
        'nav-dark-teal': '#16A085',  // Dark teal option
      }
    },
  },
  plugins: [],
};
