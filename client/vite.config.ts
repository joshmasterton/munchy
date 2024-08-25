/// <reference types='vitest'/>
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9000
  },
  test: {
    globals: true,
    setupFiles: './vitest.config.ts',
    environment: 'jsdom'
  }
});
