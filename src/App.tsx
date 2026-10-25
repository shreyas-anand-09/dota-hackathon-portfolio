import { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ScrollCircuitSpine } from './components/ScrollCircuitSpine';
import { AboutSection } from './components/AboutSection';
import { GarageSection } from './components/GarageSection';
import { F1ExperienceSection } from './components/F1ExperienceSection';
import { LiverpoolSection } from './components/LiverpoolSection';
import { AchievementsSection } from './components/AchievementsSection';
import { SkillsSection } from './components/SkillsSection';
import { PersonalitySection } from './components/PersonalitySection';
import { InteractivePlayground } from './components/InteractivePlayground';
import { ContactSection } from './components/ContactSection';
import { ScrollVelocityHUD } from './components/ScrollVelocityHUD';

export function App() {
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // Listen to OS level prefers-reduced-motion changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`min-h-screen bg-graphite text-warm-white selection:bg-racing-red selection:text-white ${reducedMotion ? 'reduced-motion' : ''}`}>
      {/* Floating Speedometer & Cockpit HUD */}
      <ErrorBoundary>
        <ScrollVelocityHUD reducedMotion={reducedMotion} />
      </ErrorBoundary>

      {/* Circuit Spine Progress Rail (2XL screens) */}
      <ErrorBoundary>
        <ScrollCircuitSpine reducedMotion={reducedMotion} />
      </ErrorBoundary>

      {/* Main Top Navigation & Status Bar */}
      <ErrorBoundary>
        <Navigation reducedMotion={reducedMotion} setReducedMotion={setReducedMotion} />
      </ErrorBoundary>

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10">
        {/* Sector 01: Starting Grid */}
        <ErrorBoundary>
          <Hero reducedMotion={reducedMotion} />
        </ErrorBoundary>

        {/* Sector 02: About / Origins & Vector */}
        <ErrorBoundary>
          <AboutSection />
        </ErrorBoundary>

        {/* Sector 03: The Garage / Projects & Case Studies */}
        <ErrorBoundary>
          <GarageSection />
        </ErrorBoundary>

        {/* Sector 04: F1 — The Main Event (Defining Feature) */}
        <ErrorBoundary>
          <F1ExperienceSection reducedMotion={reducedMotion} />
        </ErrorBoundary>

        {/* Sector 05: Liverpool FC Interlude */}
        <ErrorBoundary>
          <LiverpoolSection />
        </ErrorBoundary>

        {/* Sector 06: Achievements / Results That Matter */}
        <ErrorBoundary>
          <AchievementsSection />
        </ErrorBoundary>

        {/* Sector 07: Skills / What I'm Building With */}
        <ErrorBoundary>
          <SkillsSection />
        </ErrorBoundary>

        {/* Sector 08: Personality / Not Here To Stand Still */}
        <ErrorBoundary>
          <PersonalitySection />
        </ErrorBoundary>

        {/* Sector 09: Interactive Playground / Apex Simulator */}
        <ErrorBoundary>
          <InteractivePlayground reducedMotion={reducedMotion} />
        </ErrorBoundary>

        {/* Sector 10: Next Grid / Contact & Paddock */}
        <ErrorBoundary>
          <ContactSection reducedMotion={reducedMotion} />
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
