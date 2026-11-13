/**
 * Core business and state logic for TAMAM automation
 */

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
}

export const TAMAM_SOLUTIONS: SolutionItem[] = [
  {
    id: 'customer-support',
    title: 'الرد على استفسارات العملاء',
    tagline: 'ردود فورية ودقيقة 24/7',
    description: 'وكيل ذكي يفهم تفاصيل خدماتك ويجيب على أسئلة العملاء فورياً عبر واتساب وموقعك.',
    highlight: 'استجابة خلال ثوانٍ',
  },
  {
    id: 'lead-followup',
    title: 'متابعة العملاء والفرص',
    tagline: 'لا فرصة بيع تضيع بعد اليوم',
    description: 'تتبع تلقائي للعملاء المحتملين وإرسال المتابعات المخصصة حتى إغلاق الصفقة.',
    highlight: 'متابعة دقيقة دون نسيان',
  },
  {
    id: 'appointment-reminders',
    title: 'التذكير بالمواعيد وتنظيمها',
    tagline: 'تقليل عدم الحضور بنسبة ملحوظة',
    description: 'جدولة آلية وتذكيرات استباقية بالتقويم ورسائل التنبيه للمواعيد والاجتماعات.',
    highlight: 'مزامنة تلقائية مع التقويم',
  },
  {
    id: 'custom-agent',
    title: 'وكلاء ذكاء اصطناعي وأتمتة المهام',
    tagline: 'بناء وكيل مخصص لطبيعة عملك',
    description: 'تصميم مسارات عمل ذكية تتولى المهام الروتينية المعقدة في شركتك بسلاسة وأمان.',
    highlight: 'مخصص بالكامل لاحتياجك',
  },
];

export interface PainPointItem {
  id: string;
  title: string;
  description: string;
}

export const PAIN_POINTS: PainPointItem[] = [
  {
    id: 'endless-messages',
    title: 'رسائل بلا توقف',
    description: 'استفسارات متكررة، وردود ممكن تتأخر إذا انشغل الفريق.',
  },
  {
    id: 'missed-followups',
    title: 'متابعة تفلت منك',
    description: 'عميل مهتم ممكن ما توصله المتابعة بالوقت المناسب.',
  },
  {
    id: 'repetitive-tasks',
    title: 'مهام تتكرر',
    description: 'تذكير بالمواعيد وخطوات يومية تنعاد يدويًا كل يوم.',
  },
];

export interface WorkflowStepItem {
  stepNumber: string;
  title: string;
  description: string;
}

export const WORKFLOW_STEPS: WorkflowStepItem[] = [
  {
    stepNumber: '01',
    title: 'نفهم طريقة شغلك',
    description: 'نحدد المهام المتكررة، وكيف يتعامل فريقك مع العملاء والطلبات حاليًا.',
  },
  {
    stepNumber: '02',
    title: 'نبني سير العمل المناسب',
    description: 'نصمم الحل وفق احتياجك، سواء كان للرد على الاستفسارات، متابعة العملاء، تنظيم المواعيد، أو أتمتة مهام محددة.',
  },
  {
    stepNumber: '03',
    title: 'نجرّبه ونضبطه',
    description: 'نراجع تدفق العمل ونتأكد أنه يؤدي المهمة المطلوبة ويناسب خطوات فريقك.',
  },
];

export interface PackageItem {
  id: string;
  name: string;
  promise: string;
  features: string[];
  /** Overrides the default "ما تشمله الباقة:" label above the list. */
  featuresTitle?: string;
  ctaLabel: string;
  badge?: string;
  /** What the client gets, in one line. */
  value: string;
  /** Price shown big on the card. */
  price: string;
  priceNote: string;
  /** Delivery time shown on the card. */
  duration: string;
  durationNote: string;
}

