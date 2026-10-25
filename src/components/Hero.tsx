import { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowRight, Trophy, Cpu, Terminal, Award, ChevronDown } from 'lucide-react';

interface HeroProps {
  reducedMotion: boolean;
}

export const Hero = ({ reducedMotion }: HeroProps) => {
  const [interactiveMode, setInteractiveMode] = useState<'kinematics' | 'aero' | 'compute'>('kinematics');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x: isNaN(x) ? 0 : x, y: isNaN(y) ? 0 : y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  const mouseX = mousePos?.x ?? 0;
  const mouseY = mousePos?.y ?? 0;

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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

        {/* Right Column: 3D Perspective Engineering Matrix Centerpiece */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div
            className="w-full max-w-[480px] aspect-square rounded-2xl bg-navy-surface/80 border border-navy-border/80 p-5 relative overflow-hidden backdrop-blur-xl shadow-2xl transition-transform duration-300"
            style={{
              transform: reducedMotion
                ? 'none'
                : `perspective(1000px) rotateY(${mouseX * 0.35}deg) rotateX(${-mouseY * 0.35}deg)`,
            }}
          >
            {/* Top Interactive Mode Switcher */}
            <div className="flex items-center justify-between pb-3 border-b border-navy-border/60 text-[11px] font-mono">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-electric-sky animate-pulse" />
                <span className="text-warm-white font-bold tracking-wider">ENGINEERING MATRIX</span>
              </div>
              <div className="flex items-center space-x-1 bg-navy-elevated p-1 rounded-lg border border-navy-border/60">
                <button
                  onClick={() => setInteractiveMode('kinematics')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                    interactiveMode === 'kinematics'
                      ? 'bg-electric-blue text-white'
                      : 'text-silver hover:text-warm-white'
                  }`}
                >
                  KINEMATICS
                </button>
                <button
                  onClick={() => setInteractiveMode('aero')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                    interactiveMode === 'aero'
                      ? 'bg-electric-cyan text-graphite'
                      : 'text-silver hover:text-warm-white'
                  }`}
                >
                  AERO
                </button>
                <button
                  onClick={() => setInteractiveMode('compute')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                    interactiveMode === 'compute'
                      ? 'bg-vivid-purple text-white'
                      : 'text-silver hover:text-warm-white'
                  }`}
                >
                  SYSTEMS
                </button>
              </div>
            </div>

            {/* Interactive Engineering Schematic SVG Canvas */}
            <div className="relative w-full h-[320px] flex items-center justify-center my-2">
              <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                <defs>
                  <linearGradient id="vectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="50%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>

                {/* Coordinate Grid & Circles */}
                <circle cx="200" cy="200" r="165" stroke="#334155" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
                <circle cx="200" cy="200" r="120" stroke="#334155" strokeWidth="1" opacity="0.5" />
                <circle cx="200" cy="200" r="75" stroke="#334155" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
                <line x1="200" y1="20" x2="200" y2="380" stroke="#334155" strokeWidth="1" opacity="0.3" />
                <line x1="20" y1="200" x2="380" y2="200" stroke="#334155" strokeWidth="1" opacity="0.3" />

                {/* Mode: Kinematics - Orbiting vectors & geometric trajectory */}
                {interactiveMode === 'kinematics' && (
                  <g>
                    {/* Isometric 3D Projection Cube */}
                    <path
                      d="M 200 120 L 270 160 L 270 240 L 200 280 L 130 240 L 130 160 Z"
                      stroke="#38BDF8"
                      strokeWidth="2"
                      fill="rgba(56, 189, 248, 0.05)"
                    />
                    <line x1="200" y1="120" x2="200" y2="200" stroke="#38BDF8" strokeWidth="1.5" />
                    <line x1="270" y1="160" x2="200" y2="200" stroke="#38BDF8" strokeWidth="1.5" />
                    <line x1="130" y1="160" x2="200" y2="200" stroke="#38BDF8" strokeWidth="1.5" />
                    <line x1="200" y1="200" x2="200" y2="280" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Dynamic Vector Arrows */}
                    <line x1="200" y1="200" x2="290" y2="110" stroke="#F59E0B" strokeWidth="2.5" markerEnd="url(#arrow)" />
                    <circle cx="290" cy="110" r="4" fill="#F59E0B" />
                    <text x="300" y="115" fill="#F59E0B" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">v_vec: 345 m/s</text>

                    <line x1="200" y1="200" x2="110" y2="100" stroke="#10B981" strokeWidth="2" />
                    <circle cx="110" cy="100" r="4" fill="#10B981" />
                    <text x="45" y="95" fill="#10B981" fontSize="10" fontFamily="JetBrains Mono">a_tan: 4.8g</text>

                    <text x="145" y="320" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">
                      RIGID BODY TRANSLATION
                    </text>
                  </g>
                )}

                {/* Mode: Aero - Fluid streamlines & pressure gradients */}
                {interactiveMode === 'aero' && (
                  <g>
                    {/* Airfoil Cross-Section (NACA Profile) */}
                    <path
                      d="M 90 200 C 130 160, 220 165, 310 200 C 220 220, 130 215, 90 200 Z"
                      fill="rgba(6, 182, 212, 0.15)"
                      stroke="#06B6D4"
                      strokeWidth="2.5"
                    />
                    
                    {/* Upper Streamlines (High Speed / Low Pressure) */}
                    <path d="M 60 160 Q 200 120 340 170" stroke="#38BDF8" strokeWidth="2" strokeDasharray="5 4" />
                    <path d="M 60 140 Q 200 100 340 150" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.7" />
                    <text x="140" y="110" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono">LOW PRESSURE (LIFT/DOWNFORCE)</text>

                    {/* Lower Streamlines (Stagnation) */}
                    <path d="M 60 240 Q 200 255 340 230" stroke="#F97316" strokeWidth="2" strokeDasharray="5 4" />
                    <text x="135" y="275" fill="#F97316" fontSize="10" fontFamily="JetBrains Mono">HIGH PRESSURE BOUNDARY</text>

                    {/* Stagnation Point */}
                    <circle cx="90" cy="200" r="5" fill="#06B6D4" />
                    <text x="40" y="225" fill="#06B6D4" fontSize="9" fontFamily="JetBrains Mono">STAGNATION</text>
                  </g>
                )}

                {/* Mode: Compute - Computational state machine & coordinate transformation */}
                {interactiveMode === 'compute' && (
                  <g>
                    {/* Graph Network Nodes */}
                    <circle cx="200" cy="200" r="28" fill="rgba(124, 58, 237, 0.2)" stroke="#7C3AED" strokeWidth="2" />
                    <text x="180" y="204" fill="#C084FC" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">CORE</text>

                    {/* Satellite Nodes */}
                    <circle cx="120" cy="130" r="18" fill="rgba(37, 99, 235, 0.2)" stroke="#2563EB" strokeWidth="1.5" />
                    <text x="105" y="134" fill="#38BDF8" fontSize="9" fontFamily="JetBrains Mono">PARSER</text>
                    <line x1="135" y1="142" x2="180" y2="182" stroke="#334155" strokeWidth="1.5" />

                    <circle cx="280" cy="130" r="18" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1.5" />
                    <text x="268" y="134" fill="#10B981" fontSize="9" fontFamily="JetBrains Mono">EDA</text>
                    <line x1="265" y1="142" x2="220" y2="182" stroke="#334155" strokeWidth="1.5" />

                    <circle cx="120" cy="270" r="18" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="106" y="274" fill="#F59E0B" fontSize="9" fontFamily="JetBrains Mono">MODEL</text>
                    <line x1="135" y1="258" x2="180" y2="218" stroke="#334155" strokeWidth="1.5" />

                    <circle cx="280" cy="270" r="18" fill="rgba(225, 6, 0, 0.2)" stroke="#E10600" strokeWidth="1.5" />
                    <text x="264" y="274" fill="#E10600" fontSize="9" fontFamily="JetBrains Mono">ENGINE</text>
                    <line x1="265" y1="258" x2="220" y2="218" stroke="#334155" strokeWidth="1.5" />

                    <text x="130" y="335" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">
                      PIPELINE: PYTHON // PANDAS // NUMPY
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Bottom Status Pill */}
            <div className="pt-2 border-t border-navy-border/60 flex items-center justify-between text-[10px] font-mono text-silver">
              <span className="text-electric-sky font-semibold">COORDINATES: 17.54°N, 78.57°E</span>
              <span className="text-warm-white">BITS PILANI HYDERABAD</span>
            </div>
          </div>
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
