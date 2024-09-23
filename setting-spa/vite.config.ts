import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    federation({
      name: "setting-components",
      filename: "remoteEntry.js",
      exposes: {
        "./List": "./src/components/List.jsx",
        "./Input": "./src/components/Input.jsx",
      },
      shared: ["react"],
    }),
  ],
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
