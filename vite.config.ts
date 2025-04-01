import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/charmy/', // Change 'charmy' to your GitHub repo name
  root: 'src',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~@fortawesome': path.resolve(__dirname, 'node_modules/@fortawesome')
    }
  }
});
