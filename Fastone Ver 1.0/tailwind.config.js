/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Caveat: ["Caveat", "cursive"],
      Poppins: ["Poppins", "sans-serif"],
      NunitoSans: ["Nunito Sans", "sans-serif"],
    },
    colors: {
      dark: "#070918",
      dark2: "#0d112a",
      dark3: "#101431",
      gray: "#f7f0fe",
      white: "#ffffff",
      black: "#00000",
      accent: "#284be5",
      accent2: "#232a60",
      shapBg: "#eeeffa",
      shapBgDark: "#252a50",
      desc: "#a8a9c5",
      desc2: "#647c9e",
      desc3: "#2f3c5a",
      behance: "#131418",
      facebook: "#3b5999",
      twitter: "#55acee",
      linkedin: "#0077b5",
      skype: "#00aff0",
      vimeo: "#1ab7ea",
      yahoo: "#410093",
      instagram: "#e4405f",
      dribbble: "#ea4c89",
      flickr: "#ff0084",
      pinterest: "#bd081c",
      youtube: "#cd201f",
      reddit: "#ff5700",
      rss: "#f26522",
      whatsapp: "#25d366",
      medium: "#02b875",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1320px) { ... }

      // "3xl": "1610px",
      // => @media (min-width: 1610px) { ... }
    },
    extend: {
      boxShadow: {
        '3xl': '0 0 3.125remrgba(0, 0, 0, 0.13)',
      }
    },
    scrollbar: ["rounded"],
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
