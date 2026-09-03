"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, useLenis } from 'lenis/react';

function ScrollRestoration() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Si la URL no tiene un hash (#), forzamos el scroll arriba
      if (!window.location.hash) {
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <ScrollRestoration />
      {children}
    </ReactLenis>
  );
}
