import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

/**
 * Fills the absolute site URL into canonical / Open Graph tags.
 * Uses SITE_URL, or CF_PAGES_URL on Cloudflare Pages. If neither is set the paths stay
 * relative, which still works for the site itself (but social previews need an absolute URL).
 */
function siteUrlPlugin(): Plugin {
  const siteUrl = (process.env.SITE_URL || process.env.CF_PAGES_URL || '').replace(/\/$/, '');
  return {
    name: 'tamam-site-url',
    transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, '.'),
    },
  },
});
