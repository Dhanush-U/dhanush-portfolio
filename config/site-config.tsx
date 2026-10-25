import { StackIcons } from '@/components/stack-icons';
import { ICONS } from '@/components/icons';
import { Home, Mail, User, Zap } from 'lucide-react';

export const SITE_CONFIG = {
  profile: {
    name: 'Dhanush',
    displayName: 'Dhanush U',
    username: 'Dhanush-U',
    avatar: '/images/profile.png',
    description:
      'UI/UX and WordPress designer from Tamil Nadu, India, with 3+ years crafting high-performing, conversion-focused web experiences — designing in Figma and shipping polished, responsive, live pages.',
    jobTitle: 'UI/UX & WordPress Designer',
  },
  // Storing Cal.com booking preferences safely in one place
  booking: {
    calUsername: 'dhanush-slkkfi', // CHANGE: your Cal.com username (needs a free cal.com account), or we can switch this button to email
    namespace: '15min',
    defaultLayout: 'month_view', // "month_view" | "week_view" | "column_view"
  },

  SITE_INFO: {
    title: 'Dhanush U • UI/UX & WordPress Designer',
    description:
      'The portfolio of Dhanush U — UI/UX and WordPress designer specializing in conversion-focused, accessible, and visually polished web experiences.',
    url: process.env.SITE_URL || 'https://itzdhanushu.vercel.app',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const MAIN_MENU = [
  {
    title: 'Home',
    href: '/',
    icon: <Home />,
  },
  {
    title: 'About',
    href: '/about',
    icon: <User />,
  },
  {
    title: 'Services',
    href: '/services',
    icon: <Zap />,
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <Mail />,
  },
];

export const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    icon: ICONS.socials.linkedin,
    link: 'https://www.linkedin.com/in/dhanush-u', // CHANGE: confirm your exact LinkedIn URL
  },
  {
    label: 'Github',
    icon: ICONS.socials.github,
    link: 'https://github.com/Dhanush-U',
  },
  {
    label: 'Behance',
    icon: ICONS.socials.behance,
    link: 'https://www.behance.net/dhanushu1', // CHANGE: confirm your exact Behance URL
  },
];

export const LOGOS_CAROUSEL = [
  {
    name: 'Discord',
    link: 'https://discord.com',
    icon: ICONS.logosCarousel.discord,
  },
  {
    name: 'Dribbble',
    link: 'https://dribbble.com',
    icon: ICONS.logosCarousel.dribbble,
  },
  {
    name: 'Facebook',
    link: 'https://facebook.com',
    icon: ICONS.logosCarousel.facebook,
  },
  {
    name: 'Pinterest',
    link: 'https://pinterest.com',
    icon: ICONS.logosCarousel.pinterest,
  },
  {
    name: 'SnapChat',
    link: 'https://snapchat.com',
    icon: ICONS.logosCarousel.snapchat,
  },
  {
    name: 'Spotify',
    link: 'https://open.spotify.com',
    icon: ICONS.logosCarousel.spotify,
  },
];

export const COUNTER_LISTS = [
  {
    id: 1,
    title: 'Happy Clients',
    value: 30,
    symbol: '+',
  },
  {
    id: 2,
    title: 'Years of Experience',
    value: 3,
    symbol: '+',
  },
  {
    id: 3,
    title: 'Websites Launched',
    value: 150,
    symbol: '+',
  },
  {
    id: 4,
    title: 'Client Satisfaction',
    value: 100,
    symbol: '%',
  },
];

