import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://dragonforgenexus.xyz',
  integrations: [
    // ...
    sitemap({
      filter: (page) =>
        page !== 'https://dragonforgenexus.xyz/DragonForgeGaming' &&
        page !== 'https://dragonforgenexus.xyz/DRAGONFORGENETWORK',
    }), tailwind(), mdx()]
});