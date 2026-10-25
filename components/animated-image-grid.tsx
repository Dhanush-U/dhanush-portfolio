/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { motion } from 'motion/react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type React from 'react';
import { useEffect, useState } from 'react';

interface AnimatedImageGridProps {
  image: string | StaticImageData;
}

const AnimatedImageGrid: React.FC<AnimatedImageGridProps> = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const reveal = () => setIsLoaded(true);

    // On first load the full-screen preloader covers the page, so wait until it
    // finishes sliding away before revealing the image. On client-side navigation
    // (no preloader running) just reveal shortly after mount.
    if (typeof window !== 'undefined' && window.__preloaderActive) {
      window.addEventListener('preloaderDone', reveal, { once: true });
      return () => window.removeEventListener('preloaderDone', reveal);
    }

    const t = setTimeout(reveal, 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className='bg-image-bg border-border-color/20 relative aspect-auto h-auto w-44 flex-none rounded-[10px] border sm:w-65 overflow-hidden'>
      <Image
        src={image}
        alt='Profile image'
        width={300}
        height={300}
        className='h-full w-full object-cover rounded-[10px]'
        preload
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />

      {/* Grids */}
      <div className='absolute inset-0 grid grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,auto)]'>
        {Array.from({ length: 100 }).map((_, index) => (
          <motion.div
            key={index}
            className='bg-image-bg'
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoaded ? 0 : 1 }}
            transition={{
              duration: 0.6,
              delay: (index % 10) * 0.12,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedImageGrid;