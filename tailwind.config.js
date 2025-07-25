const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * TailwindCSS configuration for LLM London.
 *
 * The palette here is inspired by the provided logo and banner.  A deep
 * navy blue is used for primary accents, a warm gold for highlights, and
 * an off‑white base for backgrounds.  You can tweak these values if you
 * find better matches using a colour picker.
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a2740', // dark navy blue
        accent: '#c89a5b', // warm gold tone
        background: '#f9f8f6', // very light beige
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};