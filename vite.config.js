import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Weather_App/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://api.openweathermap.org/data/2.5/weather", // The base URL of your HTTP API
        changeOrigin: true,
        secure: false, // Set to false if the target is an HTTP endpoint
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
