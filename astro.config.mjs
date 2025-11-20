// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), (await import('@playform/compress')).default()],

  site: 'https://dev.grahamconstructionco.com',

  server: {
    port: 3000,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
