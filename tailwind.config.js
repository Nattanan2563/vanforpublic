/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    borderWidth: {
      DEFAULT: '1px',
    },
    // boxShadow: {
    //   DEFAULT: "0 0 0 .2em var(--tertiary-color)",
    // }
  },
  plugins: [],
}

