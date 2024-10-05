/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          logo: "#4B5471",
          ylogo: "#798ABC",
          blogo: "#1e3552",
          bnlogo: "#131a26",
          cylogo: "#f4d8c6",
          bblogo: "#27272a",
          bgcolor: "#111319",
          pbgcolor: "#060912",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      fontFamily: {
        braah: ["Braah One", "sans-serif"],
        caveat: ["Caveat", "cursive"],
        chakra: ["Chakra Petch", "sans-serif"],
        genos: ["Genos", "sans-serif"],
        hubballi: ["Hubballi", "cursive"],
        nova: ["Nova Mono", "monospace"],
        ubuntu: ["Ubuntu", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
        novaSquare: ["Nova Square", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        protestStrike: ["Protest Strike", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin"), require("tailwindcss-animate")],
};
