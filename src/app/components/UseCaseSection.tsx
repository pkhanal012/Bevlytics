'use client';

import { useState, useEffect, useRef } from 'react';
import BrandName from './BrandName';

interface UseCaseCardProps {
  problemText: string;
  solutionPoints: string[];
}

function UseCaseCard({ problemText, solutionPoints }: UseCaseCardProps) {
  return (
    <div 
      className="text-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col h-full font-mono"
      style={{ 
        background: 'rgba(15, 14, 14, 0.90)',
        backdropFilter: 'blur(12.45px)',
        WebkitBackdropFilter: 'blur(12.45px)',
      }}
    >
      {/* Content section - vertical layout */}
      <div className="flex flex-col flex-grow p-4 sm:p-6 md:p-8">
        {/* Problem section */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#3D2E26] rounded-md text-sm sm:text-base font-medium mb-3 sm:mb-4">
            Problem
          </div>
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
            {problemText}
          </p>
        </div>
        
        {/* Solution section */}
        <div className="flex-grow">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#3D2E26] bg-opacity-40 rounded-md text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <BrandName /> Solutions:
          </div>

          <ul className="space-y-2 sm:space-y-3">
            {solutionPoints.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-[#D52383] rounded-full flex items-center justify-center mt-0.5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-200 text-sm sm:text-base">
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
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
        "Upload raw Excel or CSV files — bevlYtics automatically structures, validates, and transforms the data.",
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
  
  // Check if the device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
  // Navigation functions
  const goToNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, useCases.length - 1));
  };
  
  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };
  
  // Calculate translation based on current index
  const calculateTranslation = () => {
    const cardWidth = isMobile ? 70 : 40;
    return currentIndex * cardWidth;
  };
  
  // Check if we're at the last card
  const isAtLastCard = currentIndex >= useCases.length - 1;
  
  return (
    <section ref={sectionRef} id="use-cases" className="relative py-12 sm:py-16 lg:py-20">
      {/* Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/usecaseback.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      {/* Container for title and cards */}
      <div className="w-full z-10">
        {/* Section header with navigation arrows */}
        <div className="pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-start">
              <div className="max-w-2xl z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-2 sm:mb-4 text-white">
                  Built to Solve Your Everyday Challenges
                </h2>
                <p className="text-base sm:text-lg text-white text-opacity-90">
                  No more guesswork — just real-time answers, built for modern Beverage operations.
                </p>
              </div>
              
              {/* Navigation arrows */}
              <div className="flex space-x-3">
                <button 
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
                    currentIndex === 0 
                      ? 'bg-black/30 text-white/40 cursor-not-allowed' 
                      : 'bg-black/20 text-white hover:bg-black/40 cursor-pointer'
                  }`}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={goToNext}
                  disabled={isAtLastCard}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
                    isAtLastCard
                      ? 'bg-black/30 text-white/40 cursor-not-allowed' 
                      : 'bg-black/20 text-white hover:bg-black/40 cursor-pointer'
                  }`}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card container */}
        <div className="w-full py-4 sm:py-6 z-10">
          <div className="w-full flex items-center justify-center">
            {/* Cards container */}
            <div className="overflow-hidden w-full max-w-6xl">
              <div 
                className="flex space-x-3 sm:space-x-6 transition-transform duration-500 ease-out"
                style={{ 
                  transform: `translateX(-${calculateTranslation()}%)`
                }}
              >
                {useCases.map((useCase, index) => (
                  <div 
                    key={index}
                    className={`flex-shrink-0 w-[70%] sm:w-[80%] md:w-[calc(50%-1rem)] lg:w-[calc(40%-1rem)] ${
                      index === useCases.length - 1 ? 'mr-[20px]' : ''
                    }`}
                  >
                    <UseCaseCard
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
    </section>
  );
} 