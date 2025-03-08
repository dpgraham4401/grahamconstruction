// @ts-check
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    compress(),
    react(),
  ],

  site: 'https://dev.grahamconstructionco.com',

  server: {
    port: 3000,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});