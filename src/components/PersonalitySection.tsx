import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Compass, Trophy, Wrench, Flame, Sparkles } from 'lucide-react';

export const PersonalitySection = () => {
  const personality = PORTFOLIO_CONFIG.personality;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'compass':
        return <Compass className="w-5 h-5 text-electric-sky" />;
      case 'trophy':
        return <Trophy className="w-5 h-5 text-amber-bright" />;
      case 'wrench':
        return <Wrench className="w-5 h-5 text-emerald-green" />;
      case 'flame':
        return <Flame className="w-5 h-5 text-racing-red" />;
      default:
        return <Sparkles className="w-5 h-5 text-warm-white" />;
    }
  };

  return (
    <section id="personality" className="py-28 px-4 lg:px-8 bg-navy-deep border-b border-navy-border/60 relative overflow-hidden">
      {/* Background Lighting */}
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[450px] bg-vivid-purple/10 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Sector Tag & Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-vivid-purple" />
            <span className="text-vivid-purple font-bold">CHAPTER 07 // MINDSET &amp; ETHOS</span>
            <span className="text-silver-dark">•</span>
            <span className="text-silver">THE DRIVING FORCE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
                NOT HERE TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vivid-purple via-electric-sky to-warm-white">
                  STAND STILL.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-silver text-sm sm:text-base font-sans leading-relaxed">
              Curious by default. Competitive by instinct. Motivated to build real software, win hackathons, and achieve tangible financial success.
            </div>
          </div>
        </div>

        {/* Core Statement Banner */}
        <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-navy-surface via-navy-elevated to-navy-surface border-l-4 border-vivid-purple border-y border-r border-navy-border shadow-xl">
          <p className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-warm-white leading-relaxed">
            "{personality.statement}"
          </p>
        </div>

        {/* 4 Pillars of Mindset */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personality.traits.map((trait, idx) => (
            <div
              key={idx}
              className="bg-navy-surface/80 border border-navy-border hover:border-vivid-purple/50 p-6 rounded-2xl space-y-4 transition-all duration-300 flex flex-col justify-between card-hover-elevated"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-navy-elevated border border-navy-border flex items-center justify-center">
                  {getIcon(trait.icon)}
                </div>
                <h3 className="font-display font-bold text-lg text-warm-white">
                  {trait.title}
                </h3>
                <p className="text-xs sm:text-sm text-silver leading-relaxed font-sans">
                  {trait.description}
                </p>
              </div>

              <div className="text-[10px] font-mono text-silver-dark pt-3 border-t border-navy-border/50">
                TRAIT 0{idx + 1} // AUTHENTIC ETHOS
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
