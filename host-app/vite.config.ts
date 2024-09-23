import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins:
    [
      react(),
      federation({
        name: "host",
        exposes: {},
        remotes: {
          settingspa: "http://localhost:4000/dist/assets/remoteEntry.js",
        },
        shared: ["react", "react-dom"]
      })
    ],
  server: {
    port: 5173,
    proxy: {
      '/assets': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/assets/, '')
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    cors: {
      origin: 'http://localhost:4000', // Origen permitido
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
})
