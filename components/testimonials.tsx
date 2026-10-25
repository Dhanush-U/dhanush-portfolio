'use client';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

import { ICONS } from './icons';
import SectionHeading from './section-heading';
import { TESTINOMIALS } from '@/config/site-config';

const AvatarIcon = () => {
  return (
    <div
      style={{ borderRadius: '50%' }}
      className='border-border-color bg-dark-gray-3 relative flex aspect-square h-auto w-12.5 flex-none items-center justify-center overflow-hidden border'
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
          stroke="var(--light-gray-2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="7"
          r="4"
          stroke="var(--light-gray-2)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section
      id='testimonials'
      aria-labelledby='testimonials - Words From Happy Clients'
      className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-7.5 overflow-visible'
    >
      <div className='relative h-auto w-full flex-none'>
        <SectionHeading
          title='Words From Happy Clients'
          description='Discover what satisfied clients have to say about their experiences working with me.'
          icon={
            <ICONS.starlig
              width={30}
              height={30}
            />
          }
        />
      </div>

      <div
  className='relative w-full overflow-visible p-0'
  style={{
    columns: '2',
    columnGap: '10px',
  }}
>
  {TESTINOMIALS?.map((testimonial, index) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ breakInside: 'avoid', marginBottom: '10px' }}
      className='w-full'
      key={testimonial.id}
    >
            <div className='bg-very-dark-gray border-dark-gray-3 relative flex h-min flex-col flex-nowrap items-start justify-start gap-5 overflow-visible rounded-xl border p-5'>
              <div className='relative flex h-min w-full flex-none flex-nowrap justify-start gap-2 overflow-visible p-0'>

                {/* Avatar — gender-neutral icon */}
                <AvatarIcon />

                {/* Name + location */}
                <div className='relative flex h-min flex-1 flex-col flex-nowrap items-start justify-center gap-1 overflow-visible p-0'>
                  <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                    <p className='text-light-gray-4 text-[18px] font-bold'>{testimonial.name}</p>
                  </div>
                  <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-0.5 overflow-visible p-0'>
                    <span>
                      <ICONS.location fill='var(--light-gray-2)' />
                    </span>
                    <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                      <p className='text-light-gray-2 text-[12px] font-medium'>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className='relative flex h-auto flex-none shrink-0 justify-start wrap-break-word whitespace-pre-wrap'>
                <blockquote className='text-light-gray-2 text-[15px] font-medium whitespace-pre-wrap'>
                  {testimonial.description}
                </blockquote>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}