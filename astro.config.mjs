import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://lenvow.com",
  output: "static",
  trailingSlash: "never",

  integrations: [tailwind(), sitemap()],

  vite: {
    plugins: [
      {
        name: "admin-route-fix",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === "/admin/") {
              req.url = "/admin/index.html";
            }
            next();
          });
        },
      },
    ],
  },
});
