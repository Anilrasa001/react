import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,                // Enable Jest-style globals
    environment: 'jsdom',         // DOM environment
    setupFiles: './src/tests/setup.js', // Setup file for jest-dom, etc.
  },
})
