import { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUp, MapPin, Send } from 'lucide-react';
import { ExplodedStageIndicator } from './ExplodedStageIndicator';

interface ContactSectionProps {
  reducedMotion: boolean;
}

export const ContactSection = ({ reducedMotion }: ContactSectionProps) => {
  const [copied, setCopied] = useState(false);
  const email = PORTFOLIO_CONFIG.personal.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer id="contact" className="py-28 px-4 lg:px-8 bg-navy-deep relative overflow-hidden border-t border-navy-border/60">
      {/* Cinematic Ambient Finale Lighting */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-electric-blue/15 blur-[170px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-10 w-[450px] h-[400px] bg-vivid-purple/15 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        {/* Exploded Architecture Subsystem Tracker */}
        <ExplodedStageIndicator
          moduleCode="MOD-09"
          category="COMMUNICATIONS"
          title="Paddock Terminal & Direct Comms"
          coords="X: 0mm, Y: +165mm, Z: +70mm"
          accentColor="#7C3AED"
        />
        
        {/* Sector Tag & Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-electric-sky animate-pulse" />
            <span className="text-electric-sky font-bold">CHAPTER 09 // FINALE &amp; PADDOCK</span>
            <span className="text-silver-dark">•</span>
            <span className="text-silver">INITIATE TRANSMISSION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl text-warm-white tracking-tight leading-[0.95]">
                THE NEXT THING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-sky via-electric-blue to-vivid-purple">
                  STARTS HERE.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-silver text-sm sm:text-base font-sans leading-relaxed">
              Always open to discussing upcoming hackathons, engineering software, campus utilities, and ambitious building ventures.
            </div>
          </div>
        </div>

        {/* Central Contact Card */}
        <div className="bg-gradient-to-br from-navy-surface via-navy-surface to-navy-elevated border border-navy-border hover:border-electric-sky/50 rounded-3xl p-8 lg:p-14 shadow-2xl relative overflow-hidden transition-all duration-300 card-hover-elevated glow-blue">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Contact Narrative & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-deep border border-navy-border text-xs font-mono text-warm-white">
                <span className="w-2 h-2 rounded-full bg-emerald-green animate-pulse" />
                <span className="text-silver-light font-medium">OPEN FOR HACKATHONS &amp; ENGINEERING VENTURES</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-warm-white leading-snug">
                Let's construct something that outperforms the competition.
              </h3>

              <p className="text-silver text-sm sm:text-base font-sans leading-relaxed">
                Whether you're gearing up for a competitive hackathon team, want to discuss campus utility architecture, or exchange perspectives on mechanical engineering and Python—drop a message.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-navy-deep border border-navy-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
                <div className="flex items-center space-x-3.5 overflow-hidden">
                  <div className="w-11 h-11 rounded-xl bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-electric-sky" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-silver uppercase tracking-wider">ACADEMIC &amp; DIRECT INBOX</div>
                    <div className="text-xs sm:text-sm font-mono font-bold text-warm-white truncate">
                      {email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="px-4 py-2.5 rounded-xl bg-navy-surface hover:bg-navy-elevated border border-navy-border text-xs font-mono text-warm-white flex items-center space-x-1.5 transition-all active:scale-95"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-green" /> : <Copy className="w-4 h-4 text-silver" />}
                    <span>{copied ? 'COPIED!' : 'COPY'}</span>
                  </button>
                  <a
                    href={`mailto:${email}`}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-blue to-vivid-purple hover:brightness-110 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg shadow-electric-blue/25 flex items-center space-x-1.5 active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SEND EMAIL</span>
                  </a>
                </div>
              </div>

              {/* Campus Location */}
              <div className="flex items-center space-x-2 text-xs font-mono text-silver pt-1">
                <MapPin className="w-4 h-4 text-electric-sky shrink-0" />
                <span>BITS Pilani, Hyderabad Campus, Telangana 500078, India</span>
              </div>
            </div>

            {/* Right: Loop-Back Circuit Telemetry Seal */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-navy-deep rounded-2xl border border-navy-border text-center space-y-5 shadow-inner">
              
              {/* Loop-back Circuit SVG */}
              <div className="w-36 h-36 relative flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  <circle cx="50" cy="50" r="42" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="#38BDF8"
                    strokeWidth="2.5"
                    strokeDasharray="30 60"
                    className="animate-spin"
                    style={{ animationDuration: '10s' }}
                  />
                  <circle cx="50" cy="8" r="4" fill="#38BDF8" />
                  <path
                    d="M 50 25 L 50 40 M 42 33 L 50 25 L 58 33"
                    stroke="#F8FAFC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                  <span className="text-[10px] font-mono text-silver uppercase">EXPEDITION</span>
                  <span className="text-xs font-display font-bold text-warm-white">SECTOR 09</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-display font-bold text-base text-warm-white">
                  FULL EXPEDITION TRAVERSED
                </div>
                <p className="text-xs font-mono text-silver max-w-xs leading-relaxed">
                  Return to the starting grid to review engineering schematics or explore project case studies.
                </p>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="px-6 py-3 rounded-xl bg-navy-surface hover:bg-navy-elevated border border-navy-border hover:border-electric-sky text-warm-white text-xs font-mono font-bold tracking-wider uppercase flex items-center space-x-2 transition-all shadow-md active:scale-95"
              >
                <ArrowUp className="w-4 h-4 text-electric-sky" />
                <span>RETURN TO START // TOP</span>
              </button>

            </div>

          </div>

        </div>

        {/* Semantic Bottom Footer */}
        <div className="pt-8 border-t border-navy-border/60 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-silver gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-warm-white">{PORTFOLIO_CONFIG.personal.name}</span>
            <span>—</span>
            <span>BUILT TO BUILD</span>
            <span className="text-silver-dark">•</span>
            <span>BITS PILANI HYDERABAD CAMPUS</span>
          </div>

          <div className="flex items-center space-x-4 text-silver-dark text-[11px]">
            <span>REACT 19 + TYPESCRIPT + TAILWIND CSS</span>
            <span>|</span>
            <span className="text-silver-light">DEPLOYED ON CLOUDFLARE PAGES</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
