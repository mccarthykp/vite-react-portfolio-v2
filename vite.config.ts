import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/home',
  server: {
    watch: {
      usePolling: true
    },
    hmr: {
      overlay: true
    }
  },
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
});
