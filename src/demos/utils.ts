/** Accepts 05xxxxxxxx, +9665xxxxxxxx, 009665xxxxxxxx, or any international digits. */
export function normalizePhone(input: string): string {
  let d = (input || '').replace(/[^\d]/g, '');
  if (!d) return '';
  if (d.startsWith('00')) d = d.slice(2);
  if (/^05\d{8}$/.test(d)) d = '966' + d.slice(1); // Saudi local mobile
  return d;
}

export function waTo(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
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
