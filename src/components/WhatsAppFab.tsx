import React, { useEffect, useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { waLink } from '../config';
import { getNiche } from '../niches';
import { trackEvent } from '../lib/analytics';

/** Floating WhatsApp button. Appears after the visitor scrolls past the hero. */
export const WhatsAppFab: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={waLink(getNiche().waMessage)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('whatsapp_click', 'contact')}
      aria-label="تواصل معنا عبر واتساب"
      className={`fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
};
