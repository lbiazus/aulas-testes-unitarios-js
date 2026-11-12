import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'acervo-frontend',
  plugins: [react()],
  test: {
    globals: true,           // Permite usar describe, it, expect sem importar
    environment: 'jsdom',    // Simula o DOM para testes de componentes
    setupFiles: 'test/setup.js',
  },
})
