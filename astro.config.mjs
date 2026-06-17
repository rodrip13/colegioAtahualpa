// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://colegioatahualpa.edu.uy',
  output: 'static',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
