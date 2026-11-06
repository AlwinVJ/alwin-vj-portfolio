import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Ensures GitHub Pages static compatibility:
 * 1. Copies dist/index.html to dist/404.html so client-side navigation and reloads work without 404s.
 * 2. Ensures dist/.nojekyll exists to bypass Jekyll processing on GitHub Pages.
 */
function githubPagesHelper(): Plugin {
  return {
    name: 'github-pages-helper',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      const notFoundPath = path.join(distDir, '404.html');
      const noJekyllPath = path.join(distDir, '.nojekyll');

      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
      }
      if (!fs.existsSync(noJekyllPath)) {
        fs.writeFileSync(noJekyllPath, '');
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), githubPagesHelper()],
    // Production base path defaults to /portfolio/ for GitHub Pages project sites,
    // and / for local development or custom domain deployments.
    base: env.VITE_BASE_PATH || (mode === 'production' ? '/alwin-vj-portfolio/' : '/'),
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            icons: ['lucide-react'],
          },
        },
      },
    },
  };
});
