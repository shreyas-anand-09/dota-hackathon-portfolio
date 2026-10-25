import React, { useState, useEffect } from 'react';
import { Layers, X, ChevronUp, Cpu, MapPin } from 'lucide-react';

interface ExplodedArchitectureDockProps {
  reducedMotion: boolean;
}

export const ExplodedArchitectureDock: React.FC<ExplodedArchitectureDockProps> = ({ reducedMotion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModule, setActiveModule] = useState({ code: 'MOD-01', name: 'Starting Grid' });
  const [scrollPct, setScrollPct] = useState(0);

  const modules = [
    { code: 'MOD-01', name: 'Starting Grid // BITS 3D', id: '#hero', color: '#38BDF8' },
    { code: '3D-SYS', name: '3D Exploded Assembly', id: '#exploded-view', color: '#7C3AED' },
    { code: 'MOD-02', name: 'Formative Vector', id: '#about', color: '#2563EB' },
    { code: 'MOD-03', name: 'The Garage // Hackathon', id: '#garage', color: '#E10600' },
    { code: 'MOD-04', name: 'Autódromo // F1 Apex', id: '#f1-experience', color: '#E10600' },
    { code: 'MOD-05', name: 'Liverpool FC // Anfield', id: '#liverpool', color: '#DC2626' },
    { code: 'MOD-06', name: 'Innovation // MANAK', id: '#achievements', color: '#F59E0B' },
    { code: 'MOD-07', name: 'Technical Arsenal', id: '#skills', color: '#10B981' },
    { code: 'MOD-08', name: 'Apex Simulator Bench', id: '#playground', color: '#E10600' },
    { code: 'MOD-09', name: 'Paddock Terminal', id: '#contact', color: '#7C3AED' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const pct = totalHeight > 0 ? Math.min(100, Math.round((current / totalHeight) * 100)) : 0;
      setScrollPct(pct);

      const targets = [
        { code: 'MOD-01', name: 'Starting Grid', id: 'hero' },
        { code: '3D-SYS', name: 'Exploded Assembly', id: 'exploded-view' },
        { code: 'MOD-02', name: 'Formative Vector', id: 'about' },
        { code: 'MOD-03', name: 'The Garage', id: 'garage' },
        { code: 'MOD-04', name: 'Autódromo F1', id: 'f1-experience' },
        { code: 'MOD-05', name: 'Liverpool FC', id: 'liverpool' },
        { code: 'MOD-06', name: 'MANAK Awards', id: 'achievements' },
        { code: 'MOD-07', name: 'Technical Arsenal', id: 'skills' },
        { code: 'MOD-08', name: 'Apex Simulator', id: 'playground' },
        { code: 'MOD-09', name: 'Paddock Terminal', id: 'contact' },
      ];

      const scrollPos = window.scrollY + 260;
      for (let i = targets.length - 1; i >= 0; i--) {
        const el = document.getElementById(targets[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveModule({ code: targets[i].code, name: targets[i].name });
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <aside className="fixed bottom-5 right-5 z-40 select-none" aria-label="3D Architecture Navigator">
      {/* Expanded Isometric Subsystem Quick-Map Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-navy-deep/95 border border-navy-border/80 p-5 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-navy-border/60">
            <div className="flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-electric-sky animate-pulse" />
              <span className="font-mono text-xs font-bold text-warm-white uppercase tracking-wider">
                EXPLODED ARCHITECTURE MAP
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg bg-navy-surface hover:bg-navy-elevated border border-navy-border text-silver hover:text-warm-white transition-colors"
              aria-label="Close Architecture Map"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module Nodes Grid */}
          <div className="py-3 space-y-1.5 max-h-72 overflow-y-auto">
            {modules.map((m) => {
              const isActive = activeModule.code === m.code;
              return (
                <button
                  key={m.code}
                  onClick={() => scrollTo(m.id)}
                  className={`w-full flex items-center justify-between p-2 rounded-xl text-left font-mono text-xs transition-all border ${
                    isActive
                      ? 'bg-electric-blue/20 border-electric-sky text-warm-white shadow-md'
                      : 'bg-navy-surface/50 border-navy-border/40 text-silver hover:text-warm-white hover:bg-navy-elevated'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: m.color }}
                    />
                    <span className="font-bold text-[10px] text-silver-light">
                      {m.code}
                    </span>
                    <span className="truncate text-xs">{m.name}</span>
                  </div>
                  <span className="text-[10px] text-electric-sky shrink-0 ml-2">
                    {isActive ? '[ DOCKED ]' : '➔'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Footer Coordinates & Traversal Status */}
          <div className="pt-3 border-t border-navy-border/60 flex items-center justify-between text-[10px] font-mono text-silver-dark">
            <div className="flex items-center space-x-1 text-electric-sky">
              <MapPin className="w-3 h-3" />
              <span>TRAVERSAL: {scrollPct}%</span>
            </div>
            <button
              onClick={() => scrollTo('#hero')}
              className="hover:text-warm-white text-silver transition-colors flex items-center space-x-1"
            >
              <ChevronUp className="w-3 h-3" />
              <span>RETURN TOP</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Low-Profile Pill Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group px-3.5 py-2 rounded-full bg-navy-deep/90 border border-navy-border hover:border-electric-sky/60 shadow-xl shadow-black/60 backdrop-blur-xl flex items-center space-x-2.5 transition-all active:scale-95 text-xs font-mono"
        aria-label="Toggle Exploded Architecture Subsystem Map"
        aria-expanded={isOpen}
      >
        <div className="w-2 h-2 rounded-full bg-electric-sky group-hover:scale-125 transition-transform animate-pulse" />
        <span className="font-bold text-warm-white text-[11px] tracking-wide">
          {activeModule.code}
        </span>
        <span className="text-silver-dark hidden sm:inline">•</span>
        <span className="text-silver hidden sm:inline max-w-[120px] truncate text-[11px]">
          {activeModule.name}
        </span>
        <div className="pl-1 border-l border-navy-border flex items-center space-x-1 text-electric-sky">
          <Layers className="w-3.5 h-3.5" />
          <span className="text-[10px]">{scrollPct}%</span>
        </div>
      </button>
    </aside>
  );
};