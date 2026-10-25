import { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Globe, Compass, Code, Wrench, Zap, MapPin } from 'lucide-react';
import { ExplodedStageIndicator } from './ExplodedStageIndicator';

export const AboutSection = () => {
  const [selectedWaypoint, setSelectedWaypoint] = useState<number>(2); // Default to BITS Pilani

  const waypoints = PORTFOLIO_CONFIG.journey;
  const currentWaypoint = waypoints[selectedWaypoint] ?? waypoints[0];

  return (
    <section id="about" className="py-28 px-4 lg:px-8 bg-navy-surface/50 border-b border-navy-border/60 relative overflow-hidden">
      {/* Section Transition Lighting */}
      <div
        className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[450px] bg-electric-blue/10 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[450px] h-[400px] bg-vivid-purple/10 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Exploded Architecture Subsystem Tracker */}
        <ExplodedStageIndicator
          moduleCode="MOD-02"
          category="NAVIGATION MATRIX"
          title="Formative Vector & Trajectory"
          coords="X: -140mm, Y: -40mm, Z: +30mm"
          accentColor="#38BDF8"
        />
        
        {/* Sector Tag & Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-electric-sky" />
            <span className="text-electric-sky font-bold">CHAPTER 02 // IDENTITY &amp; TRAJECTORY</span>
            <span className="text-silver-dark">•</span>
            <span className="text-silver">THE VECTOR</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
                ENGINEERING BY DEGREE. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-sky via-electric-blue to-vivid-purple">
                  BUILDING BY INSTINCT.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-silver text-sm sm:text-base font-sans leading-relaxed">
              First-year Mechanical Engineering student at BITS Pilani, Hyderabad Campus. Intermediate Python programmer, hackathon winner, and builder driven by curiosity, first-principles logic, and relentless execution.
            </div>
          </div>
        </div>

        {/* Interactive Waypoints Trajectory: Palakkad ➔ Liverpool ➔ BITS Pilani */}
        <div className="bg-navy-deep/80 border border-navy-border rounded-2xl p-6 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Subtle background watermark */}
          <div className="absolute right-4 bottom-2 text-9xl font-display font-black text-navy-surface/40 select-none pointer-events-none">
            02
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-navy-border/70 gap-4">
            <div>
              <span className="text-xs font-mono text-electric-sky tracking-widest uppercase block font-semibold">
                FORMATIVE VECTOR // 3 GEOGRAPHIC HUBS
              </span>
              <span className="font-display font-bold text-xl text-warm-white flex items-center space-x-2 mt-1">
                <span>Palakkad</span>
                <span className="text-silver-dark">➔</span>
                <span>Liverpool</span>
                <span className="text-silver-dark">➔</span>
                <span>BITS Pilani Hyderabad</span>
              </span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-silver">
              <Globe className="w-4 h-4 text-electric-sky" />
              <span>3 WAYPOINTS // CONTINUOUS GROWTH</span>
            </div>
          </div>

          {/* Route Progression Nodes */}
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Connecting gradient line on desktop */}
              <div
                className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-electric-sky via-electric-blue to-vivid-purple opacity-40 z-0"
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
                    className={`relative z-10 cursor-pointer text-left rounded-xl p-6 transition-all border card-hover-elevated ${
                      isSelected
                        ? 'bg-navy-elevated/90 border-electric-sky shadow-xl shadow-electric-blue/20 -translate-y-1'
                        : 'bg-navy-surface/50 border-navy-border hover:border-silver/40 hover:bg-navy-surface/80'
                    }`}
                  >
                    {/* Step badge & coordinates */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                            isSelected
                              ? 'bg-gradient-to-r from-electric-blue to-vivid-purple text-white shadow-md'
                              : 'bg-navy-surface text-silver'
                          }`}
                        >
                          {item.step}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-silver-light font-semibold tracking-wider">
                          {item.tag}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-silver-dark flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-electric-sky" />
                        <span>{item.coordinates}</span>
                      </span>
                    </div>

                    {/* Location Title */}
                    <h3 className="font-display font-bold text-lg text-warm-white mb-1">
                      {item.location}
                    </h3>

                    {/* Period */}
                    <div className="text-xs font-mono text-electric-sky mb-3 font-semibold">
                      {item.period}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-silver leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Active Indicator */}
                    {isSelected && (
                      <div className="mt-4 pt-3 border-t border-navy-border/80 flex items-center space-x-1.5 text-[11px] font-mono text-emerald-green font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-green animate-pulse" />
                        <span>ACTIVE SELECTION</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expanded Selected Waypoint Insight */}
          <div className="mt-2 p-5 rounded-xl bg-navy-surface/90 border border-navy-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-electric-sky" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-silver uppercase tracking-wider">SELECTED WAYPOINT</div>
                <div className="font-display font-bold text-base text-warm-white">
                  {currentWaypoint.location} — <span className="text-electric-sky">{currentWaypoint.period}</span>
                </div>
              </div>
            </div>
            <div className="text-xs sm:text-sm font-sans text-silver-light max-w-lg leading-relaxed">
              {currentWaypoint.description}
            </div>
          </div>
        </div>

        {/* Narrative Pillars: Mechanical Engineering, Python Code, Competitive Ambition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Mechanical Discipline */}
          <div className="bg-navy-deep/80 border border-navy-border p-7 rounded-2xl space-y-4 hover:border-electric-sky/40 transition-all card-hover-elevated">
            <div className="w-11 h-11 rounded-xl bg-electric-sky/15 border border-electric-sky/30 flex items-center justify-center text-electric-sky">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-warm-white">
              Mechanical Foundations
            </h3>
            <p className="text-sm text-silver leading-relaxed font-sans">
              Studying mechanical engineering at BITS Pilani builds deep intuition for thermodynamics, mechanical linkages, and physical systems. I bring this exact first-principles discipline into software architecture.
            </p>
            <div className="text-[11px] font-mono text-silver-dark pt-3 border-t border-navy-border/60">
              DISCIPLINE: FIRST-PRINCIPLES SYSTEMS
            </div>
          </div>

          {/* Column 2: Intermediate Python & Logic */}
          <div className="bg-navy-deep/80 border border-navy-border p-7 rounded-2xl space-y-4 hover:border-emerald-green/40 transition-all card-hover-elevated">
            <div className="w-11 h-11 rounded-xl bg-emerald-green/15 border border-emerald-green/30 flex items-center justify-center text-emerald-green">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-warm-white">
              Intermediate Python
            </h3>
            <p className="text-sm text-silver leading-relaxed font-sans">
              Python is my weapon of choice for fast prototyping, data exploration, and algorithmic logic. Leveraged it to engineer predictive credit risk pipelines in the Atmos 26 Hackathon and build tools for campus life.
            </p>
            <div className="text-[11px] font-mono text-silver-dark pt-3 border-t border-navy-border/60">
              STACK: PYTHON // PANDAS // NUMPY // AUTOMATION
            </div>
          </div>

          {/* Column 3: The Competitive Drive */}
          <div className="bg-navy-deep/80 border border-navy-border p-7 rounded-2xl space-y-4 hover:border-amber-bright/40 transition-all card-hover-elevated">
            <div className="w-11 h-11 rounded-xl bg-amber-bright/15 border border-amber-bright/30 flex items-center justify-center text-amber-bright">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-warm-white">
              Driven to Win &amp; Build
            </h3>
            <p className="text-sm text-silver leading-relaxed font-sans">
              Competitions provide the arena where ideas get pressure-tested against real constraints. Winning Atmos 26 proved the formula: rigorous preparation, clean execution, and an obsession with shipping solutions that work.
            </p>
            <div className="text-[11px] font-mono text-silver-dark pt-3 border-t border-navy-border/60">
              OBJECTIVE: SHIP PRODUCTS &amp; COMPETE
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
