'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ShakingButton from './ShakingButton';

export default function StickyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > 20);
      
      // Show navbar when scrolling up or at top
      setIsVisible(prevScrollY > currentScrollY || currentScrollY < 20);
      
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`
          fixed w-full z-50 transition-all duration-300
          ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-black'}
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          border-b border-white/[0.06]
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-4 sm:py-6 flex justify-between items-center text-white">
          <div className="flex items-center">
            <Image 
              src="/logo.png"
              alt="Bevlytics Logo"
              width={105}
              height={40}
              className="w-24 sm:w-[105px]"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="hover:text-gray-300 transition-colors">Solutions</a>
            <a href="#features" className="hover:text-gray-300 transition-colors">Features</a>
            <a href="#use-cases" className="hover:text-gray-300 transition-colors">Use Cases</a>
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
            <ShakingButton />
          </div>
        </div>
      </nav>

      {/* Full Page Mobile Menu */}
      <div 
        className={`
          fixed inset-0 bg-black z-40 transition-all duration-500 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <a 
              href="#solutions" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#features" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#use-cases" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a 
              href="#about" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4">
              <ShakingButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 