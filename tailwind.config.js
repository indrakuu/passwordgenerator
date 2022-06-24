module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  daisyui: {
    themes: ["light", "synthwave"],
  },
  plugins: [
    require("daisyui")
  ],
}
