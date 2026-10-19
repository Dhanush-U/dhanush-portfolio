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
    link: 'https://www.behance.net/dhanushu', // CHANGE: confirm your exact Behance URL
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
  },
  {
    id: 2,
    title: 'Years of Experience',
    value: 3,
  },
  {
    id: 3,
    title: 'Websites Launched',
    value: 80,
  },
  {
    id: 4,
    title: 'UI Patterns Built',
    value: 400,
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
      'Design across flagship WordPress products including Astra, Spectra and ZipWP. Led the Spectra website redesign and shipped a Gutenberg block end to end, from Figma to production.',
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
      'Built 10+ interactive GSAP animations, delivered custom UI in Figma and front-end code, and mentored a team of five to improve delivery efficiency.',
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
      'Designed and launched 50+ responsive websites on WordPress and Shopify, lifting organic traffic by 40% and cutting page load times by 30%.',
    link: 'fyerx.com',
    logo: ICONS.experienceCompaniesLogos.Athon,
  },
];

export const STACK_LISTS = [
  {
    id: 1,
    title: 'Figma',
    description: 'Interface Design Tool',
    logo: ICONS.stackLists.figma,
    link: 'https://www.figma.com',
  },
  {
    id: 2,
    title: 'Notion',
    description: 'Productivity Tool',
    logo: ICONS.stackLists.notion,
    link: 'https://www.notion.so',
  },
  {
    id: 3,
    title: 'Webflow',
    description: 'No Code Design Tool',
    logo: ICONS.stackLists.webflow,
    link: 'https://www.webflow.com',
  },
  {
    id: 4,
    title: 'Framer',
    description: 'No Code Design Tool',
    logo: ICONS.stackLists.framer,
    link: 'https://www.framer.com',
  },
  {
    id: 5,
    title: 'Slack',
    description: 'Productivity Tool',
    logo: ICONS.stackLists.slack,
    link: 'https://slack.com',
  },
  {
    id: 6,
    title: 'Asana',
    description: 'Productivity Tool',
    logo: ICONS.stackLists.asana,
    link: 'https://www.asana.com',
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
    title: 'Spectra Website Redesign',
    description:
      'Led a full redesign and rebuild, preserving SEO rankings while lifting conversions across all devices.',
    link: 'wpspectra.com',
    type: 'Product Website',
    theme: 'Dark',
    pages: 8,
    image: '/images/projects/project-1.webp',
  },
  {
    id: 2,
    title: 'Spectra Marquee Block',
    description:
      'Designed and shipped a Gutenberg block end to end, from Figma to production, via a GitHub workflow.',
    link: 'wpspectra.com',
    type: 'WordPress Block',
    theme: 'Dark',
    pages: 1,
    image: '/images/projects/project-2.webp',
  },
  {
    id: 3,
    title: 'GSAP Animation Suite',
    description:
      'Built 10+ interactive scroll and motion animations that increased user engagement by 30%.',
    link: 'cubicdesignz.com',
    type: 'Interactive',
    theme: 'Dark',
    pages: 3,
    image: '/images/projects/project-3.webp',
  },
  {
    id: 4,
    title: 'Client Website Collection',
    description:
      'A set of responsive WordPress and Shopify sites delivered across industries, focused on UX and speed.',
    link: 'fyerx.com',
    type: 'Web Design',
    theme: 'Light',
    pages: 30,
    image: '/images/projects/project-4.webp',
  },
];

// NOTE: These are placeholder testimonials. Replace them with real client
// quotes before you share the site — do not publish invented testimonials.
export const TESTINOMIALS = [
  {
    id: 1,
    name: 'Client name',
    description:
      'Dhanush turned our outdated website into a fast, modern, conversion-focused experience. The attention to detail stood out.',
    location: 'Add location',
    avatar: '/images/clients/client-1.webp',
  },
  {
    id: 2,
    name: 'Client name',
    description:
      'Clear communication, sharp design sense, and he ships his own code. The project came in polished and on time.',
    location: 'Add location',
    avatar: '/images/clients/client-2.webp',
  },
  {
    id: 3,
    name: 'Client name',
    description:
      'Our landing page conversions improved noticeably after the redesign. Highly recommend working with him.',
    location: 'Add location',
    avatar: '/images/clients/client-3.webp',
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
    followers: '2.5K', // CHANGE: your real numbers, or tell me to remove this section
    url: 'https://www.linkedin.com/in/dhanush-u',
    icon: ICONS.socials.linkedin,
  },
  {
    platform: 'Github',
    followers: '300',
    url: 'https://github.com/Dhanush-U',
    icon: ICONS.socials.github,
  },
  {
    platform: 'Behance',
    followers: '1.2K',
    url: 'https://www.behance.net/dhanushu',
    icon: ICONS.socials.behance,
  },
  {
    platform: 'Instagram',
    followers: '3K',
    url: 'https://www.instagram.com/',
    icon: ICONS.socials.instagram,
  },
];
