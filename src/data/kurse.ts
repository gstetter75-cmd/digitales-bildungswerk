export interface Kurs {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly longDescription: string;
  readonly kategorie: 'digital-marketing' | 'programmierung' | 'office' | 'ki-data' | 'design' | 'fuehrung';
  readonly format: 'praesenz' | 'online' | 'hybrid';
  readonly zielgruppe: 'privatperson' | 'unternehmen' | 'arbeitssuchende' | 'alle';
  readonly dauer: string;
  readonly preis: number;
  readonly naechsterTermin: string;
  readonly bildungsgutschein: boolean;
  readonly icon: string;
  readonly highlights: readonly string[];
}

export const kategorien: Record<string, string> = {
  'digital-marketing': 'Digital Marketing',
  'programmierung': 'Programmierung & Webentwicklung',
  'office': 'Office & Produktivitaet',
  'ki-data': 'KI & Datenanalyse',
  'design': 'Design & Medien',
  'fuehrung': 'Fuehrung & Management',
};

export const formate: Record<string, string> = {
  'praesenz': 'Praesenz',
  'online': 'Online',
  'hybrid': 'Hybrid',
};

export const zielgruppen: Record<string, string> = {
  'privatperson': 'Privatpersonen',
  'unternehmen': 'Unternehmen',
  'arbeitssuchende': 'Arbeitssuchende',
  'alle': 'Alle Zielgruppen',
};

