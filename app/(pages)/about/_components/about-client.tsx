'use client';

import { motion } from 'motion/react';
import { Award, Briefcase, Code2, GraduationCap, User } from 'lucide-react';

import SectionHeading from '@/components/section-heading';

const ABOUT_PARAGRAPHS = [
  "I'm a UI/UX and WordPress designer based in Tamil Nadu, India, with 3+ years designing high-performing, conversion-focused digital experiences for a WordPress product company and client websites. I design end to end in Figma and take work all the way through to polished, responsive, live pages.",
  "Unusually for a designer, I also ship my own code — I've built and released a Gutenberg block through a Figma-to-GitHub workflow. I'm experienced with design systems at scale (400+ UI patterns and 50+ templates), SEO and performance-conscious design, and cross-functional collaboration in a fully remote, distributed team.",
];

const EXPERIENCE = [
  {
    company: 'Brainstorm Force',
    link: 'https://brainstormforce.com',
    label: 'WordPress Product Company',
    year: '2024 - Present',
    title: 'Design Specialist',
    description:
      "Design across BSF's flagship WordPress products — Astra, Spectra, SureCart, Starter Templates and ZipWP. Led the full redesign and rebuild of the Spectra website, preserving SEO rankings while lifting conversions. Contributed 400+ scalable UI patterns and 50+ templates, and shipped a Marquee Gutenberg block end to end, from Figma to production, via an AI-assisted Figma-to-GitHub workflow.",
  },
  {
    company: 'Cubic Designz',
    link: 'https://cubicdesignz.com',
    label: 'Design Studio',
    year: '2024',
    title: 'Senior Web Developer (UI / Web)',
    description:
      'Designed and implemented 10+ interactive GSAP animations that increased user engagement by 30%. Delivered custom UI in Figma and front-end code, improved SEO and page speed, and mentored a team of five to improve delivery efficiency.',
  },
  {
    company: 'FyerX',
    link: 'https://fyerx.com',
    label: 'Digital Marketing Agency',
    year: '2023 - 2024',
    title: 'Web Designer & Developer',
    description:
      'Designed and developed 30+ responsive websites across industries and launched 50+ sites on WordPress and Shopify. Improved SEO rankings for a 40% increase in organic traffic in six months and reduced page load times by 30%.',
  },
];

const EDUCATION = [
  {
    institution: 'Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College',
    year: '2019 - 2023',
    title: 'B.E. Computer Science & Engineering',
    description: 'Graduated with a CGPA of 8.46.',
  },
];

const SKILLS = [
  { name: 'UI/UX Design', value: 92 },
  { name: 'Figma', value: 95 },
  { name: 'WordPress', value: 90 },
  { name: 'HTML, CSS & JavaScript', value: 85 },
  { name: 'GSAP Animation', value: 80 },
  { name: 'SEO & Performance', value: 85 },
  { name: 'Elementor', value: 88 },
  { name: 'Adobe Photoshop', value: 85 },
];

const CERTIFICATIONS = [
  {
    title: 'Google UX Design Certificate',
    issuer: 'Foundations of UX Design — Google',
  },
  {
    title: 'UI/UX Design Certification',
    issuer: 'School of Techies',
  },
];

