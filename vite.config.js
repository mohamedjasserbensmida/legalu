import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Assurez-vous que le chemin de base est correct
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
      chunkSizeWarningLimit: 1000, // Ajustez la limite de taille des chunks
    },
  },
});