export const kurse: readonly Kurs[] = [
  {
    slug: 'webentwicklung-grundlagen',
    title: 'Webentwicklung Grundlagen',
    description: 'Lernen Sie HTML, CSS und JavaScript von Grund auf und erstellen Sie Ihre erste eigene Website.',
    longDescription: 'In diesem praxisorientierten Kurs lernen Sie die Grundlagen der modernen Webentwicklung. Sie starten mit HTML fuer die Struktur, gestalten mit CSS ansprechende Layouts und fuegen mit JavaScript interaktive Elemente hinzu. Am Ende des Kurses haben Sie Ihre eigene responsive Website erstellt.',
    kategorie: 'programmierung',
    format: 'hybrid',
    zielgruppe: 'alle',
    dauer: '8 Wochen',
    preis: 1290,
    naechsterTermin: '2026-07-14',
    bildungsgutschein: true,
    icon: 'code',
    highlights: ['Praxisprojekt: Eigene Website', 'Responsive Design', 'Git & Versionskontrolle', 'Zertifikat nach Abschluss'],
  },
  {
    slug: 'python-programmierung',
    title: 'Python Programmierung',
    description: 'Steigen Sie ein in die Welt der Programmierung mit Python – der vielseitigsten Sprache der Welt.',
    longDescription: 'Python ist die meistgefragte Programmiersprache in den Bereichen KI, Data Science und Automatisierung. In diesem Kurs lernen Sie von den Grundlagen bis hin zu fortgeschrittenen Konzepten wie Objektorientierung und API-Entwicklung.',
    kategorie: 'programmierung',
    format: 'praesenz',
    zielgruppe: 'alle',
    dauer: '10 Wochen',
    preis: 1590,
    naechsterTermin: '2026-08-04',
    bildungsgutschein: true,
    icon: 'terminal',
    highlights: ['Praxisnahe Projekte', 'Automatisierung & Scripting', 'API-Entwicklung', 'Datenverarbeitung'],
  },
  {
    slug: 'digital-marketing-manager',
    title: 'Digital Marketing Manager',
    description: 'Werden Sie zum Experten fuer Online-Marketing: SEO, SEA, Social Media und Content-Strategie.',
    longDescription: 'Dieser umfassende Kurs macht Sie zum Digital Marketing Manager. Sie lernen alle relevanten Kanaele und Strategien kennen: Suchmaschinenoptimierung, Google Ads, Social-Media-Marketing, E-Mail-Marketing und Content-Erstellung.',
    kategorie: 'digital-marketing',
    format: 'online',
    zielgruppe: 'alle',
    dauer: '12 Wochen',
    preis: 1890,
    naechsterTermin: '2026-07-07',
    bildungsgutschein: true,
    icon: 'megaphone',
    highlights: ['Google Ads Zertifizierung', 'Social Media Strategie', 'SEO & Analytics', 'Content Marketing'],
  },
  {
    slug: 'ki-im-unternehmen',
    title: 'KI im Unternehmen',
    description: 'Erfahren Sie, wie Sie Kuenstliche Intelligenz strategisch in Ihrem Unternehmen einsetzen koennen.',
    longDescription: 'Kuenstliche Intelligenz veraendert die Arbeitswelt grundlegend. In diesem Kurs lernen Sie, KI-Potenziale zu identifizieren, Tools wie ChatGPT und Co. produktiv einzusetzen und eine KI-Strategie fuer Ihr Unternehmen zu entwickeln.',
    kategorie: 'ki-data',
    format: 'hybrid',
    zielgruppe: 'unternehmen',
    dauer: '4 Wochen',
    preis: 990,
    naechsterTermin: '2026-06-23',
    bildungsgutschein: false,
    icon: 'brain',
    highlights: ['KI-Strategie entwickeln', 'Prompt Engineering', 'Automatisierung mit KI', 'Praxisbeispiele'],
  },
  {
    slug: 'microsoft-365-power-user',
    title: 'Microsoft 365 Power User',
    description: 'Meistern Sie Excel, Teams, Power Automate und die gesamte Microsoft 365 Suite fuer maximale Produktivitaet.',
    longDescription: 'Dieser Kurs geht weit ueber die Grundlagen hinaus. Lernen Sie fortgeschrittene Excel-Funktionen, automatisieren Sie Workflows mit Power Automate, erstellen Sie Dashboards mit Power BI und nutzen Sie Teams wie ein Profi.',
    kategorie: 'office',
    format: 'praesenz',
    zielgruppe: 'alle',
    dauer: '6 Wochen',
    preis: 890,
    naechsterTermin: '2026-07-21',
    bildungsgutschein: true,
    icon: 'grid',
    highlights: ['Excel Fortgeschritten', 'Power Automate', 'Power BI Grundlagen', 'Teams Optimierung'],
  },
  {
    slug: 'ux-ui-design',
    title: 'UX/UI Design Grundlagen',
    description: 'Gestalten Sie nutzerzentrierte digitale Produkte mit modernen Design-Tools und -Methoden.',
    longDescription: 'Von User Research ueber Wireframing bis zum High-Fidelity-Prototyp: In diesem Kurs lernen Sie den gesamten Design-Prozess kennen. Sie arbeiten mit Figma und erstellen ein vollstaendiges Portfolio-Projekt.',
    kategorie: 'design',
    format: 'online',
    zielgruppe: 'privatperson',
    dauer: '8 Wochen',
    preis: 1190,
    naechsterTermin: '2026-08-11',
    bildungsgutschein: false,
    icon: 'palette',
    highlights: ['Figma Masterclass', 'User Research', 'Design Systems', 'Portfolio-Projekt'],
  },
  {
    slug: 'data-analytics-grundlagen',
    title: 'Data Analytics Grundlagen',
    description: 'Lernen Sie, Daten zu analysieren, zu visualisieren und datenbasierte Entscheidungen zu treffen.',
    longDescription: 'Daten sind das neue Gold. In diesem Kurs lernen Sie, grosse Datenmengen zu analysieren, aussagekraeftige Visualisierungen zu erstellen und Erkenntnisse fuer Geschaeftsentscheidungen abzuleiten. Tools: Excel, Python, Power BI.',
    kategorie: 'ki-data',
    format: 'hybrid',
    zielgruppe: 'alle',
    dauer: '10 Wochen',
    preis: 1490,
    naechsterTermin: '2026-09-01',
    bildungsgutschein: true,
    icon: 'chart',
    highlights: ['Python fuer Data Science', 'Power BI Dashboards', 'Statistische Grundlagen', 'Praxisprojekt'],
  },
  {
    slug: 'agile-fuehrung',
    title: 'Agile Fuehrung & New Work',
    description: 'Fuehren Sie Teams erfolgreich in der digitalen Transformation mit agilen Methoden.',
    longDescription: 'Die Arbeitswelt wandelt sich. Lernen Sie in diesem Kurs agile Fuehrungsmethoden, Scrum, Kanban und die Prinzipien von New Work kennen. Ideal fuer Fuehrungskraefte und Teamleiter, die ihre Organisation zukunftsfaehig aufstellen wollen.',
    kategorie: 'fuehrung',
    format: 'praesenz',
    zielgruppe: 'unternehmen',
    dauer: '3 Wochen',
    preis: 790,
    naechsterTermin: '2026-07-28',
    bildungsgutschein: false,
    icon: 'users',
    highlights: ['Scrum & Kanban', 'Remote Leadership', 'Change Management', 'Workshop-Format'],
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    description: 'Planen, erstellen und optimieren Sie professionelle Social-Media-Kampagnen.',
    longDescription: 'Vom Redaktionsplan bis zur Performance-Analyse: Dieser Kurs macht Sie zum Social Media Manager. Sie lernen alle relevanten Plattformen kennen und entwickeln eine ganzheitliche Social-Media-Strategie.',
    kategorie: 'digital-marketing',
    format: 'online',
    zielgruppe: 'privatperson',
    dauer: '6 Wochen',
    preis: 890,
    naechsterTermin: '2026-06-30',
    bildungsgutschein: true,
    icon: 'share',
    highlights: ['Instagram & TikTok', 'Content-Erstellung', 'Community Management', 'Ads & Analytics'],
  },
];
