import { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Code, Wrench, BarChart2, Hammer, CheckCircle2, Cpu } from 'lucide-react';
import { ExplodedStageIndicator } from './ExplodedStageIndicator';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('code');

  const categories = PORTFOLIO_CONFIG.skills;
  const currentSkill = categories.find((c) => c.id === activeCategory) ?? categories[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'code':
        return <Code className="w-4 h-4" />;
      case 'engineer':
        return <Wrench className="w-4 h-4" />;
      case 'analyse':
        return <BarChart2 className="w-4 h-4" />;
      case 'build':
        return <Hammer className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-28 px-4 lg:px-8 bg-navy-surface/40 border-b border-navy-border/60 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/3 left-1/3 w-[550px] h-[450px] bg-electric-cyan/10 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Exploded Architecture Subsystem Tracker */}
        <ExplodedStageIndicator
          moduleCode="MOD-07"
          category="SUBSYSTEM SPECS"
          title="Technical Arsenal & Capabilities"
          coords="X: +80mm, Y: +125mm, Z: +50mm"
          accentColor="#10B981"
        />
        
        {/* Sector Tag & Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-green" />
            <span className="text-emerald-green font-bold">CHAPTER 06 // TECHNICAL ARSENAL</span>
            <span className="text-silver-dark">•</span>
            <span className="text-silver">NO ARBITRARY PERCENTAGES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
                WHAT I'M <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-green via-electric-cyan to-electric-sky">
                  BUILDING WITH.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-silver text-sm sm:text-base font-sans leading-relaxed">
              Transparent, qualitative mapping of confirmed capabilities. Grounded in intermediate Python, first-year mechanical engineering fundamentals, and hackathon data modeling.
            </div>
          </div>
        </div>

        {/* Interactive Selector Strip: CODE / ENGINEER / ANALYSE / BUILD */}
        <div className="bg-navy-deep/90 border border-navy-border rounded-2xl p-6 lg:p-8 shadow-2xl space-y-8 backdrop-blur-md">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3" role="tablist">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`skills-panel-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-4 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center space-x-2 border card-hover-elevated ${
                    isActive
                      ? 'bg-gradient-to-r from-electric-blue to-electric-cyan border-electric-sky text-white shadow-lg shadow-electric-blue/25'
                      : 'bg-navy-surface border-navy-border text-silver hover:text-warm-white hover:border-silver/40'
                  }`}
                >
                  {getIcon(cat.id)}
                  <span>[ {cat.label} ]</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Display Panel */}
          <div
            id={`skills-panel-${currentSkill.id}`}
            role="tabpanel"
            className="p-6 lg:p-8 rounded-xl bg-navy-surface/80 border border-navy-border space-y-8"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-navy-border/70 gap-4">
              <div>
                <span className="text-xs font-mono text-electric-sky uppercase tracking-wider block mb-1 font-semibold">
                  CATEGORY PROFILE // {currentSkill.label}
                </span>
                <h3 className="font-display font-bold text-2xl text-warm-white">
                  {currentSkill.roleTitle}
                </h3>
              </div>
              <p className="text-sm font-sans text-silver-light max-w-md">
                {currentSkill.summary}
              </p>
            </div>

            {/* Qualitative Capabilities Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentSkill.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="bg-navy-deep/80 border border-navy-border p-5 rounded-xl space-y-2 hover:border-electric-sky/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-base text-warm-white">
                      {cap.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-green/10 border border-emerald-green/30 text-emerald-green font-semibold">
                      {cap.level}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-silver leading-relaxed font-sans">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Applied Projects Row */}
            <div className="pt-4 border-t border-navy-border/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <span className="text-silver uppercase tracking-wider font-semibold">APPLIED DIRECTLY IN:</span>
              <div className="flex flex-wrap gap-2">
                {currentSkill.appliedProjects.map((proj) => (
                  <span
                    key={proj}
                    className="px-3 py-1 rounded-full bg-navy-deep border border-navy-border text-warm-white flex items-center space-x-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-electric-sky" />
                    <span>{proj}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
