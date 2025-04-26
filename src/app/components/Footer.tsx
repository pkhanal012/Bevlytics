'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 lg:py-20" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Logo and Description */}
          <div className="lg:col-span-12">
            <Image 
              src="/logo.png"
              alt="Bevlytics Logo"
              width={120}
              height={45}
              className="w-24 sm:w-28 lg:w-32 mb-4 sm:mb-6"
              priority
            />
       
          </div>
        </div>

        {/* Pink Analytics Access Section */}
        <div className="bg-[#141414] rounded-xl p-6 sm:p-4 lg:p-4 mt-12 sm:mt-16 relative overflow-hidden">
          {/* Background gradient/effect */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#141414] to-transparent opacity-70"></div>
          
          {/* Half-dark overlay */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[#101010] bg-opacity-30"></div>
          
          {/* Shine effect */}
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-white max-w-xl">
              <p className="text-base sm:text-lg lg:text-base font-base leading-relaxed px-3 text-gray-400">
                Access detailed analytics, manage your reports, and dive deeper into
                your brewery&apos;s insights. Contact Bevlytics for login access.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-white text-base font-semibold sm:text-base whitespace-nowrap">Already have an account?</p>
              <Link 
                href="/login" 
                className="bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-md transition-all duration-300 font-medium relative overflow-hidden group"
              >
                <span className="relative z-10 uppercase tracking-wider text-sm font-semibold">LOGIN</span>
                <div className="absolute inset-0 bg-gray-800 scale-0 group-hover:scale-100 transition-transform origin-center"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-8 pt-2 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2024 Bevlytics. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6" aria-label="Navigation">
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