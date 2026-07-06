import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://permutalibrecol.github.io/AMCA/',
  base: '/AMCA/',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
