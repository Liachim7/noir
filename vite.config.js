import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/noir/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.e2b.app'],
    proxy: {
      '/products': 'http://127.0.0.1:3000',
      '/categories': 'http://127.0.0.1:3000',
    },
  },
})
