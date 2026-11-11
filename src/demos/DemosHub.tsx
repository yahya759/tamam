import React, { useEffect, useRef, useState } from 'react';
import { Building2, Check, Copy, ExternalLink, Link2, Scale, Scissors, Send, Stethoscope, UtensilsCrossed } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { NICHES, NICHE_ORDER, type NicheId } from '../niches';
import { normalizePhone, setNoIndex, waTo } from './utils';

const ICONS: Record<string, LucideIcon> = {
  salon: Scissors,
  restaurant: UtensilsCrossed,
  dental: Stethoscope,
  lawyer: Scale,
  realestate: Building2,
};
const FRAME_W = 1280;
const FRAME_H = 800;

/** Live, scaled-down preview of a niche page. */
const PreviewFrame: React.FC<{ src: string; title: string }> = ({ src, title }) => {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    if (!box.current) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / FRAME_W));
    ro.observe(box.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={box}
      className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
      style={{ aspectRatio: `${FRAME_W} / ${FRAME_H}` }}
    >
      <iframe
        title={title}
        src={src}
        loading="lazy"
        tabIndex={-1}
        className="pointer-events-none absolute right-0 top-0 origin-top-right border-0"
        style={{ width: FRAME_W, height: FRAME_H, transform: `scale(${scale})` }}
      />
    </div>
  );
};

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  }
}

export const DemosHub: React.FC = () => {
  const [contact, setContact] = useState('');
  const [phone, setPhone] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    setNoIndex();
    document.title = 'روابط النيشات | تَمام';
  }, []);

  const flash = (key: string) => {
    setCopied(key);
    setTimeout(() => setCopied((k) => (k === key ? null : k)), 1600);
  };

  const urlFor = (id: NicheId) => new URL(NICHES[id].path, window.location.origin).toString();
  const messageFor = (id: NicheId) =>
    NICHES[id].outreach.replace('{contact}', contact.trim() || 'أستاذ').replace('{url}', urlFor(id));
  const clientPhone = normalizePhone(phone);

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="font-heading text-xl font-bold">TAMAM</span>
            <span className="text-slate-300">|</span>
            <span className="font-heading text-base font-semibold text-indigo-700">روابط النيشات</span>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">صفحة خاصة، غير ظاهرة لجوجل</span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">اختر الرابط المناسب لنيش العميل</h1>
        <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
          كل رابط هو نفس موقع تَمام الرئيسي لكن بنصوص وأمثلة تخص نشاط العميل. انسخ الرابط أو الرسالة الجاهزة وأرسلها له.
        </p>

        <section className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-2 sm:p-6">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-slate-700">اسم المسؤول للتحية (اختياري)</span>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="مثال: أبو سلمان"
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-slate-700">رقم واتساب العميل (اختياري، لزر "أرسل للعميل")</span>
            <input
              dir="ltr"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05xxxxxxxx"
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-start text-sm focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>
        </section>

        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NICHE_ORDER.map((id) => {
            const n = NICHES[id];
            const Icon = ICONS[id];
            const url = urlFor(id);
            const msg = messageFor(id);
            return (
              <article key={id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                <PreviewFrame src={n.path} title={`معاينة ${n.label}`} />

                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-heading text-lg font-bold">{n.label}</h2>
                </div>
                <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">{n.hero.line1}</p>

                <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                  <Link2 className="h-4 w-4 shrink-0 text-slate-400" />
                  <input
                    readOnly
                    dir="ltr"
                    value={url}
                    onFocus={(e) => e.currentTarget.select()}
                    className="w-full min-w-0 bg-transparent text-start text-xs text-slate-600 focus:outline-none"
                    aria-label={`رابط ${n.label}`}
                  />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={async () => {
                      if (await copyText(url)) flash(`${id}-link`);
                    }}
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  >
                    {copied === `${id}-link` ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied === `${id}-link` ? 'تم النسخ' : 'نسخ الرابط'}
                  </button>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <ExternalLink className="h-4 w-4" />
                    فتح
                  </a>
                  <button
                    type="button"
                    onClick={async () => {
                      if (await copyText(msg)) flash(`${id}-msg`);
                    }}
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    {copied === `${id}-msg` ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                    {copied === `${id}-msg` ? 'تم النسخ' : 'نسخ الرسالة'}
                  </button>
                  <a
                    href={clientPhone ? waTo(clientPhone, msg) : `https://wa.me/?text=${encodeURIComponent(msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1fbd5b]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {clientPhone ? 'أرسل للعميل' : 'شارك'}
                  </a>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
};
