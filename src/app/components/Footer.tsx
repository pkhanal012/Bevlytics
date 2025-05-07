'use client';

import Image from 'next/image';
import Link from 'next/link';
import BrandName from './BrandName';
import PoweredBy from './PoweredBy';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 lg:py-20" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          {/* Bevlytics Logo */}
            <Image 
              src="/logo.png"
              alt="Bevlytics Logo"
              width={120}
              height={45}
            className="w-24 sm:w-28 lg:w-32"
              priority
            />
       
          {/* Designed and Powered By */}
          <PoweredBy />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-8 pt-2 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2025 <BrandName />. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6" aria-label="Navigation">
            <Link href="https://datatoinsights.ai/" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Login</Link>
              <Link href="/#solutions" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Solutions</Link>
              <Link href="/#use-cases" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Use Cases</Link>
              <Link href="/#features" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Features</Link>
              <Link href="/contact" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
} 