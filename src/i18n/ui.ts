import { projectsContent } from '@/features/projects/content';

export const ui = {
  en: {
    indexPage: {
      pageTitle: 'Nicholas Hong',
      description: 'Nicholas Hong. Quant research and trading systems.',
    },
    homePage: {
      heroGreeting: 'Hi, I’m Nicholas 👋',
      heroSubtitlePart1: 'Quant researcher & engineer',
      heroSubtitlePart2: 'building FX, vol, and macro trading systems',
      heroIntroduction: 'Exploring the edges of alpha, one model at a time.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing Nicholas Hong or a development concept',
      featuredProjectsTitle: 'Featured research',
      featuredProjectsDescription:
        'projects across systematic equities, volatility, rates, macro econometrics, machine learning and market-making systems.\n\nmethodology, result, caveats, code and writeup.',
      projectCardViewProject: 'View project',
      allProjectsLink: 'All research →',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'Skills',
      mySkillsDescription: '',
    },
    blogPage: {
      pageTitle: 'Blog',
      pageDescription: 'Short write-ups on quant research and markets.',
      title: 'Blog',
      description: 'Short write-ups on quant research and markets.',
      comingSoon: 'Nothing here yet.',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact',
      pageDescription: 'How to reach Nicholas Hong.',
      title: 'Contact',
      description: 'Email or LinkedIn is the quickest way to reach me.',
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit project',
      viewCodeButton: 'View code',
      readPaperButton: 'Read paper',
      papersTitle: 'Papers and documents',
      atAGlanceTitle: 'At a glance',
      whyTitle: 'Why it matters',
      methodologyTitle: 'Methodology',
      findingsTitle: 'Strongest findings',
      figuresTitle: 'Figures',
      caveatsTitle: 'Robustness and caveats',
      stackTitle: 'Stack',
      capabilityLabel: 'Capability:',
      statusPublished: 'Published',
      statusNegativeResult: 'Negative result · research stage complete',
      statusInProgress: 'In progress',
    },
    projectsPage: {
      title: 'Research and projects',
      metaTitle: 'Projects | Nicholas Hong',
      metaDescription:
        'Quantitative research and systems projects by Nicholas Hong: systematic equities, derivatives, rates, macro econometrics, machine learning and market-making systems.',
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Page not found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },
    zodErrors: {
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.',
      required_field_custom: 'The {fieldName} field is required.',
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
    },
    site: {
      title: 'Nicholas Hong',
      description:
        'Quant researcher & engineer building FX, vol, and macro trading systems',
      rights: 'Nicholas Hong',
    },
    nav: {
      home: 'Home',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
    },
    skillsContent: {
      languages: { title: 'Languages', description: '' },
      quantitative: { title: 'Quantitative', description: '' },
      tools: { title: 'Tools', description: '' },
    },
    projectsContent,
  },
} as const;

export const languages = {
  en: { name: 'English', flag: 'us' },
} as const;

export type LanguageCode = keyof typeof languages;
export const defaultLanguage: LanguageCode = 'en';

export const getLanguageName = (lang: LanguageCode) => languages[lang];
