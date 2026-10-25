import React, { useState } from 'react';
import { MapPin, Building2, Wrench, Trophy, Trees, Sun, Moon } from 'lucide-react';

interface BitsPilaniCampus3DProps {
  reducedMotion: boolean;
}

export const BitsPilaniCampus3D: React.FC<BitsPilaniCampus3DProps> = ({ reducedMotion }) => {
  const [activeLandmark, setActiveLandmark] = useState<'academic' | 'mech' | 'sac' | 'campus'>('academic');
  const [nightMode, setNightMode] = useState<boolean>(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    setMousePos({ x: isNaN(x) ? 0 : x, y: isNaN(y) ? 0 : y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const landmarks = {
    academic: {
      title: "Central Academic Block & Clock Tower",
      subtitle: "The Architectural Core of BITS Pilani Hyderabad",
      coords: "17.5449° N, 78.5718° E",
      desc: "The monumental sandstone administrative and lecture complex with the iconic central clock tower, housing academic departments, library, and central auditoriums.",
      tag: "CAMPUS HEART // EST. 2008",
    },
    mech: {
      title: "Mechanical Engineering Complex & Workshops",
      subtitle: "First-Principles Machine Design & Thermodynamics",
      coords: "17.5438° N, 78.5702° E",
      desc: "State-of-the-art engineering laboratories, CNC machining hubs, fluid mechanics flumes, and CAD/FEA simulation clusters where Shreyas pursues B.E. Mechanical.",
      tag: "SHREYAS'S ACADEMIC BASE",
    },
    sac: {
      title: "Student Activity Centre (SAC) & Atmos Arena",
      subtitle: "Flagship Technical Fest & Hackathon Epicenter",
      coords: "17.5462° N, 78.5735° E",
      desc: "Hub of student innovation, hackathons, and national competitions. Site of the flagship Synchrony Credit Analytics Hackathon victory at Atmos 26.",
      tag: "ATMOS 26 CHAMPION SITE",
    },
    campus: {
      title: "200-Acre Hyderabad Green Campus",
      subtitle: "Jawaharnagar, Medchal-Malkajgiri, Telangana",
      coords: "ELEVATION: 605m ASL",
      desc: "A fully residential, state-of-the-art campus carved amidst natural rock formations, featuring zero-waste water recycling and solar infrastructure.",
      tag: "BITS PILANI HYDERABAD",
    },
  };

  const currentInfo = landmarks[activeLandmark];

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-full max-w-[500px] aspect-square rounded-3xl p-5 sm:p-6 relative overflow-hidden backdrop-blur-xl border transition-all duration-300 shadow-2xl ${
        nightMode
          ? 'bg-navy-deep/90 border-navy-border/80 shadow-black/80'
          : 'bg-slate-900/90 border-electric-sky/30 shadow-electric-blue/10'
      }`}
      style={{
        transform: reducedMotion
          ? 'none'
          : `perspective(1100px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`,
      }}
    >
      {/* Top Controls Header */}
      <div className="flex items-center justify-between pb-3 border-b border-navy-border/60 text-[11px] font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-electric-sky animate-pulse" />
          <span className="text-warm-white font-bold tracking-wider uppercase">
            BITS PILANI HYDERABAD
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setNightMode(!nightMode)}
            className="p-1 rounded-lg bg-navy-surface hover:bg-navy-elevated border border-navy-border text-silver hover:text-warm-white transition-colors"
            title={nightMode ? 'Switch to Campus Ambient Mode' : 'Switch to Cyber Night Mode'}
            aria-label="Toggle Campus Lighting Mode"
          >
            {nightMode ? <Sun className="w-3.5 h-3.5 text-amber-bright" /> : <Moon className="w-3.5 h-3.5 text-electric-sky" />}
          </button>
          <span className="text-[10px] text-silver-dark hidden sm:inline">3D VISUALIZATION</span>
        </div>
      </div>

      {/* 3D Campus Architectural Model SVG Canvas */}
      <div className="relative w-full h-[240px] sm:h-[260px] flex items-center justify-center my-2 select-none">
        
        {/* Subtle Ambient Campus Coordinates Grid */}
        <div className="absolute inset-0 bg-circuit-grid opacity-30 pointer-events-none" />

        <svg viewBox="0 0 460 300" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="academicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="60%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            <linearGradient id="towerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>

            <linearGradient id="domeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>

            <linearGradient id="groundPlaneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="100%" stopColor="#050811" />
            </linearGradient>

            <filter id="campusGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#38BDF8" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Isometric Ground Base Ring */}
          <polygon
            points="230,50 420,150 230,260 40,150"
            fill="url(#groundPlaneGrad)"
            stroke="#1E293B"
            strokeWidth="1.5"
            className="transition-all duration-500"
          />

          {/* Campus Ring Road Perimeter */}
          <ellipse cx="230" cy="155" rx="175" ry="95" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" />
          <ellipse cx="230" cy="155" rx="145" ry="78" stroke="#334155" strokeWidth="1" opacity="0.4" />

          {/* Campus Radial Grid Rays */}
          <line x1="230" y1="60" x2="230" y2="250" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="55" y1="155" x2="405" y2="155" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 4" />

          {/* =========================================================================
              1. MAIN ACADEMIC COMPLEX (Central Iconic Building)
              ========================================================================= */}
          {/* Main Academic Block Left Wing */}
          <polygon
            points="140,150 190,125 210,135 160,160"
            fill="url(#academicGrad)"
            stroke="#38BDF8"
            strokeWidth="1.2"
            opacity={activeLandmark === 'academic' ? '1' : '0.75'}
          />
          <polygon
            points="140,150 160,160 160,195 140,185"
            fill="#1E293B"
            stroke="#38BDF8"
            strokeWidth="1"
          />
          <polygon
            points="160,160 210,135 210,170 160,195"
            fill="#0F172A"
            stroke="#38BDF8"
            strokeWidth="1"
          />

          {/* Main Academic Block Right Wing */}
          <polygon
            points="250,135 270,125 320,150 300,160"
            fill="url(#academicGrad)"
            stroke="#38BDF8"
            strokeWidth="1.2"
            opacity={activeLandmark === 'academic' ? '1' : '0.75'}
          />
          <polygon
            points="250,135 300,160 300,195 250,170"
            fill="#0F172A"
            stroke="#38BDF8"
            strokeWidth="1"
          />
          <polygon
            points="300,160 320,150 320,185 300,195"
            fill="#1E293B"
            stroke="#38BDF8"
            strokeWidth="1"
          />

          {/* Central Dome / Rotunda Connecting Wing */}
          <polygon
            points="210,135 230,125 250,135 250,170 230,180 210,170"
            fill="#1E293B"
            stroke="#06B6D4"
            strokeWidth="1.5"
          />
          <ellipse cx="230" cy="125" rx="20" ry="10" fill="url(#domeGrad)" stroke="#38BDF8" strokeWidth="1" />

          {/* Iconic Clock Tower Base & Spire */}
          <polygon points="220,120 240,120 240,70 220,70" fill="url(#towerGrad)" stroke="#F59E0B" strokeWidth="1.5" />
          <polygon points="220,70 230,45 240,70" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1.5" />
          
          {/* Clock Tower Face (Glowing White) */}
          <circle cx="230" cy="80" r="4.5" fill="#FFFFFF" stroke="#0A0F1D" strokeWidth="1" />
          <line x1="230" y1="80" x2="230" y2="77" stroke="#0A0F1D" strokeWidth="1" />
          <line x1="230" y1="80" x2="232" y2="80" stroke="#0A0F1D" strokeWidth="1" />

          {/* =========================================================================
              2. MECHANICAL ENGINEERING WORKSHOPS COMPLEX (West Sector)
              ========================================================================= */}
          <g opacity={activeLandmark === 'mech' ? '1' : '0.7'}>
            <polygon
              points="95,120 135,100 150,108 110,128"
              fill={activeLandmark === 'mech' ? '#06B6D4' : '#1E293B'}
              stroke="#06B6D4"
              strokeWidth="1.2"
            />
            <polygon points="95,120 110,128 110,148 95,140" fill="#0A0F1D" stroke="#06B6D4" strokeWidth="1" />
            <polygon points="110,128 150,108 150,128 110,148" fill="#182234" stroke="#06B6D4" strokeWidth="1" />
            
            {/* Workshop Sawtooth Roof Silhouette */}
            <path d="M 100 105 L 110 98 L 110 105 L 120 98 L 120 105 L 130 98 L 130 105" stroke="#38BDF8" strokeWidth="1" />
          </g>

          {/* =========================================================================
              3. STUDENT ACTIVITY CENTRE (SAC) & AUDITORIUM (East Sector)
              ========================================================================= */}
          <g opacity={activeLandmark === 'sac' ? '1' : '0.7'}>
            <polygon
              points="310,108 335,95 365,110 340,123"
              fill={activeLandmark === 'sac' ? '#F59E0B' : '#1E293B'}
              stroke="#F59E0B"
              strokeWidth="1.2"
            />
            <polygon points="310,108 340,123 340,143 310,128" fill="#0A0F1D" stroke="#F59E0B" strokeWidth="1" />
            <polygon points="340,123 365,110 365,130 340,143" fill="#182234" stroke="#F59E0B" strokeWidth="1" />
            
            {/* Open Amphitheatre Arc */}
            <path d="M 330 145 C 345 155, 365 145, 370 135" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2 3" />
          </g>

          {/* Campus Greenery Rock Garden Nodes */}
          <circle cx="170" cy="180" r="3" fill="#10B981" opacity="0.8" />
          <circle cx="185" cy="190" r="2.5" fill="#10B981" opacity="0.8" />
          <circle cx="275" cy="190" r="3" fill="#10B981" opacity="0.8" />
          <circle cx="290" cy="180" r="2.5" fill="#10B981" opacity="0.8" />

          {/* Interactive Inspection Beacon Pin */}
          {activeLandmark === 'academic' && (
            <g transform="translate(230, 40)" filter="url(#campusGlow)">
              <circle cx="0" cy="0" r="4.5" fill="#38BDF8" />
              <circle cx="0" cy="0" r="9" fill="none" stroke="#38BDF8" strokeWidth="1" className={reducedMotion ? '' : 'animate-ping'} />
            </g>
          )}

          {activeLandmark === 'mech' && (
            <g transform="translate(120, 95)" filter="url(#campusGlow)">
              <circle cx="0" cy="0" r="4.5" fill="#06B6D4" />
              <circle cx="0" cy="0" r="9" fill="none" stroke="#06B6D4" strokeWidth="1" className={reducedMotion ? '' : 'animate-ping'} />
            </g>
          )}

          {activeLandmark === 'sac' && (
            <g transform="translate(340, 95)" filter="url(#campusGlow)">
              <circle cx="0" cy="0" r="4.5" fill="#F59E0B" />
              <circle cx="0" cy="0" r="9" fill="none" stroke="#F59E0B" strokeWidth="1" className={reducedMotion ? '' : 'animate-ping'} />
            </g>
          )}

          {/* Institutional Badge Overlay */}
          <text x="230" y="280" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="2">
            BITS PILANI HYDERABAD // EST. 2008
          </text>
        </svg>
      </div>

      {/* Landmark Selector Tabs */}
      <div className="grid grid-cols-4 gap-1.5 pt-2 border-t border-navy-border/60">
        <button
          onClick={() => setActiveLandmark('academic')}
          className={`py-1.5 px-1 rounded-lg text-[9px] font-mono font-bold transition-all truncate flex flex-col items-center justify-center space-y-0.5 border ${
            activeLandmark === 'academic'
              ? 'bg-electric-blue text-white border-electric-sky shadow-md'
              : 'bg-navy-surface text-silver hover:text-warm-white border-navy-border'
          }`}
          title="Central Academic Block & Clock Tower"
        >
          <Building2 className="w-3 h-3" />
          <span>TOWER</span>
        </button>

        <button
          onClick={() => setActiveLandmark('mech')}
          className={`py-1.5 px-1 rounded-lg text-[9px] font-mono font-bold transition-all truncate flex flex-col items-center justify-center space-y-0.5 border ${
            activeLandmark === 'mech'
              ? 'bg-electric-cyan text-graphite border-electric-sky shadow-md'
              : 'bg-navy-surface text-silver hover:text-warm-white border-navy-border'
          }`}
          title="Mechanical Engineering Complex"
        >
          <Wrench className="w-3 h-3" />
          <span>MECH LABS</span>
        </button>

        <button
          onClick={() => setActiveLandmark('sac')}
          className={`py-1.5 px-1 rounded-lg text-[9px] font-mono font-bold transition-all truncate flex flex-col items-center justify-center space-y-0.5 border ${
            activeLandmark === 'sac'
              ? 'bg-amber-bright text-graphite border-amber-bright shadow-md'
              : 'bg-navy-surface text-silver hover:text-warm-white border-navy-border'
          }`}
          title="Student Activity Centre & Atmos Hub"
        >
          <Trophy className="w-3 h-3" />
          <span>SAC ARENA</span>
        </button>

        <button
          onClick={() => setActiveLandmark('campus')}
          className={`py-1.5 px-1 rounded-lg text-[9px] font-mono font-bold transition-all truncate flex flex-col items-center justify-center space-y-0.5 border ${
            activeLandmark === 'campus'
              ? 'bg-emerald-green text-graphite border-emerald-green shadow-md'
              : 'bg-navy-surface text-silver hover:text-warm-white border-navy-border'
          }`}
          title="200-Acre Hyderabad Green Campus"
        >
          <Trees className="w-3 h-3" />
          <span>CAMPUS</span>
        </button>
      </div>

      {/* Selected Landmark Details Strip */}
      <div className="mt-3 p-3 rounded-xl bg-navy-surface/90 border border-navy-border/80 flex items-center justify-between gap-3 text-xs">
        <div className="truncate">
          <div className="text-[9px] font-mono text-electric-sky font-semibold tracking-wider flex items-center space-x-1 truncate">
            <MapPin className="w-2.5 h-2.5 shrink-0" />
            <span className="truncate">{currentInfo.tag}</span>
          </div>
          <div className="font-display font-bold text-warm-white text-xs truncate mt-0.5">
            {currentInfo.title}
          </div>
        </div>
        <div className="text-[9px] font-mono text-silver-dark shrink-0 hidden sm:block">
          {currentInfo.coords}
        </div>
      </div>
    </div>
  );
};
