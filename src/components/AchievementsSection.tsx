import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Award, CheckCircle } from 'lucide-react';

export const AchievementsSection = () => {
  const achievements = PORTFOLIO_CONFIG.achievements;

  return (
    <section id="achievements" className="py-24 px-4 lg:px-8 bg-charcoal-deep border-b border-charcoal-border/50 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Sector Tag & Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-racing-red" />
            <span className="text-racing-red font-bold">SECTOR 06 // PODIUM ARCHIVE</span>
            <span className="text-silver-dark">•</span>
            <span className="text-silver">CONFIRMED HONORS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
                RESULTS THAT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-warm-white to-silver-light">
                  MATTER.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-silver text-sm font-sans leading-relaxed">
              Authentic record of competitive victories and academic honors. No exaggerated claims, inflated titles, or manufactured credentials.
            </div>
          </div>
        </div>

        {/* Podium Victory Archive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-charcoal/90 border border-charcoal-border hover:border-racing-red/50 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden transition-all duration-300 group"
            >
              {/* Subtle Giant Background Numeral */}
              <div className="absolute right-4 -bottom-4 text-9xl font-display font-black text-charcoal-surface/40 select-none pointer-events-none group-hover:text-charcoal-surface/70 transition-colors">
                {item.number}
              </div>

              {/* Top Meta Line */}
              <div className="flex items-center justify-between pb-6 border-b border-charcoal-border/60">
                <span className="text-xs font-mono font-bold text-racing-red tracking-widest uppercase">
                  ARCHIVE ENTRY // {item.number}
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-racing-red/10 border border-racing-red/30 text-racing-red text-[11px] font-mono font-bold uppercase">
                  <Award className="w-3.5 h-3.5" />
                  <span>{item.badge}</span>
                </span>
              </div>

              {/* Title & Organization */}
              <div className="py-6 space-y-2">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-warm-white group-hover:text-racing-red transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm font-mono text-silver">
                  {item.organization} — <span className="text-silver-light">{item.context}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-silver font-sans leading-relaxed pb-6">
                {item.description}
              </p>

              {/* Verified Points */}
              <div className="pt-4 border-t border-charcoal-border/60 space-y-2.5">
                <div className="text-[10px] font-mono text-silver-dark uppercase tracking-wider">
                  VERIFIED RECOGNITION DETAILS:
                </div>
                {item.verifiedDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-silver-light">
                    <CheckCircle className="w-3.5 h-3.5 text-racing-green shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
