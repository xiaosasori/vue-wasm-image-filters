import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unfonts from 'unplugin-fonts/vite'
import Components from 'unplugin-vue-components/vite'

import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unfonts({
      google: {
        families: [{ name: 'Quicksand' }]
      }
    }),
    Components(),
    wasm(),
    topLevelAwait()
  ],
  optimizeDeps: {
    // exlude wasm file
    exclude: ['@silvia-odwyer/photon']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
