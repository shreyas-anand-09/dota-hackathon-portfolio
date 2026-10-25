import React, { useEffect, useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

interface ScrollCircuitSpineProps {
  reducedMotion: boolean;
}

export const ScrollCircuitSpine: React.FC<ScrollCircuitSpineProps> = ({ reducedMotion }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectors = PORTFOLIO_CONFIG.navigation;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Circuit Telemetry Spine"
      className="hidden 2xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center pointer-events-auto"
    >
      {/* Background Frame */}
      <div className="bg-charcoal-deep/90 border border-charcoal-border/80 rounded-full px-2 py-6 backdrop-blur-md shadow-2xl flex flex-col items-center">
        {/* Track Label */}
        <div className="text-[9px] font-mono font-bold text-silver uppercase rotate-180 writing-mode-vertical mb-3 tracking-widest">
          CIRCUIT TRACK
        </div>

        {/* Lap Percentage */}
        <div className="text-[10px] font-mono text-racing-red font-bold mb-3">
          {Math.round(scrollProgress * 100)}%
        </div>

        {/* SVG Path Progress Rail */}
        <div className="relative w-6 h-72 flex items-center justify-center">
          {/* Base rail line */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-charcoal-border/70 rounded-full" />

          {/* Active drawn path */}
          <div
            className="absolute top-0 w-0.5 bg-gradient-to-b from-racing-red via-racing-red to-warm-white rounded-full transition-all duration-75"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          {/* Moving Telemetry Marker / Car dot */}
          <div
            className="absolute w-3.5 h-3.5 rounded-full bg-racing-red border-2 border-white shadow-lg shadow-racing-red/80 -translate-x-1/2 left-1/2 transition-all duration-75 flex items-center justify-center"
            style={{ top: `calc(${scrollProgress * 100}% - 7px)` }}
          >
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>

          {/* Checkpoint nodes */}
          {sectors.map((sector, index) => {
            const fraction = index / (sectors.length - 1);
            const isPassed = scrollProgress >= fraction - 0.02;

            return (
              <button
                key={sector.sector}
                onClick={() => scrollTo(sector.href)}
                title={`${sector.sector}: ${sector.label}`}
                aria-label={`Jump to ${sector.label}`}
                className="group absolute -translate-x-1/2 left-1/2 focus:outline-none"
                style={{ top: `${fraction * 100}%` }}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-200 border ${
                    isPassed
                      ? 'bg-racing-red border-white scale-125'
                      : 'bg-charcoal border-silver-dark group-hover:border-racing-red group-hover:scale-150'
                  }`}
                />

                {/* Tooltip on hover */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-charcoal-surface border border-charcoal-border text-[10px] font-mono px-2 py-1 rounded text-warm-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                  <span className="text-racing-red font-bold mr-1">{sector.sector}</span>
                  <span>{sector.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Telemetry Status Indicator */}
        <div className="w-1.5 h-1.5 rounded-full bg-racing-green mt-3 animate-ping" />
      </div>
    </aside>
  );
};
