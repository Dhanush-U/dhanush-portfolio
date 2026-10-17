import AboutSection from './_components/about-client';
import { createMetadata } from '@/lib/seo';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/json-ld';
import { JsonLd } from '@/components/json-ld';
import { SITE_CONFIG } from '@/config/site-config';

export const metadata = createMetadata({
  title: 'About',
  description:
    'About Dhanush U — UI/UX and WordPress designer specializing in conversion-focused, accessible, and visually polished web experiences.',
  path: '/about',
});

export default function AboutPage() {
  const schema = createWebPageSchema({
    name: `About | ${SITE_CONFIG.profile.displayName}`,
    description: 'About Dhanush U — UI/UX and WordPress designer.',
    path: '/about',
  });
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema} />

      <AboutSection />
    </>
  );
}

const breadcrumbSchema = createBreadcrumbSchema([
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
]);