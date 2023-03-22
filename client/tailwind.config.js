module.exports = {
    content: ["./src/**/*.{jsx,js}"],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
  }
  // npx tailwindcss -i ./public/css/tail.css -o ./public/css/output.css --watch