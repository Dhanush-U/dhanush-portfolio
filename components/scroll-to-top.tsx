'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Forces the window to the top on every route change.
 * Next.js App Router sometimes keeps the previous scroll position when navigating
 * between pages; this guarantees each page starts at the top (at the header).
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}