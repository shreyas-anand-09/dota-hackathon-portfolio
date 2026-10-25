import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Award, CheckCircle, Trophy, Sparkles, Lightbulb, ShieldCheck } from 'lucide-react';

export const AchievementsSection = () => {
  const achievements = PORTFOLIO_CONFIG.achievements;
  const inspireAward = achievements.find((a) => a.id === 'inspire-manak') ?? achievements[0];
  const otherAchievements = achievements.filter((a) => a.id !== 'inspire-manak');

  return (
    <section id="achievements" className="py-28 px-4 lg:px-8 bg-navy-deep border-b border-navy-border/60 relative overflow-hidden">
      {/* Background Ambient Lighting: Amber & Cyan Glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-amber-bright/10 blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-10 w-[500px] h-[450px] bg-electric-cyan/10 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Sector Tag & Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-bright" />
            <span className="text-amber-bright font-bold">CHAPTER 05 // INNOVATION &amp; RECOGNITION</span>
            <span className="text-silver-dark">•</span>
            <span className="text-silver">VERIFIED PODIUM ARCHIVE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
                IDEAS THAT MAKE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-bright via-electric-sky to-electric-blue">
                  AN IMPACT.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-silver text-sm sm:text-base font-sans leading-relaxed">
              Authentic record of recognized innovation, competition victories, and academic honors. No exaggerated claims, manufactured credentials, or inflated titles.
            </div>
          </div>
        </div>

        {/* =========================================================================
            FEATURED HERO SPOTLIGHT: INSPIRE MANAK AWARDS (SMART BIN INNOVATION)
            ========================================================================= */}
        <div className="bg-gradient-to-br from-navy-surface via-navy-surface to-navy-elevated border-2 border-amber-bright/40 rounded-3xl p-6 lg:p-12 shadow-2xl relative overflow-hidden card-hover-elevated glow-amber">
          
          {/* Top Decorative Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-navy-border/70">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-bright/15 border border-amber-bright/40 flex items-center justify-center text-amber-bright shadow-lg shadow-amber-bright/20">
                <Trophy className="w-5 h-5 text-amber-bright" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-bright uppercase font-bold tracking-widest block">
                  NATIONAL INNOVATION RECOGNITION
                </span>
                <span className="font-display font-bold text-sm text-warm-white">
                  DEPARTMENT OF SCIENCE &amp; TECHNOLOGY (DST) INITIATIVE
                </span>
              </div>
            </div>

            {/* Prominent Prize Amount Pill */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-bright to-racing-amber text-graphite font-mono font-black text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-amber-bright/25">
              <Sparkles className="w-4 h-4 fill-graphite" />
              <span>AWARDED ₹10,000</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
            
            {/* Left Column: Narrative & Award Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-bright/10 border border-amber-bright/30 text-amber-bright text-xs font-mono font-bold uppercase">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>SMART BIN INNOVATION</span>
                </div>
                
                <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-warm-white tracking-tight">
                  {inspireAward.title}
                </h3>
                
                <p className="text-sm font-mono text-electric-sky font-semibold">
                  {inspireAward.organization}
                </p>
              </div>

              <p className="text-base sm:text-lg text-silver-light font-sans leading-relaxed">
                {inspireAward.description}
              </p>

              {/* Award highlights */}
              <div className="p-4 rounded-xl bg-navy-deep/80 border border-navy-border space-y-3">
                <div className="text-[10px] font-mono text-amber-bright uppercase font-bold tracking-wider">
                  VERIFIED RECOGNITION CRITERIA:
                </div>
                {inspireAward.verifiedDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm font-mono text-warm-white">
                    <CheckCircle className="w-4 h-4 text-emerald-green shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs font-mono text-silver pt-2 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-green" />
                <span>CONFIRMED INNOVATION GRANT // ORIGINAL CONCEPT DESIGN</span>
              </div>
            </div>

            {/* Right Column: Visual Schematic Illustration of the Smart Bin Concept */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[380px] aspect-[4/5] rounded-2xl bg-navy-deep/95 border border-amber-bright/30 p-6 relative flex flex-col justify-between shadow-2xl backdrop-blur-md">
                
                {/* Schematic Header */}
                <div className="flex items-center justify-between pb-3 border-b border-navy-border/60 text-[10px] font-mono">
                  <span className="text-amber-bright font-bold">CONCEPT SCHEMATIC</span>
                  <span className="text-silver">SMART BIN // PROTOTYPE</span>
                </div>

                {/* SVG Vector Drawing of the Smart Bin Innovation */}
                <div className="relative w-full h-[220px] flex items-center justify-center my-2">
                  <svg viewBox="0 0 240 220" className="w-full h-full" fill="none">
                    <defs>
                      <linearGradient id="binGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="50%" stopColor="#334155" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="lidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#D97706" />
                      </linearGradient>
                    </defs>

                    {/* Sensor Detection Field Waves */}
                    <path d="M 80 35 C 100 20, 140 20, 160 35" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
                    <path d="M 90 45 C 105 35, 135 35, 150 45" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                    
                    {/* Ultrasonic Proximity Sensor Module */}
                    <rect x="100" y="48" width="40" height="14" rx="3" fill="#0A0F1D" stroke="#38BDF8" strokeWidth="1.5" />
                    <circle cx="110" cy="55" r="3.5" fill="#38BDF8" />
                    <circle cx="130" cy="55" r="3.5" fill="#38BDF8" />
                    <text x="75" y="45" fill="#38BDF8" fontSize="8" fontFamily="JetBrains Mono">ULTRASONIC SENSOR</text>

                    {/* Automated Motorized Actuation Lid (Angled opening) */}
                    <path
                      d="M 50 65 L 180 48 L 190 56 L 60 73 Z"
                      fill="url(#lidGrad)"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                    />
                    <circle cx="180" cy="52" r="4" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="1" />
                    <text x="145" y="38" fill="#F59E0B" fontSize="8" fontFamily="JetBrains Mono">MOTOR HINGE</text>

                    {/* Main Receptacle Chassis */}
                    <path
                      d="M 65 75 L 175 75 L 165 195 L 75 195 Z"
                      fill="url(#binGrad)"
                      stroke="#475569"
                      strokeWidth="2"
                    />

                    {/* Fill Level Indicator Bar */}
                    <rect x="150" y="95" width="6" height="85" rx="3" fill="#0A0F1D" stroke="#334155" strokeWidth="1" />
                    <rect x="151" y="145" width="4" height="34" rx="2" fill="#10B981" />
                    <text x="160" y="145" fill="#10B981" fontSize="7" fontFamily="JetBrains Mono">LEVEL: 40%</text>

                    {/* Segregation Division Line */}
                    <line x1="120" y1="85" x2="120" y2="190" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
                    <text x="82" y="180" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">CHAMBER A</text>
                    <text x="125" y="180" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">CHAMBER B</text>

                    {/* Ground Plane */}
                    <line x1="50" y1="200" x2="190" y2="200" stroke="#334155" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Technical Annotation Pill */}
                <div className="p-2.5 rounded-lg bg-navy-surface border border-navy-border/60 text-[10px] font-mono text-silver flex items-center justify-between">
                  <span>PROBLEM-SOLVING: AUTOMATION</span>
                  <span className="text-amber-bright font-bold">₹10,000 GRANT</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            SECONDARY ARCHIVE: SYNCHRONY HACKATHON & STATE ELECTION COMMISSION
            ========================================================================= */}
        <div className="space-y-6 pt-4">
          <div className="text-xs font-mono text-silver uppercase tracking-wider flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-sky" />
            <span>COMPETITIVE PODIUM VICTORIES &amp; CIVIC AWARDS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherAchievements.map((item) => (
              <div
                key={item.id}
                className="bg-navy-surface/80 border border-navy-border hover:border-electric-sky/50 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden transition-all duration-300 card-hover-elevated group"
              >
                {/* Giant Numeral Background */}
                <div className="absolute right-4 -bottom-4 text-9xl font-display font-black text-navy-elevated/40 select-none pointer-events-none group-hover:text-navy-elevated/70 transition-colors">
                  {item.number}
                </div>

                {/* Top Meta Line */}
                <div className="flex items-center justify-between pb-6 border-b border-navy-border/60">
                  <span className="text-xs font-mono font-bold text-electric-sky tracking-widest uppercase">
                    ARCHIVE ENTRY // {item.number}
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-electric-blue/15 border border-electric-blue/30 text-electric-sky text-[11px] font-mono font-bold uppercase">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Title & Organization */}
                <div className="py-6 space-y-2">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-warm-white group-hover:text-electric-sky transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-sm font-mono text-silver">
                    {item.organization} — <span className="text-warm-muted">{item.context}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-silver font-sans leading-relaxed pb-6">
                  {item.description}
                </p>

                {/* Verified Details */}
                <div className="pt-4 border-t border-navy-border/60 space-y-2.5">
                  <div className="text-[10px] font-mono text-silver-dark uppercase tracking-wider">
                    VERIFIED RECOGNITION DETAILS:
                  </div>
                  {item.verifiedDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-silver-light">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-green shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
