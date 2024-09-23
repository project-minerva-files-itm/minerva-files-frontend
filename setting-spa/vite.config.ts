import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "settingspa",
      filename: "remoteEntry.js",
      exposes: {
        "./app": "./src/App",
        './pages': './src/routes/pages',
        './company': './src/Pages/Company'
      },
      shared: ["react", "react-dom"],
    })
  ],
  server: {
    port: 4000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    cors: false
    /*cors: {
      origin: 'http://localhost:5173', // Origen permitido
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }*/
  },
  build: {
    modulePreload: false,
    target: "esnext",
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
