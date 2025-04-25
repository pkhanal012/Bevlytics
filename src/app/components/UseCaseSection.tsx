'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface UseCaseCardProps {
  title: string;
  problemText: string;
  solutionPoints: string[];
}

function UseCaseCard({ title, problemText, solutionPoints }: UseCaseCardProps) {
  return (
    <div 
      className="text-white rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-500 h-[550px]"
      style={{ 
        background: 'rgba(15, 14, 14, 0.90)',
        backdropFilter: 'blur(12.45px)',
        WebkitBackdropFilter: 'blur(12.45px)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset',
      }}
    >
      <div className="flex flex-col h-full">
        {/* Title section - full width */}
        <div className="p-6 md:p-8 lg:p-10 pb-2">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">{title}</h3>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-white opacity-10 mx-6 md:mx-8 lg:mx-10"></div>
        
        {/* Spacer to push content down */}
        <div className="flex-grow"></div>
        
        {/* Content section with horizontal layout */}
        <div className="p-6 md:p-8 lg:p-10 pt-6 flex flex-col lg:flex-row lg:space-x-10 lg:space-y-0 space-y-8">
          {/* Problem section */}
          <div className="lg:w-5/12">
            <div className="inline-block px-4 py-2 bg-[#1E1E1E] rounded-full text-sm font-medium mb-4">
              Problem
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {problemText}
            </p>
          </div>

          {/* Solution section */}
          <div className="lg:w-7/12">
            <div className="inline-flex items-center px-4 py-2 bg-[#E75010] rounded-full text-sm font-medium mb-6">
              <Image 
                src="/logo-mark.svg" 
                alt="Bevlytics Logo" 
                width={20} 
                height={20} 
                className="mr-2"
              />
              Bevlytics Solves It:
            </div>

            <ul className="space-y-4">
              {solutionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-[#E75010] rounded-full flex items-center justify-center mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-200 text-sm md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UseCaseSection() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const targetIndexRef = useRef(0);
  const useCases = [
    {
      title: "Not sure what's selling where?",
      problemText: "Sales data is often siloed by distributor, region, or SKU — making it hard to get a clear picture.",
      solutionPoints: [
        "Live dashboards show exactly what's moving — by SKU, size, region, or sales channel.",
        "Segment filters let you zoom in or out — from product-level to portfolio-wide.",
        "Exportable reports give your team instant clarity."
      ]
    },
    {
      title: "Drowning in messy spreadsheets?",
      problemText: "Manual data cleaning slows down reporting and introduces errors.",
      solutionPoints: [
        "Upload raw Excel or CSV files — Bevlytics automatically structures, validates, and transforms the data.",
        "Eliminate human error and save hours of work each week.",
        "Standardized outputs make reporting consistent across teams."
      ]
    },
    {
      title: "Need launch insights fast?",
      problemText: "Waiting months to know if a new product is working wastes opportunity.",
      solutionPoints: [
        "New Product Analysis dashboard tracks velocity, region-wise pickup, and distributor traction.",
        "Spot early signals of success (or failure) by SKU size, format, or style.",
        "Make pricing, packaging, or placement tweaks based on data — not instinct."
      ]
    },
    {
      title: "Managing complex brand portfolios?",
      problemText: "Tracking performance across multiple SKUs, pack sizes, or brand extensions is chaotic.",
      solutionPoints: [
        "Brand Family Tracking lets you view aggregate or individual SKU-level data.",
        "Compare how 12-packs perform versus singles or seasonal variants.",
        "Filter by size, segment, or market — in one view."
      ]
    }
  ];
  
  useEffect(() => {
    // Smooth scrolling animation function
    const animate = () => {
      // Get current smooth progress
      const currentIndex = smoothProgress;
      // Calculate difference to target
      const diff = targetIndexRef.current - currentIndex;
      
      // Only animate if there's a noticeable difference
      if (Math.abs(diff) > 0.001) {
        // Apply easing for smooth animation
        const newProgress = currentIndex + diff * 0.1;
        setSmoothProgress(newProgress);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Snap to exact value when close enough
        setSmoothProgress(targetIndexRef.current);
      }
    };
    
    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup on unmount
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [smoothProgress]);
  
  useEffect(() => {
    // The scroll handler function
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate which card should be shown based on scroll position
      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        // Calculate progress through the section
        const totalScrollHeight = rect.height - viewportHeight;
        const scrolledAmount = -rect.top;
        const progress = Math.min(scrolledAmount / totalScrollHeight, 1);
        
        // Calculate card index with smoother transitions
        const cardCount = useCases.length;
        const newIndex = Math.min(
          Math.floor(progress * cardCount * 1.05), // Slight adjustment for better transitions
          cardCount - 1
        );
        
        setScrollIndex(newIndex);
        targetIndexRef.current = newIndex; // Set target for smooth animation
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [useCases.length]);
  
  // Calculate the height needed to scroll through all cards
  const stickyHeight = `calc(100vh * ${useCases.length})`;
  
  return (
    <div ref={sectionRef} style={{ height: stickyHeight }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden z-10 bg-black">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/usecaseback.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Content Container */}
        <div className="w-full z-10 relative">
          {/* Section header */}
          <div className="max-w-2xl lg:max-w-3xl mb-12 md:mb-16 pl-4 sm:pl-6 lg:pl-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white">
              Built to Solve Your Everyday Challenges
            </h2>
            <p className="text-lg md:text-xl text-white text-opacity-90">
              No more guesswork — just real-time answers, built for modern brewery operations.
            </p>
          </div>
          
          {/* Cards slider */}
          <div className="overflow-x-hidden w-full">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${smoothProgress * 100}%)`,
                width: `${useCases.length * 100}%`,
                willChange: 'transform'
              }}
            >
              {useCases.map((useCase, index) => (
                <div key={index} className="w-full px-4 flex h-[550px]">
                  <UseCaseCard
                    title={useCase.title}
                    problemText={useCase.problemText}
                    solutionPoints={useCase.solutionPoints}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Progress dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {useCases.map((_, index) => (
              <div 
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  index === scrollIndex
                    ? 'w-8 h-2 bg-[#E75010]'
                    : 'w-2 h-2 bg-white bg-opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 