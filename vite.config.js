import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served at https://guman24.github.io/remember-privacy-policy/ (GitHub
  // Pages project site) -- must match the repo name exactly. If you later
  // move this to a custom domain, change this back to '/' and add a
  // public/CNAME file with the domain.
  base: '/remember-privacy-policy/',
})
