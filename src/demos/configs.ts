import type { LucideIcon } from 'lucide-react';
import {
  Award, CalendarCheck, ChefHat, Clock, Flame, Heart, Leaf, Scissors, ShieldCheck, Smile,
  Sparkles, Stethoscope, UtensilsCrossed, Users,
} from 'lucide-react';
import type { ChatMessage } from '../components/AutomationChatDemo';
import type { DemoId } from './utils';

export interface DemoService {
  name: string;
  desc: string;
  price: string;
  icon: LucideIcon;
}

export interface DemoConfig {
  id: DemoId;
  hub: { title: string; description: string; noun: string; sampleBiz: string; icon: LucideIcon };
  headingFont: string;
  bodyFont: string;
  heroLayout: 'center' | 'split';
  heroDark: boolean;
  theme: {
    bg: string; surface: string; ink: string; muted: string;
    primary: string; primaryInk: string; accent: string; soft: string; line: string;
    heroBg: string; heroInk: string;
  };
  hero: {
    kicker: string; title: string; sub: string; primaryCta: string; secondaryCta: string;
    badges: { icon: LucideIcon; text: string }[];
  };
  servicesTitle: string;
  servicesSub: string;
  bookLabel: string;
  services: DemoService[];
  whyTitle: string;
  why: { icon: LucideIcon; title: string; text: string }[];
  booking: {
    title: string; sub: string; steps: string[];
    clock: string; bookedTitle: string; bookedSub: string; messages: ChatMessage[];
  };
  hours: { title: string; lines: string[] };
  finalCta: { title: string; sub: string; button: string };
  generalMessage: string; // {biz}
  serviceMessage: string; // {biz} {service}
  outreach: string; // {contact} {biz} {url}
}

const BODY = "'IBM Plex Sans Arabic', 'Readex Pro', system-ui, sans-serif";

