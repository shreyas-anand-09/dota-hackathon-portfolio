import { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUp, MapPin } from 'lucide-react';

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
    <footer id="contact" className="py-24 px-4 lg:px-8 bg-charcoal-deep relative overflow-hidden">
      
      {/* Top Border with racing kerb accents */}
      <div className="absolute top-0 left-0 right-0 h-1.5 racing-kerb opacity-70" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Sector Tag & Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-racing-red" />
            <span className="text-racing-red font-bold">SECTOR 10 // NEXT GRID</span>
            <span className="text-silver-dark">•</span>
            <span className="text-silver">PADDOCK DIRECTORY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-warm-white tracking-tight leading-tight">
                THE NEXT THING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red via-warm-white to-silver-light">
                  STARTS HERE.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-silver text-sm font-sans leading-relaxed">
              Always open to discussing upcoming hackathons, engineering software, campus utilities, and ambitious building ventures.
            </div>
          </div>
        </div>

        {/* Central Contact Card */}
        <div className="bg-charcoal/90 border border-charcoal-border rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Contact Narrative & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-charcoal-surface border border-charcoal-border text-xs font-mono text-warm-white">
                <span className="w-2 h-2 rounded-full bg-racing-green animate-pulse" />
                <span>OPEN FOR HACKATHONS &amp; ENGINEERING VENTURES</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-warm-white leading-snug">
                Let's construct something that outperforms the competition.
              </h3>

              <p className="text-silver text-sm sm:text-base font-sans leading-relaxed">
                Whether you're gearing up for a competitive hackathon team, want to discuss student utility architecture, or exchange ideas on mechanical engineering and Python—drop a message.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-charcoal-deep border border-charcoal-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-racing-red/10 border border-racing-red/30 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-racing-red" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-silver uppercase">ACADEMIC &amp; DIRECT INBOX</div>
                    <div className="text-xs sm:text-sm font-mono font-bold text-warm-white truncate">
                      {email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3.5 py-2 rounded bg-charcoal-surface hover:bg-charcoal-elevated border border-charcoal-border text-xs font-mono text-warm-white flex items-center space-x-1.5 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-racing-green" /> : <Copy className="w-3.5 h-3.5 text-silver" />}
                    <span>{copied ? 'COPIED!' : 'COPY'}</span>
                  </button>
                  <a
                    href={`mailto:${email}`}
                    className="px-4 py-2 rounded bg-racing-red hover:bg-racing-redDark text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                  >
                    SEND EMAIL
                  </a>
                </div>
              </div>

              {/* Campus Location */}
              <div className="flex items-center space-x-2 text-xs font-mono text-silver">
                <MapPin className="w-4 h-4 text-racing-red shrink-0" />
                <span>BITS Pilani, Hyderabad Campus, Telangana 500078, India</span>
              </div>
            </div>

            {/* Right: Loop-Back Circuit Telemetry Seal */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-charcoal-deep rounded-xl border border-charcoal-border text-center space-y-4">
              
              {/* Loop-back Circuit SVG */}
              <div className="w-36 h-36 relative flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  <circle cx="50" cy="50" r="42" stroke="#2F3844" strokeWidth="2" strokeDasharray="3 4" />
                  <circle cx="50" cy="50" r="42" stroke="#E53935" strokeWidth="2.5" strokeDasharray="25 60" className="animate-spin" style={{ animationDuration: '8s' }} />
                  <circle cx="50" cy="8" r="4" fill="#E53935" />
                  <path d="M 50 25 L 50 40 M 42 33 L 50 25 L 58 33" stroke="#F3F1EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                  <span className="text-[10px] font-mono text-silver">CHECKERED</span>
                  <span className="text-xs font-display font-bold text-warm-white">LAP 01</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-display font-bold text-base text-warm-white">
                  FULL CIRCUIT COMPLETED
                </div>
                <p className="text-xs font-mono text-silver-dark max-w-xs">
                  Return to the starting grid to inspect technical telemetries or explore project case studies.
                </p>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="px-5 py-2.5 rounded bg-charcoal-surface hover:bg-charcoal-elevated border border-charcoal-border hover:border-racing-red text-warm-white text-xs font-mono font-bold tracking-wider uppercase flex items-center space-x-2 transition-all shadow-md active:scale-95"
              >
                <ArrowUp className="w-4 h-4 text-racing-red" />
                <span>RETURN TO GRID // TOP</span>
              </button>

            </div>

          </div>

        </div>

        {/* Semantic Bottom Footer */}
        <div className="pt-8 border-t border-charcoal-border/50 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-silver gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-warm-white">SHREYAS ANAND</span>
            <span>—</span>
            <span>BUILT TO BUILD</span>
            <span className="text-silver-dark">•</span>
            <span>BITS PILANI HYDERABAD CAMPUS</span>
          </div>

          <div className="flex items-center space-x-4 text-silver-dark text-[11px]">
            <span>ENGINEERED WITH REACT + TS + TAILWIND</span>
            <span>|</span>
            <span className="text-silver">NO FAKE CREDENTIALS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
