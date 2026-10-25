import React from 'react';

interface SectionDividerProps {
  variant: 'blue-wave' | 'circuit-wire' | 'racing-kerb' | 'crimson-fade' | 'amber-glow' | 'emerald-grid' | 'violet-slant' | 'finale-horizon';
  label?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ variant, label = 'HELICAL TRANSITION' }) => {
  const getThemeColor = () => {
    switch (variant) {
      case 'blue-wave':
        return { c1: '#38BDF8', c2: '#2563EB', glow: 'rgba(56, 189, 248, 0.4)' };
      case 'circuit-wire':
        return { c1: '#06B6D4', c2: '#10B981', glow: 'rgba(6, 182, 212, 0.4)' };
      case 'racing-kerb':
        return { c1: '#E10600', c2: '#F8FAFC', glow: 'rgba(225, 6, 0, 0.4)' };
      case 'crimson-fade':
        return { c1: '#E10600', c2: '#B91C1C', glow: 'rgba(225, 6, 0, 0.3)' };
      case 'amber-glow':
        return { c1: '#F59E0B', c2: '#FFB300', glow: 'rgba(245, 158, 11, 0.4)' };
      case 'emerald-grid':
        return { c1: '#10B981', c2: '#06B6D4', glow: 'rgba(16, 185, 129, 0.4)' };
      case 'violet-slant':
        return { c1: '#7C3AED', c2: '#C084FC', glow: 'rgba(124, 58, 237, 0.4)' };
      case 'finale-horizon':
        return { c1: '#38BDF8', c2: '#7C3AED', glow: 'rgba(56, 189, 248, 0.5)' };
      default:
        return { c1: '#38BDF8', c2: '#2563EB', glow: 'rgba(56, 189, 248, 0.4)' };
    }
  };

  const theme = getThemeColor();

  return (
    <div className="relative w-full py-8 overflow-hidden pointer-events-none -my-1 z-20 flex flex-col items-center justify-center select-none" aria-hidden="true">
      {/* Central Rotating Helical Ribbon driven by GSAP ScrollTrigger */}
      <div className="w-full max-w-4xl mx-auto px-4 flex items-center justify-center relative">
        
        {/* Left Taper Line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-navy-border to-transparent" />

        {/* 3D Helical Coil SVG Stream */}
        <div className="helical-transition-track mx-6 flex items-center justify-center relative w-48 h-12">
          <svg viewBox="0 0 190 48" className="w-full h-full" fill="none">
            {/* Strand 1 (Sine wave) */}
            <path
              d="M 10 24 C 30 6, 50 42, 70 24 C 90 6, 110 42, 130 24 C 150 6, 170 42, 190 24"
              stroke={theme.c1}
              strokeWidth="2"
              strokeLinecap="round"
              style={{ filter: `drop-shadow(0 0 6px ${theme.glow})` }}
            />

            {/* Strand 2 (Cosine wave in reverse phase) */}
            <path
              d="M 10 24 C 30 42, 50 6, 70 24 C 90 42, 110 6, 130 24 C 150 42, 170 6, 190 24"
              stroke={theme.c2}
              strokeWidth="1.5"
              strokeDasharray="4 3"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Helical Cross Rungs */}
            <line x1="40" y1="15" x2="40" y2="33" stroke={theme.c1} strokeWidth="1" strokeDasharray="1 2" opacity="0.6" />
            <line x1="70" y1="24" x2="70" y2="24" stroke={theme.c2} strokeWidth="1" />
            <line x1="100" y1="15" x2="100" y2="33" stroke={theme.c1} strokeWidth="1" strokeDasharray="1 2" opacity="0.6" />
            <line x1="130" y1="24" x2="130" y2="24" stroke={theme.c2} strokeWidth="1" />
            <line x1="160" y1="15" x2="160" y2="33" stroke={theme.c1} strokeWidth="1" strokeDasharray="1 2" opacity="0.6" />

            {/* Glowing Helical Node Beads */}
            <circle cx="30" cy="11" r="3" fill={theme.c1} />
            <circle cx="50" cy="37" r="3" fill={theme.c2} />
            <circle cx="90" cy="11" r="3" fill={theme.c1} />
            <circle cx="110" cy="37" r="3" fill={theme.c2} />
            <circle cx="150" cy="11" r="3" fill={theme.c1} />
            <circle cx="170" cy="37" r="3" fill={theme.c2} />
          </svg>
        </div>

        {/* Right Taper Line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-navy-border to-transparent" />
      </div>

      {/* Helical Coordinate Badge */}
      <div className="mt-1 flex items-center space-x-2 text-[9px] font-mono text-silver-dark tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.c1 }} />
        <span>{label}</span>
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.c2 }} />
      </div>
    </div>
  );
};
