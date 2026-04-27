import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://shauryagautam.github.io', // Replace with your actual domain
  base: '/', // Replace with your repo name if using project pages (e.g., '/portfolio/')
  integrations: [react()],
  vite: {
    plugins: [tailwind()],
  },
  output: 'static',
  build: {
    format: 'file',
  }
});