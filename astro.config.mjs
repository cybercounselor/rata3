import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ratfriendly.org",
  integrations: [react(), tailwind(), alpinejs(), sitemap(), cloudflare()],
  output: 'server',
  adapter: cloudflare(),
  build: {
    
    rollupOptions: {
      external: ['@astrojs/rss']
    }
  }
});