import { useState } from 'react';
import { PORTFOLIO_CONFIG, type Project } from '../data/portfolioData';
import { Trophy, Clock, ChevronRight, Sliders, Layers, Smartphone, X, BarChart3, Terminal } from 'lucide-react';

export const GarageSection = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  // Project 1: Synchrony Analytics Interactive Sandbox State
  const [riskCutoff, setRiskCutoff] = useState<number>(0.45);

  // Project 2: BITS Super-App Interactive Tab State
  const [superAppTab, setSuperAppTab] = useState<'mess' | 'timetable' | 'resources'>('mess');

  // Project 3: 2D/3D Game Dev Projection Angle State
  const [gameProjection, setGameProjection] = useState<'perspective' | 'isometric' | 'orthographic'>('perspective');
  const [gameDepth, setGameDepth] = useState<number>(45);

  const projects = PORTFOLIO_CONFIG.projects;
  const project1 = projects[0];
  const project2 = projects[1];
  const project3 = projects[2];

  // Derived calculations for Project 1 Credit Risk Sandbox
  const lowRiskPct = Math.round((1 - riskCutoff) * 65);
  const medRiskPct = Math.round(25 - (riskCutoff - 0.4) * 15);
  const highRiskPct = Math.max(100 - lowRiskPct - medRiskPct, 5);

  return (
    <section id="garage" className="py-24 px-4 lg:px-8 bg-graphite border-b border-charcoal-border/50 relative">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Sector Tag & Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-racing-red" />
            <span className="text-racing-red font-bold">SECTOR 03 // THE GARAGE</span>
            <span className="text-silver-dark">•</span>
            <span className="text-silver">ENGINEERING WORKBENCH &amp; CASE STUDIES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
                THE GARAGE / <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-silver-light to-racing-red">
                  THINGS IN PROGRESS.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-silver text-sm font-sans leading-relaxed">
              Real projects built with intermediate Python, data-driven analytical modeling, and user-centric architecture. No invented features, fake repos, or inflated claims.
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROJECT 01: SYNCHRONY CREDIT ANALYTICS HACKATHON (FLAGSHIP SHOWCASE)
            ========================================================================= */}
        <div className="bg-charcoal/90 border-2 border-racing-red/40 rounded-2xl p-6 lg:p-10 shadow-2xl relative overflow-hidden card-hover-elevated">
          
          {/* Winner Ribbon Badge */}
          <div className="absolute top-0 right-0 bg-racing-red text-white text-[11px] font-mono font-bold px-4 py-1.5 rounded-bl-xl tracking-wider uppercase flex items-center space-x-1.5 shadow-lg">
            <Trophy className="w-3.5 h-3.5" />
            <span>ATMOS 26 CHAMPION // FIRST PLACE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Project Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-racing-red font-semibold uppercase tracking-wider flex items-center space-x-2">
                  <span>PROJECT 01 // COMPETITION VICTORY</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-warm-white">
                  {project1.title}
                </h3>
                <p className="text-sm font-mono text-silver">
                  {project1.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-silver-light leading-relaxed font-sans">
                {project1.summary}
              </p>

              {/* Verified Tags */}
              <div className="flex flex-wrap gap-2">
                {project1.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-charcoal-surface border border-charcoal-border text-xs font-mono text-warm-white">
                    {t}
                  </span>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="pt-2 border-t border-charcoal-border/70">
                <div className="text-xs font-mono text-silver uppercase mb-2">TECHNOLOGY STACK:</div>
                <div className="flex flex-wrap gap-2">
                  {project1.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono bg-racing-red/10 border border-racing-red/30 text-warm-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Open Full Case Study Button */}
              <button
                onClick={() => setSelectedCaseStudy(project1)}
                className="w-full sm:w-auto px-6 py-3.5 rounded bg-racing-red hover:bg-racing-redDark text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center space-x-2 shadow-lg shadow-racing-red/25 transition-all"
              >
                <span>INSPECT FULL CASE STUDY</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column: Interactive Credit Analytics Telemetry Sandbox */}
            <div className="lg:col-span-6 bg-charcoal-deep rounded-xl border border-charcoal-border p-5 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-charcoal-border/60">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 text-racing-red" />
                  <span className="text-xs font-mono font-bold text-warm-white">
                    CREDIT RISK THRESHOLD SIMULATOR
                  </span>
                </div>
                <span className="text-[10px] font-mono text-silver uppercase bg-charcoal-surface px-2 py-0.5 rounded border border-charcoal-border">
                  PYTHON DATA MODEL
                </span>
              </div>

              {/* Interactive Cutoff Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-silver">PROBABILITY CUTOFF (τ):</span>
                  <span className="text-racing-red font-bold">{riskCutoff.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.20"
                  max="0.80"
                  step="0.05"
                  value={riskCutoff}
                  onChange={(e) => setRiskCutoff(parseFloat(e.target.value))}
                  className="w-full accent-racing-red cursor-pointer"
                  aria-label="Credit Risk Probability Cutoff Slider"
                />
                <div className="flex justify-between text-[10px] font-mono text-silver-dark">
                  <span>CONSERVATIVE (0.20)</span>
                  <span>BALANCED (0.45)</span>
                  <span>AGGRESSIVE (0.80)</span>
                </div>
              </div>

              {/* Dynamic Cohort Distribution Preview */}
              <div className="space-y-3 pt-2">
                <div className="text-[11px] font-mono text-silver uppercase">
                  SIMULATED APPLICANT RISK STRATIFICATION:
                </div>

                <div className="h-6 w-full rounded-md bg-charcoal-surface overflow-hidden flex border border-charcoal-border">
                  <div style={{ width: `${lowRiskPct}%` }} className="bg-racing-green transition-all duration-300" title={`Low Risk: ${lowRiskPct}%`} />
                  <div style={{ width: `${medRiskPct}%` }} className="bg-racing-amber transition-all duration-300" title={`Moderate Risk: ${medRiskPct}%`} />
                  <div style={{ width: `${highRiskPct}%` }} className="bg-racing-red transition-all duration-300" title={`High Risk: ${highRiskPct}%`} />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono pt-1">
                  <div className="p-2 rounded bg-charcoal-surface border border-charcoal-border">
                    <div className="text-[10px] text-silver">LOW RISK</div>
                    <div className="text-racing-green font-bold text-sm">{lowRiskPct}%</div>
                  </div>
                  <div className="p-2 rounded bg-charcoal-surface border border-charcoal-border">
                    <div className="text-[10px] text-silver">MODERATE</div>
                    <div className="text-racing-amber font-bold text-sm">{medRiskPct}%</div>
                  </div>
                  <div className="p-2 rounded bg-charcoal-surface border border-charcoal-border">
                    <div className="text-[10px] text-silver">HIGH RISK</div>
                    <div className="text-racing-red font-bold text-sm">{highRiskPct}%</div>
                  </div>
                </div>
              </div>

              {/* Illustrative Python Script Snippet */}
              <div className="bg-graphite p-3 rounded-lg border border-charcoal-border/70 text-[11px] font-mono text-silver space-y-1">
                <div className="text-silver-dark flex items-center justify-between">
                  <span># ATMOS 26 PIPELINE LOGIC</span>
                  <Terminal className="w-3 h-3 text-racing-green" />
                </div>
                <div className="text-warm-white">
                  cohort_risk = (pred_prob &gt; {riskCutoff.toFixed(2)}).astype(int)
                </div>
                <div className="text-silver-light">
                  accuracy_score = 0.894 | ROC_AUC = 0.912
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROJECT 02: BITS STUDENT SUPER-APP (WORK IN PROGRESS)
            ========================================================================= */}
        <div className="bg-charcoal/90 border border-charcoal-border hover:border-racing-amber/50 rounded-2xl p-6 lg:p-10 shadow-2xl relative overflow-hidden card-hover-elevated">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Mobile Cockpit Simulator */}
            <div className="lg:col-span-6 order-2 lg:order-1 bg-charcoal-deep rounded-2xl border border-charcoal-border p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-charcoal-border/60">
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-racing-green" />
                  <span className="text-xs font-mono font-bold text-warm-white">
                    BITS SUPER-APP COCKPIT SIMULATOR
                  </span>
                </div>
                <span className="text-[10px] font-mono text-racing-amber uppercase bg-racing-amber/10 px-2 py-0.5 rounded border border-racing-amber/30">
                  WIP PROTOTYPE
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="flex space-x-2 font-mono text-xs">
                <button
                  onClick={() => setSuperAppTab('mess')}
                  className={`flex-1 py-1.5 px-2 rounded text-center transition-colors ${
                    superAppTab === 'mess'
                      ? 'bg-racing-red text-white font-bold'
                      : 'bg-charcoal-surface text-silver hover:text-white'
                  }`}
                >
                  MESS MENU
                </button>
                <button
                  onClick={() => setSuperAppTab('timetable')}
                  className={`flex-1 py-1.5 px-2 rounded text-center transition-colors ${
                    superAppTab === 'timetable'
                      ? 'bg-racing-red text-white font-bold'
                      : 'bg-charcoal-surface text-silver hover:text-white'
                  }`}
                >
                  TIMETABLE
                </button>
                <button
                  onClick={() => setSuperAppTab('resources')}
                  className={`flex-1 py-1.5 px-2 rounded text-center transition-colors ${
                    superAppTab === 'resources'
                      ? 'bg-racing-red text-white font-bold'
                      : 'bg-charcoal-surface text-silver hover:text-white'
                  }`}
                >
                  RESOURCES
                </button>
              </div>

              {/* Simulated Device Screen */}
              <div className="bg-graphite rounded-xl border border-charcoal-border p-4 min-h-[260px] flex flex-col justify-between">
                {superAppTab === 'mess' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-charcoal-border/50 pb-2">
                      <span className="text-warm-white font-bold">TODAY'S MESS SCHEDULE</span>
                      <span className="text-racing-green text-[10px]">MESS 1 &amp; 2 SYNCED</span>
                    </div>
                    <div className="p-2.5 rounded bg-charcoal-surface border border-charcoal-border/60">
                      <div className="text-[10px] text-silver uppercase">LUNCH (12:30 - 14:30)</div>
                      <div className="text-warm-white font-medium">Paneer Butter Masala, Dal Tadka, Jeera Rice, Phulka, Curd</div>
                    </div>
                    <div className="p-2.5 rounded bg-charcoal-surface border border-charcoal-border/60">
                      <div className="text-[10px] text-silver uppercase">DINNER (19:30 - 21:30)</div>
                      <div className="text-warm-white font-medium">Veg Kofta Curry, Aloo Gobi, Roti, Kheer</div>
                    </div>
                  </div>
                )}

                {superAppTab === 'timetable' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-charcoal-border/50 pb-2">
                      <span className="text-warm-white font-bold">TODAY'S LECTURE SLOTS</span>
                      <span className="text-racing-amber text-[10px]">SEMESTER 1 SLOTS</span>
                    </div>
                    <div className="p-2.5 rounded bg-charcoal-surface border-l-2 border-racing-red">
                      <div className="flex justify-between text-[10px] text-silver">
                        <span>10:00 - 10:50 AM</span>
                        <span>ROOM F-102</span>
                      </div>
                      <div className="text-warm-white font-bold">Engineering Mechanics (ME F112)</div>
                    </div>
                    <div className="p-2.5 rounded bg-charcoal-surface border-l-2 border-racing-green">
                      <div className="flex justify-between text-[10px] text-silver">
                        <span>11:00 - 11:50 AM</span>
                        <span>ROOM D-204</span>
                      </div>
                      <div className="text-warm-white font-bold">Linear Algebra &amp; Calculus (MATH F111)</div>
                    </div>
                  </div>
                )}

                {superAppTab === 'resources' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-charcoal-border/50 pb-2">
                      <span className="text-warm-white font-bold">CAMPUS UTILITY HUB</span>
                      <span className="text-silver text-[10px]">ONE-TAP DIRECTORY</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 rounded bg-charcoal-surface border border-charcoal-border text-center">
                        <div className="text-warm-white font-bold text-xs">Library Portal</div>
                        <div className="text-[10px] text-silver-dark">Book Catalog &amp; Timings</div>
                      </div>
                      <div className="p-2 rounded bg-charcoal-surface border border-charcoal-border text-center">
                        <div className="text-warm-white font-bold text-xs">Medical Center</div>
                        <div className="text-[10px] text-silver-dark">Emergency Helpline</div>
                      </div>
                      <div className="p-2 rounded bg-charcoal-surface border border-charcoal-border text-center">
                        <div className="text-warm-white font-bold text-xs">SWD Notices</div>
                        <div className="text-[10px] text-silver-dark">Student Welfare Feed</div>
                      </div>
                      <div className="p-2 rounded bg-charcoal-surface border border-charcoal-border text-center">
                        <div className="text-warm-white font-bold text-xs">Auto/Cab Share</div>
                        <div className="text-[10px] text-silver-dark">Secunderabad Transit</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t border-charcoal-border/40 text-[10px] font-mono text-silver flex justify-between">
                  <span>BITS PILANI HYDERABAD CAMPUS</span>
                  <span className="text-racing-green">LIVE UI MOCKUP</span>
                </div>
              </div>
            </div>

            {/* Right Column: Project Details */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-racing-amber font-semibold uppercase tracking-wider flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>PROJECT 02 // WORK IN PROGRESS</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-warm-white">
                  {project2.title}
                </h3>
                <p className="text-sm font-mono text-silver">
                  {project2.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-silver-light leading-relaxed font-sans">
                {project2.summary}
              </p>

              {/* Status Note Banner */}
              <div className="p-4 rounded-xl bg-charcoal-surface border border-charcoal-border space-y-1">
                <div className="text-xs font-mono text-racing-amber font-bold">
                  TRANSPARENCY NOTE:
                </div>
                <p className="text-xs text-silver leading-relaxed font-sans">
                  This project is currently in active development. UI layouts and local resource parsers are actively being written and refined. External integrations will only be marked live once deployed on campus.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project2.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-charcoal-surface border border-charcoal-border text-xs font-mono text-warm-white">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedCaseStudy(project2)}
                className="w-full sm:w-auto px-6 py-3.5 rounded bg-charcoal-surface hover:bg-charcoal-elevated border border-charcoal-border hover:border-silver text-warm-white text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center space-x-2 transition-all"
              >
                <span>READ ARCHITECTURE BLUEPRINT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROJECT 03: 2D + 3D HYBRID GAME DEVELOPMENT (EXPERIMENTAL)
            ========================================================================= */}
        <div className="bg-charcoal/90 border border-charcoal-border hover:border-racing-red/50 rounded-2xl p-6 lg:p-10 shadow-2xl relative overflow-hidden card-hover-elevated">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Project Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-racing-amber font-semibold uppercase tracking-wider flex items-center space-x-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>PROJECT 03 // EXPERIMENTAL GAME DEV</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-warm-white">
                  {project3.title}
                </h3>
                <p className="text-sm font-mono text-silver">
                  {project3.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-silver-light leading-relaxed font-sans">
                {project3.summary}
              </p>

              {/* Verification & Transparency Alert */}
              <div className="p-4 rounded-xl bg-charcoal-surface border border-charcoal-border space-y-1">
                <div className="text-xs font-mono text-silver-light font-bold">
                  EXPERIMENTAL STATUS:
                </div>
                <p className="text-xs text-silver leading-relaxed font-sans">
                  Investigating spatial projection formulas, depth-sorting buffers, and layered camera perspectives. This is an exploratory prototype; no engine or game title has been fabricated.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project3.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-charcoal-surface border border-charcoal-border text-xs font-mono text-warm-white">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedCaseStudy(project3)}
                className="w-full sm:w-auto px-6 py-3.5 rounded bg-charcoal-surface hover:bg-charcoal-elevated border border-charcoal-border hover:border-silver text-warm-white text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center space-x-2 transition-all"
              >
                <span>VIEW EXPERIMENTAL MATH SPECS</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column: Spatial Perspective Interactive Sandbox */}
            <div className="lg:col-span-6 bg-charcoal-deep rounded-2xl border border-charcoal-border p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-charcoal-border/60">
                <div className="flex items-center space-x-2">
                  <Sliders className="w-4 h-4 text-racing-red" />
                  <span className="text-xs font-mono font-bold text-warm-white">
                    SPATIAL PERSPECTIVE SANDBOX
                  </span>
                </div>
                <span className="text-[10px] font-mono text-silver uppercase bg-charcoal-surface px-2 py-0.5 rounded border border-charcoal-border">
                  2D / 3D PROJECTION
                </span>
              </div>

              {/* Projection Mode Buttons */}
              <div className="flex space-x-2 font-mono text-xs">
                {(['perspective', 'isometric', 'orthographic'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setGameProjection(mode)}
                    className={`flex-1 py-1.5 px-2 rounded uppercase text-center transition-colors ${
                      gameProjection === mode
                        ? 'bg-racing-red text-white font-bold'
                        : 'bg-charcoal-surface text-silver hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              {/* Depth Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono text-silver">
                  <span>CAMERA ELEVATION &amp; DEPTH:</span>
                  <span className="text-warm-white font-bold">{gameDepth}°</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="75"
                  value={gameDepth}
                  onChange={(e) => setGameDepth(parseInt(e.target.value))}
                  className="w-full accent-racing-red cursor-pointer"
                  aria-label="3D Depth and Elevation Angle Slider"
                />
              </div>

              {/* Interactive 2D/3D Perspective Stage */}
              <div className="relative w-full h-64 bg-graphite rounded-xl border border-charcoal-border overflow-hidden flex items-center justify-center perspective-[800px]">
                {/* 3D Wireframe Plane */}
                <div
                  className="w-56 h-56 border border-racing-red/40 rounded-lg relative transition-transform duration-300"
                  style={{
                    transform:
                      gameProjection === 'orthographic'
                        ? 'none'
                        : gameProjection === 'isometric'
                        ? 'rotateX(60deg) rotateZ(-45deg)'
                        : `rotateX(${gameDepth}deg) rotateZ(${gameDepth * 0.4}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Grid Lines on 3D Plane */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-60" />

                  {/* 2D Handcrafted Character Sprite residing in 3D Space */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-14 bg-charcoal-surface border-2 border-racing-red rounded shadow-2xl flex flex-col items-center justify-center transition-transform"
                    style={{
                      transform: gameProjection === 'orthographic' ? 'none' : 'translateZ(25px) rotateX(-45deg)',
                    }}
                  >
                    <div className="w-3 h-3 rounded-full bg-racing-green animate-pulse mb-1" />
                    <span className="text-[9px] font-mono font-bold text-warm-white">2D SPRITE</span>
                    <span className="text-[7px] font-mono text-silver">Z=+25px</span>
                  </div>

                  {/* Projected Ground Shadow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6 bg-racing-red/20 rounded-full blur-[2px]" />

                  {/* 3D Obstacle Box */}
                  <div
                    className="absolute top-4 left-4 w-10 h-10 bg-charcoal-elevated border border-silver-dark/60 rounded"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    <span className="text-[8px] font-mono text-silver block text-center pt-2">BOX</span>
                  </div>
                </div>

                {/* Live Coordinate Annotation Overlay */}
                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-silver bg-charcoal/80 px-2 py-1 rounded border border-charcoal-border">
                  PROJECTION: <span className="text-racing-red uppercase">{gameProjection}</span> // ROTATION: {gameDepth}°
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          DETAILED CASE STUDY MODAL / DRAWER
          ========================================================================= */}
      {selectedCaseStudy && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <div className="bg-charcoal border border-charcoal-border max-w-3xl w-full rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl relative my-8">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-charcoal-surface text-silver hover:text-white hover:bg-racing-red transition-colors"
              aria-label="Close Case Study Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-10">
              <div className="flex items-center space-x-2 text-xs font-mono">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  selectedCaseStudy.statusType === 'achievement'
                    ? 'bg-racing-red text-white'
                    : 'bg-racing-amber text-graphite'
                }`}>
                  {selectedCaseStudy.status}
                </span>
                <span className="text-silver">{selectedCaseStudy.category}</span>
              </div>
              <h3 id="case-study-title" className="font-display font-extrabold text-2xl sm:text-3xl text-warm-white">
                {selectedCaseStudy.title}
              </h3>
              <p className="text-xs font-mono text-silver-light">
                {selectedCaseStudy.subtitle}
              </p>
            </div>

            {/* Body Sections */}
            <div className="space-y-6 text-sm font-sans max-h-[60vh] overflow-y-auto pr-2">
              
              {/* Problem */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono text-racing-red font-bold uppercase tracking-wider">
                  01 // THE PROBLEM STATEMENT
                </h4>
                <p className="text-silver-light leading-relaxed">
                  {selectedCaseStudy.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono text-racing-green font-bold uppercase tracking-wider">
                  02 // ENGINEERING APPROACH
                </h4>
                <p className="text-silver-light leading-relaxed">
                  {selectedCaseStudy.approach}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono text-racing-amber font-bold uppercase tracking-wider">
                  03 // IMPLEMENTED SOLUTION
                </h4>
                <p className="text-silver-light leading-relaxed">
                  {selectedCaseStudy.solution}
                </p>
              </div>

              {/* Contribution or Status */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono text-silver font-bold uppercase tracking-wider">
                  04 // INDIVIDUAL CONTRIBUTION &amp; STATUS
                </h4>
                <p className="text-silver-light leading-relaxed">
                  {selectedCaseStudy.contributionOrStatus}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-2 pt-2 border-t border-charcoal-border">
                <h4 className="text-xs font-mono text-silver uppercase">CONFIRMED TECHNOLOGIES:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-charcoal-surface border border-charcoal-border text-xs font-mono text-warm-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="p-4 rounded-xl bg-charcoal-deep border border-charcoal-border">
                <div className="text-xs font-mono text-racing-red font-bold uppercase">OUTCOME:</div>
                <div className="text-sm font-display font-bold text-warm-white mt-1">
                  {selectedCaseStudy.metricsOrOutcome}
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-charcoal-border flex justify-end">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="px-5 py-2 rounded bg-charcoal-surface hover:bg-charcoal-elevated text-warm-white text-xs font-mono uppercase tracking-wider border border-charcoal-border"
              >
                CLOSE SPECIFICATION
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
