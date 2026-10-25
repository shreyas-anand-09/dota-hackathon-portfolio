import React, { useState } from 'react';
import { Layers, ArrowRight, Cpu } from 'lucide-react';

interface ExplodedMachineAssemblyProps {
  reducedMotion: boolean;
}

interface MachineModule {
  id: string;
  code: string;
  name: string;
  category: string;
  coords: { x: number; y: number; z: number };
  dockedCoords: { x: number; y: number };
  color: string;
  status: string;
  metric: string;
  targetId: string;
  description: string;
}

export const ExplodedMachineAssembly: React.FC<ExplodedMachineAssemblyProps> = ({ reducedMotion }) => {
  const [viewState, setViewState] = useState<'exploded' | 'docked'>('exploded');
  const [selectedModule, setSelectedModule] = useState<string>('garage');
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  const modules: MachineModule[] = [
    {
      id: 'hero',
      code: 'MOD-01',
      name: 'Chassis Core & Academic Hub',
      category: 'CORE PROPULSION',
      coords: { x: 0, y: -90, z: 60 },
      dockedCoords: { x: 0, y: -45 },
      color: '#38BDF8',
      status: 'ACTIVE // ONLINE',
      metric: 'BITS PILANI HYD',
      targetId: '#hero',
      description: 'Central command architecture featuring BITS Pilani Hyderabad 3D Campus coordinates and first-year Mechanical Engineering foundations.',
    },
    {
      id: 'about',
      code: 'MOD-02',
      name: 'Formative Vector & Trajectory',
      category: 'NAVIGATION MATRIX',
      coords: { x: -140, y: -40, z: 30 },
      dockedCoords: { x: -65, y: -20 },
      color: '#2563EB',
      status: 'CALIBRATED',
      metric: '3 HUBS: PALAKKAD ➔ LFC ➔ BITS',
      targetId: '#about',
      description: 'Origins, first-principles philosophy, and the path from Palakkad to elite competitive engineering in Hyderabad.',
    },
    {
      id: 'garage',
      code: 'MOD-03',
      name: 'The Garage & Analytical Workbench',
      category: 'PRIMARY COMPUTATION',
      coords: { x: 140, y: -40, z: 40 },
      dockedCoords: { x: 65, y: -20 },
      color: '#E10600',
      status: 'ENGAGED // 1ST PLACE',
      metric: 'ATMOS 26 WINNER // SYNCHRONY',
      targetId: '#garage',
      description: 'Synchrony Credit Analytics Hackathon champion model, BITS Student Super-App, and 2D/3D Game Projection Engine.',
    },
    {
      id: 'f1',
      code: 'MOD-04',
      name: 'Autódromo Telemetry & Aerodynamics',
      category: 'KINEMATIC DYNAMICS',
      coords: { x: 150, y: 55, z: 20 },
      dockedCoords: { x: 75, y: 30 },
      color: '#E10600',
      status: 'SIMULATING',
      metric: 'HIGH DOWNFORCE // APEX T1-T6',
      targetId: '#f1',
      description: 'F1-inspired dynamic lap telemetry, apex corner breakdown, tire friction kinematics, and motorsport engineering aesthetics.',
    },
    {
      id: 'liverpool',
      code: 'MOD-05',
      name: 'Merseyside Tactical Press Hub',
      category: 'CULTURAL ETHOS',
      coords: { x: -150, y: 55, z: 20 },
      dockedCoords: { x: -75, y: 30 },
      color: '#DC2626',
      status: 'SYNCHRONIZED',
      metric: 'YNWA // THE 97 MEMORIAL',
      targetId: '#liverpool',
      description: 'Relentless high-press intensity, Anfield culture, and resilience under pressure translated into engineering precision.',
    },
    {
      id: 'achievements',
      code: 'MOD-06',
      name: 'Innovation Pod & MANAK Awards',
      category: 'HONORS & PATENTS',
      coords: { x: -80, y: 125, z: 50 },
      dockedCoords: { x: -40, y: 65 },
      color: '#F59E0B',
      status: 'RECOGNIZED',
      metric: '₹10,000 DST GOI AWARD',
      targetId: '#achievements',
      description: 'INSPIRE MANAK Award winner for the Smart Bin Segregation Innovation with technical schematic and national recognition.',
    },
    {
      id: 'skills',
      code: 'MOD-07',
      name: 'Technical Arsenal & Stack',
      category: 'SUBSYSTEM SPECS',
      coords: { x: 80, y: 125, z: 50 },
      dockedCoords: { x: 40, y: 65 },
      color: '#10B981',
      status: 'OPERATIONAL',
      metric: 'PYTHON // CAD // PANDAS',
      targetId: '#skills',
      description: 'Proficiency matrix spanning Python computing, mechanical CAD modeling, thermodynamics, and modern reactive frontend tools.',
    },
    {
      id: 'contact',
      code: 'MOD-08',
      name: 'Paddock Terminal & Direct Comms',
      category: 'COMMUNICATIONS',
      coords: { x: 0, y: 165, z: 70 },
      dockedCoords: { x: 0, y: 85 },
      color: '#7C3AED',
      status: 'AWAITING INPUT',
      metric: 'READY FOR COLLABORATION',
      targetId: '#contact',
      description: 'Instant secure communication channel, verified email directory, LinkedIn, GitHub, and social coordinates.',
    },
  ];

  const activeMod = modules.find((m) => m.id === selectedModule) || modules[2];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMouseTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <div
      id="exploded-view"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full bg-navy-deep/95 border-y border-navy-border/70 py-16 px-4 lg:px-8 relative overflow-hidden select-none"
    >
      {/* Background Volumetric Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-electric-blue/10 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[450px] h-[400px] bg-vivid-purple/10 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* System Header & Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-navy-border/60">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-electric-sky animate-pulse" />
              <span className="text-electric-sky font-bold uppercase tracking-wider">
                SYSTEM ARCHITECTURE // 3D EXPLODED MACHINE
              </span>
              <span className="text-silver-dark">•</span>
              <span className="text-warm-muted">INTERACTIVE OVERVIEW</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-warm-white tracking-tight">
              THE PORTFOLIO MACHINE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-sky via-electric-blue to-vivid-purple">
                IN 3D EXPLODED ASSEMBLY.
              </span>
            </h2>
            <p className="text-silver text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
              Every section of this website functions as an engineered modular subsystem. Explore the exploded schematic, inspect individual subsystems, or snap them into docked alignment.
            </p>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center space-x-2 bg-navy-surface p-1.5 rounded-xl border border-navy-border shadow-lg self-start md:self-end">
            <button
              onClick={() => setViewState('exploded')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center space-x-2 ${
                viewState === 'exploded'
                  ? 'bg-electric-blue text-white shadow-md'
                  : 'text-silver hover:text-warm-white hover:bg-navy-elevated'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>EXPLODED VIEW (3D)</span>
            </button>
            <button
              onClick={() => setViewState('docked')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center space-x-2 ${
                viewState === 'docked'
                  ? 'bg-emerald-green text-graphite shadow-md'
                  : 'text-silver hover:text-warm-white hover:bg-navy-elevated'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>DOCKED / ASSEMBLED</span>
            </button>
          </div>
        </div>

        {/* 3D Exploded Visual Stage + Inspector Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main 3D Exploded Stage Canvas (Col 8) */}
          <div className="lg:col-span-8 bg-navy-surface/60 border border-navy-border/80 rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden min-h-[460px] sm:min-h-[520px] flex items-center justify-center">
            
            {/* Ambient Coordinate Grid & Alignment Crosshairs */}
            <div className="absolute inset-0 bg-circuit-grid opacity-25 pointer-events-none" />
            <div className="absolute top-4 left-4 text-[10px] font-mono text-silver-dark flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-sky animate-ping" />
              <span>ASSEMBLY MATRIX // ISOMETRIC PROJECTION</span>
            </div>
            <div className="absolute top-4 right-4 text-[10px] font-mono text-silver-dark hidden sm:block">
              PERSPECTIVE: 1400PX // DEPTH: {viewState === 'exploded' ? '+180mm' : '0mm (DOCKED)'}
            </div>

            {/* Central Assembly Core / Engine Spine */}
            <div
              className="relative w-full max-w-[560px] h-[400px] flex items-center justify-center transition-transform duration-500 ease-out"
              style={{
                transform: reducedMotion
                  ? 'none'
                  : `perspective(1400px) rotateX(${15 - mouseTilt.y * 0.4}deg) rotateY(${mouseTilt.x * 0.4}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Dynamic SVG Holographic Guide Struts & Radial Traces */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="-250 -180 500 360">
                <defs>
                  <linearGradient id="strutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Central Concentric Alignment Rings */}
                <circle cx="0" cy="0" r="140" stroke="#334155" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
                <circle cx="0" cy="0" r="90" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
                <circle cx="0" cy="0" r="45" stroke="#7C3AED" strokeWidth="1.5" opacity="0.5" />

                {/* Radial Guide Lines from Center to each Subsystem */}
                {modules.map((m) => {
                  const targetPos = viewState === 'exploded' ? m.coords : m.dockedCoords;
                  const isSelected = selectedModule === m.id;
                  return (
                    <g key={`strut-${m.id}`}>
                      <line
                        x1="0"
                        y1="0"
                        x2={targetPos.x}
                        y2={targetPos.y}
                        stroke={isSelected ? m.color : '#334155'}
                        strokeWidth={isSelected ? '2' : '1'}
                        strokeDasharray={isSelected ? 'none' : '3 3'}
                        opacity={isSelected ? 0.9 : 0.4}
                        className="transition-all duration-700"
                      />
                      {/* Connection node bead */}
                      <circle
                        cx={targetPos.x}
                        cy={targetPos.y}
                        r={isSelected ? '4' : '2.5'}
                        fill={isSelected ? m.color : '#64748B'}
                        className="transition-all duration-700"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Central Power Core Reactor Hub */}
              <div
                className="absolute z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-electric-blue/30 to-vivid-purple/30 border-2 border-electric-sky/60 backdrop-blur-xl flex flex-col items-center justify-center p-2 text-center shadow-xl shadow-electric-blue/30 transition-transform duration-700"
                style={{
                  transform: viewState === 'exploded' ? 'translateZ(0px)' : 'translateZ(20px) scale(1.08)',
                }}
              >
                <div className="w-8 h-8 rounded-full bg-electric-sky/20 flex items-center justify-center text-electric-sky mb-1 animate-pulse">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-[9px] font-mono font-bold text-warm-white uppercase tracking-wider">
                  SHREYAS
                </div>
                <div className="text-[7px] font-mono text-electric-sky uppercase">
                  CORE HUB
                </div>
              </div>

              {/* 8 Floating Modular Machine Components */}
              {modules.map((m) => {
                const isSelected = selectedModule === m.id;
                const pos = viewState === 'exploded' ? m.coords : m.dockedCoords;
                const zDepth = viewState === 'exploded' ? m.coords.z : 10;

                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModule(m.id)}
                    className={`absolute p-2.5 sm:p-3 rounded-xl border backdrop-blur-md transition-all duration-700 ease-out flex flex-col items-start cursor-pointer text-left group ${
                      isSelected
                        ? 'bg-navy-deep/95 shadow-2xl z-20 scale-110'
                        : 'bg-navy-surface/80 hover:bg-navy-elevated/90 shadow-lg z-10 hover:scale-105'
                    }`}
                    style={{
                      transform: `translate3d(${pos.x * 1.3}px, ${pos.y * 1.1}px, ${zDepth}px)`,
                      borderColor: isSelected ? m.color : 'rgba(51, 65, 85, 0.7)',
                      boxShadow: isSelected ? `0 12px 30px -5px ${m.color}40` : undefined,
                    }}
                    title={`Click to inspect ${m.name}`}
                  >
                    <div className="flex items-center space-x-1.5 w-full">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: m.color }}
                      />
                      <span className="text-[9px] font-mono font-bold tracking-wider text-warm-white truncate">
                        {m.code}
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-sky animate-ping ml-auto" />
                      )}
                    </div>
                    <div className="text-[10px] font-display font-extrabold text-warm-white group-hover:text-electric-sky transition-colors truncate max-w-[120px] sm:max-w-[130px] mt-0.5">
                      {m.name.split('&')[0]}
                    </div>
                    <div className="text-[8px] font-mono text-silver-dark truncate max-w-[110px]">
                      {m.metric}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Status Ticker */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-silver-dark border-t border-navy-border/40 pt-2">
              <div className="flex items-center space-x-2">
                <span className="text-electric-sky font-semibold">STATE:</span>
                <span className="text-warm-white uppercase">
                  {viewState === 'exploded' ? 'EXPANDED 3D MATRIX' : 'DOCKED SYSTEM'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span>INTERACTIVE 3D NODES // CLICK ANY SUBSYSTEM</span>
              </div>
            </div>
          </div>

          {/* Module Telemetry Inspector Panel (Col 4) */}
          <div className="lg:col-span-4 bg-navy-surface/80 border border-navy-border rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-navy-border/70">
                <div className="flex items-center space-x-2">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: activeMod.color }}
                  />
                  <span className="font-mono text-xs font-bold text-warm-white uppercase tracking-wider">
                    {activeMod.code} // SUBSYSTEM
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-navy-elevated border border-navy-border text-electric-sky">
                  {activeMod.status}
                </span>
              </div>

              {/* Module Title & Category */}
              <div>
                <span className="text-[10px] font-mono text-silver tracking-widest uppercase block">
                  {activeMod.category}
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-warm-white mt-1 leading-snug">
                  {activeMod.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-silver text-xs sm:text-sm font-sans leading-relaxed">
                {activeMod.description}
              </p>

              {/* Technical Telemetry Box */}
              <div className="bg-navy-deep/90 border border-navy-border/80 rounded-xl p-3.5 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-silver-dark text-[10px]">COORDINATES (XYZ)</span>
                  <span className="text-warm-white text-[11px] font-semibold">
                    [{activeMod.coords.x}, {activeMod.coords.y}, +{activeMod.coords.z}mm]
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-silver-dark text-[10px]">KEY METRIC</span>
                  <span className="text-amber-bright text-[11px] font-bold">
                    {activeMod.metric}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-silver-dark text-[10px]">INTEGRATION STATE</span>
                  <span className="text-emerald-green text-[11px] font-semibold flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-green animate-pulse" />
                    <span>SYNCHRONIZED</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Engage & Dock Navigation CTA */}
            <div className="pt-4 border-t border-navy-border/70 space-y-3">
              <button
                onClick={() => scrollTo(activeMod.targetId)}
                className="w-full py-3.5 px-5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white transition-all shadow-xl flex items-center justify-center space-x-3 active:scale-95 hover:brightness-110"
                style={{
                  background: `linear-gradient(135deg, ${activeMod.color}, #7C3AED)`,
                  boxShadow: `0 10px 25px -5px ${activeMod.color}50`,
                }}
              >
                <span>APPROACH &amp; DOCK FEATURE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] font-mono text-silver-dark text-center">
                NAVIGATES DIRECTLY TO {activeMod.code} ON-PAGE
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};