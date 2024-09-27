import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins:
    [
      react()
    ],
  resolve: {
    alias: {
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@httpclient': resolve(__dirname, 'src/services/api'),
      '@response': resolve(__dirname, 'src/services/types'),
      '@config': resolve(__dirname, 'src/config'),
    },
  },
  server: {
    port: 5173,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
})
