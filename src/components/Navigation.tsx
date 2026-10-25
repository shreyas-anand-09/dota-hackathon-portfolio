import { useState, useEffect } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Menu, X, Activity, ArrowUpRight, Radio } from 'lucide-react';

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
        second: '2-digit',
      });
      setCurrentTime(`${timeStr} IST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = PORTFOLIO_CONFIG.navigation.map(nav => nav.href.substring(1));
      const scrollPosition = window.scrollY + 200;

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
      {/* Top Telemetry Status Bar */}
      <div className="bg-graphite/95 border-b border-charcoal-border/40 text-[11px] font-mono text-silver px-4 lg:px-8 py-1.5 flex items-center justify-between backdrop-blur-sm">
        <div className="flex items-center space-x-3 overflow-hidden">
          <span className="flex items-center text-racing-red font-semibold tracking-wider">
            <Radio className="w-3 h-3 mr-1.5 animate-pulse text-racing-red" />
            LIVE TELEMETRY
          </span>
          <span className="hidden sm:inline-block text-silver-dark">|</span>
          <span className="hidden sm:inline-block text-silver truncate">
            {PORTFOLIO_CONFIG.personal.statusBadge}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-silver-light font-medium tracking-tight">
            {currentTime}
          </span>
          <span className="text-silver-dark hidden md:inline">|</span>
          <button
            onClick={() => setReducedMotion(!reducedMotion)}
            className="hidden md:flex items-center space-x-1.5 px-2 py-0.5 rounded text-[10px] uppercase font-mono border border-charcoal-border hover:border-racing-red transition-colors text-silver hover:text-warm-white"
            title="Toggle reduced motion animations"
          >
            <Activity className="w-2.5 h-2.5 text-racing-red" />
            <span>Motion: {reducedMotion ? 'Reduced' : 'Full'}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`px-4 lg:px-8 py-3.5 transition-all duration-300 ${
          scrolled 
            ? 'bg-charcoal/90 backdrop-blur-md border-b border-charcoal-border/70 shadow-2xl shadow-black/60' 
            : 'bg-transparent'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            className="group flex items-center space-x-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-racing-red rounded"
          >
            <div className="w-8 h-8 rounded bg-charcoal-surface border border-charcoal-border group-hover:border-racing-red flex items-center justify-center transition-colors">
              <span className="font-display font-bold text-xs tracking-wider text-warm-white group-hover:text-racing-red transition-colors">
                SA
              </span>
            </div>
            <div>
              <span className="block font-display font-bold text-sm tracking-wider text-warm-white group-hover:text-racing-red transition-colors">
                SHREYAS ANAND
              </span>
              <span className="block text-[10px] font-mono text-silver tracking-widest uppercase">
                BUILT TO BUILD // 01
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center space-x-1 font-mono text-xs">
            {PORTFOLIO_CONFIG.navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className={`px-3 py-1.5 rounded transition-all relative group flex items-center space-x-1.5 ${
                    isActive 
                      ? 'text-racing-red font-semibold bg-racing-red/10 border border-racing-red/30' 
                      : 'text-silver hover:text-warm-white hover:bg-charcoal-surface/60'
                  }`}
                >
                  <span className="text-[10px] text-silver-dark group-hover:text-racing-red/80 font-mono">
                    {item.sector}
                  </span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded text-xs font-mono font-semibold uppercase tracking-wider bg-racing-red text-white hover:bg-racing-redDark transition-colors shadow-lg shadow-racing-red/20 active:translate-y-0.5"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded bg-charcoal-surface border border-charcoal-border text-silver hover:text-warm-white focus:outline-none focus:ring-2 focus:ring-racing-red"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-racing-red" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[85px] bg-graphite/98 border-t border-charcoal-border backdrop-blur-xl z-40 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-silver uppercase tracking-widest pb-2 border-b border-charcoal-border/50">
              PIT LANE NAVIGATION // SECTORS
            </div>
            {PORTFOLIO_CONFIG.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className="flex items-center justify-between p-3 rounded bg-charcoal-surface/40 hover:bg-charcoal-surface border border-charcoal-border/40 hover:border-racing-red transition-all"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-racing-red">{item.sector}</span>
                  <span className="font-display font-semibold text-base text-warm-white">{item.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-silver" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-charcoal-border/50 space-y-4">
            <div className="text-xs font-mono text-silver">
              <span className="text-racing-red font-semibold">CAMPUS: </span>
              {PORTFOLIO_CONFIG.personal.institution}
            </div>
            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className="w-full py-2.5 px-4 rounded text-xs font-mono border border-charcoal-border flex items-center justify-center space-x-2 text-silver hover:text-warm-white"
            >
              <Activity className="w-3.5 h-3.5 text-racing-red" />
              <span>Toggle Motion: {reducedMotion ? 'Reduced' : 'Full Motion'}</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="w-full py-3 rounded text-center text-xs font-mono font-bold uppercase tracking-wider bg-racing-red text-white block shadow-lg shadow-racing-red/30"
            >
              INITIATE CONTACT // PADDOCK
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
