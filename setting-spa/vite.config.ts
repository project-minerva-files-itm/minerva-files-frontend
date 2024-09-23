import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    open: false, // Abre automáticamente en el navegador
    proxy: {
      // Configuración de proxy si es necesario
    }
  }
})
