import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx,}'],
  theme: {
    extend: {},
  },
  integrations: [tailwind()],
  output: 'server'
});