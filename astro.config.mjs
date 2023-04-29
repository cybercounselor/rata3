import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import vercel from '@astrojs/vercel/serverless';



// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), alpinejs(), sitemap()],
  output: 'server',
  adapter: vercel(),
  
  build: {
    rollupOptions: {
      external: ['@astrojs/rss']
    }
  },
});

