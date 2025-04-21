'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const section = container?.closest('section');
    if (!container || !section) return;

    // Create word spans with initial dark color
    const words = text.split(' ').map((word) => (
      `<div class="inline-block mx-0.5 sm:mx-1 my-0.5" style="color: #333333;">${word}</div>`
    ));
    container.innerHTML = `<div class="inline-flex flex-wrap justify-center">${words.join(' ')}</div>`;

    // Select all word divs
    const wordElements = container.querySelector('.inline-flex')?.children;
    if (!wordElements) return;

    const totalWords = wordElements.length;
    const isMobile = window.innerWidth < 640;

    // Create the main timeline for color animation
    const colorTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'center center',
        end: `+=${totalWords * (isMobile ? 30 : 50)}`,
        pin: true,
        pinSpacing: true,
        scrub: isMobile ? 0.3 : 0.5,
        onUpdate: (self: { progress: number }) => {
          const progress = self.progress;
          const wordsToWhiten = Math.floor(progress * totalWords);
          
          Array.from(wordElements).forEach((word, index) => {
            if (index < wordsToWhiten) {
              (word as HTMLElement).style.color = '#ffffff';
            } else {
              (word as HTMLElement).style.color = '#333333';
            }
          });
        },
        onLeave: () => {
          // Ensure all words are white when leaving the section
          Array.from(wordElements).forEach((word) => {
            (word as HTMLElement).style.color = '#ffffff';
          });
        },
      },
    });

    // Handle resize events
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      colorTimeline.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, [text]);

  return (
    <div 
      ref={containerRef}
      className={`${className} overflow-hidden w-full text-center px-4 sm:px-6 lg:px-8`}
      aria-label={text}
    />
  );
};

export default AnimatedText; 