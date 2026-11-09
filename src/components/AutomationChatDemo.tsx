import React, { useEffect, useState } from 'react';
import {
  BatteryFull,
  CalendarCheck,
  CheckCheck,
  ChevronRight,
  Mic,
  Phone,
  Plus,
  Signal,
  Video,
  Wifi,
  Zap,
} from 'lucide-react';

type Message = { from: 'customer' | 'agent'; text: string; time: string };

const MESSAGES: Message[] = [
  { from: 'customer', text: 'مرحبا، بدي موعد تنظيف أسنان بكرا بعد الظهر', time: '٢:١٤' },
  { from: 'agent', text: 'أهلًا فيك! بكرا عندنا ٣:٠٠ أو ٤:٣٠ مساءً. أي وقت بناسبك؟', time: '٢:١٤' },
  { from: 'customer', text: '٤:٣٠ تمام', time: '٢:١٥' },
  { from: 'agent', text: 'حجزتلك الموعد بكرا الساعة ٤:٣٠ ✓ وبذكّرك قبلها بساعتين على واتساب.', time: '٢:١٥' },
];

const PHONE_W = 290;
const PHONE_H = 640;

/** On wide screens, shrink the phone so the whole hero fits in the viewport height. */
const usePhoneScale = () => {
  const compute = () => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return 1;
    return Math.min(1, Math.max(0.6, (window.innerHeight - 215) / PHONE_H));
  };
  const [scale, setScale] = useState(compute);
  useEffect(() => {
    const onResize = () => setScale(compute());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return scale;
};

export const AutomationChatDemo: React.FC = () => {
  const scale = usePhoneScale();
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
    <div
      className="relative mx-auto"
      style={{ width: PHONE_W * scale, height: PHONE_H * scale }}
    >
    <div
      className="absolute left-1/2 top-0"
      style={{
        width: PHONE_W,
        height: PHONE_H,
        marginLeft: -PHONE_W / 2,
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
      }}
    >
      {/* Single soft light source behind the device */}
      <div
        className="pointer-events-none absolute -inset-x-16 -inset-y-10 -z-10 rounded-full bg-indigo-500/25 blur-3xl"
        aria-hidden="true"
      />

      {/* Floating: speed */}
      {visible >= 2 && (
        <div className="chip-in absolute left-0 top-32 z-20 hidden -translate-x-[35%] items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_20px_40px_-12px_rgba(30,27,75,0.35)] ring-1 ring-slate-200/70 sm:flex sm:-translate-x-[60%]">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
            <Zap className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="font-heading text-[13px] font-semibold text-indigo-950">ردّ خلال ثوانٍ</p>
            <p className="mt-0.5 text-[11px] text-slate-500">بدون انتظار</p>
          </div>
        </div>
      )}

      {/* Floating: outcome */}
      {booked && (
        <div className="chip-in absolute bottom-16 right-0 z-20 flex translate-x-[10%] items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_20px_40px_-12px_rgba(30,27,75,0.35)] ring-1 ring-slate-200/70 sm:translate-x-[60%]">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <CalendarCheck className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="font-heading text-[13px] font-semibold text-indigo-950">تم حجز الموعد</p>
            <p className="mt-0.5 text-[11px] text-slate-500">وفريقك ما تدخّل</p>
          </div>
        </div>
      )}

      {/* iPhone */}
      <div
        dir="ltr"
        className="relative h-[640px] rounded-[3.1rem] bg-gradient-to-b from-[#5b5b61] via-[#232327] to-[#4a4a50] p-[2.5px] shadow-[0_60px_100px_-30px_rgba(30,27,75,0.7),0_30px_60px_-20px_rgba(0,0,0,0.35)]"
        role="img"
        aria-label="مثال على محادثة واتساب يردّ فيها وكيل تمام تلقائيًا ويحجز موعدًا لعميل"
      >
        {/* Side buttons */}
        <span className="absolute -left-[3px] top-[104px] h-7 w-[3px] rounded-l-sm bg-[#3a3a40]" aria-hidden="true" />
        <span className="absolute -left-[3px] top-[160px] h-12 w-[3px] rounded-l-sm bg-[#3a3a40]" aria-hidden="true" />
        <span className="absolute -left-[3px] top-[220px] h-12 w-[3px] rounded-l-sm bg-[#3a3a40]" aria-hidden="true" />
        <span className="absolute -right-[3px] top-[180px] h-20 w-[3px] rounded-r-sm bg-[#3a3a40]" aria-hidden="true" />

        <div className="relative h-full overflow-hidden rounded-[2.95rem] bg-black p-[7px]">
          {/* Screen */}
          <div className="relative flex h-full flex-col overflow-hidden rounded-[2.4rem] bg-[#0B141A]">
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-2.5 z-30 flex h-[26px] w-[88px] -translate-x-1/2 items-center justify-end rounded-full bg-black pe-2.5">
              <span className="h-2 w-2 rounded-full bg-[#10131c] ring-1 ring-[#1d2230]" />
            </div>

            {/* Status bar + header */}
            <div className="bg-[#1F2C34] px-5 pb-2.5 pt-3">
              <div className="flex h-[26px] items-center justify-between text-white">
                <span className="text-[13px] font-semibold tabular-nums">2:14</span>
                <span className="flex items-center gap-1">
                  <Signal className="h-3.5 w-3.5" />
                  <Wifi className="h-3.5 w-3.5" />
                  <BatteryFull className="h-4 w-4" />
                </span>
              </div>

              <div dir="rtl" className="mt-2 flex items-center gap-2.5">
                <ChevronRight className="h-5 w-5 text-white/80" />
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 font-heading text-sm font-semibold text-white">
                  ع
                </span>
                <div className="flex-1 leading-tight">
                  <p className="font-heading text-[14px] font-semibold text-white">عيادة الشفاء</p>
                  <p className="mt-0.5 text-[11px] text-emerald-400">متصل الآن</p>
                </div>
                <Video className="h-[18px] w-[18px] text-white/75" />
                <Phone className="h-[17px] w-[17px] text-white/75" />
              </div>
            </div>

            {/* Messages */}
            <div
              dir="rtl"
              aria-hidden="true"
              className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden px-3 py-3"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
                backgroundSize: '14px 14px',
              }}
            >
              <p className="mx-auto mb-1 rounded-lg bg-[#182229] px-3 py-1 text-[10.5px] text-white/55">اليوم</p>

              {MESSAGES.slice(0, visible).map((m, i) => {
                const isFirstAgent = m.from === 'agent' && MESSAGES.findIndex((x) => x.from === 'agent') === i;
                return (
                  <div
                    key={i}
                    className={`chat-bubble max-w-[82%] rounded-xl px-3 pb-1.5 pt-1.5 text-[13px] leading-[1.55rem] text-white ${
                      m.from === 'customer'
                        ? 'self-start rounded-ss-sm bg-[#005C4B]'
                        : 'self-end rounded-se-sm bg-[#202C33]'
                    }`}
                  >
                    {isFirstAgent && (
                      <p className="mb-0.5 flex items-center gap-1 text-[10.5px] font-semibold text-indigo-300">
                        <Zap className="h-3 w-3" />
                        رد تلقائي من TAMAM
                      </p>
                    )}
                    {m.text}
                    <span className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-white/50">
                      {m.time}
                      {m.from === 'customer' && <CheckCheck className="h-3.5 w-3.5 text-sky-400" />}
                    </span>
                  </div>
                );
              })}

              {typing && (
                <div className="chat-bubble self-end rounded-xl rounded-se-sm bg-[#202C33] px-3.5 py-3">
                  <span className="flex items-center gap-1.5">
                    <span className="typing-dot" />
                    <span className="typing-dot" style={{ animationDelay: '150ms' }} />
                    <span className="typing-dot" style={{ animationDelay: '300ms' }} />
                  </span>
                </div>
              )}
            </div>

            {/* Input bar */}
            <div dir="rtl" className="flex items-center gap-2 bg-[#0B141A] px-3 pb-6 pt-2">
              <Plus className="h-5 w-5 text-white/60" />
              <span className="flex-1 rounded-full bg-[#1F2C34] px-4 py-2 text-[13px] text-white/40">رسالة</span>
              <Mic className="h-5 w-5 text-white/60" />
            </div>

            {/* Home indicator */}
            <span className="absolute bottom-2 left-1/2 h-1 w-[104px] -translate-x-1/2 rounded-full bg-white/80" />

            {/* Glass reflection */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
