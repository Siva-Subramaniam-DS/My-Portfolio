import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Security: Don't expose source maps in production
        sourcemap: false,
      }
    }
  },
  define: {
    // Security: Remove console logs in production
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
  }
})
