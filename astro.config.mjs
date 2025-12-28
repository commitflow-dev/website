import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://commitflow.dev',
  integrations: [
    react(),
    mdx(),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    splitting: true,
  },
  vite: {
    plugins: [tailwind()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            utils: ['./src/lib/utils.ts'],
          },
        },
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
    },
  },
});