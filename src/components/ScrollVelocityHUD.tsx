import { useState, useEffect, useRef } from 'react';
import { Gauge, ChevronRight } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

interface ScrollVelocityHUDProps {
  reducedMotion: boolean;
}

export const ScrollVelocityHUD = ({ reducedMotion }: ScrollVelocityHUDProps) => {
  const [speedKmh, setSpeedKmh] = useState(0);
  const [activeSector, setActiveSector] = useState('S1');
  const [activeSectorLabel, setActiveSectorLabel] = useState('GRID');
  const [isWarping, setIsWarping] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const lastScrollY = useRef(0);
  const lastTime = useRef(performance.now());
  const velocityDecay = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const handleScroll = () => {
      const now = performance.now();
      const currentScrollY = window.scrollY;
      const dt = Math.max(1, now - lastTime.current);
      const dy = Math.abs(currentScrollY - lastScrollY.current);

      // Instantaneous scroll speed
      const rawSpeed = (dy / dt) * 1000; // px/sec
      const mappedKmh = Math.min(345, Math.round(rawSpeed * 0.16));

      setSpeedKmh((prev) => Math.max(mappedKmh, Math.round(prev * 0.85)));
      setIsWarping(mappedKmh > 120);

      lastScrollY.current = currentScrollY;
      lastTime.current = now;

      // Update current active sector
      const sectors = PORTFOLIO_CONFIG.navigation;
      const scrollPosition = currentScrollY + 250;
      for (let i = sectors.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectors[i].href.substring(1));
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSector(sectors[i].sector);
          setActiveSectorLabel(sectors[i].label);
          break;
        }
      }

      // Smooth decay animation
      if (velocityDecay.current) cancelAnimationFrame(velocityDecay.current);
      const decay = () => {
        setSpeedKmh((prev) => {
          if (prev <= 2) {
            setIsWarping(false);
            return 0;
          }
          velocityDecay.current = requestAnimationFrame(decay);
          return Math.round(prev * 0.92);
        });
      };
      velocityDecay.current = requestAnimationFrame(decay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (velocityDecay.current) cancelAnimationFrame(velocityDecay.current);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  const currentGear = speedKmh > 300 ? 8 : speedKmh > 240 ? 7 : speedKmh > 180 ? 6 : speedKmh > 120 ? 5 : speedKmh > 60 ? 4 : speedKmh > 10 ? 3 : 1;
  const drsActive = speedKmh > 180;
  const rpmPercent = Math.min(100, Math.round((speedKmh / 345) * 100));

  const jumpToNext = () => {
    const sectors = PORTFOLIO_CONFIG.navigation;
    const currentIndex = sectors.findIndex(s => s.sector === activeSector);
    const nextSector = sectors[(currentIndex + 1) % sectors.length];
    const el = document.querySelector(nextSector.href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Dynamic Speed Streaks along screen edges when scrolling rapidly */}
      {isWarping && (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
          <div className="speed-line left-4 top-1/4 h-32" />
          <div className="speed-line left-12 top-2/3 h-48" style={{ animationDelay: '0.3s' }} />
          <div className="speed-line right-6 top-1/3 h-40" style={{ animationDelay: '0.15s' }} />
          <div className="speed-line right-16 top-3/4 h-56" style={{ animationDelay: '0.45s' }} />
          <div className="absolute inset-0 bg-racing-red/5 mix-blend-overlay animate-pulse pointer-events-none" />
        </div>
      )}

      {/* Floating Motorsport Cockpit HUD */}
      <div 
        className={`fixed bottom-6 left-6 z-40 transition-all duration-300 font-mono select-none ${
          minimized ? 'translate-y-8 opacity-70 hover:opacity-100 hover:translate-y-0' : ''
        }`}
      >
        <div className="bg-charcoal-deep/95 border border-charcoal-border hover:border-racing-red/60 rounded-xl p-3 shadow-2xl backdrop-blur-md text-xs relative overflow-hidden transition-all duration-200">
          
          {/* Subtle scanning laser line inside HUD */}
          <div className="telemetry-beam opacity-40" />

          {/* Header Row */}
          <div className="flex items-center justify-between space-x-4 pb-2 border-b border-charcoal-border/50 text-[10px]">
            <div className="flex items-center space-x-1.5 text-racing-red font-bold">
              <Gauge className="w-3.5 h-3.5 animate-pulse" />
              <span>COCKPIT TELEMETRY</span>
            </div>
            
            <div className="flex items-center space-x-1.5">
              <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${
                drsActive ? 'bg-racing-green text-graphite animate-pulse' : 'bg-charcoal-surface text-silver-dark'
              }`}>
                {drsActive ? 'DRS OPEN' : 'DRS AVAIL'}
              </span>
              <button
                onClick={() => setMinimized(!minimized)}
                className="text-silver hover:text-white text-[9px] px-1"
                title={minimized ? 'Expand Cockpit' : 'Minimize Cockpit'}
              >
                {minimized ? '▲' : '▼'}
              </button>
            </div>
          </div>

          {/* Speed & Gear Display */}
          <div className="flex items-end justify-between pt-2 pb-1 gap-4">
            <div>
              <div className="text-[10px] text-silver uppercase tracking-wider">SCROLL VELOCITY</div>
              <div className="flex items-baseline space-x-1">
                <span className="font-display font-black text-2xl text-warm-white tracking-tight">
                  {speedKmh}
                </span>
                <span className="text-[10px] text-silver-light font-bold">KM/H</span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] text-silver uppercase">GEAR</div>
              <span className="font-display font-black text-xl text-racing-amber">
                G{currentGear}
              </span>
            </div>
          </div>

          {/* RPM LED Bar */}
          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[9px] text-silver-dark">
              <span>RPM TACHOMETER</span>
              <span className={rpmPercent > 70 ? 'text-racing-red font-bold' : 'text-silver'}>
                {Math.round(rpmPercent * 125)} RPM
              </span>
            </div>
            <div className="w-44 h-1.5 bg-charcoal-surface rounded-full overflow-hidden flex p-0.5 border border-charcoal-border/40">
              <div
                className="h-full rounded-full transition-all duration-75 bg-gradient-to-r from-racing-green via-racing-amber to-racing-red"
                style={{ width: `${Math.max(4, rpmPercent)}%` }}
              />
            </div>
          </div>

          {/* Sector & Fast-Forward Action */}
          <div className="pt-2.5 mt-2 border-t border-charcoal-border/50 flex items-center justify-between text-[10px]">
            <div className="flex items-center space-x-1.5 truncate">
              <span className="text-racing-red font-bold">{activeSector}:</span>
              <span className="text-warm-white font-medium truncate max-w-[85px]">{activeSectorLabel}</span>
            </div>

            <button
              onClick={jumpToNext}
              className="flex items-center space-x-1 px-2 py-0.5 rounded bg-charcoal-surface hover:bg-racing-red hover:text-white border border-charcoal-border text-silver transition-colors"
              title="Jump to Next Sector"
            >
              <span>NEXT</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </>
  );
};