export default function AboutSection() {
  return (
    <div className='space-y-16'>
      {/* About Me */}
      <section className='space-y-7.5'>
        <SectionHeading
          title='About Me'
          description='A quick introduction to who I am and how I work.'
          icon={<User size={28} />}
        />
        <div className='bg-very-dark-gray border-dark-gray-3 space-y-4 rounded-xl border p-6'>
          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
            <p
              key={index}
              className='text-light-gray-2 text-[15px] leading-[170%] font-medium'
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className='space-y-7.5'>
        <SectionHeading
          title='Experience'
          description='Where I have worked and what I have shipped along the way.'
          icon={<Briefcase size={28} />}
        />
        <div className='flex w-full flex-col gap-2.5'>
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-very-dark-gray border-dark-gray-3 flex w-full flex-col gap-5 rounded-xl border p-4 sm:p-6'
            >
              <div className='flex w-full items-center justify-between'>
                <div className='flex flex-1 items-center gap-2'>
                  <div className='bg-dark-gray-4 border-border-color flex items-center justify-center rounded-lg border p-2.5'>
                    <Briefcase
                      size={26}
                      className='text-light-gray-3'
                    />
                  </div>
                  <div className='flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-1.5'>
                    <div className='flex flex-col'>
                      <p className='text-light-gray-4 text-[20px] font-bold'>{exp.company}</p>
                      <a
                        href={exp.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-light-gray-2 text-[15px] font-medium'
                      >
                        {exp.link.replace('https://', '')}
                      </a>
                    </div>
                    <div className='bg-dark-gray-2 border-dark-gray-3 rounded-3xl border p-[4px_10px]'>
                      <p className='text-light-gray-2 text-xs font-medium sm:text-[14px]'>
                        {exp.label}
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className='text-light-gray-2 hidden text-lg font-bold sm:block'>{exp.year}</h3>
              </div>
              <div className='border-dark-gray-3 bg-darkest-gray flex w-full flex-col gap-1 rounded-xl border p-4'>
                <p className='text-light-gray-4 text-base font-bold'>{exp.title}</p>
                <p className='text-light-gray-2 text-[15px] leading-[160%] font-medium'>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className='space-y-7.5'>
        <SectionHeading
          title='Education'
          description='My academic background.'
          icon={<GraduationCap size={28} />}
        />
        <div className='flex w-full flex-col gap-2.5'>
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-very-dark-gray border-dark-gray-3 flex w-full flex-col gap-5 rounded-xl border p-4 sm:p-6'
            >
              <div className='flex w-full items-center justify-between gap-3'>
                <div className='flex flex-1 items-center gap-2'>
                  <div className='bg-dark-gray-4 border-border-color flex flex-none items-center justify-center rounded-lg border p-2.5'>
                    <GraduationCap
                      size={26}
                      className='text-light-gray-3'
                    />
                  </div>
                  <p className='text-light-gray-4 text-[17px] font-bold sm:text-[20px]'>
                    {edu.institution}
                  </p>
                </div>
                <h3 className='text-light-gray-2 hidden flex-none text-lg font-bold sm:block'>
                  {edu.year}
                </h3>
              </div>
              <div className='border-dark-gray-3 bg-darkest-gray flex w-full flex-col gap-1 rounded-xl border p-4'>
                <p className='text-light-gray-4 text-base font-bold'>{edu.title}</p>
                <p className='text-light-gray-2 text-[15px] font-medium'>{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className='space-y-7.5'>
        <SectionHeading
          title='Skills'
          description='Tools and areas I work in day to day.'
          icon={<Code2 size={28} />}
        />
        <div className='grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2'>
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className='mb-2 flex items-center justify-between'>
                <p className='text-light-gray-4 text-[15px] font-semibold'>{skill.name}</p>
                <p className='text-light-gray-2 text-[15px] font-medium'>{skill.value}%</p>
              </div>
              <div className='bg-dark-gray-3 h-2 w-full overflow-hidden rounded-full'>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.value}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className='h-full rounded-full bg-white/80'
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className='space-y-7.5'>
        <SectionHeading
          title='Certifications'
          description='Courses and credentials I have earned.'
          icon={<Award size={28} />}
        />
        <div className='grid grid-cols-1 gap-2.5 lg:grid-cols-2'>
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-very-dark-gray border-dark-gray-3 flex items-center gap-3 rounded-xl border p-6'
            >
              <div className='bg-dark-gray-4 border-border-color flex flex-none items-center justify-center rounded-lg border p-2.5'>
                <Award
                  size={24}
                  className='text-light-gray-3'
                />
              </div>
              <div className='flex flex-col'>
                <p className='text-light-gray-4 text-base font-bold'>{cert.title}</p>
                <p className='text-light-gray-2 text-[15px] font-medium'>{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}