export const TAMAM_PACKAGES: PackageItem[] = [
  {
    id: 'crm-inquiries',
    name: 'CRM واستقبال الاستفسارات',
    promise: 'كل استفسارات عملائك وبياناتهم ومتابعاتهم في مكان واحد، بدل التشتت بين واتساب أو الموقع والشيتات.',
    features: [
      'استقبال وتسجيل استفسارات العملاء من واتساب أو الموقع، حسب القناة التي يتم الاتفاق عليها.',
      'تنظيم بيانات العملاء داخل CRM بدل جداول الشيت.',
      'تصنيف العملاء ومراحل متابعتهم لتسهيل معرفة الخطوة التالية.',
      'تنبيه أو مهمة متابعة حتى لا يُنسى الرجوع للعميل.',
    ],
    ctaLabel: 'كلّمنا عن شغلك',
    badge: 'تنظيم ومتابعة العملاء',
    value: 'كل استفسار يتسجل وينتابع، وما يضيع عليك عميل.',
    price: '١٥٠ دولار',
    priceNote: 'رسوم إعداد لمرة وحدة',
    duration: 'أسبوع',
    durationNote: 'من الاتفاق لين التشغيل',
  },
  {
    id: 'appointments-whatsapp-offers',
    name: 'مواعيد وعروض واتساب',
    promise: 'ذكّر عملاءك بمواعيدهم، وأرسل لهم العروض الأقرب لاهتماماتهم.',
    features: [
      'تذكير العميل عبر واتساب قبل موعده بـ30 دقيقة.',
      'استخدام بيانات العميل المتوفرة لدى الشركة وسجل تفاعله لتحديد العروض المناسبة.',
      'إرسال العروض المناسبة للعميل عبر واتساب.',
      'تنظيم بيانات العملاء ومواعيدهم واهتماماتهم ضمن النظام.',
    ],
    ctaLabel: 'كلّمنا عن شغلك',
    badge: 'تذكير وعروض ذكية',
    value: 'مواعيد مؤكدة وعميل ما ينسى موعده.',
    price: '٥٠ دولار',
    priceNote: 'رسوم إعداد لمرة وحدة',
    duration: '٥ أيام',
    durationNote: 'من الاتفاق لين التشغيل',
  },
  {
    id: 'custom-automation',
    name: 'أتمتة مخصّصة',
    promise: 'عندك شغل متكرر وما لقيت له حل جاهز؟ نبني لك نظامًا يناسب طريقة عمل شركتك.',
    features: [
      'فهم سير العمل والمهام المتكررة في الشركة.',
      'اقتراح أتمتة مخصصة وفق الاحتياج الذي يتم الاتفاق عليه.',
      'تحديد نطاق التنفيذ والتكلفة بعد فهم المطلوب.',
    ],
    ctaLabel: 'كلّمنا عن شغلك',
    badge: 'حلول مخصصة بالكامل',
    value: 'نظام مفصّل على شغلك يوفر وقتك بشكل دائم.',
    price: 'حسب الشغل',
    priceNote: 'نحدد السعر بعد فهم المطلوب',
    duration: 'مفتوحة',
    durationNote: 'نحددها بعد فهم المطلوب',
  },
];

export interface AutomationImpact {
  isAutomated: boolean;
  statusLabel: string;
  hoursSavedWeekly: number;
  responseSpeedMultiplier: string;
  routineTaskReduction: number;
}

export function getAutomationImpact(isAutomated: boolean): AutomationImpact {
  if (!isAutomated) {
    return {
      isAutomated: false,
      statusLabel: 'تشغيل يدوي (الوضع التقليدي)',
      hoursSavedWeekly: 0,
      responseSpeedMultiplier: '1x',
      routineTaskReduction: 0,
    };
  }

  return {
    isAutomated: true,
    statusLabel: 'الأتمتة نشطة (نظام تَمام الذكي)',
    hoursSavedWeekly: 28,
    responseSpeedMultiplier: '12x أسرع',
    routineTaskReduction: 75,
  };
}

export interface InquiryFormData {
  name: string;
  businessName: string;
  contact: string;
  notes: string;
  selectedSolutions: string[];
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateInquiryForm(data: Partial<InquiryFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'يرجى كتابة الاسم الكريم (حرفين على الأقل)';
  }

  if (!data.businessName || data.businessName.trim().length < 2) {
    errors.businessName = 'يرجى كتابة اسم الشركة أو المشروع';
  }

  if (!data.contact || data.contact.trim().length < 5) {
    errors.contact = 'يرجى تزويدنا بوسيلة تواصل (بريد أو هاتف أو حساب)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
