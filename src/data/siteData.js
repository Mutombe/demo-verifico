export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Space Grotesk",
    body: "Inter",
    display: "Space Grotesk",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "energetic",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "minimal",
  bgPattern: "circuit",
  homeSectionOrder: [
    "hero", "marquee", "about", "services", "stats", "process", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Verifico",
    legalName: "Verifico (Pvt) Ltd",
    tagline: "Trust, Verified",
    description:
      "Zimbabwe's leading identity verification and background screening platform. KYC compliance, criminal record checks, employment verification, and due diligence services for businesses that cannot afford to guess.",
    phone: "+263 71 025 6499",
    phoneRaw: "+263710256499",
    whatsappNumber: "263710256499",
    email: "info@verifico.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.9,
    ratingRounded: 5,
    reviewCount: 47,
    established: "2019",
    yearsExperience: "6+",
    projectsCompleted: "50,000+",
    employees: "30+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "verifico-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/verifico",
      instagram: "#",
      linkedin: "https://www.linkedin.com/company/verifico",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "VERI",
    logoLine2: "FICO",
  },

  hero: {
    badge: "Identity Verification & Background Screening",
    titleParts: [
      { text: "Trust " },
      { text: "Verified.", highlight: true },
    ],
    subtitle:
      "50,000+ background checks completed. Real-time KYC verification, criminal record screening, and employment validation for businesses that take compliance seriously.",
    ctaPrimary: "Start Verification",
    ctaSecondary: "View Services",
    trustBadge: "ISO 27001 Compliant",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=80", alt: "Digital security and verification" },
      { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80", alt: "Data analytics dashboard" },
    ],
  },

  stats: [
    { number: "50000", suffix: "+", label: "Checks Completed" },
    { number: "99", suffix: ".7%", label: "Accuracy Rate" },
    { number: "24", suffix: "hrs", label: "Avg Turnaround" },
    { number: "200", suffix: "+", label: "Corporate Clients" },
  ],

  servicesPreview: [
    {
      iconName: "ShieldCheck",
      title: "KYC Verification",
      desc: "Real-time identity verification against government databases. National ID, passport, and driver's licence validation in seconds.",
    },
    {
      iconName: "Lock",
      title: "Criminal Record Checks",
      desc: "Comprehensive criminal background screening through official police clearance channels. Court record and watchlist checks included.",
    },
    {
      iconName: "Briefcase",
      title: "Employment Verification",
      desc: "Validate employment history, job titles, tenure, and reasons for departure. Direct verification with previous employers.",
    },
    {
      iconName: "GraduationCap",
      title: "Education Verification",
      desc: "Degree authentication, diploma validation, and professional certification checks with universities and institutions.",
    },
    {
      iconName: "Eye",
      title: "Due Diligence Reports",
      desc: "Comprehensive corporate and individual due diligence for mergers, acquisitions, partnerships, and high-risk onboarding.",
    },
    {
      iconName: "Users",
      title: "Bulk Screening",
      desc: "API-driven mass screening for large organisations. Onboard hundreds of employees or clients with automated compliance checks.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      title: "Banking Sector KYC Rollout",
      category: "Financial Services",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      title: "Government Employee Screening",
      category: "Public Sector",
    },
    {
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      title: "Mining Contractor Verification",
      category: "Mining & Resources",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Precision. " },
      { text: "Speed.", highlight: true },
      { text: " Trust." },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    imageAlt: "Verifico data verification dashboard",
    experienceYears: "50K+",
    experienceLabel: "Checks Completed",
    points: [
      {
        title: "Government Database Access",
        desc: "Direct integration with Zimbabwe's national identity systems. No middlemen, no delays, no guesswork.",
      },
      {
        title: "24-Hour Turnaround",
        desc: "Most verifications complete within 24 hours. Priority checks in under 4 hours for urgent requirements.",
      },
      {
        title: "API Integration",
        desc: "RESTful APIs for seamless integration into your HR systems, onboarding portals, or compliance workflows.",
      },
      {
        title: "Data Security",
        desc: "ISO 27001-aligned security protocols. All data encrypted at rest and in transit. SOC 2 audit trail.",
      },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=80",
    backgroundAlt: "Digital verification technology",
    titleParts: [
      { text: "Stop " },
      { text: "Guessing.", highlight: true },
      { text: " Start Verifying." },
    ],
    subtitle:
      "Every unverified hire is a liability. Every unchecked partner is a risk. Get started with Verifico today and build your business on verified trust.",
    ctaPrimary: "Get Started",
    whatsappText: "Hi Verifico! I would like to learn about your verification services.",
  },

  homeTestimonials: [
    {
      name: "Chiedza Makoni",
      role: "Head of Compliance, FBC Bank",
      text: "Verifico cut our KYC processing time from 5 days to under 24 hours. The accuracy is remarkable. We have not had a single compliance flag since switching.",
      rating: 5,
    },
    {
      name: "Tendai Mupfumi",
      role: "HR Director, Delta Beverages",
      text: "We screen over 200 seasonal hires per quarter through Verifico. The bulk screening API saved us thousands in manual verification costs. Essential tool for any large employer.",
      rating: 5,
    },
    {
      name: "Michael Nyandoro",
      role: "Managing Partner, Dube & Partners Law",
      text: "The due diligence reports are thorough and court-admissible. Our clients trust the findings because Verifico goes directly to the source. No shortcuts.",
      rating: 5,
    },
  ],

  about: {
    heroTitle: [
      { text: "Built on " },
      { text: "Truth.", highlight: true },
    ],
    heroSubtitle:
      "Verifico exists because Zimbabwe's businesses deserve better than guesswork. We built the verification infrastructure that the formal sector was missing.",
    storyImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    storyImageAlt: "Verifico technology platform",
    storyProjectCount: "50,000+",
    storyProjectLabel: "Verifications Completed",
    storyTitle: "From a Compliance Gap to Zimbabwe's Verification Standard.",
    storyParagraphs: [
      "In 2019, Zimbabwe's financial sector was under increasing pressure to comply with international KYC and AML standards. The problem was not awareness but infrastructure. There was no fast, reliable, technology-driven way to verify identities at scale.",
      "Verifico was built to fill that gap. We started by integrating directly with government identity databases, eliminating the manual back-and-forth that made verification slow and unreliable. Within a year, we were processing thousands of checks per month.",
      "Today, we serve banks, insurance companies, mining firms, law practices, and government agencies. Our platform handles identity verification, criminal record checks, employment history validation, and comprehensive due diligence. Over 50,000 checks completed with a 99.7% accuracy rate.",
    ],
    mission:
      "To make identity verification fast, accurate, and accessible for every Zimbabwean business. We believe trust should be verified, not assumed.",
    vision:
      "To be Southern Africa's most trusted verification platform. A single API that connects businesses to the truth about the people they work with.",
    values: [
      { iconName: "ShieldCheck", title: "Accuracy", desc: "99.7% verification accuracy. We go to the source. Every time." },
      { iconName: "Lock", title: "Security", desc: "ISO 27001-aligned. Encrypted data. SOC 2 audit trails. Your data is sacred." },
      { iconName: "Rocket", title: "Speed", desc: "24-hour standard turnaround. 4-hour priority. Because compliance should not slow you down." },
      { iconName: "Handshake", title: "Integrity", desc: "We report what we find. No embellishment, no omission. The truth, verified." },
    ],
    team: [
      { name: "Technology Team", role: "Platform Engineering", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" },
      { name: "Compliance Team", role: "Verification Specialists", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80" },
    ],
    milestones: [
      { year: "2019", title: "Founded", desc: "Built the initial KYC verification platform with direct government database integration." },
      { year: "2020", title: "10,000 Checks", desc: "Crossed 10,000 verifications. Onboarded first banking sector client." },
      { year: "2021", title: "API Launch", desc: "Released RESTful API for enterprise integration. Bulk screening capability went live." },
      { year: "2022", title: "Criminal Checks", desc: "Added criminal record screening and police clearance verification to the platform." },
      { year: "2023", title: "Due Diligence", desc: "Launched comprehensive due diligence reports for corporate M&A and partnerships." },
      { year: "2025", title: "50,000+ Checks", desc: "Surpassed 50,000 completed verifications. Expanding to Zambia and Mozambique." },
    ],
    ctaTitle: "Verify With Confidence",
    ctaSubtitle: "Get started with a free consultation. Our team will assess your verification needs and recommend the right solution.",
    ctaCta: "Schedule a Demo",
  },

  services: {
    heroTitle: [
      { text: "Every Check. " },
      { text: "Verified.", highlight: true },
    ],
    heroSubtitle:
      "Six verification services covering every aspect of identity, employment, education, and compliance screening. Each powered by direct source integration.",
    items: [
      {
        iconName: "ShieldCheck",
        title: "KYC Verification",
        slug: "kyc-verification",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        desc: "Real-time Know Your Customer verification against Zimbabwe's national identity databases. Validate national IDs, passports, and driver's licences in seconds. Automated watchlist and sanctions screening included.",
        features: [
          "National ID verification in real-time",
          "Passport and driver's licence validation",
          "PEP and sanctions list screening",
          "Automated risk scoring",
          "Biometric matching capability",
          "API integration for onboarding flows",
        ],
      },
      {
        iconName: "Lock",
        title: "Criminal Record Checks",
        slug: "criminal-checks",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        desc: "Comprehensive criminal background screening through official channels. Police clearance verification, court record searches, and international watchlist checks.",
        features: [
          "Zimbabwe police clearance verification",
          "Court record and conviction searches",
          "International criminal database screening",
          "Fraud and financial crime checks",
          "Sex offender registry searches",
          "Priority 4-hour turnaround available",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Employment Verification",
        slug: "employment-verification",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        desc: "Validate candidates' employment history directly with previous employers. Job titles, dates of employment, reasons for departure, and re-hire eligibility confirmed.",
        features: [
          "Direct employer contact verification",
          "Job title and role confirmation",
          "Employment dates and tenure validation",
          "Reason for departure investigation",
          "Salary verification upon request",
          "Reference check interviews",
        ],
      },
      {
        iconName: "GraduationCap",
        title: "Education Verification",
        slug: "education-verification",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        desc: "Authenticate academic qualifications directly with issuing institutions. Degree verification, diploma validation, and professional certification checks.",
        features: [
          "University degree authentication",
          "Diploma and certificate validation",
          "Professional qualification checks",
          "International institution verification",
          "Transcript verification",
          "Accreditation status confirmation",
        ],
      },
      {
        iconName: "Eye",
        title: "Due Diligence Reports",
        slug: "due-diligence",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        desc: "Comprehensive corporate and individual due diligence for high-stakes decisions. Mergers, acquisitions, joint ventures, and board appointments.",
        features: [
          "Corporate registry and directorship searches",
          "Beneficial ownership investigation",
          "Litigation and judgement searches",
          "Media and adverse news screening",
          "Financial standing assessments",
          "Court-admissible report format",
        ],
      },
      {
        iconName: "Users",
        title: "Bulk Screening",
        slug: "bulk-screening",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        desc: "API-driven mass screening for enterprises processing hundreds or thousands of verifications. Automated workflows and real-time status dashboards.",
        features: [
          "RESTful API with webhook callbacks",
          "CSV batch upload processing",
          "Real-time status dashboard",
          "Automated pass/fail workflows",
          "Custom screening rule configuration",
          "Dedicated account manager",
        ],
      },
    ],
    ctaTitle: "Ready to Verify?",
    ctaSubtitle: "Contact us for a tailored solution. Volume pricing available for enterprise clients.",
  },

  projects: {
    heroTitle: [
      { text: "Trusted By " },
      { text: "Leaders", highlight: true },
    ],
    heroSubtitle:
      "From banking to mining, our verification platform powers compliance and trust across Zimbabwe's most demanding sectors.",
    categories: ["All", "Financial Services", "Public Sector", "Mining & Resources", "Legal", "Corporate"],
    items: [
      {
        id: 1,
        title: "National Banking KYC Rollout",
        category: "Financial Services",
        location: "Harare, Zimbabwe",
        year: "2024",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        desc: "Implemented real-time KYC verification for a top-5 Zimbabwean bank. Over 15,000 customer verifications processed in the first quarter alone.",
        services: ["KYC Verification", "Bulk Screening"],
      },
      {
        id: 2,
        title: "Government Employee Background Screening",
        category: "Public Sector",
        location: "Nationwide, Zimbabwe",
        year: "2023",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        desc: "Comprehensive background screening for a government ministry. Criminal checks, employment verification, and education authentication for over 3,000 civil servants.",
        services: ["Criminal Record Checks", "Employment Verification", "Education Verification"],
      },
      {
        id: 3,
        title: "Mining Contractor Pre-Employment Checks",
        category: "Mining & Resources",
        location: "Mutare, Zimbabwe",
        year: "2024",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        desc: "Pre-employment screening for a platinum mining operation. Safety-critical role verification including criminal checks and skills certification validation.",
        services: ["Criminal Record Checks", "Employment Verification"],
      },
    ],
  },

  contact: {
    heroTitle: [
      { text: "Get " },
      { text: "Verified.", highlight: true },
    ],
    heroSubtitle: "Schedule a demo, request a quote, or ask about our API integration. Our team responds within 4 business hours.",
    formTitle: "Contact Us",
    subjects: [
      "Request a Demo",
      "API Integration",
      "Volume Pricing",
      "KYC Verification",
      "Background Screening",
      "General Enquiry",
    ],
  },
};

export default siteData;
