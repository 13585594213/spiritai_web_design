import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSingleFile(),
    {
      name: 'inline-assets',
      transformIndexHtml(html, { bundle }) {
        if (!bundle) return html
        // 内联 JavaScript
        const jsFiles = Object.keys(bundle).filter(key => key.endsWith('.js'))
        let jsContent = ''
        jsFiles.forEach(file => {
          if (bundle[file].type === 'chunk') {
            jsContent += bundle[file].code
          }
        })
        // 内联 CSS
        const cssFiles = Object.keys(bundle).filter(key => key.endsWith('.css'))
        let cssContent = ''
        cssFiles.forEach(file => {
          if (bundle[file].type === 'asset') {
            cssContent += bundle[file].source
          }
        })
        return html
          .replace('</head>', `<style>${cssContent}</style></head>`)
          .replace('</body>', `<script>${jsContent}</script></body>`)
      }
    }
  ],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: undefined,
      },
    },
  },
})
