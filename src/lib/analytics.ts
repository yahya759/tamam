/**
 * Optional analytics. Nothing loads unless the matching env var is set at build time:
 *   VITE_META_PIXEL_ID  – Meta (Facebook/Instagram) Pixel
 *   VITE_GA_ID          – Google Analytics 4 measurement ID (G-XXXXXXX)
 */
type Win = Window & {
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
};

const w = (): Win => window as Win;

function loadScript(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

export function initAnalytics() {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
  const gaId = import.meta.env.VITE_GA_ID as string | undefined;

  if (pixelId) {
    const win = w();
    const queue: unknown[][] = [];
    win.fbq = (...args: unknown[]) => {
      queue.push(args);
    };
    loadScript('https://connect.facebook.net/en_US/fbevents.js');
    win.fbq('init', pixelId);
    win.fbq('track', 'PageView');
  }

  if (gaId) {
    const win = w();
    win.dataLayer = win.dataLayer || [];
    win.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      win.dataLayer!.push(arguments);
    };
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`);
    win.gtag('js', new Date());
    win.gtag('config', gaId);
  }
}

/** Track a conversion-style event. `kind: 'lead'` maps to Meta "Lead", `'contact'` to "Contact". */
export function trackEvent(name: string, kind?: 'lead' | 'contact') {
  const win = w();
  win.gtag?.('event', name);
  if (kind === 'lead') win.fbq?.('track', 'Lead');
  if (kind === 'contact') win.fbq?.('track', 'Contact');
}
