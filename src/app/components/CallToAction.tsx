'use client';

import { useEffect, useRef, useState } from 'react';
import BrandName from './BrandName';

export default function CallToAction() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative py-10 sm:py-16 lg:py-32 overflow-hidden" 
      style={{ backgroundColor: '#D52383' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/diagonal-lines.svg')] opacity-10"></div>
      
      {/* Animated circles - Using the enhanced blob animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[150px] sm:w-[300px] lg:w-[500px] h-[150px] sm:h-[300px] lg:h-[500px] rounded-full bg-white/5 -top-12 sm:-top-24 lg:-top-48 -left-6 sm:-left-12 lg:-left-24 blur-3xl animate-blob"></div>
        <div className="absolute w-[120px] sm:w-[240px] lg:w-[400px] h-[120px] sm:h-[240px] lg:h-[400px] rounded-full bg-black/5 top-1/2 -right-6 sm:-right-12 lg:-right-24 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[180px] sm:w-[360px] lg:w-[600px] h-[180px] sm:h-[360px] lg:h-[600px] rounded-full bg-white/5 -bottom-12 sm:-bottom-24 lg:-bottom-48 -left-8 sm:-left-16 lg:-left-32 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <span 
            className={`
              inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 
              text-white text-xs sm:text-sm mb-3 sm:mb-6 lg:mb-8 backdrop-blur-sm
              ${isVisible ? 'reveal-animation' : 'opacity-0'}
            `}
          >
            Ready to Drive Growth with Semantic AI?
          </span>
          
          <h2 
            className={`
              text-xl sm:text-xl lg:text-3xl font-medium text-white mb-4 sm:mb-8 lg:mb-12 
              max-w-4xl mx-auto leading-tight px-2 sm:px-4
              ${isVisible ? 'reveal-animation reveal-delay-300' : 'opacity-0'}
            `}
          >
            Discover how <BrandName variant="ai" className="text-white" />&apos;s semantic-driven analytics transform your brewery&apos;s data into actionable insights. Automate scorecards, optimize your product strategy, and boost your market performance—all powered by advanced Semantic AI.
          </h2>

          <a 
            href="/demo" 
            className={`
              inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 
              bg-black text-white text-sm sm:text-base rounded-full 
              hover:bg-gray-900 transition-all duration-300 hover:scale-105 group 
              relative overflow-hidden w-auto sm:w-auto
              ${isVisible ? 'reveal-animation reveal-delay-600' : 'opacity-0'}
            `}
          >
            <span className="relative z-10 whitespace-nowrap">Request a demo</span>
            <div className="absolute inset-0 shine-effect"></div>
            <svg 
              className="ml-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 arrow-animation relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 