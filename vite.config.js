import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["three"], // Tell Vite to optimize the "three" package
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    // watch: {
    //   usePolling: true,
    // },
  },
});