export const DEMOS: Record<DemoId, DemoConfig> = {
  salon: {
    id: 'salon',
    hub: {
      title: 'صالونات ومراكز تجميل',
      description: 'موقع نسائي أنيق: خدمات وأسعار، حجز عبر واتساب، ومساعد يرد على الزبونات.',
      noun: 'الصالون',
      sampleBiz: 'صالون لمسة',
      icon: Scissors,
    },
    headingFont: "'El Messiri', 'Readex Pro', serif",
    bodyFont: BODY,
    heroLayout: 'center',
    heroDark: false,
    theme: {
      bg: '#FFF8F6', surface: '#FFFFFF', ink: '#3B1F2B', muted: '#7A6169',
      primary: '#B83266', primaryInk: '#FFFFFF', accent: '#C9962B', soft: '#FCE8EE', line: '#F2D9E0',
      heroBg: '#FFF1F3', heroInk: '#3B1F2B',
    },
    hero: {
      kicker: 'صالون وسبا نسائي',
      title: 'جمالك يبدأ من هنا.',
      sub: 'قص، صبغة، عناية بالبشرة، ومكياج على يد فريق محترف. احجزي موعدك في دقيقة عبر واتساب وبدون انتظار.',
      primaryCta: 'احجزي موعدك',
      secondaryCta: 'شوفي خدماتنا',
      badges: [
        { icon: CalendarCheck, text: 'حجز فوري على واتساب' },
        { icon: Sparkles, text: 'منتجات أصلية' },
        { icon: Heart, text: 'جلسات خاصة ومريحة' },
      ],
    },
    servicesTitle: 'خدماتنا',
    servicesSub: 'كل اللي تحتاجينه في مكان واحد. الأسعار تقريبية وتختلف حسب الخدمة.',
    bookLabel: 'احجزي',
    services: [
      { name: 'قص وتصفيف', desc: 'قصّة تناسب شكل وجهك مع سشوار يدوم.', price: '١٢٠', icon: Scissors },
      { name: 'صبغة وتلوين', desc: 'ألوان عصرية بمنتجات عالية الجودة.', price: '٣٥٠', icon: Sparkles },
      { name: 'عناية بالبشرة', desc: 'تنظيف عميق وترطيب لبشرة مشرقة.', price: '٢٠٠', icon: Leaf },
      { name: 'مكياج مناسبات', desc: 'إطلالة تدوم لين آخر السهرة.', price: '٣٠٠', icon: Heart },
      { name: 'حمام مغربي', desc: 'جلسة استرخاء وتنظيف كامل للجسم.', price: '٢٥٠', icon: Leaf },
      { name: 'أظافر', desc: 'مناكير وباديكير مع تشكيل وتلوين.', price: '١٥٠', icon: Sparkles },
    ],
    whyTitle: 'ليش {biz}؟',
    why: [
      { icon: Award, title: 'فريق متخصص', text: 'خبرة سنين وتدريب مستمر على أحدث الصيحات.' },
      { icon: ShieldCheck, title: 'نظافة وتعقيم', text: 'أدوات معقمة بعد كل زبونة، وراحتك أولويتنا.' },
      { icon: Clock, title: 'مواعيد تحترم وقتك', text: 'نذكّرك قبل موعدك وما نتأخر عليك.' },
    ],
    booking: {
      title: 'احجزي من جوالك في ثواني',
      sub: 'نرد على رسائل واتساب بسرعة حتى بعد الدوام، ويتأكد موعدك بدون انتظار.',
      steps: ['تراسلينا على واتساب', 'نعرض لك الأوقات المتاحة', 'يتأكد موعدك ويوصلك تذكير'],
      clock: '9:12',
      bookedTitle: 'تم تأكيد موعدك',
      bookedSub: 'بدون اتصال ولا انتظار',
      messages: [
        { from: 'customer', text: 'هلا، أبغى موعد صبغة وقص بكرة العصر', time: '٩:١٢' },
        { from: 'agent', text: 'هلا والله! بكرة عندنا ٣:٠٠ أو ٥:٣٠ مساءً. أي وقت يناسبك؟', time: '٩:١٢' },
        { from: 'customer', text: '٥:٣٠ حلو', time: '٩:١٣' },
        { from: 'agent', text: 'تم، حجزت لك بكرة ٥:٣٠ ✓ وأذكّرك قبله بساعتين على واتساب.', time: '٩:١٣' },
      ],
    },
    hours: { title: 'أوقات الدوام', lines: ['يوميًا من ٩:٠٠ صباحًا إلى ١٠:٠٠ مساءً', 'الجمعة من ٢:٠٠ ظهرًا'] },
    finalCta: {
      title: 'جاهزة لإطلالتك الجديدة؟',
      sub: 'أرسلي لنا على واتساب ونحجز لك أقرب موعد.',
      button: 'احجزي عبر واتساب',
    },
    generalMessage: 'هلا {biz}، أبغى أحجز موعد.',
    serviceMessage: 'هلا {biz}، أبغى أحجز موعد لـ {service}.',
    outreach:
      'هلا {contact}، أنا يحيى من تَمام. جهّزت لكم تصوّر مبدئي لموقع {biz} فيه الخدمات والأسعار والحجز عبر واتساب، وفيه مساعد يرد على الزبونات تلقائيًا. تفضلوا الرابط: {url}',
  },

  restaurant: {
    id: 'restaurant',
    hub: {
      title: 'مطاعم وكافيهات',
      description: 'موقع مطعم دافئ: قائمة الأطباق، حجز طاولات وطلبات عبر واتساب.',
      noun: 'المطعم',
      sampleBiz: 'مطعم الديرة',
      icon: UtensilsCrossed,
    },
    headingFont: "'Cairo', 'Readex Pro', sans-serif",
    bodyFont: BODY,
    heroLayout: 'split',
    heroDark: true,
    theme: {
      bg: '#FBF6EE', surface: '#FFFFFF', ink: '#2A1A12', muted: '#7A6558',
      primary: '#B4361F', primaryInk: '#FFFFFF', accent: '#E0A030', soft: '#F6E7D2', line: '#EBDCC6',
      heroBg: '#1E130D', heroInk: '#FBF6EE',
    },
    hero: {
      kicker: 'أكلات سعودية وشعبية',
      title: 'أكلنا أصيل، ولمّتكم أحلى.',
      sub: 'مندي وكبسة ومشاوي بنكهة ما تتكرر. احجز طاولتك أو اطلب لين عندك عبر واتساب في دقيقة.',
      primaryCta: 'احجز طاولة',
      secondaryCta: 'شوف القائمة',
      badges: [
        { icon: CalendarCheck, text: 'حجز طاولات على واتساب' },
        { icon: Flame, text: 'طلبات توصيل واستلام' },
        { icon: Users, text: 'جلسات عوائل ومناسبات' },
      ],
    },
    servicesTitle: 'من قائمتنا',
    servicesSub: 'أطباق نفتخر فيها. الأسعار بالريال وتجريبية.',
    bookLabel: 'اطلب',
    services: [
      { name: 'مندي لحم', desc: 'لحم طري على أرز مدخّن بتتبيلة البيت.', price: '٥٥', icon: ChefHat },
      { name: 'كبسة دجاج', desc: 'كبسة بنكهة تقليدية مع دقوس وسلطة.', price: '٣٥', icon: UtensilsCrossed },
      { name: 'مشاوي مشكّلة', desc: 'ريش وكباب وشقف على الفحم.', price: '٨٥', icon: Flame },
      { name: 'حنيذ لحم', desc: 'حنيذ بطيء الطهي يذوب بالفم.', price: '٦٥', icon: ChefHat },
      { name: 'جريش', desc: 'جريش بالسمن البلدي والبصل المحمّر.', price: '٣٠', icon: Leaf },
      { name: 'حلى وقهوة', desc: 'أم علي وكليجا مع قهوة سعودية.', price: '٢٥', icon: Heart },
    ],
    whyTitle: 'ليش {biz}؟',
    why: [
      { icon: Leaf, title: 'مكونات طازجة', text: 'نختار مكوناتنا كل يوم ونطبخ بنفس طريقة البيت.' },
      { icon: Users, title: 'جلسات للعوائل', text: 'أجواء مريحة للعوائل والمناسبات والتجمعات.' },
      { icon: Flame, title: 'طلبك يوصلك سخن', text: 'توصيل سريع وتغليف يحافظ على الطعم.' },
    ],
    booking: {
      title: 'احجز طاولتك بدون اتصال',
      sub: 'أرسل لنا على واتساب ونرد عليك فورًا ونأكد حجزك، حتى وقت الزحمة.',
      steps: ['ترسل لنا على واتساب', 'نعرض لك الأوقات المتاحة', 'يتأكد حجزك ونرسل لك الموقع'],
      clock: '7:40',
      bookedTitle: 'تم تأكيد الحجز',
      bookedSub: 'بدون اتصال ولا انتظار',
      messages: [
        { from: 'customer', text: 'السلام عليكم، أبغى أحجز طاولة لـ ٦ أشخاص الليلة', time: '٧:٤٠' },
        { from: 'agent', text: 'وعليكم السلام ورحمة الله! الليلة عندنا ٨:٠٠ أو ٩:٣٠ مساءً. أي وقت يناسبكم؟', time: '٧:٤٠' },
        { from: 'customer', text: '٩:٣٠ ممتاز', time: '٧:٤١' },
        { from: 'agent', text: 'تم تأكيد حجزكم الليلة ٩:٣٠ لـ ٦ أشخاص ✓ ونرسل لكم الموقع قبل الموعد.', time: '٧:٤١' },
      ],
    },
    hours: { title: 'أوقات الدوام', lines: ['يوميًا من ١٢:٠٠ ظهرًا إلى ١٢:٠٠ منتصف الليل'] },
    finalCta: {
      title: 'طاولتك جاهزة، بس قول لنا.',
      sub: 'أرسل لنا على واتساب ونحجز لك أو نجهّز طلبك.',
      button: 'احجز عبر واتساب',
    },
    generalMessage: 'هلا {biz}، أبغى أحجز طاولة.',
    serviceMessage: 'هلا {biz}، أبغى أطلب {service}.',
    outreach:
      'هلا {contact}، أنا يحيى من تَمام. جهّزت لكم تصوّر مبدئي لموقع {biz} فيه القائمة وحجز الطاولات والطلبات عبر واتساب، وفيه مساعد يرد على الزباين تلقائيًا. تفضلوا الرابط: {url}',
  },

  dental: {
    id: 'dental',
    hub: {
      title: 'عيادات أسنان',
      description: 'موقع عيادة نظيف وموثوق: خدمات وأسعار، حجز مواعيد عبر واتساب، وتذكير تلقائي.',
      noun: 'العيادة',
      sampleBiz: 'عيادة الشفاء للأسنان',
      icon: Stethoscope,
    },
    headingFont: "'Readex Pro', 'IBM Plex Sans Arabic', sans-serif",
    bodyFont: BODY,
    heroLayout: 'split',
    heroDark: false,
    theme: {
      bg: '#F5FAFB', surface: '#FFFFFF', ink: '#0F2A3A', muted: '#5B7280',
      primary: '#0E8FA3', primaryInk: '#FFFFFF', accent: '#22A58B', soft: '#E2F4F7', line: '#D5E8ED',
      heroBg: '#EAF6F8', heroInk: '#0F2A3A',
    },
    hero: {
      kicker: 'مركز أسنان متكامل',
      title: 'ابتسامة واثقة تبدأ بموعد.',
      sub: 'فحص، تنظيف، تبييض، وتقويم بأحدث التقنيات وأطباء مختصين. احجز موعدك الحين عبر واتساب وبدون انتظار.',
      primaryCta: 'احجز موعدك',
      secondaryCta: 'شوف الخدمات',
      badges: [
        { icon: Award, text: 'أطباء مرخّصون ومختصون' },
        { icon: ShieldCheck, text: 'تعقيم كامل لكل جلسة' },
        { icon: CalendarCheck, text: 'تذكير بموعدك على واتساب' },
      ],
    },
    servicesTitle: 'خدماتنا',
    servicesSub: 'نشرح لك الخطة والتكلفة قبل ما نبدأ. الأسعار تقريبية وتختلف حسب الحالة.',
    bookLabel: 'احجز',
    services: [
      { name: 'كشف واستشارة', desc: 'فحص شامل وخطة علاج واضحة.', price: '١٠٠', icon: Stethoscope },
      { name: 'تنظيف وتلميع', desc: 'إزالة الجير والبقع لابتسامة أنظف.', price: '١٥٠', icon: Sparkles },
      { name: 'تبييض الأسنان', desc: 'تبييض آمن بنتيجة تلاحظها من أول جلسة.', price: '٨٠٠', icon: Smile },
      { name: 'حشو تجميلي', desc: 'حشوات بلون السن الطبيعي.', price: '٢٥٠', icon: Heart },
      { name: 'تقويم الأسنان', desc: 'تقويم معدني وشفاف حسب حالتك.', price: 'من ٤٬٠٠٠', icon: Smile },
      { name: 'زراعة الأسنان', desc: 'زراعة بأحدث الأنظمة وضمان على العمل.', price: 'من ٢٬٥٠٠', icon: ShieldCheck },
    ],
    whyTitle: 'ليش {biz}؟',
    why: [
      { icon: Award, title: 'أطباء مختصون', text: 'نخبة من الأطباء في كل تخصص أسنان.' },
      { icon: ShieldCheck, title: 'تعقيم وأمان', text: 'أدوات معقمة وبروتوكولات صارمة لكل مراجع.' },
      { icon: Heart, title: 'راحة وطمأنينة', text: 'نشرح لك كل خطوة ونراعي راحتك طول الجلسة.' },
    ],
    booking: {
      title: 'احجز موعدك من الجوال',
      sub: 'نرد على واتساب بسرعة حتى خارج الدوام، ونذكّرك بموعدك قبلها بساعتين.',
      steps: ['تراسلنا على واتساب', 'نعرض لك الأوقات المتاحة', 'يتأكد موعدك ويوصلك تذكير'],
      clock: '2:14',
      bookedTitle: 'تم حجز الموعد',
      bookedSub: 'وفريقك ما تدخّل',
      messages: [
        { from: 'customer', text: 'السلام عليكم، أبغى موعد تنظيف أسنان بكرة العصر', time: '٢:١٤' },
        { from: 'agent', text: 'وعليكم السلام! بكرة عندنا ٣:٠٠ أو ٤:٣٠ مساءً. أي وقت يناسبك؟', time: '٢:١٤' },
        { from: 'customer', text: '٤:٣٠ زين', time: '٢:١٥' },
        { from: 'agent', text: 'تم، حجزت لك موعدك بكرة الساعة ٤:٣٠ ✓ وأذكّرك قبله بساعتين على واتساب.', time: '٢:١٥' },
      ],
    },
    hours: { title: 'أوقات الدوام', lines: ['السبت إلى الخميس من ٩:٠٠ صباحًا إلى ٩:٠٠ مساءً', 'الجمعة مغلق'] },
    finalCta: {
      title: 'ابتسامتك تنتظرك.',
      sub: 'أرسل لنا على واتساب ونحجز لك أقرب موعد.',
      button: 'احجز عبر واتساب',
    },
    generalMessage: 'السلام عليكم {biz}، أبغى أحجز موعد.',
    serviceMessage: 'السلام عليكم {biz}، أبغى أحجز موعد لـ {service}.',
    outreach:
      'هلا {contact}، أنا يحيى من تَمام. جهّزت لكم تصوّر مبدئي لموقع {biz} فيه الخدمات والأسعار وحجز المواعيد عبر واتساب، وفيه مساعد يرد على المراجعين تلقائيًا. تفضلوا الرابط: {url}',
  },
};

export const DEMO_ORDER: DemoId[] = ['salon', 'restaurant', 'dental'];

export const fill = (s: string, vars: Record<string, string>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
