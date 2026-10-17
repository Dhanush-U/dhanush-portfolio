'use client';
import { useState } from 'react';
import { Download } from 'lucide-react';
import { TextScramble } from '@/components/ui/text-scramble';

interface ResumeButtonProps {
  label: string;
}

export default function ResumeButton({ label }: ResumeButtonProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href='/resume.pdf'
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={() => setHovered(true)}
      className='bg-almost-black hover:bg-dark-gray-4 border-dark-gray-4 group relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border p-[14px_18px] transition-all duration-300'
    >
      <div className='flex items-center justify-center gap-2'>
        {/* Icon */}
        <div className='relative flex aspect-square h-5 w-5 items-center justify-center overflow-hidden opacity-70 transition-all duration-500 group-hover:opacity-100'>
          <Download size={20} />
        </div>

        {/* Text */}
        <div className='h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre opacity-70 group-hover:opacity-100'>
          <TextScramble
            as='p'
            trigger={hovered}
            speed={0.03}
            onScrambleComplete={() => setHovered(false)}
            className='text-very-light-gray font-IBM_Plex_Mono text-[15px] leading-[100%] font-medium uppercase'
          >
            {label}
          </TextScramble>
        </div>
      </div>
    </a>
  );
}