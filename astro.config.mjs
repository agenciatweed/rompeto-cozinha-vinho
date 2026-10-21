import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  server: { port: 4321 },
  devToolbar: { enabled: false },
  vite: { server: { watch: { usePolling: true, interval: 300 } } },
});
