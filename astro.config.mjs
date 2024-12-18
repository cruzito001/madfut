import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@images": "/src/images",
      },
    },
    css: {
      modules: {
        generateScopedName: "[name]__[local]___[hash:base64:5]",
      },
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
});
