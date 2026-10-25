import { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ExplodedMachineAssembly } from './components/ExplodedMachineAssembly';
import { AboutSection } from './components/AboutSection';
import { GarageSection } from './components/GarageSection';
import { F1ExperienceSection } from './components/F1ExperienceSection';
import { LiverpoolSection } from './components/LiverpoolSection';
import { AchievementsSection } from './components/AchievementsSection';
import { SkillsSection } from './components/SkillsSection';
import { PersonalitySection } from './components/PersonalitySection';
import { InteractivePlayground } from './components/InteractivePlayground';
import { ContactSection } from './components/ContactSection';
import { SectionDivider } from './components/SectionDivider';
import { ExplodedArchitectureDock } from './components/ExplodedArchitectureDock';
import { useGsapHelicalScroll } from './hooks/useGsapHelicalScroll';

export function App() {
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // GSAP ScrollTrigger Helical Spiral Transitions Controller
  useGsapHelicalScroll(reducedMotion);

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

      {/* Main Content Area: Smooth, Stable, Creative Section Transitions with Scroll-Snapping */}
      <main id="main-content" className="relative z-10">
        {/* Chapter 01: Hero / Starting Grid + BITS Pilani 3D Campus */}
        <ErrorBoundary>
          <Hero reducedMotion={reducedMotion} />
        </ErrorBoundary>

        {/* Helical Transition Bridge: Hero ➔ 3D Exploded Assembly */}
        <SectionDivider variant="blue-wave" label="3D EXPLODED MACHINE // ARCHITECTURE MATRIX" />

        {/* Interactive 3D Exploded Machine Architecture Overview */}
        <ErrorBoundary>
          <ExplodedMachineAssembly reducedMotion={reducedMotion} />
        </ErrorBoundary>

        {/* Helical Transition Bridge: Exploded Machine ➔ About */}
        <SectionDivider variant="circuit-wire" label="HELIX // TRAJECTORY SPIRAL" />

        {/* Chapter 02: About / Trajectory & Origins */}
        <ErrorBoundary>
          <AboutSection />
        </ErrorBoundary>

        {/* Helical Transition Bridge: About ➔ Garage */}
        <SectionDivider variant="circuit-wire" label="HELIX // WORKBENCH COIL" />

        {/* Chapter 03: The Garage / Engineering Workbench & Projects */}
        <ErrorBoundary>
          <GarageSection />
        </ErrorBoundary>

        {/* Helical Transition Bridge: Garage ➔ Formula 1 */}
        <SectionDivider variant="racing-kerb" label="HELIX // MOTORSPORT APEX" />

        {/* Chapter 04: Formula 1 / Motorsport Art Direction */}
        <ErrorBoundary>
          <F1ExperienceSection reducedMotion={reducedMotion} />
        </ErrorBoundary>

        {/* Helical Transition Bridge: Formula 1 ➔ Liverpool */}
        <SectionDivider variant="crimson-fade" label="HELIX // MERSEYSIDE WEAVE" />

        {/* Chapter 05: Liverpool FC Interlude */}
        <ErrorBoundary>
          <LiverpoolSection />
        </ErrorBoundary>

        {/* Helical Transition Bridge: Liverpool ➔ Achievements */}
        <SectionDivider variant="amber-glow" label="HELIX // PODIUM HORIZON" />

        {/* Chapter 06: Innovation & Achievements / Inspire Manak Awards */}
        <ErrorBoundary>
          <AchievementsSection />
        </ErrorBoundary>

        {/* Helical Transition Bridge: Achievements ➔ Skills */}
        <SectionDivider variant="emerald-grid" label="HELIX // ARSENAL LATTICE" />

        {/* Chapter 07: Skills / Technical Arsenal */}
        <ErrorBoundary>
          <SkillsSection />
        </ErrorBoundary>

        {/* Helical Transition Bridge: Skills ➔ Personality */}
        <SectionDivider variant="violet-slant" label="HELIX // MINDSET SLANT" />

        {/* Chapter 08: Personality / Mindset & Ethos */}
        <ErrorBoundary>
          <PersonalitySection />
        </ErrorBoundary>

        {/* Helical Transition Bridge: Personality ➔ Playground */}
        <SectionDivider variant="circuit-wire" label="HELIX // SIMULATOR BENCH" />

        {/* Chapter 09: Apex Simulator / Interactive Telemetry Bench */}
        <ErrorBoundary>
          <InteractivePlayground reducedMotion={reducedMotion} />
        </ErrorBoundary>

        {/* Helical Transition Bridge: Playground ➔ Contact */}
        <SectionDivider variant="finale-horizon" label="HELIX // TERMINAL PADDOCK" />

        {/* Chapter 10: Finale / Contact & Paddock Directory */}
        <ErrorBoundary>
          <ContactSection reducedMotion={reducedMotion} />
        </ErrorBoundary>
      </main>

      {/* Futuristic 3D Architecture Subsystem Quick-Map Dock */}
      <ErrorBoundary>
        <ExplodedArchitectureDock reducedMotion={reducedMotion} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
