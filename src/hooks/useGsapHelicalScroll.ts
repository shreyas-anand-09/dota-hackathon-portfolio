import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapHelicalScroll(reducedMotion: boolean) {
  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Find all major sections and the footer
      const sections = gsap.utils.toArray<HTMLElement>('main > section, main > footer');

      sections.forEach((sec, idx) => {
        // Obvious 3D helical spiral trajectory:
        // Section sweeps in from the side along a 3D helical arc
        const isEven = idx % 2 === 0;
        const xOffset = isEven ? 65 : -65;
        const rotY = isEven ? 10 : -10;
        const rotZ = isEven ? 2 : -2;

        gsap.fromTo(
          sec,
          {
            opacity: 0.55,
            y: 80,
            x: xOffset,
            rotationY: rotY,
            rotationZ: rotZ,
            scale: 0.94,
            transformPerspective: 1200,
            transformOrigin: isEven ? 'left center' : 'right center',
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotationY: 0,
            rotationZ: 0,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 92%',
              end: 'top 30%',
              scrub: 0.6,
              // When section is centered and snapped into view, ensure all buttons and interactions are 100% stable
              onEnter: () => {
                sec.style.willChange = 'transform, opacity';
              },
              onLeave: () => {
                sec.style.willChange = 'auto';
              },
              onEnterBack: () => {
                sec.style.willChange = 'transform, opacity';
              },
              onLeaveBack: () => {
                sec.style.willChange = 'auto';
              },
            },
          }
        );
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
