import { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowRight, Gauge, Cpu, Trophy, Terminal, Compass } from 'lucide-react';

interface HeroProps {
  reducedMotion: boolean;
}

export const Hero = ({ reducedMotion }: HeroProps) => {
  const [telemetryMode, setTelemetryMode] = useState<'aero' | 'circuit' | 'kinematics'>('circuit');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
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
      className="relative min-h-screen pt-28 pb-16 px-4 lg:px-8 flex flex-col justify-between overflow-hidden bg-grid-pattern border-b border-charcoal-border/50"
    >
      {/* Background radial spotlight */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-racing-red/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Top Sector Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-charcoal-border/50 pb-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-racing-red animate-ping" />
            <span className="text-racing-red font-bold">STARTING GRID // SECTOR 01</span>
            <span className="text-silver-dark">•</span>
            <span className="text-silver tracking-wider">INITIALIZED AT 0.000s</span>
          </div>

          <div className="flex items-center space-x-4 text-xs font-mono text-silver">
            <div className="flex items-center space-x-1.5">
              <Compass className="w-3.5 h-3.5 text-racing-red" />
              <span>HYDERABAD: 17.54°N, 78.57°E</span>
            </div>
            <span className="hidden sm:inline text-silver-dark">|</span>
            <span className="hidden sm:inline text-warm-white bg-charcoal-surface px-2 py-0.5 rounded border border-charcoal-border">
              MECHANICAL '28
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Headline + Original Circuit Centerpiece */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8 lg:py-14 my-auto">
        
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-7 space-y-6 z-10">
          {/* Identity Tag */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-charcoal-surface/90 border border-charcoal-border text-xs font-mono text-warm-white">
            <span className="w-2 h-2 rounded-full bg-racing-green animate-pulse" />
            <span className="text-silver-light font-medium tracking-wide">
              {PORTFOLIO_CONFIG.personal.identityLine}
            </span>
          </div>

          {/* Masked / Oversized Headline */}
          <div className="space-y-1">
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-warm-white">
              BUILT TO <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-warm-white to-silver-light">
                BUILD.
                <span className="absolute -bottom-2 left-0 w-24 h-1.5 bg-racing-red rounded-full" />
              </span>
            </h1>
          </div>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-silver-light font-sans max-w-xl font-normal leading-relaxed pt-2">
            {PORTFOLIO_CONFIG.personal.supportingCopy}
          </p>

          {/* Metric Highlights Pill Strip */}
          <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
            <div className="bg-charcoal-surface/60 border border-charcoal-border p-3 rounded">
              <div className="text-[10px] font-mono text-silver uppercase flex items-center space-x-1">
                <Trophy className="w-3.5 h-3.5 text-racing-red" />
                <span>ATMOS 26</span>
              </div>
              <div className="text-sm font-display font-bold text-warm-white mt-1">
                Hackathon Winner
              </div>
              <div className="text-[10px] text-silver-dark font-mono truncate">Synchrony Credit Track</div>
            </div>

            <div className="bg-charcoal-surface/60 border border-charcoal-border p-3 rounded">
              <div className="text-[10px] font-mono text-silver uppercase flex items-center space-x-1">
                <Terminal className="w-3.5 h-3.5 text-racing-green" />
                <span>DEV FOCUS</span>
              </div>
              <div className="text-sm font-display font-bold text-warm-white mt-1">
                Python Intermediate
              </div>
              <div className="text-[10px] text-silver-dark font-mono truncate">Data &amp; Game Logic</div>
            </div>

            <div className="bg-charcoal-surface/60 border border-charcoal-border p-3 rounded">
              <div className="text-[10px] font-mono text-silver uppercase flex items-center space-x-1">
                <Cpu className="w-3.5 h-3.5 text-racing-amber" />
                <span>DISCIPLINE</span>
              </div>
              <div className="text-sm font-display font-bold text-warm-white mt-1">
                Mechanical Eng.
              </div>
              <div className="text-[10px] text-silver-dark font-mono truncate">BITS Pilani '28</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => scrollTo('#garage')}
              className="group px-7 py-4 rounded font-mono text-xs font-bold uppercase tracking-widest bg-racing-red hover:bg-racing-redDark text-white transition-all shadow-xl shadow-racing-red/25 flex items-center space-x-3 active:scale-95"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('#about')}
              className="px-7 py-4 rounded font-mono text-xs font-bold uppercase tracking-widest bg-charcoal-surface hover:bg-charcoal-elevated text-warm-white border border-charcoal-border hover:border-silver transition-all flex items-center space-x-2 active:scale-95"
            >
              <span>THE STORY</span>
            </button>
          </div>
        </div>

        {/* Right Column: Original Centerpiece (Mechanical & Circuit Telemetry Geometry) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Layered Interactive Circuit Display */}
          <div 
            className="w-full max-w-[460px] aspect-square rounded-2xl bg-charcoal-deep/80 border border-charcoal-border/80 p-5 relative overflow-hidden backdrop-blur-sm shadow-2xl transition-transform duration-300"
            style={{
              transform: reducedMotion ? 'none' : `perspective(1000px) rotateY(${mouseX * 0.4}deg) rotateX(${-mouseY * 0.4}deg)`,
            }}
          >
            {/* Corner Bracket Overlays */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-racing-red" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-racing-red" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-racing-red" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-racing-red" />

            {/* Circuit Telemetry Mode Header */}
            <div className="flex items-center justify-between pb-3 border-b border-charcoal-border/50 text-[11px] font-mono">
              <div className="flex items-center space-x-2">
                <Gauge className="w-3.5 h-3.5 text-racing-red" />
                <span className="text-warm-white font-bold tracking-wider">GEOMETRY_VECTOR_01</span>
              </div>
              <div className="flex items-center space-x-1 bg-charcoal-surface px-1.5 py-0.5 rounded border border-charcoal-border/40">
                <button
                  onClick={() => setTelemetryMode('circuit')}
                  className={`px-1.5 py-0.5 rounded ${telemetryMode === 'circuit' ? 'bg-racing-red text-white' : 'text-silver hover:text-warm-white'}`}
                >
                  CIRCUIT
                </button>
                <button
                  onClick={() => setTelemetryMode('aero')}
                  className={`px-1.5 py-0.5 rounded ${telemetryMode === 'aero' ? 'bg-racing-red text-white' : 'text-silver hover:text-warm-white'}`}
                >
                  AERO
                </button>
                <button
                  onClick={() => setTelemetryMode('kinematics')}
                  className={`px-1.5 py-0.5 rounded ${telemetryMode === 'kinematics' ? 'bg-racing-red text-white' : 'text-silver hover:text-warm-white'}`}
                >
                  LOAD
                </button>
              </div>
            </div>

            {/* SVG Centerpiece Canvas */}
            <div className="relative w-full h-[320px] flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                {/* Radial coordinate circles */}
                <circle cx="200" cy="200" r="170" stroke="#2F3844" strokeWidth="1" strokeDasharray="3 6" opacity="0.4" />
                <circle cx="200" cy="200" r="125" stroke="#2F3844" strokeWidth="1" opacity="0.5" />
                <circle cx="200" cy="200" r="80" stroke="#2F3844" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />

                {/* Crosshairs */}
                <line x1="200" y1="20" x2="200" y2="380" stroke="#2F3844" strokeWidth="1" opacity="0.3" />
                <line x1="20" y1="200" x2="380" y2="200" stroke="#2F3844" strokeWidth="1" opacity="0.3" />

                {/* Original Circuit Path Geometry */}
                <path
                  id="heroCircuit"
                  d="M 120 70 C 230 40, 330 90, 320 180 C 310 260, 240 230, 260 300 C 275 350, 190 365, 140 330 C 70 280, 80 200, 150 190 C 210 180, 210 120, 120 70 Z"
                  stroke="#384352"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-40"
                />

                {/* Racing Circuit Line with glowing red apex trace */}
                <path
                  d="M 120 70 C 230 40, 330 90, 320 180 C 310 260, 240 230, 260 300 C 275 350, 190 365, 140 330 C 70 280, 80 200, 150 190 C 210 180, 210 120, 120 70 Z"
                  stroke="#E53935"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="40 180"
                  className={reducedMotion ? '' : 'animate-apex-glow'}
                />

                {/* Inner Racing Kerb Highlights */}
                <circle cx="120" cy="70" r="5" fill="#E53935" />
                <circle cx="320" cy="180" r="4" fill="#00E676" />
                <circle cx="260" cy="300" r="4" fill="#FFB300" />
                <circle cx="140" cy="330" r="4" fill="#F3F1EB" />

                {/* Apex Annotations */}
                <text x="135" y="68" fill="#F3F1EB" fontSize="9" fontFamily="JetBrains Mono" opacity="0.8">TURN 1 // APEX</text>
                <text x="328" y="185" fill="#00E676" fontSize="9" fontFamily="JetBrains Mono" opacity="0.9">DRS_ZONE_01</text>
                <text x="272" y="305" fill="#FFB300" fontSize="9" fontFamily="JetBrains Mono" opacity="0.8">CHICANE S2</text>
                <text x="75" y="340" fill="#858C95" fontSize="9" fontFamily="JetBrains Mono" opacity="0.7">START/FINISH</text>

                {/* Telemetry Vectors based on mode */}
                {telemetryMode === 'aero' && (
                  <g opacity="0.8">
                    <path d="M 60 140 Q 150 100 240 110" stroke="#00E676" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M 70 170 Q 180 150 290 160" stroke="#00E676" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="50" y="115" fill="#00E676" fontSize="9" fontFamily="JetBrains Mono">AERO PRESSURE 1.84 bar</text>
                  </g>
                )}

                {telemetryMode === 'kinematics' && (
                  <g opacity="0.8">
                    <circle cx="200" cy="200" r="45" fill="rgba(229, 57, 53, 0.1)" stroke="#E53935" strokeWidth="1" />
                    <line x1="200" y1="200" x2="230" y2="175" stroke="#E53935" strokeWidth="2" />
                    <text x="170" y="260" fill="#E53935" fontSize="9" fontFamily="JetBrains Mono">G-LAT: 4.2 G</text>
                  </g>
                )}

                {/* Central Moving Vehicle Marker */}
                <g className={reducedMotion ? '' : 'transition-all duration-1000'}>
                  <circle cx="200" cy="200" r="2" fill="#F3F1EB" />
                  <circle cx="318" cy="185" r="7" fill="#E53935" className={reducedMotion ? '' : 'animate-ping opacity-75'} />
                  <circle cx="318" cy="185" r="4" fill="#F3F1EB" />
                </g>
              </svg>

              {/* In-diagram Overlay Card */}
              <div className="absolute bottom-2 right-2 bg-charcoal/90 border border-charcoal-border p-2 rounded text-[10px] font-mono backdrop-blur-sm">
                <div className="text-silver-light">APEX VELOCITY</div>
                <div className="text-warm-white font-bold font-display text-xs">284.6 KM/H</div>
                <div className="text-racing-green flex items-center space-x-1">
                  <span>DELTA</span>
                  <span>-0.341s</span>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Strip */}
            <div className="pt-2 border-t border-charcoal-border/50 flex items-center justify-between text-[10px] font-mono text-silver">
              <span>LATITUDE: 17°32'N</span>
              <span className="text-racing-red font-semibold">CIRCUIT SPEC: ORIGINAL 2026</span>
              <span>GEAR: 7 // DRS ON</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Beacon */}
      <div className="max-w-7xl mx-auto w-full pt-4 flex flex-col items-center justify-center">
        <button
          onClick={() => scrollTo('#about')}
          className="group flex flex-col items-center space-y-2 text-silver hover:text-warm-white focus:outline-none"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase group-hover:text-racing-red transition-colors">
            START LAP // SCROLL TO COMMENCE
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-charcoal-border group-hover:border-racing-red flex items-start justify-center p-1 transition-colors">
            <div className={`w-1 h-2 rounded-full bg-racing-red ${reducedMotion ? '' : 'animate-bounce'}`} />
          </div>
        </button>
      </div>
    </section>
  );
};
