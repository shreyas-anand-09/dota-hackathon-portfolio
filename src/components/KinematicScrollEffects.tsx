import React, { useState, useEffect, useRef } from 'react';

interface KinematicScrollEffectsProps {
  reducedMotion: boolean;
}

export const KinematicScrollEffects: React.FC<KinematicScrollEffectsProps> = ({ reducedMotion }) => {
  const [f1CarActive, setF1CarActive] = useState(false);
  const [footballActive, setFootballActive] = useState(false);
  const [scrollHelixAngle, setScrollHelixAngle] = useState(0);

  const hasTriggeredF1 = useRef(false);
  const hasTriggeredFootball = useRef(false);

  // Scroll listener for helical stem rotation and section flyby triggers
  useEffect(() => {
    if (reducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          // Rotate the central helical spine with scroll
          setScrollHelixAngle(scrollY * 0.15);

          // Trigger F1 Car Flyby when approaching F1 section
          const f1El = document.getElementById('f1-experience');
          if (f1El) {
            const rect = f1El.getBoundingClientRect();
            // When section enters the upper 70% of viewport
            if (rect.top <= windowHeight * 0.7 && rect.bottom >= windowHeight * 0.2) {
              if (!hasTriggeredF1.current) {
                hasTriggeredF1.current = true;
                triggerF1Flyby();
              }
            } else if (rect.top > windowHeight || rect.bottom < 0) {
              // Reset trigger when scrolled well away
              hasTriggeredF1.current = false;
            }
          }

          // Trigger Football Curled Shot when approaching Liverpool section
          const liverpoolEl = document.getElementById('liverpool');
          if (liverpoolEl) {
            const rect = liverpoolEl.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.7 && rect.bottom >= windowHeight * 0.2) {
              if (!hasTriggeredFootball.current) {
                hasTriggeredFootball.current = true;
                triggerFootballFlyby();
              }
            } else if (rect.top > windowHeight || rect.bottom < 0) {
              hasTriggeredFootball.current = false;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Also listen to custom dispatch events from manual buttons
    const onManualF1 = () => triggerF1Flyby();
    const onManualBall = () => triggerFootballFlyby();
    window.addEventListener('trigger-f1-flyby', onManualF1);
    window.addEventListener('trigger-football-flyby', onManualBall);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('trigger-f1-flyby', onManualF1);
      window.removeEventListener('trigger-football-flyby', onManualBall);
    };
  }, [reducedMotion]);

  const triggerF1Flyby = () => {
    setF1CarActive(false);
    // Restart animation cleanly via microtask
    setTimeout(() => {
      setF1CarActive(true);
      setTimeout(() => setF1CarActive(false), 1400); // Animation duration 1.2s + buffer
    }, 50);
  };

  const triggerFootballFlyby = () => {
    setFootballActive(false);
    setTimeout(() => {
      setFootballActive(true);
      setTimeout(() => setFootballActive(false), 1600); // Animation duration 1.4s + buffer
    }, 50);
  };

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      
      {/* =========================================================================
          1. CENTRAL HELICAL BACKGROUND STEM (Continuous downward helical DNA/track)
          ========================================================================= */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-48 opacity-20 pointer-events-none -z-10 hidden md:block">
        <svg viewBox="0 0 160 1200" className="w-full h-full" preserveAspectRatio="none" fill="none">
          {/* Double Helical Strands */}
          {Array.from({ length: 8 }).map((_, i) => {
            const yOffset = i * 150;
            const waveOffset = Math.sin((scrollHelixAngle + i * 45) * (Math.PI / 180)) * 50;
            const waveOffset2 = -waveOffset;

            return (
              <g key={i}>
                {/* Horizontal rung connecting the helical strands */}
                <line
                  x1={80 + waveOffset}
                  y1={yOffset + 75}
                  x2={80 + waveOffset2}
                  y2={yOffset + 75}
                  stroke={i % 2 === 0 ? "#E53935" : "#F3F1EB"}
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  opacity="0.4"
                />
                {/* Helical Node 1 */}
                <circle
                  cx={80 + waveOffset}
                  y={yOffset + 75}
                  r={3 + Math.abs(waveOffset) * 0.04}
                  fill="#E53935"
                  opacity="0.6"
                />
                {/* Helical Node 2 */}
                <circle
                  cx={80 + waveOffset2}
                  y={yOffset + 75}
                  r={3 + Math.abs(waveOffset2) * 0.04}
                  fill="#00E676"
                  opacity="0.6"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* =========================================================================
          2. F1 CAR FLYBY TRANSITION (Roars horizontally across the screen)
          ========================================================================= */}
      {f1CarActive && (
        <div className="absolute top-[45%] left-0 right-0 h-40 flex items-center f1-car-flyby-track">
          {/* Full F1 Car Vector with Slipstream Wake & Apex Sparks */}
          <div className="relative flex items-center f1-car-body">
            
            {/* Aerodynamic Slipstream Trails */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-[70vw] h-24 pointer-events-none flex flex-col justify-center space-y-2 pr-4">
              <div className="h-0.5 bg-gradient-to-r from-transparent via-racing-red/60 to-racing-red rounded-full blur-[1px] animate-pulse" />
              <div className="h-1 bg-gradient-to-r from-transparent via-white/80 to-white rounded-full shadow-[0_0_12px_#fff]" />
              <div className="h-0.5 bg-gradient-to-r from-transparent via-racing-red/60 to-racing-red rounded-full blur-[1px] animate-pulse" />
            </div>

            {/* Ground Effect Underfloor Sparks */}
            <div className="absolute right-[40%] bottom-0 w-32 h-6 pointer-events-none overflow-hidden">
              <div className="w-2 h-2 rounded-full bg-amber-400 blur-[1px] absolute right-2 bottom-1 animate-ping" />
              <div className="w-1.5 h-1.5 rounded-full bg-racing-red blur-[1px] absolute right-8 bottom-0 animate-ping" />
              <div className="w-2 h-1 bg-white absolute right-16 bottom-1" />
            </div>

            {/* Realistic Aerodynamic Formula 1 Car SVG (Side Profile) */}
            <svg
              width="360"
              height="95"
              viewBox="0 0 360 95"
              fill="none"
              className="drop-shadow-[0_10px_25px_rgba(229,57,53,0.85)] filter"
            >
              <defs>
                <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8A0000" />
                  <stop offset="35%" stopColor="#E53935" />
                  <stop offset="70%" stopColor="#B71C1C" />
                  <stop offset="100%" stopColor="#15191E" />
                </linearGradient>
                <linearGradient id="tyreGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#252B33" />
                  <stop offset="50%" stopColor="#0B0D10" />
                  <stop offset="100%" stopColor="#252B33" />
                </linearGradient>
              </defs>

              {/* Rear Wing Endplate & Wing Profile */}
              <path d="M 15 20 L 40 20 L 35 65 L 12 65 Z" fill="#0B0D10" stroke="#E53935" strokeWidth="1.5" />
              <rect x="18" y="22" width="22" height="5" fill="#E53935" />
              <rect x="16" y="32" width="24" height="4" fill="#F3F1EB" />

              {/* Rear Rain Safety Flasher (Blinking Red) */}
              <circle cx="10" cy="52" r="3.5" fill="#FF1744" className="animate-ping" />
              <circle cx="10" cy="52" r="2.5" fill="#FFFFFF" />

              {/* Main Chassis Engine Cover & Shark Fin */}
              <path
                d="M 38 45 L 85 24 L 140 24 L 165 44 L 270 54 L 325 72 L 350 75 L 340 79 L 290 77 L 220 78 L 120 78 L 45 78 Z"
                fill="url(#carBodyGrad)"
                stroke="#15191E"
                strokeWidth="1"
              />

              {/* Halo Cockpit Ring & Driver Helmet */}
              <path d="M 148 40 C 160 30, 185 30, 195 44 Z" fill="#0B0D10" stroke="#858C95" strokeWidth="1.5" />
              {/* Driver Helmet (Racing Red / White Visor) */}
              <circle cx="170" cy="38" r="8" fill="#E53935" />
              <path d="M 172 36 L 178 38 L 173 41 Z" fill="#00E676" />

              {/* Sidepod Air Intake Pod */}
              <path d="M 155 48 L 210 48 L 225 74 L 150 74 Z" fill="#B71C1C" stroke="#E53935" strokeWidth="1" />
              {/* Air intake radiator inlet */}
              <polygon points="152,50 162,50 160,68 150,68" fill="#000000" />

              {/* Nose Cone & Front Wing Assembly */}
              <path d="M 270 55 L 345 74 L 320 82 L 260 76 Z" fill="#E53935" />
              <path d="M 330 76 L 358 76 L 355 83 L 325 83 Z" fill="#0B0D10" stroke="#E53935" strokeWidth="1.5" />
              {/* Front Wing Cascade Flaps */}
              <line x1="335" y1="74" x2="356" y2="74" stroke="#F3F1EB" strokeWidth="2" />
              <line x1="338" y1="70" x2="354" y2="70" stroke="#E53935" strokeWidth="1.5" />

              {/* Rear Wheel (Wide F1 Pirelli Slick) */}
              <g>
                <circle cx="75" cy="62" r="24" fill="url(#tyreGrad)" stroke="#E53935" strokeWidth="2" />
                <circle cx="75" cy="62" r="14" fill="#15191E" stroke="#858C95" strokeWidth="1" />
                <circle cx="75" cy="62" r="5" fill="#E53935" />
                {/* Pirelli Red Stripe Accent */}
                <circle cx="75" cy="62" r="19" fill="none" stroke="#E53935" strokeWidth="1.5" strokeDasharray="12 8" />
              </g>

              {/* Front Wheel (Wide F1 Pirelli Slick) */}
              <g>
                <circle cx="280" cy="62" r="22" fill="url(#tyreGrad)" stroke="#E53935" strokeWidth="2" />
                <circle cx="280" cy="62" r="13" fill="#15191E" stroke="#858C95" strokeWidth="1" />
                <circle cx="280" cy="62" r="4" fill="#E53935" />
                {/* Pirelli Red Stripe Accent */}
                <circle cx="280" cy="62" r="17" fill="none" stroke="#E53935" strokeWidth="1.5" strokeDasharray="10 7" />
              </g>

              {/* Sponsor / Livery Badge "BUILT TO BUILD" */}
              <text x="175" y="66" fill="#F3F1EB" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold" letterSpacing="1">
                SHREYAS #01
              </text>
            </svg>
          </div>
        </div>
      )}

      {/* =========================================================================
          3. FOOTBALL SWERVE SHOT TRANSITION (Curling shot across the screen)
          ========================================================================= */}
      {footballActive && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="football-swerve-container">
            {/* Spinning Football SVG with Crimson Anfield Trail */}
            <div className="relative">
              {/* Crimson Speed Motion Trail */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-28 h-10 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-l from-racing-red/60 via-racing-red/20 to-transparent blur-md rounded-full" />
              </div>

              {/* Realistic 32-Panel Geometric Soccer Ball */}
              <svg
                width="72"
                height="72"
                viewBox="0 0 100 100"
                className="football-spin filter drop-shadow-[0_8px_20px_rgba(229,57,53,0.7)]"
              >
                {/* Ball Outer Sphere */}
                <circle cx="50" cy="50" r="46" fill="#F3F1EB" stroke="#15191E" strokeWidth="2" />

                {/* Central Black Pentagon */}
                <polygon points="50,35 63,45 58,60 42,60 37,45" fill="#15191E" />

                {/* Surrounding Panels & Seam Lines */}
                {/* Top panel */}
                <polygon points="50,35 48,15 52,15" stroke="#15191E" strokeWidth="1.5" />
                <polygon points="48,15 32,24 37,45" stroke="#15191E" strokeWidth="1.5" fill="#FFFFFF" opacity="0.6" />
                <polygon points="52,15 68,24 63,45" stroke="#15191E" strokeWidth="1.5" fill="#FFFFFF" opacity="0.6" />

                {/* Bottom Left Panel */}
                <polygon points="42,60 32,74 18,65 24,48 37,45" stroke="#15191E" strokeWidth="1.5" fill="#FFFFFF" opacity="0.4" />
                <polygon points="32,74 44,87 50,87" stroke="#15191E" strokeWidth="1.5" />

                {/* Bottom Right Panel */}
                <polygon points="58,60 68,74 82,65 76,48 63,45" stroke="#15191E" strokeWidth="1.5" fill="#FFFFFF" opacity="0.4" />
                <polygon points="68,74 56,87 50,87" stroke="#15191E" strokeWidth="1.5" />

                {/* Edge Pentagons */}
                <polygon points="12,42 24,48 18,65 6,60 4,45" fill="#15191E" />
                <polygon points="88,42 76,48 82,65 94,60 96,45" fill="#15191E" />
                <polygon points="44,87 50,87 56,87 53,96 47,96" fill="#15191E" />
                <polygon points="46,6 54,6 58,15 42,15" fill="#15191E" />

                {/* Ball Shading Highlight */}
                <circle cx="38" cy="36" r="44" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
