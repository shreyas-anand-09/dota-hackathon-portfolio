import { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Globe, Compass, Code, Wrench, Zap } from 'lucide-react';

export const AboutSection = () => {
  const [selectedWaypoint, setSelectedWaypoint] = useState<number>(2); // Default to current BITS Pilani

  const waypoints = PORTFOLIO_CONFIG.journey;
  const currentWaypoint = waypoints[selectedWaypoint] ?? waypoints[0];

  return (
    <section id="about" className="py-24 px-4 lg:px-8 bg-charcoal-deep border-b border-charcoal-border/50 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Sector Tag & Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-racing-red" />
            <span className="text-racing-red font-bold">SECTOR 02 // VECTOR &amp; ORIGINS</span>
            <span className="text-silver-dark">•</span>
            <span className="text-silver">THE PERSON BEHIND THE PROJECTS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
                ENGINEERING BY DEGREE. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-warm-white to-silver-light">
                  BUILDING BY INSTINCT.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-silver text-sm font-sans leading-relaxed">
              First-year Mechanical Engineering student at BITS Pilani, Hyderabad Campus. Intermediate Python programmer, hackathon winner, and builder driven by curiosity and high standards.
            </div>
          </div>
        </div>

        {/* Interactive Route Illustration: The 3-Node Trajectory */}
        <div className="bg-charcoal/90 border border-charcoal-border rounded-2xl p-6 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle watermark */}
          <div className="absolute right-4 bottom-2 text-8xl font-display font-black text-charcoal-surface/30 select-none pointer-events-none">
            02
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-charcoal-border/60 gap-4">
            <div>
              <span className="text-xs font-mono text-silver tracking-widest uppercase block">
                GEOGRAPHIC &amp; INTELLECTUAL ROUTE
              </span>
              <span className="font-display font-bold text-xl text-warm-white">
                Palakkad ➔ Liverpool ➔ BITS Pilani
              </span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-silver">
              <Globe className="w-4 h-4 text-racing-red" />
              <span>3 WAYPOINTS // 1 CONTINUOUS EXPEDITION</span>
            </div>
          </div>

          {/* Route Schematic Line (Desktop & Mobile) */}
          <div className="py-10">
            {/* Desktop Node Progression */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Connecting trajectory line behind cards */}
              <div 
                className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-racing-red via-racing-amber to-racing-green opacity-40 z-0" 
                aria-hidden="true"
              />

              {waypoints.map((item, index) => {
                const isSelected = selectedWaypoint === index;
                return (
                  <div
                    key={item.step}
                    onClick={() => setSelectedWaypoint(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedWaypoint(index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className={`relative z-10 cursor-pointer text-left rounded-xl p-6 transition-all border card-racing-hover ${
                      isSelected
                        ? 'bg-charcoal-surface border-racing-red shadow-xl shadow-racing-red/20 -translate-y-1'
                        : 'bg-charcoal-deep/60 border-charcoal-border hover:border-silver/40 hover:bg-charcoal-surface/40'
                    }`}
                  >
                    {/* Step badge & coordinates */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                          isSelected ? 'bg-racing-red text-white' : 'bg-charcoal-elevated text-silver'
                        }`}>
                          {item.step}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-silver-light font-semibold tracking-wider">
                          {item.tag}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-silver-dark">
                        {item.coordinates}
                      </span>
                    </div>

                    {/* Location Title */}
                    <h3 className="font-display font-bold text-lg text-warm-white mb-1">
                      {item.location}
                    </h3>

                    {/* Period */}
                    <div className="text-xs font-mono text-racing-red mb-3">
                      {item.period}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-silver leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Active Indicator */}
                    {isSelected && (
                      <div className="mt-4 pt-3 border-t border-charcoal-border flex items-center space-x-1 text-[11px] font-mono text-racing-green">
                        <span className="w-1.5 h-1.5 rounded-full bg-racing-green animate-pulse" />
                        <span>ACTIVE VECTOR NODE</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expanded Detail Panel for Selected Waypoint */}
          <div className="mt-4 p-5 rounded-xl bg-charcoal-deep border border-charcoal-border/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-racing-red/10 border border-racing-red/30 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-racing-red" />
              </div>
              <div>
                <div className="text-xs font-mono text-silver uppercase">CURRENT SELECTION</div>
                <div className="font-display font-bold text-sm text-warm-white">
                  {currentWaypoint.location} — {currentWaypoint.period}
                </div>
              </div>
            </div>
            <div className="text-xs font-mono text-silver-light max-w-md">
              {currentWaypoint.description}
            </div>
          </div>
        </div>

        {/* Narrative Columns: Engineering, Code, Mindset */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Mechanical Discipline */}
          <div className="bg-charcoal border border-charcoal-border p-7 rounded-xl space-y-4 hover:border-silver/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-charcoal-surface border border-charcoal-border flex items-center justify-center text-racing-red">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-warm-white">
              Mechanical Foundations
            </h3>
            <p className="text-sm text-silver leading-relaxed">
              Studying mechanical engineering at BITS Pilani provides a grounded intuition for thermodynamics, mechanical linkages, and systems dynamics. I apply this exact first-principles discipline to code.
            </p>
            <div className="text-[11px] font-mono text-silver-dark pt-2 border-t border-charcoal-border">
              DISCIPLINE: FIRST-PRINCIPLES SYSTEMS
            </div>
          </div>

          {/* Column 2: Intermediate Python & Logic */}
          <div className="bg-charcoal border border-charcoal-border p-7 rounded-xl space-y-4 hover:border-silver/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-charcoal-surface border border-charcoal-border flex items-center justify-center text-racing-green">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-warm-white">
              Intermediate Python
            </h3>
            <p className="text-sm text-silver leading-relaxed">
              Python is my primary weapon for rapid prototyping, data exploration, and game mechanics. Used it to model borrower risk in the Atmos 26 Hackathon and engineer utility scripts for campus life.
            </p>
            <div className="text-[11px] font-mono text-silver-dark pt-2 border-t border-charcoal-border">
              STACK: PYTHON (DATA, SCRIPTING, MATH)
            </div>
          </div>

          {/* Column 3: The Competitive Fire */}
          <div className="bg-charcoal border border-charcoal-border p-7 rounded-xl space-y-4 hover:border-silver/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-charcoal-surface border border-charcoal-border flex items-center justify-center text-racing-amber">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-warm-white">
              Driven to Win &amp; Build
            </h3>
            <p className="text-sm text-silver leading-relaxed">
              Competitive hackathons provide the pressure cooker where ideas get validated in real time. Winning Atmos 26 crystallized my focus: build useful software, conquer competitions, and achieve financial success.
            </p>
            <div className="text-[11px] font-mono text-silver-dark pt-2 border-t border-charcoal-border">
              OBJECTIVE: SHIP PRODUCTS &amp; COMPETE
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
