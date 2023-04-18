import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

import { dependencies } from './package.json';

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  build: {
    lib: {
      entry: path.join(path.resolve(), 'src/lib.ts'),
      name: 'react-payments',
      formats: ['es', 'cjs'],
      fileName: 'react-payments'
    },
    rollupOptions: {
      external: [...Object.keys(dependencies || {})],
    },
    target: 'esnext',
  }
});
