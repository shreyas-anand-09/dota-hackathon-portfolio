import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowRight, Trophy, Cpu, Award, Terminal, ChevronDown } from 'lucide-react';
import { BitsPilaniCampus3D } from './BitsPilaniCampus3D';

interface HeroProps {
  reducedMotion: boolean;
}

export const Hero = ({ reducedMotion }: HeroProps) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 px-4 lg:px-8 flex flex-col justify-between overflow-hidden bg-navy-deep bg-grid-subtle border-b border-navy-border/60"
    >
      {/* Cinematic Ambient Lighting: Deep Navy, Electric Blue, Vivid Purple */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-electric-blue/15 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[550px] h-[500px] bg-vivid-purple/15 blur-[150px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-electric-cyan/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Top Sector Indicator */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-border/40 pb-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-electric-sky animate-pulse" />
            <span className="text-electric-sky font-bold tracking-wider">CHAPTER 01 // STARTING GRID</span>
            <span className="text-silver-dark">•</span>
            <span className="text-warm-muted">PORTFOLIO OF SHREYAS ANAND</span>
          </div>

          <div className="flex items-center space-x-3 text-xs font-mono text-silver">
            <span className="text-silver-light">BITS PILANI HYDERABAD</span>
            <span className="text-silver-dark">•</span>
            <span className="text-electric-sky bg-navy-surface px-2.5 py-0.5 rounded-full border border-navy-border font-semibold">
              B.E. MECHANICAL '30
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Headline & Interactive Centerpiece */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-10 lg:py-16 my-auto">
        
        {/* Left Column: Personal Introduction & Ambitions */}
        <div className="lg:col-span-7 space-y-6 z-10">
          
          {/* Identity Tag */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-navy-surface/90 border border-navy-border text-xs font-mono text-warm-white shadow-lg shadow-electric-blue/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-green animate-pulse" />
            <span className="text-silver-light font-medium tracking-wide">
              {PORTFOLIO_CONFIG.personal.name}
            </span>
            <span className="text-silver-dark">/</span>
            <span className="text-electric-sky font-bold">
              BUILDER &amp; ENGINEER
            </span>
          </div>

          {/* Oversized Headline */}
          <div className="space-y-2">
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-warm-white">
              BUILT TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-sky via-electric-blue to-vivid-purple">
                BUILD.
              </span>
            </h1>
          </div>

          {/* Concise description of interests and ambitions */}
          <p className="text-base sm:text-xl text-silver-light font-sans max-w-xl font-normal leading-relaxed pt-1">
            Mechanical engineering student at <span className="text-warm-white font-medium">BITS Pilani</span>. Intermediate Python developer, hackathon winner, and builder exploring the intersection of physical machines, spatial mathematics, and high-impact digital tools.
          </p>

          {/* Verified Achievements Pill Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="bg-navy-surface/70 border border-navy-border p-3 rounded-xl hover:border-amber-bright/50 transition-colors">
              <div className="text-[10px] font-mono text-amber-bright uppercase flex items-center space-x-1 font-bold">
                <Trophy className="w-3.5 h-3.5 text-amber-bright shrink-0" />
                <span>ATMOS 26</span>
              </div>
              <div className="text-xs sm:text-sm font-display font-bold text-warm-white mt-1">
                1st Place
              </div>
              <div className="text-[10px] text-silver font-mono truncate">Synchrony Track</div>
            </div>

            <div className="bg-navy-surface/70 border border-navy-border p-3 rounded-xl hover:border-electric-sky/50 transition-colors">
              <div className="text-[10px] font-mono text-electric-sky uppercase flex items-center space-x-1 font-bold">
                <Award className="w-3.5 h-3.5 text-electric-sky shrink-0" />
                <span>DST AWARDS</span>
              </div>
              <div className="text-xs sm:text-sm font-display font-bold text-warm-white mt-1">
                ₹10,000 Award
              </div>
              <div className="text-[10px] text-silver font-mono truncate">INSPIRE MANAK</div>
            </div>

            <div className="bg-navy-surface/70 border border-navy-border p-3 rounded-xl hover:border-emerald-green/50 transition-colors">
              <div className="text-[10px] font-mono text-emerald-green uppercase flex items-center space-x-1 font-bold">
                <Terminal className="w-3.5 h-3.5 text-emerald-green shrink-0" />
                <span>DEV FOCUS</span>
              </div>
              <div className="text-xs sm:text-sm font-display font-bold text-warm-white mt-1">
                Python Dev
              </div>
              <div className="text-[10px] text-silver font-mono truncate">Data &amp; Automation</div>
            </div>

            <div className="bg-navy-surface/70 border border-navy-border p-3 rounded-xl hover:border-vivid-purple/50 transition-colors">
              <div className="text-[10px] font-mono text-vivid-purple uppercase flex items-center space-x-1 font-bold">
                <Cpu className="w-3.5 h-3.5 text-vivid-purple shrink-0" />
                <span>DISCIPLINE</span>
              </div>
              <div className="text-xs sm:text-sm font-display font-bold text-warm-white mt-1">
                B.E. Mechanical
              </div>
              <div className="text-[10px] text-silver font-mono truncate">BITS Pilani '30</div>
            </div>
          </div>

          {/* Compelling Calls to Action */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => scrollTo('#garage')}
              className="px-7 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-electric-blue via-electric-sky to-vivid-purple text-white transition-all shadow-xl shadow-electric-blue/25 flex items-center space-x-3 active:scale-95 hover:brightness-110"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('#achievements')}
              className="px-7 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-navy-surface hover:bg-navy-elevated text-warm-white border border-navy-border hover:border-electric-sky/50 transition-all flex items-center space-x-2 active:scale-95"
            >
              <span>VIEW HONORS &amp; AWARDS</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Interactive BITS Pilani Hyderabad Campus Centerpiece */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <BitsPilaniCampus3D reducedMotion={reducedMotion} />
        </div>

      </div>

      {/* Tasteful Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-4 flex items-center justify-between text-xs font-mono text-silver border-t border-navy-border/30">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-sky animate-pulse" />
          <span>SCROLL TO TRAVERSE SECTORS</span>
        </div>
        <button
          onClick={() => scrollTo('#about')}
          className="flex items-center space-x-1 text-silver hover:text-warm-white transition-colors"
          aria-label="Scroll to About section"
        >
          <span>PROCEED</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
