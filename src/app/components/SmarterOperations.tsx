'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}

function FeatureCard({ icon, title, description, index, isVisible }: FeatureCardProps) {
  // Calculate a staggered delay based on the card's index
  const animationDelay = `${150 * index}ms`;
  
  return (
    <div 
      className={`bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 
                hover:shadow-lg transition-all duration-500 flex flex-col h-full transform 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: isVisible ? animationDelay : '0ms' }}
    >
      <div className="flex items-start justify-left mb-4 sm:mb-6 lg:mb-12 relative">
        <div className="relative transform hover:scale-110 transition-transform duration-300">
          <div 
            className={`absolute inset-0 bg-orange-100 rounded-full scale-0 
                      ${isVisible ? 'animate-ping opacity-25' : 'opacity-0'}`}
            style={{ animationDelay: animationDelay, animationDuration: '1s' }}
          ></div>
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className={`relative z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12
                      ${isVisible ? 'animate-bounce' : ''}`}
            style={{ 
              animationDelay: animationDelay, 
              animationDuration: '2s',
              animationIterationCount: 1
            }}
          />
        </div>
      </div>
      <div className="space-y-2 sm:space-y-3 lg:space-y-4">
        <h3 
          className={`text-lg sm:text-xl lg:text-2xl text-black font-semibold transform
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
          style={{ 
            transitionDelay: isVisible ? `${parseInt(animationDelay) + 200}ms` : '0ms',
            transition: 'all 0.6s ease-out'
          }}
        >
          {title}
        </h3>
        <p 
          className={`text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed transform
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
          style={{ 
            transitionDelay: isVisible ? `${parseInt(animationDelay) + 400}ms` : '0ms',
            transition: 'all 0.6s ease-out'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function SmarterOperations() {
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
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
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

  const features = [
    {
      icon: "/icons/reports.svg",
      title: "Automated Weekly Reports",
      description: "Zero manual effort. Full operational clarity."
    },
    {
      icon: "/icons/inventory.svg",
      title: "Live Inventory Tracking",
      description: "See what&apos;s in stock, where it is, and how fast it&apos;s moving."
    },
    {
      icon: "/icons/ai.svg",
      title: "AI Forecasting",
      description: "Know what your customers will want — before they do."
    },
    {
      icon: "/icons/alert.svg",
      title: "Stock Alerts",
      description: "Stay proactive — not reactive."
    },
    {
      icon: "/icons/price.svg",
      title: "Price Optimization",
      description: "Find the sweet spot between margin and movement."
    },
    {
      icon: "/icons/pipeline.svg",
      title: "Clean Data Pipeline",
      description: "Say goodbye to errors, inconsistencies, and cleanup headaches."
    },
    {
      icon: "/icons/gap.svg",
      title: "Fulfillment Gap Detection",
      description: "Upload messy Excel files and let AI handle ingestion, structure, and cleanup in real-time."
    },
    {
      icon: "/icons/analytics.svg",
      title: "Distributor Analytics",
      description: "Compare, rank, and optimize your distributor network."
    },
    {
      icon: "/icons/sales.svg",
      title: "Lost Sales Finder",
      description: "Uncover the sales you didn&apos;t even know you missed."
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-24 overflow-hidden" 
      style={{ backgroundColor: '#EFEDE8' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 transform
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <span 
            className={`inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-3
                      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transition: 'all 0.6s ease-out', transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            Data-Driven Operations
          </span>
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-2 sm:mb-3 lg:mb-4"
          >
            Smarter Operations, Powered by AI
          </h2>
          <p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ transition: 'all 0.6s ease-out', transitionDelay: isVisible ? '400ms' : '0ms' }}
          >
            Track, forecast, optimize, and report — all in one automated platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 