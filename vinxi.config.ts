import { defineConfig } from '@tanstack/start/config'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  vite: {
    plugins: [TanStackRouterVite()],
  },
})