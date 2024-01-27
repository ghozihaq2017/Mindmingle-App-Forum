/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('../assets/image/pattern2.png')",
      },
      boxShadow: {
        '3xl': '0 0 15px 7px rgba(0, 0, 0, 0.25)',
        card: '3px 3px 5px 0 rgba(0, 0, 0, 0.25)',
        nav: '0 0 4px 3px rgba(0, 0, 0, 0.25)',
        button: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
    },
    colors: {
      primary: '#3295EB',
      secondary: '#D9D9D9',
      black: '#000',
      white: '#fff',
      oldPrimary: '#1C6CA7',
      gold: '#FFD700',
      silver: '#C0C0C0',
      bronze: '#BF8970',
    },
    fontFamily: {
      jkt: ['Plus Jakarta Sans', 'sans-serif'],
      ysv: ['Yeseva One', 'cursive'],
    },
  },
  plugins: [],
};
