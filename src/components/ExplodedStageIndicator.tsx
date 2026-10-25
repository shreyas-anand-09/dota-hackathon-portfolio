import React from 'react';
import { Layers } from 'lucide-react';

interface ExplodedStageIndicatorProps {
  moduleCode: string;
  category: string;
  title: string;
  coords: string;
  status?: string;
  accentColor?: string;
}

export const ExplodedStageIndicator: React.FC<ExplodedStageIndicatorProps> = ({
  moduleCode,
  category,
  title,
  coords,
  status = 'DOCKED & IMMERSIVE',
  accentColor = '#38BDF8',
}) => {
  return (
    <div className="w-full mb-8 pt-2 select-none pointer-events-none" aria-hidden="true">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-navy-border/50 text-[10px] font-mono">
        
        {/* Left: Module Code & Subsystem Name */}
        <div className="flex items-center space-x-2.5">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: accentColor }}
          />
          <span className="font-bold tracking-wider uppercase text-warm-white flex items-center space-x-1.5">
            <Layers className="w-3 h-3 inline text-silver" />
            <span style={{ color: accentColor }}>{moduleCode}</span>
            <span className="text-silver-dark">//</span>
            <span>{category}</span>
          </span>
          <span className="text-silver-dark hidden sm:inline">•</span>
          <span className="text-silver hidden sm:inline">{title}</span>
        </div>

        {/* Right: Coordinates & Dock Status */}
        <div className="flex items-center space-x-3">
          <span className="text-silver-dark hidden md:inline">
            COORDS: {coords}
          </span>
          <span className="text-silver-dark hidden md:inline">•</span>
          <span
            className="px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase border bg-navy-deep/80"
            style={{
              borderColor: `${accentColor}50`,
              color: accentColor,
            }}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};