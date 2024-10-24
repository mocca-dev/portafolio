import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import robotsTxt from 'astro-robots-txt';
import UnoCSS from '@unocss/astro';
import icon from 'astro-icon';

import solidJs from '@astrojs/solid-js';
import { remarkReadingTime } from './src/lib/ remark-reading-time.mjs';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://nicolas.xyz/',
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        'https://nicolas.xyz/sitemap-index.xml',
        'https://nicolas.xyz/sitemap-0.xml',
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    assetsInclude: '**/*.riv',
  },
});
