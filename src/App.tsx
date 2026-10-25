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
import { SpatialSection } from './components/SpatialSection';
import { MasterDocumentInspector } from './components/MasterDocumentInspector';

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

      {/* Floating Master Engineering File Inspector & Blueprint Minimap */}
      <ErrorBoundary>
        <MasterDocumentInspector reducedMotion={reducedMotion} />
      </ErrorBoundary>

      {/* Main Content Area: Infinite Technical Dossier Canvas */}
      <main id="main-content" className="relative z-10 overflow-hidden">
        {/* Sector 01: Hero / Starting Grid */}
        <SpatialSection
          id="hero"
          sectorCode="SEC_01"
          fileLabel="STARTING GRID // PERSONAL DOSSIER"
          coordinates="17.54°N, 78.57°E"
          reducedMotion={reducedMotion}
        >
          <ErrorBoundary>
            <Hero reducedMotion={reducedMotion} />
          </ErrorBoundary>
        </SpatialSection>

        {/* Sector 02: About / Trajectory & Origins */}
        <SpatialSection
          id="about"
          sectorCode="SEC_02"
          fileLabel="TRAJECTORY // ROOTS & PERSPECTIVE"
          coordinates="PALAKKAD ➔ LIVERPOOL ➔ HYDERABAD"
          reducedMotion={reducedMotion}
        >
          <ErrorBoundary>
            <AboutSection />
          </ErrorBoundary>
        </SpatialSection>

        {/* Sector 03: The Garage / Engineering Workbench */}
        <SpatialSection
          id="garage"
          sectorCode="SEC_03"
          fileLabel="ENGINEERING WORKBENCH // CODE & CASE STUDIES"
          coordinates="SYNCHRONY_01 // SUPERAPP_02 // GAME_03"
          reducedMotion={reducedMotion}
        >
          <ErrorBoundary>
            <GarageSection />
          </ErrorBoundary>
        </SpatialSection>

        {/* Sector 04: Formula 1 / Motorsport Architecture */}
        <SpatialSection
          id="f1-experience"
          sectorCode="SEC_04"
          fileLabel="MOTORSPORT // FLUID DYNAMICS & APEX GEOMETRY"
          coordinates="AUTÓDROMO DE SHREYAS // 2026 SPEC"
          reducedMotion={reducedMotion}
        >
          <ErrorBoundary>
            <F1ExperienceSection reducedMotion={reducedMotion} />
          </ErrorBoundary>
        </SpatialSection>

        {/* Sector 05: Liverpool FC Interlude */}
        <SpatialSection
          id="liverpool"
          sectorCode="SEC_05"
          fileLabel="TACTICAL HERITAGE // ANFIELD WORK ETHIC"
          coordinates="MERSEYSIDE // 9 FORMATIVE YEARS"
          reducedMotion={reducedMotion}
        >
          <ErrorBoundary>
            <LiverpoolSection />
          </ErrorBoundary>
        </SpatialSection>

        {/* Sector 06: Innovation & Achievements / Inspire Manak Awards */}
        <SpatialSection
          id="achievements"
          sectorCode="SEC_06"
          fileLabel="INNOVATION & PODIUM ARCHIVE // INSPIRE MANAK"
          coordinates="DST_GOVT_INDIA // ATMOS_26_CHAMPION"
          reducedMotion={reducedMotion}
        >
          <ErrorBoundary>
            <AchievementsSection />
          </ErrorBoundary>
        </SpatialSection>

        {/* Sector 07: Skills / Technical Arsenal */}
        <SpatialSection
          id="skills"
          sectorCode="SEC_07"
          fileLabel="TECHNICAL ARSENAL // FIRST-PRINCIPLES"
          coordinates="PYTHON // MECHANICS // EDA // SYSTEMS"
          reducedMotion={reducedMotion}
        >
          <ErrorBoundary>
            <SkillsSection />
          </ErrorBoundary>
        </SpatialSection>

        {/* Sector 08: Personality / Mindset & Ethos */}
        <SpatialSection
          id="personality"
          sectorCode="SEC_08"
          fileLabel="ETHOS & DRIVING MINDSET"
          coordinates="AMBITION // PRAGMATIC BUILDER // RIGOR"
          reducedMotion={reducedMotion}
        >
          <ErrorBoundary>
            <PersonalitySection />
          </ErrorBoundary>
        </SpatialSection>

        {/* Sector 09: Apex Simulator / Interactive Telemetry Bench */}
        <SpatialSection
          id="playground"
          sectorCode="SEC_09"
          fileLabel="TELEMETRY LAB // APEX SIMULATOR"
          coordinates="QUALIFYING // RACE // PURPLE_DELTA"
          reducedMotion={reducedMotion}
        >
          <ErrorBoundary>
            <InteractivePlayground reducedMotion={reducedMotion} />
          </ErrorBoundary>
        </SpatialSection>

        {/* Sector 10: Finale / Contact & Paddock Directory */}
        <SpatialSection
          id="contact"
          sectorCode="SEC_10"
          fileLabel="TERMINAL PADDOCK // INITIATE TRANSMISSION"
          coordinates="INBOX_DIRECT // BITS_HYDERABAD"
          reducedMotion={reducedMotion}
        >
          <ErrorBoundary>
            <ContactSection reducedMotion={reducedMotion} />
          </ErrorBoundary>
        </SpatialSection>
      </main>
    </div>
  );
}

export default App;
