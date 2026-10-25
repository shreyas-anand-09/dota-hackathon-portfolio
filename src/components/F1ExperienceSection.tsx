import { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Play, Pause, RotateCcw, Activity, Radio, Flag, CheckCircle2 } from 'lucide-react';

interface F1ExperienceSectionProps {
  reducedMotion: boolean;
}

export const F1ExperienceSection = ({ reducedMotion }: F1ExperienceSectionProps) => {
  const [pitMode, setPitMode] = useState<'engineer' | 'builder' | 'competitor'>('engineer');
  const [isPlayingLap, setIsPlayingLap] = useState(!reducedMotion);
  const [lapProgress, setLapProgress] = useState(0.25); // 0 to 1
  const [selectedTurn, setSelectedTurn] = useState<number | null>(null);

  const requestRef = useRef<number | null>(null);

  // Smooth lap simulation loop
  useEffect(() => {
    if (reducedMotion || !isPlayingLap) {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      return;
    }

    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      setLapProgress((prev) => {
        const next = prev + delta * 0.08; // ~12.5 seconds per lap
        return next >= 1 ? 0 : next;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlayingLap, reducedMotion]);

  // Derived simulated telemetry values based on lapProgress
  const currentSpeed = Math.round(210 + Math.sin(lapProgress * Math.PI * 4) * 85 + 35);
  const currentGear = currentSpeed > 300 ? 8 : currentSpeed > 260 ? 7 : currentSpeed > 210 ? 6 : currentSpeed > 160 ? 5 : 4;
  const currentGForce = (1.8 + Math.abs(Math.sin(lapProgress * Math.PI * 6)) * 2.8).toFixed(1);
  const drsStatus = currentSpeed > 290 ? 'ACTIVE' : 'STANDBY';

  const circuitTurns = [
    { id: 1, name: "Turn 1: The First Principle", x: 140, y: 80, desc: "Rigorous deconstruction of physical and software problems." },
    { id: 2, name: "Turn 2: DRS Straight", x: 330, y: 150, desc: "High-speed Python scripting, automation, and data processing." },
    { id: 3, name: "Turn 3: Atmos Chicane", x: 290, y: 260, desc: "Synchrony Credit Analytics Hackathon championship victory." },
    { id: 4, name: "Turn 4: Super-App Hairpin", x: 190, y: 340, desc: "Consolidating BITS campus life into one unified interface." },
    { id: 5, name: "Turn 5: Game Dev Esses", x: 90, y: 270, desc: "2D and 3D projection experiments and spatial depth math." },
    { id: 6, name: "Turn 6: Final Apex", x: 110, y: 170, desc: "Always preparing for the next competition and product launch." },
  ];

  const currentPitData = PORTFOLIO_CONFIG.f1Experience.pitWallModes.find(m => m.id === pitMode)!;

  return (
    <section id="f1-experience" className="py-24 px-4 lg:px-8 bg-graphite relative overflow-hidden border-b border-charcoal-border/60">
      
      {/* Decorative racing kerb line top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 racing-kerb opacity-80" />

      {/* Atmospheric red ambient glow */}
      <div 
        className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-racing-red/10 blur-[150px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-charcoal-border/50 pb-4">
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-racing-red animate-ping" />
              <span className="text-racing-red font-bold">SECTOR 04 // THE MAIN EVENT</span>
              <span className="text-silver-dark">•</span>
              <span className="text-warm-white font-semibold">MOTORSPORT ART DIRECTION</span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-silver">
              <Radio className="w-3.5 h-3.5 text-racing-red" />
              <span>PIT LANE TELEMETRY LIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono text-racing-red uppercase tracking-widest mb-1">
                DEFINING PASSION &amp; ENGINEERING RIGOUR
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-warm-white tracking-tight uppercase leading-[0.95]">
                {PORTFOLIO_CONFIG.f1Experience.heading}
              </h2>
            </div>
            <div className="lg:col-span-4 text-silver text-sm font-sans leading-relaxed">
              {PORTFOLIO_CONFIG.f1Experience.tagline}
            </div>
          </div>
        </div>

        {/* Feature E: Shreyas's Authentic F1 Narrative */}
        <div className="bg-charcoal-surface/80 border-l-4 border-racing-red border-y border-r border-charcoal-border p-6 rounded-r-xl">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded bg-racing-red/20 text-racing-red flex items-center justify-center font-display font-bold shrink-0 mt-0.5">
              F1
            </div>
            <div className="space-y-2">
              <div className="text-xs font-mono text-silver uppercase tracking-wider">
                PERSONAL PHILOSOPHY // MOTORSPORT &amp; MECHANICAL ENGINEERING
              </div>
              <p className="text-sm sm:text-base text-warm-white/90 leading-relaxed font-sans">
                {PORTFOLIO_CONFIG.f1Experience.story}
              </p>
            </div>
          </div>
        </div>

        {/* Feature A & Feature B: Evolving Circuit + Telemetry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Feature A: Evolving Circuit Display */}
          <div className="lg:col-span-7 bg-charcoal/90 border border-charcoal-border rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
            {/* Header / Circuit Title */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-charcoal-border/50">
              <div>
                <span className="text-[10px] font-mono text-racing-red uppercase tracking-wider block">
                  ORIGINAL GEOMETRIC SCHEMATIC
                </span>
                <span className="font-display font-bold text-lg text-warm-white">
                  AUTÓDROMO DE SHREYAS // 2026 SPEC
                </span>
              </div>

              {/* Lap Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsPlayingLap(!isPlayingLap)}
                  className="px-3 py-1.5 rounded bg-charcoal-surface hover:bg-charcoal-elevated border border-charcoal-border text-xs font-mono flex items-center space-x-1.5 text-warm-white transition-colors"
                  aria-label={isPlayingLap ? 'Pause Lap Simulation' : 'Play Lap Simulation'}
                >
                  {isPlayingLap ? <Pause className="w-3.5 h-3.5 text-racing-red" /> : <Play className="w-3.5 h-3.5 text-racing-green" />}
                  <span>{isPlayingLap ? 'PAUSE LAP' : 'SIMULATE LAP'}</span>
                </button>
                <button
                  onClick={() => setLapProgress(0)}
                  className="p-1.5 rounded bg-charcoal-surface hover:bg-charcoal-elevated border border-charcoal-border text-silver hover:text-warm-white transition-colors"
                  title="Reset Lap"
                  aria-label="Reset Lap to Starting Line"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Circuit Canvas Container */}
            <div className="relative w-full aspect-[4/3] max-h-[440px] my-4 flex items-center justify-center bg-graphite/60 rounded-xl border border-charcoal-border/40 p-4">
              
              {/* Telemetry live HUD overlay */}
              <div className="absolute top-3 left-3 bg-charcoal-surface/90 border border-charcoal-border rounded px-3 py-1.5 text-[10px] font-mono backdrop-blur-sm z-20 space-y-0.5">
                <div className="text-silver">SPEED: <span className="text-warm-white font-bold">{currentSpeed} KM/H</span></div>
                <div className="text-silver">GEAR: <span className="text-racing-amber font-bold">{currentGear}</span></div>
                <div className="text-silver">LATERAL G: <span className="text-racing-red font-bold">{currentGForce} G</span></div>
                <div className="text-silver">DRS: <span className={drsStatus === 'ACTIVE' ? 'text-racing-green font-bold' : 'text-silver-dark'}>{drsStatus}</span></div>
              </div>

              {/* Progress Bar / Sector Strip */}
              <div className="absolute top-3 right-3 bg-charcoal-surface/90 border border-charcoal-border rounded px-3 py-1.5 text-[10px] font-mono backdrop-blur-sm z-20 flex items-center space-x-2">
                <span className="text-silver">LAP PROGRESS:</span>
                <span className="text-racing-red font-bold">{Math.round(lapProgress * 100)}%</span>
              </div>

              {/* High-Precision SVG Circuit Track */}
              <svg viewBox="0 0 500 400" className="w-full h-full" fill="none">
                <defs>
                  {/* Glowing filter */}
                  <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#E53935" floodOpacity="0.8" />
                  </filter>
                  <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E53935" />
                    <stop offset="50%" stopColor="#F3F1EB" />
                    <stop offset="100%" stopColor="#858C95" />
                  </linearGradient>
                </defs>

                {/* Circuit Grid Coordinate lines */}
                <line x1="50" y1="200" x2="450" y2="200" stroke="#1C2229" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="250" y1="50" x2="250" y2="350" stroke="#1C2229" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="250" cy="200" r="140" stroke="#1C2229" strokeWidth="1" strokeDasharray="2 4" />

                {/* Outer Track Bed (Dark Asphalt) */}
                <path
                  d="M 120 70 C 260 30, 420 80, 400 180 C 390 270, 310 240, 330 320 C 345 370, 240 380, 170 340 C 80 290, 70 200, 140 180 C 210 170, 220 120, 120 70 Z"
                  stroke="#1E252F"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Inner White Track Edges */}
                <path
                  d="M 120 70 C 260 30, 420 80, 400 180 C 390 270, 310 240, 330 320 C 345 370, 240 380, 170 340 C 80 290, 70 200, 140 180 C 210 170, 220 120, 120 70 Z"
                  stroke="#2F3844"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Racing Racing-Red Centerline Path */}
                <path
                  d="M 120 70 C 260 30, 420 80, 400 180 C 390 270, 310 240, 330 320 C 345 370, 240 380, 170 340 C 80 290, 70 200, 140 180 C 210 170, 220 120, 120 70 Z"
                  stroke="url(#trackGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                  opacity="0.85"
                />

                {/* Start / Finish Kerb */}
                <rect x="110" y="60" width="16" height="20" fill="#E53935" transform="rotate(-15 110 60)" />
                <rect x="110" y="60" width="8" height="20" fill="#F3F1EB" transform="rotate(-15 110 60)" />

                {/* Interactive Clickable Apex Points */}
                {circuitTurns.map((turn) => {
                  const isHovered = selectedTurn === turn.id;
                  return (
                    <g 
                      key={turn.id} 
                      className="cursor-pointer group"
                      onClick={() => setSelectedTurn(turn.id)}
                    >
                      <circle
                        cx={turn.x}
                        cy={turn.y}
                        r={isHovered ? 9 : 6}
                        fill={isHovered ? '#E53935' : '#0B0D10'}
                        stroke="#E53935"
                        strokeWidth="2"
                        className="transition-all"
                      />
                      <text
                        x={turn.x + 10}
                        y={turn.y + 4}
                        fill="#F3F1EB"
                        fontSize="9"
                        fontFamily="JetBrains Mono"
                        className="opacity-80 group-hover:opacity-100 font-bold"
                      >
                        T{turn.id}
                      </text>
                    </g>
                  );
                })}

                {/* Animated Vehicle Telemetry Beacon Marker */}
                <g filter="url(#redGlow)">
                  {(() => {
                    const points = [
                      { x: 120, y: 70 },
                      { x: 230, y: 45 },
                      { x: 330, y: 75 },
                      { x: 395, y: 130 },
                      { x: 400, y: 180 },
                      { x: 370, y: 230 },
                      { x: 325, y: 260 },
                      { x: 335, y: 320 },
                      { x: 280, y: 365 },
                      { x: 195, y: 355 },
                      { x: 140, y: 330 },
                      { x: 95, y: 275 },
                      { x: 85, y: 215 },
                      { x: 135, y: 180 },
                      { x: 185, y: 165 },
                      { x: 195, y: 120 },
                      { x: 145, y: 85 },
                      { x: 120, y: 70 },
                    ];
                    const idx = Math.min(Math.floor(lapProgress * (points.length - 1)), points.length - 2);
                    const localProg = (lapProgress * (points.length - 1)) - idx;
                    const p1 = points[idx];
                    const p2 = points[idx + 1];
                    const carX = p1.x + (p2.x - p1.x) * localProg;
                    const carY = p1.y + (p2.y - p1.y) * localProg;

                    return (
                      <g transform={`translate(${carX}, ${carY})`}>
                        <circle cx="0" cy="0" r="7" fill="#E53935" />
                        <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                        <line x1="-10" y1="0" x2="10" y2="0" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
                        <line x1="0" y1="-10" x2="0" y2="10" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
                      </g>
                    );
                  })()}
                </g>
              </svg>

              {/* Turn Inspector Details Box */}
              {selectedTurn && (
                <div className="absolute bottom-3 left-3 right-3 bg-charcoal-deep/95 border border-racing-red/60 rounded-lg p-3 text-xs font-mono backdrop-blur-md flex items-center justify-between">
                  <div>
                    <span className="text-racing-red font-bold">
                      {circuitTurns.find(t => t.id === selectedTurn)?.name}:
                    </span>{' '}
                    <span className="text-warm-white">
                      {circuitTurns.find(t => t.id === selectedTurn)?.desc}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedTurn(null)}
                    className="text-silver hover:text-white ml-2 text-[10px]"
                  >
                    [CLOSE]
                  </button>
                </div>
              )}
            </div>

            {/* Circuit Footer Bar */}
            <div className="pt-2 border-t border-charcoal-border/50 flex flex-wrap items-center justify-between text-[11px] font-mono text-silver gap-2">
              <span className="text-racing-red font-semibold">CLICK ANY TURN (T1–T6) TO INSPECT</span>
              <span>TELEMETRY CYCLE: 12.5s / LAP</span>
              <span className="text-silver-light">APEX STATUS: PURPLE DELTA</span>
            </div>
          </div>

          {/* Feature B: Personality Telemetry Console */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-charcoal/90 border border-charcoal-border rounded-2xl p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-charcoal-border/50">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-racing-red" />
                  <span className="font-display font-bold text-sm text-warm-white tracking-wider">
                    PERSONAL TELEMETRY HUD
                  </span>
                </div>
                <span className="text-[10px] font-mono text-racing-green uppercase bg-racing-green/10 px-2 py-0.5 rounded border border-racing-green/30">
                  CHANNELS ONLINE
                </span>
              </div>

              {/* Fictional Personality Telemetry Metaphors */}
              <div className="space-y-4 font-mono">
                {PORTFOLIO_CONFIG.f1Experience.telemetry.map((t, idx) => (
                  <div key={t.label} className="bg-charcoal-deep/80 border border-charcoal-border/80 p-3.5 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-silver font-semibold">{t.label}</span>
                      <span className="text-warm-white font-bold">{t.value}</span>
                    </div>

                    {/* Animated Telemetry Gauge Bar */}
                    <div className="w-full h-2 bg-charcoal-surface rounded-full overflow-hidden p-0.5 border border-charcoal-border/50">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: idx === 0 ? '98%' : idx === 1 ? '92%' : idx === 2 ? '96%' : '85%',
                          backgroundColor: t.color,
                        }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-silver-dark pt-0.5">
                      <span>READOUT: <span className="text-silver-light font-bold">{t.metric}</span></span>
                      <span className="text-racing-red font-semibold">{t.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Telemetry Channel Footer */}
              <div className="p-3 rounded-lg bg-charcoal-surface/60 border border-charcoal-border/60 text-[11px] font-mono text-silver leading-relaxed">
                <span className="text-racing-amber font-bold">NOTE: </span>
                Fictional telemetry metaphors mapping mechanical engineering and motorsport disciplines to curiosity, development cadence, and competitive drive.
              </div>
            </div>
          </div>
        </div>

        {/* Feature C: Interactive Pit Wall with 3 Selectable Modes */}
        <div className="bg-charcoal/90 border border-charcoal-border rounded-2xl p-6 lg:p-10 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-charcoal-border/60 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-racing-red uppercase tracking-wider mb-1">
                <Flag className="w-3.5 h-3.5" />
                <span>PIT WALL TACTICAL CONSOLE</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-warm-white">
                SELECT OPERATIONAL MODE
              </h3>
            </div>
            
            <div className="text-xs font-mono text-silver">
              SELECT: [ENGINEER] / [BUILDER] / [COMPETITOR]
            </div>
          </div>

          {/* Mode Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="tablist">
            {PORTFOLIO_CONFIG.f1Experience.pitWallModes.map((mode) => {
              const isActive = pitMode === mode.id;
              return (
                <button
                  key={mode.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`pit-panel-${mode.id}`}
                  onClick={() => setPitMode(mode.id as any)}
                  className={`p-5 rounded-xl text-left transition-all border relative overflow-hidden ${
                    isActive
                      ? 'bg-charcoal-surface border-racing-red shadow-xl shadow-racing-red/15'
                      : 'bg-charcoal-deep/60 border-charcoal-border hover:border-silver/40 hover:bg-charcoal-surface/40'
                  }`}
                >
                  {/* Top Bar for active state */}
                  {isActive && <div className="absolute top-0 left-0 right-0 h-1 bg-racing-red" />}

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-extrabold text-lg text-warm-white tracking-wide">
                      {mode.title}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isActive ? 'bg-racing-red text-white' : 'bg-charcoal-elevated text-silver'
                    }`}>
                      {isActive ? 'ACTIVE' : 'SELECT'}
                    </span>
                  </div>

                  <p className="text-xs text-silver line-clamp-2 font-sans">
                    {mode.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Mode Display Panel */}
          <div 
            id={`pit-panel-${currentPitData.id}`} 
            role="tabpanel"
            className="p-6 lg:p-8 rounded-xl bg-charcoal-deep border border-charcoal-border space-y-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 border-b border-charcoal-border/70 gap-4">
              <div>
                <span className="text-xs font-mono text-racing-red uppercase tracking-wider block mb-1">
                  TACTICAL DESIGNATION // {currentPitData.badge}
                </span>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-warm-white">
                  {currentPitData.tagline}
                </h4>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-silver">
                <CheckCircle2 className="w-4 h-4 text-racing-green" />
                <span>VERIFIED FOCUS PROFILE</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-silver-light font-sans leading-relaxed max-w-4xl">
              {currentPitData.description}
            </p>

            {/* Key Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {currentPitData.focusAreas.map((item, index) => (
                <div key={index} className="bg-charcoal-surface/70 border border-charcoal-border/70 p-4 rounded-lg space-y-2">
                  <div className="text-[10px] font-mono text-racing-red">
                    0{index + 1} // FOCUS VECTOR
                  </div>
                  <div className="text-xs font-mono font-medium text-warm-white">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
