'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Heart } from 'lucide-react';

const BLOCKS = 10;
const STEP_MS = 260; // time per block (~2.6s total)
const ease = [0.785, 0.135, 0.15, 0.86] as const;
const pop = { type: 'spring', stiffness: 300, damping: 18 } as const;

function Dots() {
  return (
    <div className='flex gap-1'>
      <span className='bg-light-gray-1 h-2 w-2 rounded-full' />
      <span className='bg-light-gray-1 h-2 w-2 rounded-full' />
    </div>
  );
}

function LoaderVisual() {
  const [step, setStep] = useState(1); // percent label starts at 10%

  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => (s >= BLOCKS ? s : s + 1));
    }, STEP_MS);
    return () => clearInterval(id);
  }, []);

  // blocks lag one step behind the %, but all fill at 100%
  const filled = step >= BLOCKS ? BLOCKS : step - 1;

  return (
    <div className='bg-darkest-gray font-sans fixed inset-0 overflow-hidden'>
      {/* LOADER card (centered) */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className='border-border-color bg-dark-gray-4 w-[384px] max-w-[90vw] rounded-2xl border p-3'
        >
          <div className='mb-6 flex items-center justify-between'>
            <span className='text-light-gray-2 text-sm uppercase'>Loader</span>
            <Dots />
          </div>

          <div className='bg-darkest-gray border-border-color flex gap-[7px] rounded-lg border p-2'>
            {Array.from({ length: BLOCKS }).map((_, i) => {
              const isFilled = i < filled;
              const isActive = i === filled;
              const color = isFilled
                ? 'bg-light-gray-2 dark:bg-light-gray-4'
                : isActive
                  ? 'bg-light-gray-2'
                  : 'bg-dark-gray-6';
              return (
                <motion.div
                  key={i}
                  className={`aspect-square flex-1 rounded-md transition-colors duration-200 ${color}`}
                  animate={{ scale: isActive ? [1, 0.9, 1] : 1 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              );
            })}
          </div>

          <div className='text-light-gray-4 mt-5 text-right text-base tabular-nums'>
            {step * 10}%
          </div>
        </motion.div>
      </div>

      {/* Status card (bottom-right) */}
      <AnimatePresence>
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className='border-border-color bg-dark-gray-4 absolute right-[10%] bottom-[10%] hidden w-[308px] rounded-xl border p-3 sm:block'
          >
            <div className='mb-6 flex items-center justify-between'>
              <span className='text-light-gray-2 text-sm uppercase'>Status</span>
              <Dots />
            </div>
            <p className='text-light-gray-1 px-1 text-[13px] leading-relaxed'>
              Front-end and WordPress designer crafting fast, accessible, conversion-focused web
              experiences. Setting things up for you.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticker bottom-left (tilts clockwise) */}
      <AnimatePresence>
        {step >= 7 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: 30 }}
            animate={{ opacity: 1, scale: 1, rotate: 10 }}
            transition={pop}
            className='border-border-color bg-dark-gray-4 text-light-gray-4 absolute bottom-[9%] left-[10%] w-[160px] rounded-md border p-4 font-mono text-lg leading-tight font-bold uppercase'
          >
            <p>
              Dhanush U
              <br />
              UI/UX &amp;
              <br />
              WordPress
            </p>
            <p className='text-light-gray-2 mt-5'>
              Portfolio
              <br />
              2026
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticker top-right (tilts counter-clockwise) */}
      <AnimatePresence>
        {step >= 9 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -35 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={pop}
            className='border-border-color bg-dark-gray-4 text-light-gray-4 absolute top-[10%] right-[10%] w-[170px] rounded-md border p-4 font-mono text-lg leading-tight font-bold uppercase'
          >
            <p>
              With{' '}
              <Heart className='inline h-5 w-5 -translate-y-0.5 fill-[#ef6b6b] stroke-[#ef6b6b]' />{' '}
              From
              <br />
              Tamil Nadu,
              <br />
              India
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key='preloader'
          className='fixed inset-0 z-[9999]'
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease }}
        >
          <LoaderVisual />
        </motion.div>
      )}
    </AnimatePresence>
  );
}