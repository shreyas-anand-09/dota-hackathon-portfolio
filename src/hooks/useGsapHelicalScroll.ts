import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapHelicalScroll(reducedMotion: boolean) {
  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Find all major sections and the footer
      const sections = gsap.utils.toArray<HTMLElement>('main > section, main > div#exploded-view, main > footer');

      sections.forEach((sec, idx) => {
        const isEven = idx % 2 === 0;
        const xOffset = isEven ? 70 : -70;
        const rotY = isEven ? 12 : -12;
        const rotZ = isEven ? 2 : -2;

        // Phase 1: Camera Approach & Docking (Exploded View ➔ Docked Immersive)
        gsap.fromTo(
          sec,
          {
            opacity: 0.45,
            y: 90,
            x: xOffset,
            rotationY: rotY,
            rotationX: 5,
            rotationZ: rotZ,
            scale: 0.93,
            transformPerspective: 1400,
            transformOrigin: isEven ? 'left center' : 'right center',
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotationY: 0,
            rotationX: 0,
            rotationZ: 0,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 95%',
              end: 'top 25%',
              scrub: 0.6,
              onEnter: () => {
                sec.setAttribute('data-dock-status', 'approaching');
              },
              onLeaveBack: () => {
                sec.setAttribute('data-dock-status', 'exploded');
              },
            },
          }
        );

        // Phase 2: Collapse & Separation (Docked ➔ Receding back into 3D Space)
        gsap.to(sec, {
          scale: 0.95,
          opacity: 0.5,
          y: -50,
          rotationX: -4,
          scrollTrigger: {
            trigger: sec,
            start: 'bottom 35%',
            end: 'bottom top',
            scrub: 0.6,
            onEnter: () => {
              sec.setAttribute('data-dock-status', 'receding');
            },
            onLeaveBack: () => {
              sec.setAttribute('data-dock-status', 'docked');
            },
          },
        });
      });

      // Animate all helical transition dividers with a 360-degree rotation spin
      const helixDividers = gsap.utils.toArray<HTMLElement>('.helical-transition-track');
      helixDividers.forEach((track) => {
        gsap.fromTo(
          track,
          { rotationZ: -180, scale: 0.8 },
          {
            rotationZ: 0,
            scale: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: track,
              start: 'top 95%',
              end: 'bottom 20%',
              scrub: 0.5,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [reducedMotion]);
}