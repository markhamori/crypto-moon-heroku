module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        basic: "#1DDFF9",
        second: "#E74DFB",
      },
      fontSize: {
        header1: "clamp(1.913rem, calc( 12px + 2.475vw ), 2.587rem)",
        header2: "clamp(1.575rem, calc( 12px + 1.800vw ), 2.025rem)",
        header3: "clamp(1.282rem, calc( 12px + 1.350vw ), 1.688rem)",
        header4: "clamp(1.125rem, calc( 12px + 0.900vw ), 1.350rem)",
        paragraph: "clamp(1.035rem, calc( 12px + 0.540vw ), 1.125rem)",
        span: "clamp(0.900rem, calc( 12px + 0.360vw ), 1.012rem)",
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
