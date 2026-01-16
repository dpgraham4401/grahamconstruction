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
    // @ts-expect-error - https://github.com/withastro/astro/issues/14030#issuecomment-3027129338
    plugins: [tailwindcss()],
  },
});
