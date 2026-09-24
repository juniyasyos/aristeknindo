import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// Base path defaults to '/' for root domain / PHP server, but allows custom base or GitHub Pages
const basePath = process.env.VITE_BASE_PATH || (process.env.BUILD_FOR_GH_PAGES ? '/aristeknindo/' : '/');

export default defineConfig({
  base: basePath,
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
  }
});