export const EXPERIENCE_LISTS = [
  {
    id: 1,
    year: '2024 - Present',
    title: 'Design Specialist',
    company: 'Brainstorm Force',
    label: 'WordPress Product Company',
    description:
       "I design across Brainstorm Force's flagship WordPress products — Astra, Spectra, SureCart, and ZipWP — shaping interfaces and a large, consistent design system. I led the redesigns of both the Spectra and SureCart websites, preserving their SEO rankings while making them more conversion-focused, and handled the UI/UX for the SureCart plugin, including its onboarding experience, from Figma to production.",
    link: 'brainstormforce.com',
    logo: ICONS.experienceCompaniesLogos.Vortex,
  },
  {
    id: 2,
    year: '2024',
    title: 'Senior Web Developer',
    company: 'Cubic Designz',
    label: 'Design Studio',
    description:
      'At Cubic Designz I designed and built interactive, motion-rich interfaces, including smooth GSAP animations that lifted user engagement by around 30%. Beyond the design work, I improved SEO and page speed, and mentored a small team of five to help everyone ship cleaner work, faster.',
    link: 'cubicdesignz.com', 
    logo: ICONS.experienceCompaniesLogos.PixelWorks,
  },
  {
    id: 3,
    year: '2023 - 2024',
    title: 'Web Designer & Developer',
    company: 'FyerX',
    label: 'Digital Marketing Agency',
    description:
      'This was my first full-time role, where I designed and launched 50+ responsive websites for clients across a range of industries using WordPress and Shopify. I focused on clean, user-friendly design and strong performance — growing organic traffic by 40% and cutting page load times by nearly a third.',
    link: 'fyerx.com',
    logo: ICONS.experienceCompaniesLogos.Athon,
  },
];

export const STACK_LISTS = [
  {
    id: 1,
    title: 'Figma',
    description: 'Interface Design',
    logo: ICONS.stackLists.figma,
    link: 'https://www.figma.com',
  },
  {
    id: 2,
    title: 'WordPress',
    description: 'CMS & Development',
    logo: StackIcons.wordpress,
    link: 'https://wordpress.org',
  },
  {
    id: 3,
    title: 'HTML & CSS',
    description: 'Front-end',
    logo: StackIcons.html,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    id: 4,
    title: 'JavaScript',
    description: 'Interactivity',
    logo: StackIcons.javascript,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 5,
    title: 'GSAP',
    description: 'Web Animation',
    logo: StackIcons.gsap,
    link: 'https://gsap.com',
  },
  {
    id: 6,
    title: 'Git & GitHub',
    description: 'Version Control',
    logo: ICONS.socials.github,
    link: 'https://github.com',
  },
];

export const SERVICES = [
  {
    id: 1,
    title: 'UI/UX Design',
    description: 'Designing intuitive, user-friendly interfaces that turn visitors into customers.',
    icon: ICONS.services.webDesign,
  },
  {
    id: 2,
    title: 'WordPress Development',
    description: 'Building fast, scalable WordPress sites with clean, custom front-end code.',
    icon: ICONS.services.webdev,
  },
  {
    id: 3,
    title: 'Landing Page Design',
    description: 'Crafting conversion-focused landing pages that look sharp on every device.',
    icon: ICONS.services.graphicDesign,
  },
  {
    id: 4,
    title: 'SEO & Performance',
    description: 'Improving visibility and page speed to drive organic traffic and better rankings.',
    icon: ICONS.services.seo,
  },
];

