import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs', // output directory for production build
    assetsDir: 'assets', // assets directory
    // sourcemap: true,
  },
});