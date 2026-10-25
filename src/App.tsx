import { useState, useEffect } from 'react';
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
      {/* Circuit Spine Progress Rail (2XL screens) */}
      <ScrollCircuitSpine reducedMotion={reducedMotion} />

      {/* Main Top Navigation & Status Bar */}
      <Navigation reducedMotion={reducedMotion} setReducedMotion={setReducedMotion} />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10">
        {/* Sector 01: Starting Grid */}
        <Hero reducedMotion={reducedMotion} />

        {/* Sector 02: About / Origins & Vector */}
        <AboutSection />

        {/* Sector 03: The Garage / Projects & Case Studies */}
        <GarageSection />

        {/* Sector 04: F1 — The Main Event (Defining Feature) */}
        <F1ExperienceSection reducedMotion={reducedMotion} />

        {/* Sector 05: Liverpool FC Interlude */}
        <LiverpoolSection />

        {/* Sector 06: Achievements / Results That Matter */}
        <AchievementsSection />

        {/* Sector 07: Skills / What I'm Building With */}
        <SkillsSection />

        {/* Sector 08: Personality / Not Here To Stand Still */}
        <PersonalitySection />

        {/* Sector 09: Interactive Playground / Apex Simulator */}
        <InteractivePlayground reducedMotion={reducedMotion} />

        {/* Sector 10: Next Grid / Contact & Paddock */}
        <ContactSection reducedMotion={reducedMotion} />
      </main>
    </div>
  );
}

export default App;
