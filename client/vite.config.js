import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // /api ile başlayan istekleri Express sunucusuna yönlendir
      '/api': 'http://localhost:3000' 
    }
  }
})