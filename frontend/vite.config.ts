import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Explicitly enable Fast Refresh
      fastRefresh: true,
    }), 
    svgr()
  ],
  server: {
    // Force enable HMR
    hmr: true,
    // Add watch options to handle WSL2
    watch: {
      usePolling: true,
      interval: 100
    }
  }
})
