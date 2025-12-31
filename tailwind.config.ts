/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🔴 Ye sab se important hai
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      
      colors: {
        primary: '#153c58',
        gold: '#C9A24D',
        'gold-hover': '#B08A2E',
        'gold-soft': '#FFF7E0',
      },
    },
  },

  plugins: [],
};
