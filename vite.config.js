import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor_react';
            if (id.includes('framer-motion')) return 'vendor_framer';
            if (id.includes('react-icons') || id.includes('lucide-react')) return 'vendor_icons';
            if (id.includes('lodash')) return 'vendor_lodash';
            return 'vendor_misc';
          }
        }
      }
    }
  }

})

