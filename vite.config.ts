import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import VitePluginReactRemoveAttributes from 'vite-plugin-react-remove-attributes';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: [
          '@babel/preset-typescript',
          '@babel/preset-react',
        ],
      },
    }),
    VitePluginReactRemoveAttributes({
      attributes: ['data-testid'],
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
    sourcemap: true,
  },
});
