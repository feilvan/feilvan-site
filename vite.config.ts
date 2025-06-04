import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import unocss from "unocss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [unocss(), preact()],
  resolve: {
    alias: {
      "react-reconciler": "preact-reconciler",
    },
  },
  optimizeDeps: {
    exclude: ["react-reconciler"],
  },
});
