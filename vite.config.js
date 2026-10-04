import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { sitePlugin } from './scripts/vite-site-plugin.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sitePlugin()],
  build: {
    rollupOptions: {
      // /card is a separate page (not a client-side route) so it gets its own
      // Open Graph tags, which WhatsApp/Facebook read without running JS.
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        card: resolve(import.meta.dirname, 'card/index.html'),
      },
      output: {
        // React is shared by both pages; give it its own cacheable chunk so the
        // card page doesn't also pull in the main site's libraries (AOS, icons)
        manualChunks: (id) =>
          /node_modules\/(react|react-dom|scheduler)\//.test(id) ? 'react' : undefined,
      },
    },
  },
})