export const SHOW_CASE_PROJECTS = [
  {
    id: 1,
    slug: 'spectra',
    title: 'Spectra Website Redesign',
    type: 'Product Website',
    year: '2024 - 2025',
    role: 'Design & Build',
    image: '/images/projects/project-1.webp',
    description:
      "Led a full redesign and rebuild of the Spectra website — preserving SEO rankings while lifting conversions across every device.",
    overview:
      "Spectra is Brainstorm Force's block-based WordPress page builder, shipped with 400+ UI patterns and 50+ pre-built templates. I led the complete redesign and rebuild of its marketing website, from first Figma explorations through to live production pages — and played an active role in product quality and release cycles.",
    challenge:
      "Modernise a large, content-heavy product site and make it far more conversion-focused — without losing the hard-won SEO rankings the existing site already held.",
    contributions: [
      "Redesigned the full site in Figma with conversion-focused layouts.",
      "Rebuilt the pages to be fast and fully responsive across all devices.",
      "Contributed scalable UI patterns and templates to keep the product consistent.",
      "Shipped a Marquee Gutenberg block end to end, from Figma to production.",
      "Led quality and UAT testing across plugin releases — flagging issues and proposing ideal solutions from both a UI and implementation perspective.",
      "Played a major role in new version release cycles, ensuring shipped features met design and experience standards.",
    ],
    outcome: [
      "SEO rankings preserved through the migration.",
      "More conversion-focused layouts across the site.",
      "Faster page delivery thanks to the reusable pattern library.",
      "Cleaner releases with fewer post-launch issues through structured QA and solution-first feedback.",
    ],
    links: [{ label: 'Visit website', url: 'https://wpspectra.com' }],
    gallery: [],
  },
  {
    id: 2,
    slug: 'surecart',
    title: 'SureCart Website',
    type: 'Product Website',
    year: '2024 - Present',
    role: 'Design & Build',
    image: '/images/projects/project-2.webp',
    description:
      "Designed and built the SureCart website from scratch on WordPress — turning a complex e-commerce platform into a clear, conversion-focused story.",
    overview:
      "SureCart is Brainstorm Force's e-commerce platform for WordPress. I owned the full website from design through to delivery — working across design, development, marketing, and analytics to ship a site that converts and performs.",
    challenge:
      "The existing site lacked clear CTAs, a structured sign-up flow, and a coherent onboarding journey — making it hard for visitors to understand the product and convert. Every page needed to tell a clearer story and drive action.",
    contributions: [
      "Designed the full website from scratch in Figma, homepage through all inner pages.",
      "Built a conversion-focused structure with clear CTAs and a guided sign-up journey.",
      "Implemented proper on-page SEO across all pages.",
      "Created a unified design system for the SureCart website and plugin.",
      "Worked closely with developers to implement designed workflows accurately, reviewing and validating builds throughout.",
      "Collaborated with the marketing team on website content, messaging, and campaign landing pages.",
      "Tracked analytics and performance post-launch, feeding insights back into iterative improvements.",
      "Took full ownership of the project end to end — leading decisions, coordinating across teams, and delivering successfully.",
    ],
    outcome: [
      "A clearer product story with a structured conversion and onboarding journey.",
      "A fully redesigned, SEO-optimised website built on WordPress.",
      "A shared design system used across the website and plugin.",
      "Stronger cross-team alignment between design, development, and marketing.",
    ],
    links: [{ label: 'Visit website', url: 'https://surecart.com' }],
    gallery: [],
  },
  {
    id: 3,
    slug: 'surecart-plugin',
    title: 'SureCart Plugin UI/UX',
    type: 'Product UI/UX',
    year: '2024 - Present',
    role: 'UI/UX & Onboarding',
    image: '/images/projects/project-3.webp',
    description:
      "Redesigned the UX and UI across two SureCart platforms — the WordPress dashboard plugin and the SaaS web app — with a focus on onboarding and conversion.",
    overview:
      "SureCart runs across two interfaces: a WordPress dashboard plugin and a standalone SaaS platform. I took ownership of the UX and UI across both — rethinking onboarding, designing workflows for different business types, collaborating closely with developers, and shipping UI improvements across the product.",
    challenge:
      "The onboarding journey was built for a single user type, but SureCart serves multiple business workflows — including two distinct internal products at Brainstorm Force. Conversion rates through onboarding were low, and the journey didn't account for the different ways teams actually set up and use the platform.",
    contributions: [
      "Mapped and redesigned the onboarding UX for both the WordPress plugin and the SaaS platform.",
      "Created separate workflow journeys for different business types and internal product use cases.",
      "Designed UI improvements and new interface flows in Figma for both platforms.",
      "Contributed UI components and patterns consistent with the SureCart design system.",
      "Worked closely with developers throughout implementation — reviewing builds, flagging deviations, and ensuring the shipped product matched the designed experience.",
      "Tested new features across both platforms, identifying issues and proposing clear UI and implementation solutions.",
      "Led key UX initiatives end to end, taking full ownership from problem definition through to delivery.",
    ],
    outcome: [
      "A clearer, more structured onboarding journey across both platforms.",
      "Separate workflows designed for different business types, reducing friction for new users.",
      "More consistent UI across the WordPress plugin and SaaS dashboard.",
      "Tighter design-to-development handoff with fewer post-launch issues.",
    ],
    links: [{ label: 'View on WordPress.org', url: 'https://wordpress.org/plugins/surecart/' }],
    gallery: [],
  },
  {
    id: 4,
    slug: 'msf-clinic',
    title: 'MSHaque Clinic Website',
    type: 'Business Website',
    year: '2024',
    role: 'Design, WordPress Build & Marketing',
    image: '/images/projects/project-4.webp',
    description:
      "Designed and built a full Ayurvedic clinic website on WordPress — migrated from an old platform, optimised for SEO, and backed by a complete digital marketing setup.",
    overview:
      "MSHaque Clinic is one of India's most trusted Ayurvedic and Unani clinics, with 35+ years of expertise and branches across Kolkata, Patna, and other cities. The client needed a unique, marketing-focused website that put their doctors and treatments front and centre — something the healthcare space largely lacked. I handled the full project end to end: design, WordPress build, platform migration, SEO, and ongoing digital marketing.",
    challenge:
      "The existing website was on a different platform, underperforming on SEO, and not built for conversions or trust-building. The new site needed to look premium and modern while preserving all existing blog SEO rankings through the migration — and then go further with a full marketing setup on top.",
    contributions: [
      "Designed a unique, doctor-focused clinic website in Figma — built for trust, clarity, and conversions.",
      "Built the full site on WordPress, migrating from the old platform without losing any blog SEO rankings.",
      "Optimised the existing blog design and all on-page SEO across the site.",
      "Set up and managed the complete digital marketing stack — SEO, GEO targeting, social media management, and Meta ads.",
      "Took full ownership of the project end to end, delivering a complete package the client was 100% satisfied with.",
    ],
    outcome: [
      "A modern, conversion-focused clinic website live on WordPress.",
      "All existing blog SEO rankings preserved through the platform migration.",
      "A full digital marketing setup running — ads, social, SEO, and GEO.",
      "100% client satisfaction on delivery.",
    ],
    links: [{ label: 'Visit website', url: 'https://mshaqueclinic.com' }],
    gallery: [],
  },
];

