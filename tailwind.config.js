/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./node_modules/flowbite/**/*.js",
    "index.html",
    "./pages/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

