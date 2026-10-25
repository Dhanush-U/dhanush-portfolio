'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  type SpringOptions,
} from 'motion/react';

const SECTION_LABELS: Record<string, string> = {
  hero: "Hey There 👋",
  experience: 'Been Around',
  stack: 'My Superpowers',
  services: 'Lets Build',
  projects: 'Case Studies',
  testimonials: 'They Said It 😄',
};

const SECTION_ORDER = [
  'hero',
  'experience',
  'stack',
  'services',
  'projects',
  'testimonials',
];

const SIZE = 31;
const LABEL_TILT_STRENGTH = 25;
const PRESS_SCALE = 0.92;

export default function CustomCursor({ showPill = false }: { showPill?: boolean }) {
  const [label, setLabel] = useState("It's Me ✌️");
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [pillVisible, setPillVisible] = useState(true);
  const lastSampleRef = useRef<{ x: number; y: number; t: number } | null>(null);

  const isDark = true;
  const COLOR = '#ffffff';
  const TEXT_COLOR ='#0a0a0a';

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia('(pointer: coarse)');
    const sync = () => setIsTouchDevice(!!mql.matches);
    sync();
    mql.addEventListener('change', sync);
    return () => mql.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => { document.body.style.cursor = ''; };
  }, []);

  const arrowSpring = useMemo<SpringOptions>(
    () => ({ stiffness: 380, damping: 32, mass: 0.6 }), []
  );
  const labelSpringCfg = useMemo<SpringOptions>(
    () => ({ stiffness: 220, damping: 26, mass: 0.7 }), []
  );

  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const arrowX = useSpring(mouseX, arrowSpring);
  const arrowY = useSpring(mouseY, arrowSpring);
  const labelX = useSpring(mouseX, labelSpringCfg);
  const labelY = useSpring(mouseY, labelSpringCfg);

  const resolvedLabelOffset = { x: SIZE * 0.9, y: SIZE * 0.2 + 6 };
  const labelTranslateX = useTransform(labelX, (v) => v + resolvedLabelOffset.x);
  const labelTranslateY = useTransform(labelY, (v) => v + resolvedLabelOffset.y);

  const scaleMV = useMotionValue(1);
  useEffect(() => {
    const controls = animate(scaleMV, pressed ? PRESS_SCALE : 1, {
      type: 'spring', stiffness: 500, damping: 28, mass: 0.5,
    });
    return () => controls.stop();
  }, [pressed, scaleMV]);

  const labelTiltTarget = useMotionValue(0);
  const labelRotation = useSpring(labelTiltTarget, {
    stiffness: 200, damping: 24, mass: 0.6,
  });

  useEffect(() => {
    if (isTouchDevice || typeof window === 'undefined') return;

    const getSectionAtY = (y: number) => {
      for (let i = SECTION_ORDER.length - 1; i >= 0; i--) {
        const id = SECTION_ORDER[i];
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (y >= rect.top && y <= rect.bottom) return id;
      }
      return null;
    };

   const isOverExcluded = (x: number, y: number): boolean => {
  const el = document.elementFromPoint(x, y);
  if (!el) return false;

  // Check for footer tag
  let current: Element | null = el;
  while (current && current !== document.body) {
    if (current.tagName.toLowerCase() === 'footer') return true;
    if (current.tagName.toLowerCase() === 'aside') return true;
    current = current.parentElement;
  }

  // Check left sidebar by X position
  const leftSidebar = document.querySelector('[class*="max-w-\\[13\\%\\]"]');
  if (leftSidebar) {
    const rect = leftSidebar.getBoundingClientRect();
    if (x >= rect.left && x <= rect.right) return true;
  }

  // Check right sidebar by X position
  const rightSidebar = document.querySelector('aside');
  if (rightSidebar) {
    const rect = rightSidebar.getBoundingClientRect();
    if (x >= rect.left && x <= rect.right) return true;
  }

  return false;
};

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
      const last = lastSampleRef.current;

      if (last && showPill) {
        const dt = Math.max(1, now - last.t);
        const vx = ((x - last.x) / dt) * 1000;
        const vy = ((y - last.y) / dt) * 1000;
        const speed = Math.hypot(vx, vy);
        const norm = Math.min(1, speed / 1500);
        const sign = vx === 0 ? 0 : vx > 0 ? 1 : -1;
        labelTiltTarget.set(sign * norm * LABEL_TILT_STRENGTH);
      }

      lastSampleRef.current = { x, y, t: now };
      mouseX.set(x);
      mouseY.set(y);
      setHovering(true);

      if (showPill) {
        const excluded = isOverExcluded(x, y);
        setPillVisible(!excluded);
        if (!excluded) {
          const activeId = getSectionAtY(y);
          if (activeId) setLabel(SECTION_LABELS[activeId]);
        }
      }
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      setHovering(false);
      lastSampleRef.current = null;
      labelTiltTarget.set(0);
    };
    const onEnter = () => setHovering(true);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      setPressed(false);
    };
  }, [isTouchDevice, mouseX, mouseY, labelTiltTarget, showPill]);

  const visible = !isTouchDevice && hovering;

  if (isTouchDevice) return null;

  return (
    <>
      {/* Arrow */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: arrowX,
          y: arrowY,
          scale: scaleMV,
          width: SIZE,
          height: SIZE,
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transformOrigin: '0% 0%',
          transition: 'opacity 140ms ease',
          willChange: 'transform, opacity',
        }}
      >
        <svg
          width={SIZE}
          height={SIZE}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', overflow: 'visible' }}
        >
          <path
            d="M5 3 L23 14 L14 16 L11 24 Z"
            fill={COLOR}
            stroke={isDark ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.18)'}
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Pill — homepage only */}
      {showPill && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            x: labelTranslateX,
            y: labelTranslateY,
            rotate: labelRotation,
            scale: scaleMV,
            background: COLOR,
            borderRadius: 999,
            padding: `${SIZE * 0.18}px ${SIZE * 0.36}px`,
            boxShadow: isDark
              ? '0 4px 12px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)'
              : '0 4px 12px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)',
            opacity: visible && pillVisible ? 1 : 0,
            transformOrigin: '0% 50%',
            transition: 'opacity 140ms ease',
            willChange: 'transform, opacity',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        >
          <div style={{
            color: TEXT_COLOR,
            fontSize: Math.max(7, SIZE * 0.43),
            lineHeight: 1.1,
            fontWeight: 600,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            whiteSpace: 'nowrap',
            letterSpacing: 0.1,
          }}>
            {label}
          </div>
        </motion.div>
      )}
    </>
  );
}