import React, { useState, useEffect } from 'react';
import { FileText, ChevronRight, Maximize2, Minimize2, Eye } from 'lucide-react';

interface MasterDocumentInspectorProps {
  reducedMotion: boolean;
}

export const MasterDocumentInspector: React.FC<MasterDocumentInspectorProps> = ({ reducedMotion }) => {
  const [activeSector, setActiveSector] = useState('hero');
  const [activeTitle, setActiveTitle] = useState('STARTING GRID');
  const [activeSectorCode, setActiveSectorCode] = useState('SEC_01');
  const [scrollDepth, setScrollDepth] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const depthPct = totalHeight > 0 ? Math.round((scrollY / totalHeight) * 100) : 0;
      setScrollDepth(depthPct);

      const sectors = [
        { id: 'hero', code: 'SEC_01', title: 'STARTING GRID & SPECS' },
        { id: 'about', code: 'SEC_02', title: 'ORIGINS & TRAJECTORY' },
        { id: 'garage', code: 'SEC_03', title: 'ENGINEERING WORKBENCH' },
        { id: 'f1-experience', code: 'SEC_04', title: 'MOTORSPORT ARCHITECTURE' },
        { id: 'liverpool', code: 'SEC_05', title: 'MERSEYSIDE HERITAGE' },
        { id: 'achievements', code: 'SEC_06', title: 'INNOVATION & PODIUM' },
        { id: 'skills', code: 'SEC_07', title: 'TECHNICAL ARSENAL' },
        { id: 'personality', code: 'SEC_08', title: 'MINDSET & ETHOS' },
        { id: 'playground', code: 'SEC_09', title: 'APEX SIMULATOR LAB' },
        { id: 'contact', code: 'SEC_10', title: 'TERMINAL PADDOCK' },
      ];

      const scrollPos = scrollY + 280;
      for (let i = sectors.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectors[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSector(sectors[i].id);
          setActiveTitle(sectors[i].title);
          setActiveSectorCode(sectors[i].code);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  const sectorsList = [
    { id: 'hero', code: 'S01', name: 'Grid' },
    { id: 'about', code: 'S02', name: 'Trajectory' },
    { id: 'garage', code: 'S03', name: 'Projects' },
    { id: 'f1-experience', code: 'S04', name: 'Motorsport' },
    { id: 'liverpool', code: 'S05', name: 'Liverpool' },
    { id: 'achievements', code: 'S06', name: 'Honors' },
    { id: 'skills', code: 'S07', name: 'Arsenal' },
    { id: 'personality', code: 'S08', name: 'Mindset' },
    { id: 'playground', code: 'S09', name: 'Simulator' },
    { id: 'contact', code: 'S10', name: 'Paddock' },
  ];

  return (
    <aside
      aria-label="Master Engineering File Inspector"
      className="fixed bottom-5 right-5 z-40 select-none font-mono text-xs transition-all duration-300"
    >
      <div className="bg-navy-deep/95 border border-navy-border/80 hover:border-electric-sky/60 rounded-2xl shadow-2xl backdrop-blur-xl p-3.5 max-w-[340px] text-warm-white transition-all">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-navy-border/60 gap-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg bg-electric-blue/20 border border-electric-blue/40 flex items-center justify-center text-electric-sky">
              <FileText className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[9px] text-silver-dark tracking-widest uppercase">MASTER DOSSIER</div>
              <div className="font-bold text-[11px] text-warm-white">SA-2026-ENG-FILE</div>
            </div>
          </div>

          <div className="flex items-center space-x-1.5">
            <span className="text-[10px] bg-navy-surface px-2 py-0.5 rounded border border-navy-border text-electric-sky font-bold">
              {scrollDepth}% READ
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded hover:bg-navy-surface text-silver hover:text-warm-white transition-colors"
              title={isExpanded ? 'Collapse Inspector' : 'Expand Blueprint Map'}
              aria-label={isExpanded ? 'Collapse Inspector' : 'Expand Blueprint Map'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Current Active Region Analysis */}
        <div className="py-2.5 flex items-center justify-between gap-3">
          <div>
            <div className="text-[9px] text-silver-dark uppercase tracking-wider flex items-center space-x-1">
              <Eye className="w-3 h-3 text-emerald-green" />
              <span>ANALYZING REGION:</span>
            </div>
            <div className="font-bold text-xs text-warm-white flex items-center space-x-1.5 mt-0.5">
              <span className="text-electric-sky">{activeSectorCode}</span>
              <span className="text-silver-dark">/</span>
              <span className="truncate max-w-[170px]">{activeTitle}</span>
            </div>
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-green animate-pulse shrink-0" />
        </div>

        {/* Expanded Blueprint Map: Interactive File Grid */}
        {isExpanded && (
          <div className="pt-2 border-t border-navy-border/60 space-y-2">
            <div className="text-[9px] text-silver-dark uppercase tracking-wider">
              DOSSIER SECTORS // CLICK TO WARP CAMERA:
            </div>
            <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
              {sectorsList.map((sec) => {
                const isActive = activeSector === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => jumpTo(sec.id)}
                    className={`px-2 py-1.5 rounded-lg text-left transition-all border flex items-center justify-between ${
                      isActive
                        ? 'bg-electric-blue/20 border-electric-sky text-electric-sky font-bold shadow-md'
                        : 'bg-navy-surface/50 border-navy-border/50 text-silver hover:text-warm-white hover:bg-navy-surface'
                    }`}
                  >
                    <span className="text-[10px]">{sec.code} {sec.name}</span>
                    <ChevronRight className={`w-3 h-3 ${isActive ? 'text-electric-sky' : 'text-silver-dark'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Blueprint Wireframe Progress Bar */}
        <div className="pt-2 border-t border-navy-border/40">
          <div className="w-full h-1 bg-navy-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-electric-sky via-electric-blue to-vivid-purple transition-all duration-150"
              style={{ width: `${Math.max(5, scrollDepth)}%` }}
            />
          </div>
        </div>

      </div>
    </aside>
  );
};
