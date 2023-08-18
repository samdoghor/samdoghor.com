/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        alfaslabone: ["Alfa Slab One", "cursive"],
        lobstertwo: ["Lobster Two", "cursive"],
        poiretone: ["Poiret One", "cursive"],
        merienda: ["Merienda", "cursive"],
        ysabeauoffice: ["Ysabeau Office", "sans-serif"],
        changa: ['Changa', 'sans-serif']
      },
    },
  },
  plugins: [],
};
