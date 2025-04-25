'use client';

import { useState, useEffect, useRef } from 'react';

interface UseCaseCardProps {
  title: string;
  problemText: string;
  solutionPoints: string[];
}

function UseCaseCard({ title, problemText, solutionPoints }: UseCaseCardProps) {
  return (
    <div 
      className="text-white rounded-3xl overflow-hidden flex flex-col h-full"
      style={{ 
        background: 'rgba(15, 14, 14, 0.90)',
        backdropFilter: 'blur(12.45px)',
        WebkitBackdropFilter: 'blur(12.45px)',
      }}
    >
      {/* Title section - full width */}
      <div className="p-6 md:p-8 pb-4">
        <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
      </div>
      
      {/* Divider */}
      <div className="w-full h-px bg-white opacity-10 mb-16"></div>
      
      {/* Content section - horizontal on larger screens */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Problem section - left */}
        <div className="md:w-2/5 p-6 md:pt-8 md:pb-8 md:pl-8 md:pr-4">
          <div className="inline-block px-4 py-2 bg-[#3D2E26] rounded-md text-base font-medium mb-4">
            Problem
          </div>
          <p className="text-gray-200 leading-relaxed text-base">
            {problemText}
          </p>
        </div>
        
        {/* Solution section - right */}
        <div className="md:w-3/5 p-6 md:pt-8 md:pb-8 md:pr-8 md:pl-4">
          <div className="inline-flex items-center px-4 py-2 bg-[#3D2E26] bg-opacity-40 rounded-md text-sm font-medium mb-4">
            Bevlytics Solves It:
          </div>

          <ul className="space-y-3">
            {solutionPoints.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-[#E75010] rounded-full flex items-center justify-center mt-0.5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-200 text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function UseCaseSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
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
  
  // Handle scroll-based navigation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      // Get section position relative to viewport
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if section is in view
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Calculate how far we've scrolled through the section
        const sectionHeight = rect.height;
        
        // We want to start the card transition after the top part of the section is visible
        // and finish before reaching the end of the section
        const effectiveScrollableDistance = sectionHeight - viewportHeight * 1.5; // Adjust this value to control when scrolling finishes
        const scrolledAmount = Math.abs(Math.min(rect.top, 0));
        
        // Calculate progress (0 to 1)
        const progress = Math.min(scrolledAmount / effectiveScrollableDistance, 1);
        
        setScrollProgress(progress);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Calculate the max translation to ensure the last card is fully visible
  const calculateMaxTranslation = () => {
    // This calculation needs to account for:
    // 1. The total width of all cards
    // 2. The visible percentage of the last card
    // 3. The padding/margins
    
    // For a card width of 65% with right margin of 2%
    const cardWidth = 50;
    const totalCards = useCases.length;
    
    // We want to stop with the last card fully visible
    // Need to subtract enough space so the last card is completely visible
    return (cardWidth * (totalCards - 1)) + 4; // Show the last card fully with some right margin
  };
  
  return (
    <section ref={sectionRef} id="use-cases" className="relative py-20 min-h-[200vh]">
      {/* Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/usecaseback.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      
      {/* Sticky container for both title and cards */}
      <div className="sticky top-0 w-full z-10" style={{ height: '100vh' }}>
        {/* Section header */}
        <div className="pt-32 pb-6">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white">
                Built to Solve Your Everyday Challenges
              </h2>
              <p className="text-lg text-white text-opacity-90">
                No more guesswork — just real-time answers, built for modern brewery operations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Card container - full width */}
        <div className="w-full py-6 z-10 flex-grow">
          <div className="w-full h-full flex items-center">
            {/* Cards container */}
            <div className="overflow-hidden w-full">
              <div 
                className="flex space-x-6 transition-transform duration-300 ease-out"
                style={{ 
                  transform: `translateX(-${scrollProgress * calculateMaxTranslation()}%)`,
                  paddingLeft: "8%",     // Left margin for first card
                  paddingRight: "%"     // Right margin for last card
                }}
              >
                {useCases.map((useCase, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-full md:w-[calc(85%-1rem)] lg:w-[calc(65%-1rem)]"
                  >
                    <UseCaseCard
                      title={useCase.title}
                      problemText={useCase.problemText}
                      solutionPoints={useCase.solutionPoints}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer to allow scrolling past the sticky section */}
      <div className="h-[100vh]"></div>
    </section>
  );
} 