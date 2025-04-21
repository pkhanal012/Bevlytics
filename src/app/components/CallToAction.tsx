'use client';

import { useEffect, useRef, useState } from 'react';

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-32 overflow-hidden" 
      style={{ backgroundColor: '#FF5733' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/diagonal-lines.svg')] opacity-10"></div>
      
      {/* Animated circles - Using the enhanced blob animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200px] sm:w-[300px] lg:w-[500px] h-[200px] sm:h-[300px] lg:h-[500px] rounded-full bg-white/5 -top-16 sm:-top-24 lg:-top-48 -left-8 sm:-left-12 lg:-left-24 blur-3xl animate-blob"></div>
        <div className="absolute w-[160px] sm:w-[240px] lg:w-[400px] h-[160px] sm:h-[240px] lg:h-[400px] rounded-full bg-black/5 top-1/2 -right-8 sm:-right-12 lg:-right-24 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[240px] sm:w-[360px] lg:w-[600px] h-[240px] sm:h-[360px] lg:h-[600px] rounded-full bg-white/5 -bottom-16 sm:-bottom-24 lg:-bottom-48 -left-12 sm:-left-16 lg:-left-32 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <span 
            className={`
              inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 
              text-white text-xs sm:text-sm mb-4 sm:mb-6 lg:mb-8 backdrop-blur-sm
              ${isVisible ? 'reveal-animation' : 'opacity-0'}
            `}
          >
            Ready to automate more?
          </span>
          
          <h2 
            className={`
              text-3xl sm:text-2xl lg:text-5xl font-medium text-white mb-6 sm:mb-8 lg:mb-12 
              max-w-4xl mx-auto leading-tight px-4
              ${isVisible ? 'reveal-animation reveal-delay-300' : 'opacity-0'}
            `}
          >
            Transform your operations with AI-powered analytics and real-time insights
          </h2>

          <a 
            href="/demo" 
            className={`
              inline-flex items-center px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 
              bg-black text-white text-sm sm:text-base rounded-full 
              hover:bg-gray-900 transition-all duration-300 hover:scale-105 group 
              relative overflow-hidden
              ${isVisible ? 'reveal-animation reveal-delay-600' : 'opacity-0'}
            `}
          >
            <span className="relative z-10">Request a demo</span>
            <div className="absolute inset-0 shine-effect"></div>
            <svg 
              className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 arrow-animation relative z-10" 
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