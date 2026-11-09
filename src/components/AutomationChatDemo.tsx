import React, { useEffect, useState } from 'react';
import { CalendarCheck, CheckCheck } from 'lucide-react';

type Message = { from: 'customer' | 'agent'; text: string };

const MESSAGES: Message[] = [
  { from: 'customer', text: 'مرحبا، بدي موعد تنظيف أسنان بكرا بعد الظهر' },
  { from: 'agent', text: 'أهلًا فيك! بكرا عندنا ٣:٠٠ أو ٤:٣٠ مساءً. أي وقت بناسبك؟' },
  { from: 'customer', text: '٤:٣٠ تمام' },
  { from: 'agent', text: 'حجزتلك الموعد بكرا الساعة ٤:٣٠ ✓ وبذكّرك قبلها بساعتين على واتساب.' },
];

export const AutomationChatDemo: React.FC = () => {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(MESSAGES.length);
      setBooked(true);
      return;
    }

    let cancelled = false;
    const wait = (ms: number) =>
      new Promise<boolean>((resolve) => setTimeout(() => resolve(!cancelled), ms));

    const run = async () => {
      while (!cancelled) {
        setVisible(0);
        setBooked(false);
        setTyping(false);
        if (!(await wait(1400))) return;

        for (let i = 0; i < MESSAGES.length; i++) {
          if (MESSAGES[i].from === 'agent') {
            setTyping(true);
            if (!(await wait(1300))) return;
            setTyping(false);
          } else if (!(await wait(700))) {
            return;
          }
          setVisible(i + 1);
          if (!(await wait(900))) return;
        }

        setBooked(true);
        if (!(await wait(6000))) return;
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative w-full max-w-[390px] mx-auto lg:mx-0">
      {/* Single soft light source behind the device */}
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-indigo-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="relative flex h-[460px] flex-col overflow-hidden rounded-[2rem] bg-[#1B1957] p-5 shadow-[0_50px_90px_-30px_rgba(49,46,129,0.6)] ring-1 ring-white/10"
        role="img"
        aria-label="مثال على محادثة واتساب يردّ فيها وكيل تمام تلقائيًا ويحجز موعدًا لعميل"
      >
        {/* Conversation header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-heading text-base font-semibold text-white">
              ع
              <span className="absolute -bottom-0.5 -end-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#1B1957]" />
            </span>
            <div className="leading-tight">
              <p className="font-heading text-[15px] font-semibold text-white">عيادة الشفاء</p>
              <p className="mt-0.5 text-xs text-indigo-200/70">الساعة ٢:١٤ فجرًا</p>
            </div>
          </div>
          <span className="text-xs text-indigo-200/60">واتساب</span>
        </div>

        {/* Messages */}
        <div className="flex flex-1 flex-col gap-3 pt-5" aria-hidden="true">
          {MESSAGES.slice(0, visible).map((m, i) => (
            <div
              key={i}
              className={`chat-bubble max-w-[92%] px-4 py-2.5 text-[15px] leading-7 ${
                m.from === 'customer'
                  ? 'self-start rounded-2xl rounded-ss-md bg-white/10 text-white/90'
                  : 'self-end rounded-2xl rounded-se-md bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-950/30'
              }`}
            >
              {m.text}
              {m.from === 'agent' && (
                <CheckCheck className="ms-2 inline h-3.5 w-3.5 -translate-y-px text-white/70" />
              )}
            </div>
          ))}

          {typing && (
            <div className="chat-bubble self-end rounded-2xl rounded-se-md bg-white/10 px-4 py-3.5">
              <span className="flex items-center gap-1.5">
                <span className="typing-dot" />
                <span className="typing-dot" style={{ animationDelay: '150ms' }} />
                <span className="typing-dot" style={{ animationDelay: '300ms' }} />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Outcome: appears once the booking is done */}
      {booked && (
        <div className="chip-in absolute -bottom-5 start-3 sm:-start-8 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_-12px_rgba(30,27,75,0.35)] ring-1 ring-slate-200/70">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <CalendarCheck className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="font-heading text-sm font-semibold text-indigo-950">تم حجز الموعد</p>
            <p className="mt-0.5 text-xs text-slate-500">وفريقك ما تدخّل</p>
          </div>
        </div>
      )}
    </div>
  );
};
