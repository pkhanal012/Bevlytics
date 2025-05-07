'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PoweredBy() {
  const [isGlowing, setIsGlowing] = useState(false);

  // Periodically trigger the glow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing(true);
      // Reset after animation completes
      setTimeout(() => setIsGlowing(false), 2000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="bg-[#121212] rounded-lg px-8 py-4 inline-block relative overflow-hidden group hover:shadow-lg hover:shadow-white/5 transition-all duration-500"
      onMouseEnter={() => setIsGlowing(true)}
      onMouseLeave={() => setIsGlowing(false)}
      onAnimationEnd={() => setIsGlowing(false)}
    >
      <Link 
        href="https://cloudpro.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-start relative z-10"
      >
        <div className="flex justify-between items-center w-full mb-1">
          <p className="text-gray-300 text-sm pb-2 group-hover:text-white transition-colors">DESIGNED AND POWERED BY</p>
        </div>
        <Image
          src="/cloudpro-logo.png" 
          alt="CloudPro.AI Logo"
          width={180}
          height={40}
          className={`w-40 transition-all duration-500 ${isGlowing ? 'brightness-125' : ''}`}
        />
      </Link>
      
      {/* Enhanced primary shine effect */}
      <div className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:animate-shine shine-animation" />
      
      {/* Secondary shine effect (offset for double shine) */}
      <div className="absolute -inset-full h-full w-1/4 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 shine-animation-delayed" />
      
      {/* Enhanced glow effect with animation */}
      <div className="absolute inset-0 glow-animation opacity-0 group-hover:opacity-100"></div>
      
      {/* Outer glow ring */}
      <div className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/30 to-pink-500/20 opacity-0 blur-md transition-opacity duration-700 ${isGlowing ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Edge highlight */}
      <div className="absolute inset-0 rounded-lg border border-white/5 group-hover:border-white/10 transition-all duration-500" />
      
      <style jsx global>{`
        @keyframes shine {
          0% {
            left: -150%;
          }
          100% {
            left: 250%;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            opacity: 0.1;
            background-position: 0% 50%;
          }
          50% {
            opacity: 0.3;
            background-position: 100% 50%;
          }
        }
        
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        
        .shine-animation {
          animation: shine 3s ease-in-out infinite;
        }
        
        .shine-animation-delayed {
          animation: shine 3s ease-in-out 1.5s infinite;
        }
        
        .glow-animation {
          background: linear-gradient(90deg, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(139, 92, 246, 0.2) 25%, 
            rgba(236, 72, 153, 0.2) 50%, 
            rgba(139, 92, 246, 0.2) 75%, 
            rgba(59, 130, 246, 0.1) 100%);
          background-size: 200% 200%;
          animation: glow 3s ease infinite;
        }
      `}</style>
    </div>
  );
} 