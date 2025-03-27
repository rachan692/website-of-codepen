import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Export Vite configuration
export default defineConfig({
  // React plugin for Vite
  plugins: [react()],

  // Base public path
  base: '/',

  // Resolve configuration for absolute imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Build configuration
  build: {
    outDir: 'dist', // Output directory for production build
    rollupOptions: {
      output: {
        // Chunk and asset naming
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      }
    },
    
    // Minification and optimization
    minify: 'terser', // Minify using Terser
    sourcemap: false, // Set to true if you want source maps in production
  },

  // Development server configuration
  server: {
    port: 5000,  // Use port 5000 as the development server port
    open: true,  // Automatically open browser on server start
    strictPort: true,  // Exit if port is in use
  },

  // Preview configuration for testing production build locally
  preview: {
    port: 4173,  // Use port 4173 for the preview mode
    strictPort: true,  // Exit if port is in use
  }
})
