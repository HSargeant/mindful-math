module.exports = {
    content: ["./views/**/*.{ejs,js}"],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
  }
  // npx tailwindcss -i ./public/css/tail.css -o ./public/css/output.css --watch