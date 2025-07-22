import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // <-- AÑADIR ESTA LÍNEA

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // AÑADIR TODA ESTA SECCIÓN 'resolve'
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
