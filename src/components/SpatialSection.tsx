import React, { useEffect, useRef, useState } from 'react';

interface SpatialSectionProps {
  id: string;
  sectorCode: string;
  fileLabel: string;
  coordinates: string;
  reducedMotion: boolean;
  children: React.ReactNode;
}

export const SpatialSection: React.FC<SpatialSectionProps> = ({
  id,
  sectorCode,
  fileLabel,
  coordinates,
  reducedMotion,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.5); // 0 (top of viewport) to 1 (bottom)
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    let rafId: number | null = null;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if partially visible
      if (rect.bottom >= 0 && rect.top <= windowHeight) {
        setIsInView(true);
        // Calculate where the center of this section is relative to the viewport
        const centerPos = (rect.top + rect.height / 2) / windowHeight;
        // 0.5 is perfectly centered, < 0.5 is scrolling past, > 0.5 is entering
        setScrollProgress(Math.max(0, Math.min(1, centerPos)));
      } else {
        setIsInView(false);
      }
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  // Derive subtle 3D spatial camera warp values based on scrollProgress
  // distance from center (0 = center, -0.5 = top, +0.5 = bottom)
  const distFromCenter = scrollProgress - 0.5;
  const rotateX = reducedMotion || !isInView ? 0 : distFromCenter * 6; // gentle tilt between -3deg and +3deg
  const scale = reducedMotion || !isInView ? 1 : 1 - Math.abs(distFromCenter) * 0.05; // slight scale back when exiting
  const translateZ = reducedMotion || !isInView ? 0 : -Math.abs(distFromCenter) * 60; // depth warp in 3D space
  const opacity = reducedMotion || !isInView ? 1 : Math.max(0.7, 1 - Math.abs(distFromCenter) * 0.4);

  return (
    <div
      id={id}
      ref={containerRef}
      className="relative will-change-transform transition-all duration-300 ease-out"
      style={{
        perspective: '1400px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* 3D Warped Canvas Body */}
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: reducedMotion
            ? 'none'
            : `perspective(1400px) rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${scale})`,
          opacity: reducedMotion ? 1 : opacity,
        }}
      >
        {/* Architectural Blueprint Header Band */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-6 pb-2 flex items-center justify-between text-[10px] font-mono text-silver-dark border-b border-navy-border/30 select-none">
          <div className="flex items-center space-x-3">
            <span className="text-electric-sky font-bold">[{sectorCode}]</span>
            <span className="text-silver uppercase tracking-wider">{fileLabel}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline text-silver-dark font-mono">GRID: {coordinates}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-electric-sky/60 animate-pulse" />
          </div>
        </div>

        {/* Section Contents */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
};
