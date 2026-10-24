import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import { SHOW_CASE_PROJECTS } from '@/config/site-config';
import { createMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return SHOW_CASE_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = SHOW_CASE_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/work/${project.slug}`,
  });
}

export default async function WorkCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = SHOW_CASE_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className='flex w-full flex-col gap-12'>
      {/* Back link */}
      <Link
        href='/services'
        className='text-light-gray-2 hover:text-light-gray-4 inline-flex w-max items-center gap-2 text-sm font-medium transition-colors'
      >
        <ArrowLeft size={16} /> Back to work
      </Link>

      {/* Page header */}
      <header className='flex flex-col gap-5'>
        <div className='text-light-gray-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium'>
          <span>{project.type}</span>
          <span className='bg-medium-gray size-1 flex-none rounded-full' />
          <span>{project.year}</span>
          <span className='bg-medium-gray size-1 flex-none rounded-full' />
          <span>{project.role}</span>
        </div>
        <h1 className='font-IBM_Plex_Mono text-light-gray-4 text-[clamp(2rem,6vw,3.5rem)] leading-[1.05] font-bold'>
          {project.title}
        </h1>
        {project.links.length > 0 && (
          <div className='flex flex-wrap gap-3 pt-1'>
            {project.links.map((l) => (
              <Link
                key={l.url}
                href={l.url}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-almost-black border-dark-gray-3 hover:bg-dark-gray-4 text-very-light-gray inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-[15px] font-medium transition-all'
              >
                {l.label}
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Cover */}
      <div className='border-dark-gray-3 bg-very-dark-gray relative aspect-[16/10] w-full overflow-hidden rounded-2xl border'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='object-cover'
          sizes='100vw'
          priority
        />
      </div>

      {/* Body */}
      <div className='flex flex-col gap-10'>
        <Section title='Overview'>{project.overview}</Section>
        <Section title='The challenge'>{project.challenge}</Section>
        <ListSection
          title='What I did'
          items={project.contributions}
        />
        <ListSection
          title='The outcome'
          items={project.outcome}
        />
      </div>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {project.gallery.map((src, i) => (
            <div
              key={i}
              className='border-dark-gray-3 bg-very-dark-gray relative aspect-video overflow-hidden rounded-xl border'
            >
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                className='object-cover'
                sizes='(max-width: 640px) 100vw, 50vw'
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className='flex flex-col gap-3'>
      <h2 className='text-light-gray-4 text-xl font-bold'>{title}</h2>
      <p className='text-light-gray-2 max-w-[65ch] text-[16px] leading-[170%] font-medium'>
        {children}
      </p>
    </section>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section className='flex flex-col gap-3'>
      <h2 className='text-light-gray-4 text-xl font-bold'>{title}</h2>
      <ul className='flex flex-col gap-2'>
        {items.map((it, i) => (
          <li
            key={i}
            className='text-light-gray-2 flex gap-3 text-[16px] leading-[160%] font-medium'
          >
            <span className='bg-light-gray-2 mt-[11px] size-1.5 shrink-0 rounded-full' />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}