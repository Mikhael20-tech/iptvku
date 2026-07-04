import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['shaka-player'],
    exclude: [],
  },
  build: {
    commonjsOptions: {
      include: [/shaka-player/, /node_modules/],
    },
  },
})
