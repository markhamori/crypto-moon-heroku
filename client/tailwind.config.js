module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        basic: "#1DDFF9",
        second: "#E74DFB",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
