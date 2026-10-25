import { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { GarageSection } from './components/GarageSection';
import { F1ExperienceSection } from './components/F1ExperienceSection';
import { LiverpoolSection } from './components/LiverpoolSection';
import { AchievementsSection } from './components/AchievementsSection';
import { SkillsSection } from './components/SkillsSection';
import { PersonalitySection } from './components/PersonalitySection';
import { InteractivePlayground } from './components/InteractivePlayground';
import { ContactSection } from './components/ContactSection';

export function App() {
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // Listen to OS-level prefers-reduced-motion changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`min-h-screen bg-graphite text-warm-white selection:bg-electric-sky selection:text-graphite ${reducedMotion ? 'reduced-motion' : ''}`}>
      {/* Sleek Top Navigation Bar */}
      <ErrorBoundary>
        <Navigation reducedMotion={reducedMotion} setReducedMotion={setReducedMotion} />
      </ErrorBoundary>

      {/* Main Content Area: Traversal through Distinct Visual Worlds */}
      <main id="main-content" className="relative z-10">
        {/* Chapter 01: Hero / Starting Grid (Deep Navy, Electric Blue & Purple) */}
        <ErrorBoundary>
          <Hero reducedMotion={reducedMotion} />
        </ErrorBoundary>

        {/* Chapter 02: About / Trajectory & Origins (Obsidian, Indigo & Titanium) */}
        <ErrorBoundary>
          <AboutSection />
        </ErrorBoundary>

        {/* Chapter 03: The Garage / Engineering Workbench & Projects (Cyan, Emerald & Sapphire) */}
        <ErrorBoundary>
          <GarageSection />
        </ErrorBoundary>

        {/* Chapter 04: Formula 1 / Motorsport Art Direction (Asphalt Charcoal & Racing Red) */}
        <ErrorBoundary>
          <F1ExperienceSection reducedMotion={reducedMotion} />
        </ErrorBoundary>

        {/* Chapter 05: Liverpool FC Interlude (Anfield Crimson & Gold) */}
        <ErrorBoundary>
          <LiverpoolSection />
        </ErrorBoundary>

        {/* Chapter 06: Innovation & Achievements / Ideas That Make An Impact (Rich Sapphire, Amber & Gold) */}
        <ErrorBoundary>
          <AchievementsSection />
        </ErrorBoundary>

        {/* Chapter 07: Skills / Technical Arsenal (Emerald & Neon Cyan) */}
        <ErrorBoundary>
          <SkillsSection />
        </ErrorBoundary>

        {/* Chapter 08: Personality / Mindset & Ethos (Electric Violet & Amber) */}
        <ErrorBoundary>
          <PersonalitySection />
        </ErrorBoundary>

        {/* Chapter 09: Apex Simulator / Interactive Telemetry Bench */}
        <ErrorBoundary>
          <InteractivePlayground reducedMotion={reducedMotion} />
        </ErrorBoundary>

        {/* Chapter 10: Finale / Contact & Paddock Directory (Electric Navy Finale) */}
        <ErrorBoundary>
          <ContactSection reducedMotion={reducedMotion} />
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
