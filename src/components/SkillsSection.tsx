import { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Code, Wrench, BarChart2, Hammer, CheckCircle2 } from 'lucide-react';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('code');

  const categories = PORTFOLIO_CONFIG.skills;
  const currentSkill = categories.find((c) => c.id === activeCategory)!;

  const getIcon = (id: string) => {
    switch (id) {
      case 'code': return <Code className="w-4 h-4" />;
      case 'engineer': return <Wrench className="w-4 h-4" />;
      case 'analyse': return <BarChart2 className="w-4 h-4" />;
      case 'build': return <Hammer className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 lg:px-8 bg-graphite border-b border-charcoal-border/50 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Sector Tag & Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-racing-red" />
            <span className="text-racing-red font-bold">SECTOR 07 // TECHNICAL ARSENAL</span>
            <span className="text-silver-dark">•</span>
            <span className="text-silver">NO ARBITRARY PERCENTAGES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
                WHAT I'M <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-silver-light to-racing-red">
                  BUILDING WITH.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-silver text-sm font-sans leading-relaxed">
              Transparent, qualitative mapping of confirmed skills. Grounded in intermediate Python, first-year mechanical engineering foundations, and hackathon data modeling.
            </div>
          </div>
        </div>

        {/* Interactive Selector Strip: CODE / ENGINEER / ANALYSE / BUILD */}
        <div className="bg-charcoal/90 border border-charcoal-border rounded-2xl p-6 lg:p-8 shadow-2xl space-y-8">
          
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
                  className={`p-4 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center space-x-2 border ${
                    isActive
                      ? 'bg-racing-red border-racing-red text-white shadow-lg shadow-racing-red/25'
                      : 'bg-charcoal-surface border-charcoal-border text-silver hover:text-warm-white hover:border-silver'
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
            className="p-6 lg:p-8 rounded-xl bg-charcoal-deep border border-charcoal-border space-y-8"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-charcoal-border/70 gap-4">
              <div>
                <span className="text-xs font-mono text-racing-red uppercase tracking-wider block mb-1">
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
                <div key={idx} className="bg-charcoal-surface/80 border border-charcoal-border/80 p-5 rounded-xl space-y-2 hover:border-silver/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-base text-warm-white">
                      {cap.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-elevated border border-charcoal-border text-racing-green">
                      {cap.level}
                    </span>
                  </div>
                  <p className="text-xs text-silver leading-relaxed font-sans">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Applied Projects Row */}
            <div className="pt-4 border-t border-charcoal-border/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <span className="text-silver">APPLIED DIRECTLY IN:</span>
              <div className="flex flex-wrap gap-2">
                {currentSkill.appliedProjects.map((proj) => (
                  <span key={proj} className="px-2.5 py-1 rounded bg-charcoal-surface border border-charcoal-border text-warm-white flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3 h-3 text-racing-red" />
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
