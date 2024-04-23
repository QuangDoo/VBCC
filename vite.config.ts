import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': 'src/assets/images',
      '@icon': 'src/assets/icon',
      '@components': 'src/components'
    }
  }
})