// NOTE: These are placeholder testimonials. Replace them with real client
// quotes before you share the site — do not publish invented testimonials.
export const TESTINOMIALS = [
  {
    id: 1,
    name: 'Nasif',
    description:
      'Dhanush turned our outdated website into a fast, modern, conversion-focused experience. The attention to detail stood out.',
    location: 'West Bengal, India',
    avatar: '/images/clients/client-1.webp',
  },
  {
    id: 2,
    name: 'Selvam',
    description:
      'Clear communication, sharp design sense. The project came in polished and on time.',
    location: 'Palani, Tamil Nadu',
    avatar: '/images/clients/client-2.webp',
  },
  {
    id: 3,
    name: 'Shilpa',
    description:
      'Our landing page conversions improved noticeably after the redesign. Highly recommend working with him.',
    location: 'singapore',
    avatar: '/images/clients/client-3.webp',
  },
  {
  id: 4,
  name: 'Dr. M.S. Haque',
  description:
    'Dhanush redesigned our clinic website from scratch and handled the full migration without losing a single blog ranking. Our organic traffic noticeably improved after launch — the SEO and performance work made a real difference.',
  location: 'Kolkata, West Bengal',
  avatar: '/images/clients/client-1.webp',
},
{
  id: 5,
  name: 'Naveen',
  description:
    "Dhanush doesn't just design — he ships. From Figma to production, he owns the whole thing, catches issues before they land, and always comes with a solution. Rare to find that in a designer.",
  location: 'Chennai, Tamil Nadu',
  avatar: '/images/clients/client-5.webp',
},
];

