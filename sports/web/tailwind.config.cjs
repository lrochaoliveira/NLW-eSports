/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 27.88%, #43e7ad 33.94%, #e1d55d 48.57%)',
        'game-gradient': 'linear-gradient(188deg, rgba(0, 0, 0,) 0%, rgba(0, 0, 0, 0.9) 67.88%)'     
      },
    },
  },
  plugins: [],
}
