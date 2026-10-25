import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Shield } from 'lucide-react';

export const LiverpoolSection = () => {
  return (
    <section id="liverpool" className="py-20 px-4 lg:px-8 bg-charcoal-deep border-b border-charcoal-border/50 relative overflow-hidden">
      
      {/* Subtle crimson radial glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[350px] bg-racing-red/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Sector Tag */}
        <div className="flex items-center space-x-2 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-racing-red" />
          <span className="text-racing-red font-bold">SECTOR 05 // VISUAL INTERLUDE</span>
          <span className="text-silver-dark">•</span>
          <span className="text-silver">MERSEYSIDE HERITAGE</span>
        </div>

        {/* Visual Interlude Box */}
        <div className="bg-gradient-to-br from-charcoal via-charcoal to-charcoal-surface border border-charcoal-border rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Editorial & Story */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-racing-red/10 border border-racing-red/30 text-racing-red text-xs font-mono font-semibold">
                <Shield className="w-3.5 h-3.5" />
                <span>ANFIELD CULTURE // 9 FORMATIVE YEARS</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-warm-white tracking-tight uppercase leading-tight">
                {PORTFOLIO_CONFIG.liverpoolFC.heading}
              </h3>

              <blockquote className="border-l-2 border-racing-red pl-4 text-warm-white/90 font-serif italic text-base sm:text-lg">
                "{PORTFOLIO_CONFIG.liverpoolFC.quote}"
              </blockquote>

              <p className="text-silver text-sm sm:text-base font-sans leading-relaxed">
                {PORTFOLIO_CONFIG.liverpoolFC.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-silver-light">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-racing-red" />
                  <span>HIGH-TEMPO WORK ETHIC</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm-white" />
                  <span>TACTICAL RESILIENCE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-racing-red" />
                  <span>PLAYING FOR THE TEAM</span>
                </div>
              </div>
            </div>

            {/* Right Column: Subtle Tactical Football Pitch Geometry */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-full max-w-[280px] aspect-[3/4] rounded-xl bg-charcoal-deep border border-charcoal-border/80 p-4 relative flex items-center justify-center shadow-xl">
                
                {/* SVG Tactical Football Pitch Schematic */}
                <svg viewBox="0 0 200 280" className="w-full h-full" fill="none">
                  {/* Pitch Border */}
                  <rect x="10" y="10" width="180" height="260" rx="4" stroke="#2F3844" strokeWidth="1.5" />

                  {/* Halfway Line */}
                  <line x1="10" y1="140" x2="190" y2="140" stroke="#2F3844" strokeWidth="1.5" />
                  <circle cx="100" cy="140" r="28" stroke="#2F3844" strokeWidth="1.5" />
                  <circle cx="100" cy="140" r="2" fill="#2F3844" />

                  {/* Penalty Boxes */}
                  <rect x="50" y="10" width="100" height="45" stroke="#2F3844" strokeWidth="1" />
                  <rect x="70" y="10" width="60" height="18" stroke="#2F3844" strokeWidth="1" />
                  
                  <rect x="50" y="225" width="100" height="45" stroke="#2F3844" strokeWidth="1" />
                  <rect x="70" y="252" width="60" height="18" stroke="#2F3844" strokeWidth="1" />

                  {/* Tactical Pass Vectors */}
                  <path d="M 60 210 Q 100 160 140 100" stroke="#E53935" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 140 100 Q 110 60 100 35" stroke="#F3F1EB" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Player Nodes (Restrained Red) */}
                  <circle cx="60" cy="210" r="4" fill="#E53935" />
                  <circle cx="140" cy="100" r="4" fill="#E53935" />
                  <circle cx="100" cy="35" r="5" fill="#E53935" stroke="#FFFFFF" strokeWidth="1" />

                  {/* Tactical Annotation */}
                  <text x="35" y="274" fill="#858C95" fontSize="7" fontFamily="JetBrains Mono">HIGH-PRESS MATRIX // GEGENPRESSING</text>
                </svg>

                <div className="absolute bottom-2 text-center text-[10px] font-mono text-silver-dark">
                  MERSEYSIDE FOOTBALL GEOMETRY
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
