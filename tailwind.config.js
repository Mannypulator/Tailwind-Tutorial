/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "cover-image": "url('/build/img/contact-bg.jpeg')",
        "main-image": "url('/build/img/Bgpicture3.jpeg')",
      }),
    },
  },
  plugins: [],
};
