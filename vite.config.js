import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
  optimizeDeps: {
    include: ["three"], // Tell Vite to optimize the "three" package
  },
  ssr: {
    noExternal: ["react-icons", "react-ts-typewriter", "react-helmet-async"],
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    // watch: {
    //   usePolling: true,
    // },
  },
});
