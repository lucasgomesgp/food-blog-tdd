import { defineConfig } from 'vitest/config'
import { loadEnvConfig } from '@next/env'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
loadEnvConfig(process.cwd())
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
