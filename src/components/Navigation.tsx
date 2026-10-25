import { useState, useEffect } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavigationProps {
  reducedMotion: boolean;
  setReducedMotion: (val: boolean) => void;
}

export const Navigation = ({ reducedMotion, setReducedMotion }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
      setCurrentTime(`${timeStr} IST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = PORTFOLIO_CONFIG.navigation.map((nav) => nav.href.substring(1));
      const scrollPosition = window.scrollY + 240;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Status Banner */}
      <div className="bg-navy-deep/95 border-b border-navy-border/40 text-[11px] font-mono text-silver px-4 lg:px-8 py-1.5 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center space-x-3 overflow-hidden">
          <span className="flex items-center text-electric-sky font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-green mr-2" />
            BITS PILANI, HYDERABAD
          </span>
          <span className="hidden sm:inline-block text-silver-dark">•</span>
          <span className="hidden sm:inline-block text-warm-muted truncate">
            First-Year Mechanical Engineering
          </span>
          <span className="hidden md:inline-block text-silver-dark">•</span>
          <span className="hidden md:inline-block text-amber-bright text-[10px] uppercase font-bold tracking-wider">
            Atmos 26 Champion
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-silver-light font-medium tracking-tight hidden sm:inline">
            {currentTime}
          </span>
          <button
            onClick={() => setReducedMotion(!reducedMotion)}
            className="flex items-center space-x-1.5 px-2 py-0.5 rounded text-[10px] uppercase font-mono border border-navy-border hover:border-electric-sky transition-colors text-silver hover:text-warm-white"
            title="Toggle reduced motion animations"
          >
            <Sparkles className="w-2.5 h-2.5 text-electric-sky" />
            <span>Motion: {reducedMotion ? 'Reduced' : 'Full'}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`px-4 lg:px-8 py-3 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-deep/85 backdrop-blur-xl border-b border-navy-border/60 shadow-xl shadow-black/50'
            : 'bg-transparent'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#hero');
            }}
            className="group flex items-center space-x-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-sky rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-blue/20 to-vivid-purple/20 border border-electric-blue/40 group-hover:border-electric-sky flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-electric-blue/30">
              <span className="font-display font-black text-sm tracking-wider text-warm-white group-hover:text-electric-sky transition-colors">
                SA
              </span>
            </div>
            <div>
              <span className="block font-display font-extrabold text-sm tracking-wider text-warm-white group-hover:text-electric-sky transition-colors">
                SHREYAS ANAND
              </span>
              <span className="block text-[10px] font-mono text-silver tracking-widest uppercase">
                ENGINEERING &amp; CODE
              </span>
            </div>
          </a>

          {/* Desktop Section Links */}
          <div className="hidden xl:flex items-center space-x-1 font-mono text-xs bg-navy-surface/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-navy-border/50">
            {PORTFOLIO_CONFIG.navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={`px-3 py-1 rounded-full transition-all relative group flex items-center space-x-1.5 ${
                    isActive
                      ? 'text-warm-white font-bold bg-gradient-to-r from-electric-blue to-vivid-purple shadow-md'
                      : 'text-silver hover:text-warm-white hover:bg-navy-elevated/60'
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Quick Connect CTA & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-electric-blue to-vivid-purple text-white hover:brightness-110 transition-all shadow-lg shadow-electric-blue/25 active:scale-95"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-navy-surface border border-navy-border text-silver hover:text-warm-white focus:outline-none focus:ring-2 focus:ring-electric-sky"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-electric-sky" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[88px] bg-navy-deep/98 border-t border-navy-border backdrop-blur-2xl z-40 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-silver uppercase tracking-widest pb-2 border-b border-navy-border/50">
              NAVIGATION DIRECTORY
            </div>
            {PORTFOLIO_CONFIG.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className="flex items-center justify-between p-3.5 rounded-xl bg-navy-surface/60 hover:bg-navy-elevated border border-navy-border/40 hover:border-electric-sky transition-all"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-electric-sky font-bold">{item.sector}</span>
                  <span className="font-display font-bold text-base text-warm-white">{item.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-silver" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-navy-border/50 space-y-4">
            <div className="text-xs font-mono text-silver">
              <span className="text-electric-sky font-semibold">CAMPUS: </span>
              {PORTFOLIO_CONFIG.personal.institution}
            </div>
            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-mono border border-navy-border flex items-center justify-center space-x-2 text-silver hover:text-warm-white"
            >
              <Sparkles className="w-3.5 h-3.5 text-electric-sky" />
              <span>Toggle Motion: {reducedMotion ? 'Reduced' : 'Full Motion'}</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="w-full py-3.5 rounded-xl text-center text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-electric-blue to-vivid-purple text-white block shadow-lg shadow-electric-blue/30"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