export const SERVICES_PLANS = [
  {
    id: 1,
    service: 'UI/UX Design',
    price: '$45',
    description: 'Designing intuitive, user-friendly interfaces that turn visitors into customers.',
    completedWorks: '50+',
    experience: '3+',
    totalHoursWorked: '500 hours',
    icon: ICONS.services.webDesign,
  },
  {
    id: 2,
    service: 'WordPress Dev',
    price: '$55',
    description: 'Building fast, scalable WordPress sites with clean, custom front-end code.',
    completedWorks: '80+',
    experience: '3+',
    totalHoursWorked: '600 hours',
    icon: ICONS.services.webdev,
  },
  {
    id: 3,
    service: 'Landing Pages',
    price: '$40',
    description: 'Crafting conversion-focused landing pages that look sharp on every device.',
    completedWorks: '30+',
    experience: '3+',
    totalHoursWorked: '320 hours',
    icon: ICONS.services.graphicDesign,
  },
  {
    id: 4,
    service: 'SEO',
    price: '$50',
    description: 'Improving visibility and page speed to drive organic traffic and better rankings.',
    completedWorks: '20+',
    experience: '3+',
    totalHoursWorked: '220 hours',
    icon: ICONS.services.seo,
  },
];

export const FAQs = [
  {
    question: 'Can you work with clients remotely?',
    answer:
      'Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer:
      "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive and adaptable to various devices and screen sizes. Your website will provide an optimal user experience whether accessed via desktops, smartphones, or tablets.",
  },
  {
    question: 'How long does it typically take to complete a project?',
    answer:
      'The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities, and the client feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.',
  },
  {
    question: 'Can you integrate third-party tools into my website?',
    answer:
      'Yes, I have experience integrating various third-party tools, plugins, and platforms into websites. Whether you need to integrate e-commerce functionalities, social media integration, email marketing services, or anything else, I can recommend and help ensure smooth integration.',
  },
  {
    question: 'Do you offer website maintenance?',
    answer:
      'Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized. From performance updates to adding new features and content, I can provide ongoing support to keep your website running smoothly.',
  },
  {
    question: 'How do you handle website revisions?',
    answer:
      'I value your input and collaboration throughout the design process. Upon completing an initial design, I encourage you to provide feedback. I incorporate your suggestions and revisions to ensure the final product aligns with your vision.',
  },
  {
    question: 'Can you optimize my website?',
    answer:
      'Certainly! I incorporate search engine optimization (SEO) best practices into my development process. This includes using relevant keywords, optimizing meta tags, creating search-engine-friendly URLs, and ensuring your website has a solid foundation for better search engine visibility.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      'Payment terms may vary depending on the project scope and duration. Generally, I request an initial deposit before commencing work.',
  },
];

export const FOLLOWERS_DATA = [
  {
    platform: 'LinkedIn',
    followers: "Let's connect",
    url: 'https://www.linkedin.com/in/dhanush-u',
    icon: ICONS.socials.linkedin,
  },
  {
    platform: 'GitHub',
    followers: 'See my code',
    url: 'https://github.com/Dhanush-U',
    icon: ICONS.socials.github,
  },
  {
    platform: 'Behance',
    followers: 'View my work',
    url: 'https://www.behance.net/dhanushu1',
    icon: ICONS.socials.behance,
  },
  {
    platform: 'Instagram',
    followers: 'Follow along',
    url: 'https://www.instagram.com/dhanush.18._',
    icon: ICONS.socials.instagram,
  },
];
