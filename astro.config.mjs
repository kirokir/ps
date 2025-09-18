import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://photofirm.com",
  output: "static",
  trailingSlash: "never",

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],

  // ===================================================================
  // === FIX: Add advanced Vite server configuration for Codespaces  ===
  // ===================================================================
  vite: {
    server: {
      watch: {
        // Force Vite to use polling. This is less efficient but required
        // for file system event detection in some virtual environments.
        usePolling: true,
        interval: 1000, // Check for file changes every second
      },
      fs: {
        // Be less strict about file system access.
        strict: false,
      },
    },
    plugins: [
      {
        // Custom plugin to manually fix the /admin/ route.
        name: "admin-route-fix",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            // If the browser requests the admin directory...
            if (req.url === "/admin/") {
              // ...rewrite the URL to point directly to the HTML file.
              req.url = "/admin/index.html";
            }
            // Pass the request to the next handler.
            next();
          });
        },
      },
    ],
  },

  image: {
    domains: ["res.cloudinary.com"],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
