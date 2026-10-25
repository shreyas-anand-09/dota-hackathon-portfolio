import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Thermometer } from 'lucide-react';
import { ExplodedStageIndicator } from './ExplodedStageIndicator';

interface InteractivePlaygroundProps {
  reducedMotion: boolean;
}

export const InteractivePlayground = ({ reducedMotion }: InteractivePlaygroundProps) => {
  const [mode, setMode] = useState<'qualifying' | 'race' | 'safetyCar'>('qualifying');
  const [isPlaying, setIsPlaying] = useState(!reducedMotion);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [progress, setProgress] = useState(0);

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion || !isPlaying) {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      return;
    }

    let lastTime = performance.now();
    const step = (now: number) => {
      // Guard against negative delta or large jumps when tab is throttled
      const delta = Math.min(0.1, Math.max(0, (now - lastTime) / 1000));
      lastTime = now;

      const baseRate = mode === 'qualifying' ? 0.12 : mode === 'race' ? 0.08 : 0.04;
      setProgress((prev) => {
        const next = prev + delta * baseRate * speedMultiplier;
        return next >= 1 ? next % 1 : Math.max(0, next);
      });

      requestRef.current = requestAnimationFrame(step);
    };

    requestRef.current = requestAnimationFrame(step);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, mode, speedMultiplier, reducedMotion]);

  // Telemetry based on mode & safeProgress
  const safeProgress = Math.max(0, Math.min(1, isNaN(progress) ? 0 : progress));
  const rpm = Math.round(mode === 'qualifying' ? 11800 + Math.sin(safeProgress * 12) * 1200 : mode === 'race' ? 10400 + Math.sin(safeProgress * 8) * 800 : 7500);
  const gear = mode === 'qualifying' ? 8 : mode === 'race' ? 7 : 4;
  const throttle = Math.round(mode === 'safetyCar' ? 45 : Math.max(30, 85 + Math.sin(safeProgress * 10) * 20));
  const tyreTemp = mode === 'qualifying' ? '104°C' : mode === 'race' ? '98°C' : '82°C';
  const delta = mode === 'qualifying' ? '-0.384s' : mode === 'race' ? '+0.012s' : 'SC INTERVAL';

  return (
    <section id="playground" className="py-24 px-4 lg:px-8 bg-graphite border-b border-charcoal-border/50 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Exploded Architecture Subsystem Tracker */}
        <ExplodedStageIndicator
          moduleCode="MOD-08"
          category="SIMULATOR BENCH"
          title="Apex Playground & Kinematics"
          coords="X: +40mm, Y: +140mm, Z: +60mm"
          accentColor="#E10600"
        />
        
        {/* Sector Tag & Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-racing-red" />
            <span className="text-racing-red font-bold">SECTOR 09 // INTERACTIVE PLAYGROUND</span>
            <span className="text-silver-dark">•</span>
            <span className="text-silver">APEX SIMULATOR</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
                THE TELEMETRY LAB / <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-warm-white to-silver-light">
                  MINI CIRCUIT BENCH.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-silver text-sm font-sans leading-relaxed">
              Test dynamic throttle and braking telemetry across three racing simulation modes. Watch the vehicle marker carve the apex in real-time.
            </div>
          </div>
        </div>

        {/* Simulator Workbench Frame */}
        <div className="bg-charcoal/90 border border-charcoal-border rounded-2xl p-6 lg:p-8 shadow-2xl space-y-6">
          
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-charcoal-border/60 gap-4">
            {/* Mode Selectors */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-silver mr-2 hidden sm:inline">MODE:</span>
              <button
                onClick={() => setMode('qualifying')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all ${
                  mode === 'qualifying'
                    ? 'bg-racing-red text-white'
                    : 'bg-charcoal-surface text-silver hover:text-warm-white'
                }`}
              >
                QUALIFYING HOTLAP
              </button>
              <button
                onClick={() => setMode('race')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all ${
                  mode === 'race'
                    ? 'bg-racing-amber text-graphite'
                    : 'bg-charcoal-surface text-silver hover:text-warm-white'
                }`}
              >
                RACE STINT
              </button>
              <button
                onClick={() => setMode('safetyCar')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all ${
                  mode === 'safetyCar'
                    ? 'bg-racing-green text-graphite'
                    : 'bg-charcoal-surface text-silver hover:text-warm-white'
                }`}
              >
                SAFETY CAR RESTART
              </button>
            </div>

            {/* Playback & Multiplier */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1.5 rounded bg-charcoal-surface hover:bg-charcoal-elevated border border-charcoal-border text-xs font-mono text-warm-white flex items-center space-x-1.5"
                aria-label={isPlaying ? 'Pause Simulation' : 'Play Simulation'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-racing-red" /> : <Play className="w-3.5 h-3.5 text-racing-green" />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>
              <button
                onClick={() => setProgress(0)}
                className="p-1.5 rounded bg-charcoal-surface hover:bg-charcoal-elevated border border-charcoal-border text-silver hover:text-warm-white"
                title="Restart"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <div className="flex rounded bg-charcoal-surface border border-charcoal-border text-[11px] font-mono">
                {[0.5, 1, 2].map((m) => (
                  <button
                    key={m}
                    onClick={() => setSpeedMultiplier(m)}
                    className={`px-2 py-1 ${speedMultiplier === m ? 'bg-racing-red text-white font-bold' : 'text-silver hover:text-white'}`}
                  >
                    {m}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas + Telemetry Displays */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Mini SVG Circuit */}
            <div className="lg:col-span-8 bg-graphite rounded-xl border border-charcoal-border p-4 relative aspect-[16/9] flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 500 300" className="w-full h-full" fill="none">
                {/* Circuit Track Outer */}
                <path
                  d="M 100 80 C 220 30, 380 60, 420 150 C 440 220, 360 250, 280 230 C 200 210, 160 260, 100 230 C 50 200, 40 120, 100 80 Z"
                  stroke="#1E252F"
                  strokeWidth="22"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Circuit Track Border */}
                <path
                  d="M 100 80 C 220 30, 380 60, 420 150 C 440 220, 360 250, 280 230 C 200 210, 160 260, 100 230 C 50 200, 40 120, 100 80 Z"
                  stroke="#2F3844"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Centerline Path */}
                <path
                  d="M 100 80 C 220 30, 380 60, 420 150 C 440 220, 360 250, 280 230 C 200 210, 160 260, 100 230 C 50 200, 40 120, 100 80 Z"
                  stroke="#E53935"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  opacity="0.8"
                />

                {/* Moving Marker with Guaranteed Safe Coordinates */}
                {(() => {
                  const points = [
                    { x: 100, y: 80 },
                    { x: 220, y: 45 },
                    { x: 380, y: 70 },
                    { x: 420, y: 150 },
                    { x: 390, y: 220 },
                    { x: 280, y: 230 },
                    { x: 190, y: 220 },
                    { x: 140, y: 250 },
                    { x: 90, y: 230 },
                    { x: 60, y: 160 },
                    { x: 100, y: 80 },
                  ];

                  const numSegments = points.length - 1;
                  const segmentProgress = safeProgress * numSegments;
                  const maxIdx = Math.max(0, points.length - 2);
                  const idx = Math.max(0, Math.min(Math.floor(segmentProgress), maxIdx));
                  const local = Math.max(0, Math.min(1, segmentProgress - idx));

                  const p1 = points[idx] ?? points[0] ?? { x: 100, y: 80 };
                  const p2 = points[idx + 1] ?? points[points.length - 1] ?? p1;

                  const carX = p1.x + ((p2.x ?? p1.x) - p1.x) * local;
                  const carY = p1.y + ((p2.y ?? p1.y) - p1.y) * local;

                  return (
                    <g transform={`translate(${carX}, ${carY})`}>
                      <circle cx="0" cy="0" r="8" fill="#E53935" />
                      <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                      <circle cx="0" cy="0" r="14" fill="none" stroke="#E53935" strokeWidth="1" opacity="0.5" />
                    </g>
                  );
                })()}
              </svg>

              {/* Status Pill in Corner */}
              <div className="absolute top-3 left-3 bg-charcoal-deep/90 border border-charcoal-border px-3 py-1.5 rounded text-[11px] font-mono text-warm-white">
                <span className="text-racing-red font-bold">DELTA: </span>
                <span>{delta}</span>
              </div>
            </div>

            {/* Right: Live Telemetry Gauges */}
            <div className="lg:col-span-4 space-y-4 font-mono">
              <div className="bg-charcoal-deep border border-charcoal-border p-4 rounded-xl space-y-2">
                <div className="flex justify-between text-xs text-silver">
                  <span>INTERNAL COMBUSTION (RPM)</span>
                  <span className="text-warm-white font-bold">{rpm}</span>
                </div>
                <div className="w-full h-2 bg-charcoal-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-racing-green via-racing-amber to-racing-red transition-all"
                    style={{ width: `${Math.min((rpm / 13000) * 100, 100)}%` }}
                  />
                </div>
              </div>

              <div className="bg-charcoal-deep border border-charcoal-border p-4 rounded-xl space-y-2">
                <div className="flex justify-between text-xs text-silver">
                  <span>THROTTLE APPLICATION</span>
                  <span className="text-racing-green font-bold">{throttle}%</span>
                </div>
                <div className="w-full h-2 bg-charcoal-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-racing-green transition-all"
                    style={{ width: `${throttle}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-charcoal-deep border border-charcoal-border p-3 rounded-xl">
                  <div className="text-[10px] text-silver">GEAR ENGAGED</div>
                  <div className="text-lg font-display font-bold text-warm-white mt-1">G{gear}</div>
                </div>

                <div className="bg-charcoal-deep border border-charcoal-border p-3 rounded-xl">
                  <div className="text-[10px] text-silver flex items-center space-x-1">
                    <Thermometer className="w-3 h-3 text-racing-red" />
                    <span>TYRE THERMAL</span>
                  </div>
                  <div className="text-lg font-display font-bold text-warm-white mt-1">{tyreTemp}</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
