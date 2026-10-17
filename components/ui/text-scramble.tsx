'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

type TextScrambleProps = {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number; // total time of the scramble, in seconds
  speed?: number; // time between frames, in seconds (smaller = faster flicker)
  characterSet?: string; // characters used while scrambling
  trigger?: boolean; // when this turns true, the scramble runs
  onScrambleComplete?: () => void;
};

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function TextScramble({
  children,
  as: Component = 'span',
  className,
  duration = 0.6,
  speed = 0.03,
  characterSet = DEFAULT_CHARS,
  trigger = false,
  onScrambleComplete,
}: TextScrambleProps) {
  const text = children;
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!trigger) {
      setDisplay(text);
      return;
    }

    const steps = Math.max(1, Math.round(duration / speed));
    let frame = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(
      () => {
        const progress = frame / steps;
        const revealCount = Math.floor(progress * text.length);

        const next = text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < revealCount) return text[i];
            return characterSet[Math.floor(Math.random() * characterSet.length)];
          })
          .join('');

        setDisplay(next);
        frame++;

        if (frame > steps) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplay(text);
          onScrambleComplete?.();
        }
      },
      speed * 1000,
    );

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, text]);

  return <Component className={className}>{display}</Component>;
}