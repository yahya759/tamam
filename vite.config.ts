import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import {NICHES, NICHE_ORDER, type NicheContent} from './src/niches';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/**
 * Fills title / description / Open Graph tags, and emits one static HTML file per niche
 * (dist/salon/index.html ...) so a link sent on WhatsApp shows that niche's preview card.
 *
 * Absolute URLs use SITE_URL, or CF_PAGES_URL on Cloudflare Pages. If neither is set the
 * paths stay relative (the site works, but social previews need an absolute URL).
 */
function nichePagesPlugin(): Plugin {
  const siteUrl = (process.env.SITE_URL || process.env.CF_PAGES_URL || '').replace(/\/$/, '');
  let template = '';
  let outDir = 'dist';

  const fill = (html: string, n: NicheContent) =>
    html
      .replaceAll('__SITE_URL__', siteUrl)
      .replaceAll('__PAGE_URL__', `${siteUrl}${n.path}`)
      .replaceAll('__OG_IMAGE__', `${siteUrl}${n.meta.ogImage}`)
      .replaceAll('__TITLE__', esc(n.meta.title))
      .replaceAll('__DESCRIPTION__', esc(n.meta.description));

  return {
    name: 'tamam-niche-pages',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        template = html;
        return fill(html, NICHES.main);
      },
    },
    closeBundle() {
      if (!template) return;
      for (const id of NICHE_ORDER) {
        const dir = path.resolve(outDir, id);
        fs.mkdirSync(dir, {recursive: true});
        fs.writeFileSync(path.join(dir, 'index.html'), fill(template, NICHES[id]));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), nichePagesPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, '.'),
    },
  },
});
