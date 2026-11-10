import { WHATSAPP_NUMBER } from '../config';

export type DemoId = 'salon' | 'restaurant' | 'dental';

/** Accepts 05xxxxxxxx, +9665xxxxxxxx, 009665xxxxxxxx, or any international digits. */
export function normalizePhone(input: string): string {
  let d = (input || '').replace(/[^\d]/g, '');
  if (!d) return '';
  if (d.startsWith('00')) d = d.slice(2);
  if (/^05\d{8}$/.test(d)) d = '966' + d.slice(1); // Saudi local mobile
  return d;
}

export interface DemoParams {
  biz: string;
  wa: string;
}

export function readDemoParams(defaultBiz: string): DemoParams {
  const q = new URLSearchParams(window.location.search);
  const biz = (q.get('biz') || '').trim().slice(0, 60);
  const wa = normalizePhone(q.get('wa') || '');
  return { biz: biz || defaultBiz, wa: wa || WHATSAPP_NUMBER };
}

export function waTo(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildDemoUrl(id: DemoId, biz: string, wa: string): string {
  const url = new URL(`/${id}`, window.location.origin);
  if (biz.trim()) url.searchParams.set('biz', biz.trim());
  const phone = normalizePhone(wa);
  if (phone) url.searchParams.set('wa', phone);
  return url.toString();
}

export function setNoIndex() {
  let m = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
  if (!m) {
    m = document.createElement('meta');
    m.name = 'robots';
    document.head.appendChild(m);
  }
  m.content = 'noindex, nofollow';
}
