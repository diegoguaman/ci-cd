import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Permite usar `test`, `describe`, etc., sin importarlos
    environment: "jsdom", // Simula un navegador para pruebas de React
    setupFiles: './src/tests/setupTests.js', // Apunta al archivo de configuración
  },
})
