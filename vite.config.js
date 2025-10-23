// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        // Main page
        main: resolve(__dirname, 'index.html'),

        // All Pages here
        'pages/2D-Graph': resolve(__dirname, 'src/pages/2D-Graph.html'),
        'pages/3D-Graph': resolve(__dirname, 'src/pages/3D-Graph.html'),
        'pages/about': resolve(__dirname, 'src/pages/about.html'),
        'pages/calculator': resolve(__dirname, 'src/pages/calculator.html'),
        'pages/contact': resolve(__dirname, 'src/pages/contact.html'),
        'pages/getstarted': resolve(__dirname, 'src/pages/getstarted.html'),
      }
    }
  }
});