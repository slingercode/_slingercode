import { defineConfig } from "astro/config";

export default defineConfig({
  prefetch: {
    defaultStrategy: "viewport",
  },
  server: {
    port: 3000,
  },
  devToolbar: {
    enabled: false,
  },
});
