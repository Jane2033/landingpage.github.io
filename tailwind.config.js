/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'Noto Sans': ['Noto Sans TC', 'sans-serif'],
      'funkydori': ['funkydori', 'sans-serif'],
      'quiche': ['quiche-sans', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: {
          350: '#B7A8D7',
        },
        pink: {
          25: '#FFF6F6',
          450: '#D47F9E',
          550: '#F14D8D',
        },
        blue: {
          150: '#D3E2F7',
        },
      },
      spacing: {
        '85vh': '85vh',
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 0.5fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      backgroundImage: {
        'circle': "url('/img/circle.svg')",
      },
      borderRadius:{
        'large': '40px',
      },
    },
  },
  plugins: [],
}
