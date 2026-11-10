import React, { useEffect, useMemo } from 'react';
import { ArrowLeft, Check, CalendarCheck, Clock, MapPin } from 'lucide-react';
import '@fontsource/el-messiri/600.css';
import '@fontsource/el-messiri/700.css';
import '@fontsource/cairo/600.css';
import '@fontsource/cairo/700.css';
import '@fontsource/cairo/800.css';
import { AutomationChatDemo } from '../components/AutomationChatDemo';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { WA_DEFAULT_MESSAGE, waLink } from '../config';
import { DEMOS, fill } from './configs';
import { DemoId, readDemoParams, setNoIndex, waTo } from './utils';

export const DemoSite: React.FC<{ id: DemoId }> = ({ id }) => {
  const cfg = DEMOS[id];
  const { biz, wa } = useMemo(() => readDemoParams(cfg.hub.sampleBiz), [cfg]);
  const t = cfg.theme;
  const vars = { biz };
  const book = (service?: string) =>
    waTo(wa, service ? fill(cfg.serviceMessage, { biz, service }) : fill(cfg.generalMessage, vars));

  useEffect(() => {
    setNoIndex();
    document.title = `${biz} | موقع تجريبي من تَمام`;
    window.scrollTo(0, 0);
  }, [biz]);

  const style = {
    '--bg': t.bg, '--surface': t.surface, '--ink': t.ink, '--muted': t.muted,
    '--p': t.primary, '--pInk': t.primaryInk, '--accent': t.accent, '--soft': t.soft,
    '--line': t.line, '--heroBg': t.heroBg, '--heroInk': t.heroInk,
    fontFamily: cfg.bodyFont,
    background: t.bg,
    color: t.ink,
  } as React.CSSProperties;
  const heading = { fontFamily: cfg.headingFont } as React.CSSProperties;

  const initial = biz.trim().charAt(0) || 'ت';
  const heroText = cfg.heroDark ? 'text-[var(--heroInk)]' : 'text-[var(--ink)]';
  const heroMuted = cfg.heroDark ? 'text-[var(--heroInk)]/70' : 'text-[var(--muted)]';

  const PrimaryBtn: React.FC<{ href: string; children: React.ReactNode; onDark?: boolean }> = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--p)] px-7 py-3.5 text-base font-semibold text-[var(--pInk)] shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--p)]/30"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span>{children}</span>
    </a>
  );

  return (
    <div dir="rtl" style={style} className="min-h-screen antialiased">
      {/* Demo banner */}
      <div className="relative z-30 bg-slate-950 px-4 py-2.5 text-center text-[13px] text-white/85">
        <span>تصوّر مبدئي من </span>
        <strong className="font-semibold text-white">تَمام</strong>
        <span> لموقع {biz}. الأسماء والأسعار للتوضيح فقط. </span>
        <a
          href={waLink(WA_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-1 inline-flex items-center gap-1 font-semibold text-emerald-300 underline-offset-4 hover:underline"
        >
          كلّمنا <ArrowLeft className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--p)] text-lg font-bold text-[var(--pInk)]"
              style={heading}
            >
              {initial}
            </span>
            <span className="text-lg font-bold" style={heading}>{biz}</span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
            <a href="#services" className="hover:text-[var(--ink)]">{cfg.servicesTitle}</a>
            <a href="#booking" className="hover:text-[var(--ink)]">الحجز</a>
            <a href="#contact" className="hover:text-[var(--ink)]">أوقات الدوام</a>
          </nav>
          <a
            href={book()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition-opacity hover:opacity-90"
          >
            {cfg.hero.primaryCta}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className={`relative overflow-hidden ${heroText}`} style={{ background: t.heroBg }}>
        {cfg.heroLayout === 'center' && (
          <>
            <div className="pointer-events-none absolute -top-24 right-1/2 h-72 w-72 translate-x-[140%] rounded-full bg-[var(--p)]/10 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-[140%] rounded-full bg-[var(--accent)]/15 blur-3xl" aria-hidden="true" />
          </>
        )}
        <div
          className={`relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 ${
            cfg.heroLayout === 'split' ? 'grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]' : 'text-center'
          }`}
        >
          <div className={cfg.heroLayout === 'center' ? 'mx-auto max-w-3xl' : ''}>
            <p className={`mb-5 text-sm font-semibold text-[var(--accent)]`}>{cfg.hero.kicker}</p>
            <h1
              className="text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[1.25]"
              style={heading}
            >
              {cfg.hero.title}
            </h1>
            <p className={`mt-6 max-w-xl text-lg leading-9 ${heroMuted} ${cfg.heroLayout === 'center' ? 'mx-auto' : ''}`}>
              {cfg.hero.sub}
            </p>
            <div className={`mt-9 flex flex-col gap-4 sm:flex-row sm:items-center ${cfg.heroLayout === 'center' ? 'sm:justify-center' : ''}`}>
              <PrimaryBtn href={book()}>{cfg.hero.primaryCta}</PrimaryBtn>
              <a
                href="#services"
                className={`px-3 py-2 text-base font-medium underline decoration-current/30 underline-offset-8 ${heroText}`}
              >
                {cfg.hero.secondaryCta}
              </a>
            </div>
            <ul className={`mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm ${heroMuted} ${cfg.heroLayout === 'center' ? 'justify-center' : ''}`}>
              {cfg.hero.badges.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[var(--accent)]" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {cfg.heroLayout === 'split' && (
            <div className="relative mx-auto w-full max-w-sm">
              <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 text-[var(--ink)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-semibold" style={heading}>
                    {id === 'dental' ? 'أقرب المواعيد المتاحة' : 'طبق اليوم'}
                  </span>
                  <span className="rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-medium text-[var(--p)]">
                    {id === 'dental' ? 'اليوم وبكرة' : 'مميّز'}
                  </span>
                </div>
                {id === 'dental' ? (
                  <ul className="space-y-3">
                    {['اليوم ٦:٣٠ مساءً', 'بكرة ٤:٣٠ مساءً', 'بكرة ٥:٠٠ مساءً'].map((s, i) => (
                      <li key={s} className="flex items-center justify-between rounded-2xl border border-[var(--line)] px-4 py-3">
                        <span className="flex items-center gap-3 text-sm">
                          <Clock className="h-4 w-4 text-[var(--p)]" />
                          {s}
                        </span>
                        <a
                          href={waTo(wa, fill(cfg.generalMessage, vars) + ` (${s})`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${i === 0 ? 'bg-[var(--p)] text-[var(--pInk)]' : 'bg-[var(--soft)] text-[var(--p)]'}`}
                        >
                          احجز
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div>
                    <p className="text-2xl font-bold" style={heading}>مندي لحم</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">لحم طري على أرز مدخّن بتتبيلة البيت، يكفي شخصين.</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xl font-bold text-[var(--p)]">٥٥ ر.س</span>
                      <a
                        href={waTo(wa, fill(cfg.serviceMessage, { biz, service: 'مندي لحم' }))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[var(--p)] px-4 py-2 text-sm font-semibold text-[var(--pInk)]"
                      >
                        اطلب الحين
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl" style={heading}>{cfg.servicesTitle}</h2>
          <p className="mt-3 text-base leading-8 text-[var(--muted)]">{cfg.servicesSub}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cfg.services.map(({ name, desc, price, icon: Icon }) => (
            <article
              key={name}
              className="group flex flex-col rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--soft)] text-[var(--p)]">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-lg font-bold text-[var(--p)]">
                  {price} <span className="text-xs font-medium text-[var(--muted)]">ر.س</span>
                </span>
              </div>
              <h3 className="text-xl font-bold" style={heading}>{name}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-7 text-[var(--muted)]">{desc}</p>
              <a
                href={book(name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--p)] hover:underline"
              >
                {cfg.bookLabel} عبر واتساب
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl" style={heading}>
            {fill(cfg.whyTitle, vars)}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {cfg.why.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center md:text-start">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--soft)] text-[var(--p)] md:mx-0">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mb-2 text-xl font-bold" style={heading}>{title}</h3>
                <p className="text-[15px] leading-7 text-[var(--muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp booking with live phone */}
      <section id="booking" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-[1.3] sm:text-4xl" style={heading}>{cfg.booking.title}</h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-[var(--muted)]">{cfg.booking.sub}</p>
            <ol className="mt-8 space-y-4">
              {cfg.booking.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--p)] text-sm font-bold text-[var(--pInk)]">
                    {['١', '٢', '٣'][i]}
                  </span>
                  <span className="text-base">{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-9">
              <PrimaryBtn href={book()}>{cfg.finalCta.button}</PrimaryBtn>
            </div>
          </div>
          <div className="pb-6">
            <AutomationChatDemo
              autoScale={false}
              contactName={biz}
              avatarLetter={initial}
              clock={cfg.booking.clock}
              messages={cfg.booking.messages}
              bookedTitle={cfg.booking.bookedTitle}
              bookedSub={cfg.booking.bookedSub}
            />
          </div>
        </div>
      </section>

      {/* Hours + final CTA */}
      <section id="contact" className="scroll-mt-20 px-4 pb-20 sm:px-6">
        <div
          className={`mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 sm:p-14 ${cfg.heroDark ? 'text-[var(--heroInk)]' : 'text-white'}`}
          style={{ background: cfg.heroDark ? t.heroBg : t.primary }}
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-[1.3] sm:text-4xl" style={heading}>{cfg.finalCta.title}</h2>
              <p className="mt-3 max-w-md text-base leading-8 opacity-80">{cfg.finalCta.sub}</p>
              <a
                href={book()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-slate-950 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                {cfg.finalCta.button}
              </a>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="mb-3 flex items-center gap-2 font-semibold" style={heading}>
                <Clock className="h-5 w-5" /> {cfg.hours.title}
              </p>
              <ul className="space-y-2 text-[15px] opacity-90">
                {cfg.hours.lines.map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex items-center gap-2 text-sm opacity-70">
                <MapPin className="h-4 w-4" /> الموقع والعنوان يُضافان هنا
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] px-4 py-8 text-center text-sm text-[var(--muted)]">
        <p className="flex items-center justify-center gap-2">
          <CalendarCheck className="h-4 w-4" />
          © {new Date().getFullYear()} {biz}. موقع تجريبي من تَمام.
        </p>
      </footer>

      <a
        href={book()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="احجز عبر واتساب"
        className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
};

