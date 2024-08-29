/// <reference types='vitest'/>
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 9000
  },
  base: '/munchy',
  test: {
    globals: true,
    setupFiles: './vitest.config.ts',
    environment: 'jsdom'
  }
});
