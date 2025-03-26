import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    
    // Minification and optimization
    minify: 'terser', // or 'esbuild'
    sourcemap: false, // Set to true if you want source maps in production
  },

  // Development server configuration
  server: {
    port: 3000, // Default development port
    open: true, // Automatically open browser on server start
    strictPort: true, // Exit if port is in use
  },

  // Preview configuration for testing production build locally
  preview: {
    port: 4173,
    strictPort: true,
  }
})