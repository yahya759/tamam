/** Central site configuration. */
export const WHATSAPP_NUMBER = '972597741299';
export const WHATSAPP_DISPLAY = '+972 59 774 1299';

/**
 * Optional lead webhook (n8n / Make / Zapier / Supabase function).
 * Set VITE_LEAD_WEBHOOK_URL at build time. When empty, the inquiry form hands the
 * lead over to WhatsApp instead.
 */
export const LEAD_WEBHOOK_URL: string = (import.meta.env.VITE_LEAD_WEBHOOK_URL as string | undefined) ?? '';

export const waLink = (message?: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const WA_DEFAULT_MESSAGE = 'هلا تَمام، أبغى أكلمكم عن أتمتة شغلي.';
