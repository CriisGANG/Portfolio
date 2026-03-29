import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Cambia '/Portfolio/' si tu repositorio de GitHub Pages tiene otro nombre.
const repoBase = '/Portfolio/'

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === 'production' ? repoBase : '/',
}))
