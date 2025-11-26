import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],

  server: {
    proxy: {
      "/api": {
        target: "http://142.93.183.201:8001",
        changeOrigin: true,
      },
    },
  },
});
