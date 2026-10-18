export const portfolioData = {
  fa: {
    personal: {
      name: "امیرحسام خالوئی",
      role: "طراح ارشد محصول (Senior Product Designer)",
      badge: "بیش از ۷ سال سابقه در طراحی محصولات پیچیده B2B و B2C",
      heroTitle1: "معماری تجربیات دیجیتال",
      heroTitleHighlight: "کاربرمحور و مبتنی بر داده",
      tagline: "متخصص در ساده‌سازی جریان‌های کاری پیچیده، کاوش فرآیندها (Process Mining) و مقیاس‌پذیری دیزاین سیستم‌ها در حوزه‌های فین‌تک، SaaS، لجستیک و تجارت الکترونیک.",
      bio: "طراح ارشد محصول با بیش از ۷ سال سابقه. تمرکز من بر تبدیل اهداف تجاری و چالش‌های عملیاتی پیچیده به تجربیات بصری بصیرت‌محور، روان و قابل اندازه‌گیری از طریق همکاری بین‌واحدی است.",
      location: "تهران، ایران",
      email: "hesam.khalouei8@gmail.com",
      phone: "+98 938 262 52 11",
      github: "https://github.com/hesam-khalouei",
      linkedin: "https://linkedin.com/in/hesam-khalouei",
      stats: [
        { value: "+۷", label: "سال سابقه تخصصی" },
        { value: "+۲", label: "دیزاین سیستم مقیاس‌پذیر" },
        { value: "۴۰٪", label: "بهبود کارایی و انسجام UI" }
      ]
    },
    nav: [
      { label: "خانه", href: "#hero" },
      { label: "درباره و بنتو", href: "#about" },
      { label: "پروژه‌ها", href: "#projects" },
      { label: "سوابق کاری", href: "#experience" },
      { label: "مهارت‌ها", href: "#skills" },
      { label: "تماس", href: "#contact" }
    ],
    ui: {
      ctaPrimary: "مشاهده مطالعات موردی",
      ctaSecondary: "ارتباط با من",
      aboutBadge: "خلاصه پروفایل و دستاوردها",
      aboutTitle: "تبدیل چالش‌های عملیاتی به تجربیات بصری شهودی",
      projectsBadge: "نمونه کارها و پروژه‌ها",
      projectsTitle: "پروژه‌های شاخص محصول",
      viewCaseStudy: "جزئیات پروژه",
      expBadge: "مسیر حرفه‌ای",
      expTitle: "سوابق کاری تخصصی",
      skillsBadge: "مهارت‌ها و ابزارها",
      skillsTitle: "تخصص‌های کلیدی",
      contactBadge: "ارتباط مستقیم",
      contactTitle: "آماده همکاری در پروژه‌های ارزش‌آفرین",
      contactSub: "برای توسعه محصولات دیجیتال، استقرار دیزاین سیستم یا مشاوره UX در تماس باشید.",
      footerRights: "تمامی حقوق محفوظ است."
    },
    bento: [
      {
        title: "مقیاس‌پذیری Design Systems",
        desc: "ساخت و توسعه دیزاین سیستم‌های سازمانی که راندمان طراحی و انسجام UI را تا ۴۰٪ افزایش دادند.",
        colSpan: "md:col-span-2"
      },
      {
        title: "UX Research & Testing",
        desc: "کاهش اصطکاک جریان‌های کاربری به میزان ۱۲٪ با اتکا بر تست‌های کاربردپذیری و پژوهش عمیق.",
        colSpan: "md:col-span-1"
      },
      {
        title: "بهینه‌سازی با Process Mining",
        desc: "استفاده از تکنیک‌های کاوش فرآیند جهت بهینه‌سازی جریان‌های عملیاتی و لجستیک پیچیده.",
        colSpan: "md:col-span-1"
      },
      {
        title: "همکاری چندتیمه (Cross-functional)",
        desc: "رهبری همسویی میان تیم‌های محصول، مهندسی، عملیات و مدیران ارشد اجرایی.",
        colSpan: "md:col-span-2"
      }
    ],
    projects: [
      {
        id: "ebcom",
        title: "پلتفرم جامع سازمانی EBCOM",
        category: "Enterprise / B2B",
        role: "Senior Product Designer",
        year: "۲۰۲۵ — اکنون",
        impact: "بهبود ۲۵٪ کارایی تکمیل وظایف با استفاده از Process Mining و توسعه دیزاین سیستم",
        description: "بازطراحی پلتفرم اصلی شرکت، نگهداری دیزاین سیستم مقیاس‌پذیر برای بیش از ۵ محصول و کاهش ۳۰ درصدی زمان انتقال طرح به توسعه (Handoff).",
        tags: ["Design Systems", "Process Mining", "Enterprise", "Workflow Optimization"],
        gradient: "from-indigo-600/20 via-purple-600/10 to-transparent"
      },
      {
        id: "postex",
        title: "پلتفرم لجستیک و مدیریت ارسال پستکس (Postex)",
        category: "Logistics & Operations",
        role: "Senior Product Designer",
        year: "۲۰۲۴ — ۲۰۲۵",
        impact: "کاهش ۲۰ درصدی زمان انجام وظایف دیسپچ و بهینه‌سازی لجستیک",
        description: "رهبری بازطراحی وب‌اپلیکیشن اصلی و داشبورد عملیات داخلی با به کارگیری تکنیک‌های Process Mining جهت بهینه‌سازی فرآیندهای ارسال.",
        tags: ["Logistics", "Operations Dashboard", "Process Mining", "Routing UX"],
        gradient: "from-cyan-600/20 via-blue-600/10 to-transparent"
      },
      {
        id: "vardast",
        title: "مارکت‌پلیس مصالح و تجهیزات وردست (Vardast)",
        category: "B2B & B2C Marketplace",
        role: "Product Design Lead",
        year: "۲۰۲۳ — ۲۰۲۴",
        impact: "کاهش ۱۵ درصدی ریزش (Drop-off) در فرآیند ثبت‌نام فروشندگان",
        description: "انجام مصاحبه‌های استراتژیک، بازطراحی کامل جریان onboarding فروشندگان و ثبت کالا و طراحی کامپوننت‌های مقیاس‌پذیر مارکت‌پلیس.",
        tags: ["Marketplace", "Onboarding", "User Research", "UI Components"],
        gradient: "from-emerald-600/20 via-teal-600/10 to-transparent"
      },
      {
        id: "itsaaz",
        title: "دیزاین سیستم سازمانی آی‌تی‌ساز (ITSaaz)",
        category: "Design Systems & SaaS",
        role: "Product Designer",
        year: "۲۰۲۱ — ۲۰۲۳",
        impact: "افزایش ۴۰ درصدی راندمان دیزاین و کاهش ۱۲ درصدی اصطکاک کاربران",
        description: "ساخت و مقیاس‌پذیری اولین دیزاین سیستم شرکت همراه با تست‌های کاربردپذیری دقیق برای رفع موانع حیاتی کاربران.",
        tags: ["Design System", "Usability Testing", "UX Research", "Efficiency"],
        gradient: "from-violet-600/20 via-indigo-600/10 to-transparent"
      }
    ],
    experiences: [
      {
        company: "EBCOM",
        role: "Senior Product Designer",
        period: "مه ۲۰۲۵ — اکنون",
        description: "بازطراحی پلتفرم هسته شرکت با تکنیک‌های Process Mining (بهبود ۲۵٪ کارایی)، ساخت دیزاین سیستم مقیاس‌پذیر برای ۵+ محصول و کاهش ۳۰ درصدی زمان هاندآف به تیم فنی."
      },
      {
        company: "پستکس (Postex)",
        role: "Senior Product Designer",
        period: "اکتبر ۲۰۲۴ — آوریل ۲۰۲۵",
        description: "رهبری بازطراحی پلتفرم وب و داشبورد عملیات داخلی، بهینه‌سازی جریان لجستیک (کاهش ۲۰٪ زمان تسک‌ها) و همسوسازی ذینفعان."
      },
      {
        company: "وردست (Vardast)",
        role: "Product Design Lead",
        period: "آوریل ۲۰۲۳ — اوت ۲۰۲۴",
        description: "تعریف استراتژی محصول با مصاحبه‌های ذینفعان، بازطراحی آنبردینگ فروشندگان (کاهش ۱۵٪ ریزش) و طراحی کامپوننت‌های مقیاس‌پلیس."
      },
      {
        company: "آی‌تی‌ساز (ITSaaz)",
        role: "Product Designer",
        period: "نوامبر ۲۰۲۱ — مارس ۲۰۲۳",
        description: "ساخت و مقیاس‌پذیری اولین دیزاین سیستم شرکت (افزایش ۴۰٪ راندمان UI) و انجام تست‌های کاربردپذیری."
      },
      {
        company: "Standard & Freelance",
        role: "UI/UX Designer",
        period: "ژوئیه ۲۰۱۷ — اکتبر ۲۰۲۱",
        description: "طراحی اپلیکیشن‌های وب ریسپانسیو و داشبوردها از مرحله کشف تا پروتیوتایپ باکیفیت بالا برای استارتاپ‌ها."
      }
    ],
    skillCategories: [
      {
        title: "استراتيجی و محصول (Product)",
        skills: ["Product Strategy", "Product Discovery", "UX Research", "Usability Testing", "A/B Testing", "Information Architecture", "Journey Mapping"]
      },
      {
        title: "طراحی تخصصی (Design)",
        skills: ["Design Systems", "User Flows", "Interaction Design", "Wireframing & Prototyping", "Accessibility (WCAG)", "Data-informed Design"]
      },
      {
        title: "رهبری و ابزارها (Leadership & Tools)",
        skills: ["Stakeholder Management", "Design Leadership", "Figma", "Maze & Miro", "Jira & Notion", "Webflow"]
      }
    ]
  },

  en: {
    personal: {
      name: "Amir Hesam Khalouei",
      role: "Senior Product Designer",
      badge: "7+ Years Designing Complex B2B & B2C Digital Products",
      heroTitle1: "Architecting User-Centric",
      heroTitleHighlight: "& Data-Driven Digital Experiences",
      tagline: "Specialized in simplifying complex workflows through research-driven design, process mining, and scalable design systems across FinTech, SaaS, and Logistics.",
      bio: "Senior Product Designer with 7+ years of experience transforming business goals and complex operational challenges into intuitive, measurable product experiences through cross-functional collaboration.",
      location: "Tehran, Iran",
      email: "hesam.khalouei8@gmail.com",
      phone: "+98 938 262 52 11",
      github: "https://github.com/hesam-khalouei",
      linkedin: "https://linkedin.com/in/hesam-khalouei",
      stats: [
        { value: "7+", label: "Years Experience" },
        { value: "2", label: "Design Systems Built" },
        { value: "40%", label: "UI Efficiency Boost" }
      ]
    },
    nav: [
      { label: "Home", href: "#hero" },
      { label: "Bento & About", href: "#about" },
      { label: "Case Studies", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" }
    ],
    ui: {
      ctaPrimary: "Explore Case Studies",
      ctaSecondary: "Get in Touch",
      aboutBadge: "Summary & Impact",
      aboutTitle: "Turning Complex Operational Challenges Into Intuitive Experiences",
      projectsBadge: "Featured Work",
      projectsTitle: "Selected Case Studies",
      viewCaseStudy: "Read Case Study",
      expBadge: "Career Path",
      expTitle: "Professional Experience",
      skillsBadge: "Capabilities",
      skillsTitle: "Core Skills & Tools",
      contactBadge: "Direct Contact",
      contactTitle: "Ready to Build Your Next Impactful Product",
      contactSub: "Available for product design leadership, design systems, and UX consulting.",
      footerRights: "All rights reserved."
    },
    bento: [
      {
        title: "Scaling Design Systems",
        desc: "Built and scaled 2 company-wide design systems, improving UI consistency and efficiency by 40%.",
        colSpan: "md:col-span-2"
      },
      {
        title: "UX Research & Testing",
        desc: "Reduced friction across key product journeys by 12% through targeted usability testing and research.",
        colSpan: "md:col-span-1"
      },
      {
        title: "Process Mining Integration",
        desc: "Applied process mining techniques to operational workflows to improve task completion efficiency by up to 25%.",
        colSpan: "md:col-span-1"
      },
      {
        title: "Cross-Functional Leadership",
        desc: "Collaborated closely with Engineering, Product, Operations, and Executive stakeholders.",
        colSpan: "md:col-span-2"
      }
    ],
    projects: [
      {
        id: "ebcom",
        title: "EBCOM Enterprise Platform",
        category: "Enterprise / B2B",
        role: "Senior Product Designer",
        year: "2025 — Present",
        impact: "Improved task completion efficiency by 25% using process mining",
        description: "Redesigned the company's core platform, reducing handoff time by 30% through maintaining a centralized design system across 5+ products.",
        tags: ["Design Systems", "Process Mining", "Enterprise", "Workflow Optimization"],
        gradient: "from-indigo-600/20 via-purple-600/10 to-transparent"
      },
      {
        id: "postex",
        title: "Postex Logistics & Shipment Platform",
        category: "Logistics & Operations",
        role: "Senior Product Designer",
        year: "2024 — 2025",
        impact: "Reduced dispatch task time by ~20% through workflow optimization",
        description: "Led the redesign of Postex's core web platform and internal operations dashboard, applying process mining to streamline logistics.",
        tags: ["Logistics", "Operations Dashboard", "Process Mining", "Routing UX"],
        gradient: "from-cyan-600/20 via-blue-600/10 to-transparent"
      },
      {
        id: "vardast",
        title: "Vardast B2B & B2C Construction Marketplace",
        category: "Marketplace",
        role: "Product Design Lead",
        year: "2023 — 2024",
        impact: "Reduced estimated onboarding drop-off by 15%",
        description: "Conducted stakeholder interviews and redesigned seller onboarding and product listing journeys, accelerating feature delivery.",
        tags: ["Marketplace", "Onboarding", "User Research", "UI Components"],
        gradient: "from-emerald-600/20 via-teal-600/10 to-transparent"
      },
      {
        id: "itsaaz",
        title: "ITSaaz Enterprise Design System",
        category: "Design Systems & SaaS",
        role: "Product Designer",
        year: "2021 — 2023",
        impact: "Boosted design efficiency by 40% with first company design system",
        description: "Built and scaled the company's first design system and conducted usability testing that reduced friction across critical user flows.",
        tags: ["Design System", "Usability Testing", "UX Research", "Efficiency"],
        gradient: "from-violet-600/20 via-indigo-600/10 to-transparent"
      }
    ],
    experiences: [
      {
        company: "EBCOM",
        role: "Senior Product Designer",
        period: "May 2025 — Present",
        description: "Redesigned core platform using process mining (25% efficiency gain), built scalable design system across 5+ products, reducing handoff time by 30%."
      },
      {
        company: "Postex",
        role: "Senior Product Designer",
        period: "Oct 2024 — Apr 2025",
        description: "Led redesign of core web platform and internal ops dashboard, optimizing logistics workflows and reducing dispatch task time by 20%."
      },
      {
        company: "Vardast",
        role: "Product Design Lead",
        period: "Apr 2023 — Aug 2024",
        description: "Defined roadmap via stakeholder interviews, redesigned seller onboarding (15% drop-off reduction), and designed scalable marketplace components."
      },
      {
        company: "ITSaaz",
        role: "Product Designer",
        period: "Nov 2021 — Mar 2023",
        description: "Built and scaled the first company design system (40% efficiency increase) and reduced user friction by 12% through research."
      },
      {
        company: "Standard & Freelance",
        role: "UI/UX Designer",
        period: "Jul 2017 — Oct 2021",
        description: "Designed responsive web apps and dashboards from discovery to high-fidelity prototypes for startups and small businesses."
      }
    ],
    skillCategories: [
      {
        title: "Product Strategy & Research",
        skills: ["Product Strategy", "Product Discovery", "UX Research", "Usability Testing", "A/B Testing", "Information Architecture", "Journey Mapping"]
      },
      {
        title: "Design & Craft",
        skills: ["Design Systems", "User Flows", "Interaction Design", "Wireframing & Prototyping", "Accessibility (WCAG)", "Data-informed Design"]
      },
      {
        title: "Leadership & Tools",
        skills: ["Stakeholder Management", "Design Leadership", "Figma", "Maze & Miro", "Jira & Notion", "Webflow"]
      }
    ]
  },

  ar: {
    personal: {
      name: "أمير حسام خالوئي",
      role: "مصمم أول للمنتجات الرقمية (Senior Product Designer)",
      badge: "خبرة +7 سنوات في تصميم المنتجات المعقدة B2B و B2C",
      heroTitle1: "هندسة تجارب رقمية",
      heroTitleHighlight: "متمحورة حول المستخدم وقائمة على البيانات",
      tagline: "متخصص في تبسيط سير العمل المعقد من خلال التصميم الموجه بالأبحاث، التنقيب عن العمليات، وأنظمة التصميم القابلة للتوسع.",
      bio: "مصمم أول للمنتجات بخبرة تزيد عن 7 سنوات في تحويل الأهداف التجارية والتحديات التشغيلية المعقدة إلى تجارب منتجات بديهية وقابلة للقياس.",
      location: "طهران، إيران",
      email: "hesam.khalouei8@gmail.com",
      phone: "+98 938 262 52 11",
      github: "https://github.com/hesam-khalouei",
      linkedin: "https://linkedin.com/in/hesam-khalouei",
      stats: [
        { value: "+7", label: "سنوات الخبرة" },
        { value: "2", label: "أنظمة تصميم مؤسسية" },
        { value: "40%", label: "زيادة كفاءة التصميم" }
      ]
    },
    nav: [
      { label: "الرئيسية", href: "#hero" },
      { label: "نبذة", href: "#about" },
      { label: "المشاريع", href: "#projects" },
      { label: "الخبرات", href: "#experience" },
      { label: "المهارات", href: "#skills" },
      { label: "تواصل", href: "#contact" }
    ],
    ui: {
      ctaPrimary: "استكشف دراسات الحالة",
      ctaSecondary: "تواصل معي",
      aboutBadge: "الملخص والأثر",
      aboutTitle: "تحويل التحديات التشغيلية إلى تجارب بديهية",
      projectsBadge: "الأعمال المميزة",
      projectsTitle: "دراسات الحالة المختارة",
      viewCaseStudy: "قراءة دراسة الحالة",
      expBadge: "المسار المهني",
      expTitle: "الخبرات المهنية",
      skillsBadge: "القدرات",
      skillsTitle: "المهارات والأدوات الأساسية",
      contactBadge: "اتصال مباشر",
      contactTitle: "جاهز لبناء منتجك القادم المؤثر",
      contactSub: "متاح لقيادة تصميم المنتجات، بناء أنظمة التصميم، واستشارات تجربة المستخدم.",
      footerRights: "جميع الحقوق محفوظة."
    },
    bento: [
      {
        title: "تطوير أنظمة التصميم (Design Systems)",
        desc: "بناء وتوسيع نظامين تصميم على مستوى الشركة، مما أدى إلى تحسين كفاءة واجهات المستخدم بنسبة 40%.",
        colSpan: "md:col-span-2"
      },
      {
        title: "أبحاث واختبارات تجربة المستخدم",
        desc: "تقليل الاحتكاك عبر مسارات المستخدم الرئيسية بنسبة 12% من خلال اختبارات قابلية الاستخدام.",
        colSpan: "md:col-span-1"
      },
      {
        title: "دمج التنقيب عن العمليات (Process Mining)",
        desc: "تطبيق تقنيات Process Mining على سير العمل التشغيلي لتحسين كفاءة إنجاز المهام بنسبة 25%.",
        colSpan: "md:col-span-1"
      },
      {
        title: "القيادة والتعاون المشترك",
        desc: "التعاون الوثيق مع فرق الهندسة، المنتجات، العمليات، والإدارة التنفيذية.",
        colSpan: "md:col-span-2"
      }
    ],
    projects: [
      {
        id: "ebcom",
        title: "منصة EBCOM المؤسسية",
        category: "Enterprise / B2B",
        role: "Senior Product Designer",
        year: "2025 — الحاضر",
        impact: "تحسين كفاءة إنجاز المهام بنسبة 25% باستخدام Process Mining",
        description: "إعادة تصميم المنصة الأساسية للشركة، وتقليل وقت التسليم للتطوير بنسبة 30% من خلال نظام تصميم مركزي.",
        tags: ["Design Systems", "Process Mining", "Enterprise", "Workflow Optimization"],
        gradient: "from-indigo-600/20 via-purple-600/10 to-transparent"
      },
      {
        id: "postex",
        title: "منصة پستکس للخدمات اللوجستية والشحن",
        category: "Logistics & Operations",
        role: "Senior Product Designer",
        year: "2024 — 2025",
        impact: "تقليل وقت مهام الإرسال بنحو 20%",
        description: "قيادة إعادة تصميم منصة Postex الأساسية لوحة تحكم العمليات الداخلية لتحسين تدفقات العمل اللوجستية.",
        tags: ["Logistics", "Operations Dashboard", "Process Mining", "Routing UX"],
        gradient: "from-cyan-600/20 via-blue-600/10 to-transparent"
      },
      {
        id: "vardast",
        title: "منصة وردست B2B و B2C للمواد الإنشائية",
        category: "Marketplace",
        role: "Product Design Lead",
        year: "2023 — 2024",
        impact: "تقليل معدل التخلي بنسبة 15% أثناء تسجيل البائعين",
        description: "إجراء مقابلات مع أصحاب المصلحة وإعادة تصميم رحلة انضمام البائعين وإدراج المنتجات.",
        tags: ["Marketplace", "Onboarding", "User Research", "UI Components"],
        gradient: "from-emerald-600/20 via-teal-600/10 to-transparent"
      },
      {
        id: "itsaaz",
        title: "نظام تصميم آی‌تی‌ساز المؤسسي",
        category: "Design Systems & SaaS",
        role: "Product Designer",
        year: "2021 — 2023",
        impact: "زيادة كفاءة التصميم بنسبة 40% من خلال أول نظام تصميم",
        description: "بناء وتوسيع أول نظام تصميم للشركة وإجراء اختبارات قابلية الاستخدام لتقليل الاحتكاك في مسارات المستخدم.",
        tags: ["Design System", "Usability Testing", "UX Research", "Efficiency"],
        gradient: "from-violet-600/20 via-indigo-600/10 to-transparent"
      }
    ],
    experiences: [
      {
        company: "EBCOM",
        role: "Senior Product Designer",
        period: "مايو 2025 — الحاضر",
        description: "إعادة تصميم المنصة الأساسية باستخدام Process Mining (زيادة الكفاءة 25%)، وبناء نظام تصميم قابل للتوسع عبر 5+ منتجات."
      },
      {
        company: "پستکس (Postex)",
        role: "Senior Product Designer",
        period: "أكتوبر 2024 — أبريل 2025",
        description: "قيادة إعادة تصميم المنصة الأساسية ولوحة عمليات التشغيل، تحسين تدفقات اللوجستيات وتقليل زمن المهام بنسبة 20%."
      },
      {
        company: "وردست (Vardast)",
        role: "Product Design Lead",
        period: "أبريل 2023 — أغسطس 2024",
        description: "تحديد خريطة طريق المنتج، إعادة تصميم انضمام البائعين (تقليل الانسحاب بنسبة 15%) وتصميم مكونات السوق."
      },
      {
        company: "آی‌تی‌ساز (ITSaaz)",
        role: "Product Designer",
        period: "نوفمبر 2021 — مارس 2023",
        description: "بناء وتوسيع أول نظام تصميم للشركة (زيادة كفاءة 40%) وإجراء أبحاث تجربة المستخدم لتقليل الاحتكاك."
      },
      {
        company: "Standard & Freelance",
        role: "UI/UX Designer",
        period: "يوليو 2017 — أكتوبر 2021",
        description: "تصميم تطبيقات الويب ولوحات القيادة التفاعلية من الاكتشاف وحتى النماذج الأولية عالية الدقة للشركات الناشئة."
      }
    ],
    skillCategories: [
      {
        title: "استراتيجية والأبحاث (Product)",
        skills: ["Product Strategy", "Product Discovery", "UX Research", "Usability Testing", "A/B Testing", "Information Architecture", "Journey Mapping"]
      },
      {
        title: "التصميم والتنفيذ (Design)",
        skills: ["Design Systems", "User Flows", "Interaction Design", "Wireframing & Prototyping", "Accessibility (WCAG)", "Data-informed Design"]
      },
      {
        title: "القيادة والأدوات (Leadership & Tools)",
        skills: ["Stakeholder Management", "Design Leadership", "Figma", "Maze & Miro", "Jira & Notion", "Webflow"]
      }
    ]
  }
};