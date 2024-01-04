module.exports = {
  darkMode: 'media', // 'media' or 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  options: {
    // https://purgecss.com/safelisting.html#patterns
    safelist: {
      standard: [/^bg-/, /^text-/],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}