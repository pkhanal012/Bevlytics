'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShakingButton from './ShakingButton';
import { usePathname, useRouter } from 'next/navigation';

export default function StickyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

  // Handle smooth scrolling
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // Check if we're on the homepage
    const isHomePage = pathname === '/';
    
    if (!isHomePage) {
      // If we're not on the homepage, navigate to the homepage with the targetId as hash
      router.push(`/#${targetId}`);
      return;
    }
    
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Calculate offset to account for sticky header
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      // Smooth scroll to target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

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
          <div 
            onClick={() => router.push('/')} 
            className="flex items-center cursor-pointer"
          >
            <Image 
              src="/logo.png"
              alt="bevlYtics Logo"
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
            <a 
              href="#solutions" 
              className="hover:text-gray-300 transition-colors"
              onClick={(e) => handleNavLinkClick(e, 'solutions')}
            >
              Solutions
            </a>
            <a 
              href="#use-cases" 
              className="hover:text-gray-300 transition-colors"
              onClick={(e) => handleNavLinkClick(e, 'use-cases')}
            >
              Use Cases
            </a>
            <a 
              href="#features" 
              className="hover:text-gray-300 transition-colors"
              onClick={(e) => handleNavLinkClick(e, 'features')}
            >
              Features
            </a>
            <Link 
              href="/contact" 
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
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
            <div 
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push('/');
              }}
              className="mb-6 cursor-pointer"
            >
              <Image 
                src="/logo.png"
                alt="bevlYtics Logo"
                width={105}
                height={40}
                className="w-24 sm:w-[105px]"
              />
            </div>
            <a 
              href="#solutions" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors" 
              onClick={(e) => handleNavLinkClick(e, 'solutions')}
            >
              Solutions
            </a>
            <a 
              href="#features" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors" 
              onClick={(e) => handleNavLinkClick(e, 'features')}
            >
              Features
            </a>
            <a 
              href="#use-cases" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors" 
              onClick={(e) => handleNavLinkClick(e, 'use-cases')}
            >
              Use Cases
            </a>
            <Link 
              href="/contact" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <ShakingButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 