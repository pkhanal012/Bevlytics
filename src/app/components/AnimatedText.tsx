'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

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
    timelineRef.current = gsap.timeline({
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
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, [text]);

  return (
    <div className="relative">
      {/* Logo SVG - Left side */}
      <div className="absolute -left-16 sm:-left-28 md:-left-36 top-12 float-animation z-10">
        <Image 
          src="/singlelogo.svg" 
          alt="bevlYtics Logo" 
          width={80} 
          height={80}
          className="w-16 h-16 sm:w-20 sm:h-20"
          priority
        />
      </div>
      
      {/* Semantic Card - Right side on desktop, bottom on mobile */}
      <div className="absolute sm:-right-28 md:-right-58 bottom-12 sm:bottom-12 float-animation z-10 right-1/2 transform translate-x-1/2 sm:translate-x-0 sm:right-auto" style={{ animationDelay: '2s' }}>
        <Image 
          src="/sementic_card.png" 
          alt="Semantic Card" 
          width={100} 
          height={100}
          className="w-80 h-auto sm:w-96 md:w-[32rem] lg:w-56 transform rotate-[20deg] ml-10 sm:ml-10 ml-0"
          priority
        />
      </div>
    
      <div 
        ref={containerRef}
        className={`${className} overflow-hidden w-full text-center px-4 sm:px-6 lg:px-8`}
        aria-label={text}
      />
    </div>
  );
};

export default AnimatedText; 