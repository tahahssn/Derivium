import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        // Main page
        main: resolve(__dirname, 'index.html'),

        // All Pages here
        'pages/3D-Graph': resolve(__dirname, 'src/pages/3D-Graph.html'),
        'pages/about': resolve(__dirname, 'src/pages/about.html'),
        'pages/calculator': resolve(__dirname, 'src/pages/calculator.html'),
        'pages/contact': resolve(__dirname, 'src/pages/contact.html'),
        'pages/getstarted': resolve(__dirname, 'src/pages/getstarted.html'),
        'pages/disclaimer': resolve(__dirname, 'src/pages/disclaimer.html'),
        'pages/documentation': resolve(__dirname, 'src/pages/documentation.html'),
        'pages/privacy-policy': resolve(__dirname, 'src/pages/privacy-policy.html'),
        'pages/terms-conditions': resolve(__dirname, 'src/pages/terms-conditions.html'),
        'pages/terms-of-service': resolve(__dirname, 'src/pages/terms-of-service.html'),
      }
    }
  }
});