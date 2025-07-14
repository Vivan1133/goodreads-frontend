import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Component } from 'react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      Pages: "/src/Pages",
      Components: "/src/Components",
      Assets: "/src/Assets",
      Redux: "/src/Redux",
      Layouts: "/src/Layouts",
      Configs: "/src/Configs",
      Helpers: "/src/Helpers",
      Routes: "/src/Routes"
    }
  }
})
