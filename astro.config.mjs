import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://photofirm.com',
  output: 'static',
  trailingSlash: 'never',

  // ===================================================================
  // === FIX: Add this redirects block to force the admin route     ===
  // This tells the dev server: "When a request for /admin comes in,
  // serve the file /admin/index.html instead of trying to find a page."
  // ===================================================================
  redirects: {
    '/admin': '/admin/index.html'
  },

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  vite: {
    build: {
      rollupOptions: {
        external: ['sharp']
      }
    },
    ssr: {
      external: ['sharp']
    }
  },
  image: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'res.cloudinary.com',
    }],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});