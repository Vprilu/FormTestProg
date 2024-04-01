/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      mont: ['Montserrat', 'system-ui'],
    },
    extend: {
      colors: {
        c_black: '#222831',
        c_blackLite: '#393E46',
        c_blue: '#00ADB5',
        c_white: '#EEEEEE',
      },
    },
  },
  plugins: [],
}

