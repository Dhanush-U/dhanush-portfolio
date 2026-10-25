'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { SHOW_CASE_PROJECTS } from '@/config/site-config';
import SectionHeading from './section-heading';
import { ICONS } from './icons';

export default function ShowCaseProjects({
  isMore = false,
  showData = SHOW_CASE_PROJECTS.length,
}: {
  isMore?: boolean;
  showData?: number;
}) {
  return (
    <section
      id="projects"
      aria-labelledby='showcase-heading'
      className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-7.5 overflow-visible'
    >
      <div className='relative h-auto w-full flex-none'>
        <SectionHeading
          title='Selected Work'
          description='A few projects I have designed and shipped — tap any to read the full case study.'
          icon={
            <ICONS.fly
              width={30}
              height={30}
            />
          }
        />
      </div>

      <div className='relative flex h-min w-full flex-none flex-wrap items-start justify-start gap-2.5 overflow-visible p-0'>
        {SHOW_CASE_PROJECTS?.slice(0, showData).map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='relative h-auto w-full flex-none'
            key={item.id}
          >
            <Link
              href={`/work/${item.slug}`}
              aria-label={`Read the ${item.title} case study`}
              className='group bg-very-dark-gray border-dark-gray-3 hover:border-dark-gray-4 relative flex h-min w-full flex-col flex-nowrap items-center justify-start gap-5 overflow-visible rounded-xl border p-4 transition-all lg:flex-row lg:p-[8px_24px_8px_8px]'
            >
              <div className='ring-border-color/30 relative h-full min-h-64 w-full overflow-hidden rounded-xl ring-1 lg:flex-1'>
                <figure className='relative inset-0 h-full w-full rounded-xl lg:absolute'>
                  <Image
                    src={item.image}
                    className='block h-full w-full rounded-[inherit] object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]'
                    fill
                    sizes='(max-width: 1024px) 100vw, 480px'
                    alt={item.title}
                    quality={90}
                    />
                </figure>
              </div>

              <div className='relative flex h-min w-full flex-1 flex-col flex-nowrap items-start justify-start gap-5 overflow-visible p-0'>
                <div className='relative flex h-min w-full flex-1 flex-col flex-nowrap items-start justify-start gap-4 overflow-visible p-0'>
                  <div className='flex w-full items-center justify-between gap-5'>
                    <h3 className='text-[22px] leading-[1.2em] font-bold text-white'>{item.title}</h3>
                    <span className='text-light-gray-2 flex-none transition-all duration-500 group-hover:-rotate-45 group-hover:text-white'>
                      <ICONS.rightArrow
                        width={22}
                        height={22}
                      />
                    </span>
                  </div>

                  <div className='border-dark-gray-3 flex w-full flex-wrap items-center gap-x-3 gap-y-1 border-y px-0 py-3'>
                    <p className='text-light-gray-2 text-[15px] font-medium'>{item.type}</p>
                    <span className='bg-medium-gray aspect-square size-1.25 flex-none rounded-full' />
                    <p className='text-light-gray-2 text-[15px] font-medium'>{item.year}</p>
                    <span className='bg-medium-gray aspect-square size-1.25 flex-none rounded-full' />
                    <p className='text-light-gray-2 text-[15px] font-medium'>{item.role}</p>
                  </div>
                </div>

                <p className='text-light-gray-2 text-[15px] font-medium'>{item.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {isMore && (
        <div className='relative block h-auto w-full flex-1'>
          <Link
            href='/services'
            className='bg-almost-black border-dark-gray-4 group hover:bg-dark-gray-4 relative flex h-min w-full cursor-pointer flex-nowrap items-center justify-center gap-1.5 overflow-visible rounded-[10px] border p-[14px_18px] transition-all duration-500'
          >
            <div className='relative flex h-auto w-auto flex-none shrink-0 justify-start whitespace-pre opacity-70 transition-all duration-500 group-hover:opacity-100'>
              <p className='font-IBM_Plex_Mono text-very-light-gray text-[15px] font-medium uppercase'>
                View All projects
              </p>
            </div>
            <span className='relative aspect-square h-auto w-5 flex-none overflow-hidden opacity-70 transition-all duration-500 group-hover:opacity-100'>
              <ICONS.rightArrow
                height={10}
                width={10}
                className='block h-full w-full -rotate-45 rounded-[inherit] object-cover object-center'
              />
            </span>
          </Link>
        </div>
      )}
    </section>
  );
}