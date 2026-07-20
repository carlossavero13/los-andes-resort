"use client";

import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    
    // Initial position
    handler();
    
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return scrollY;
}
