'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 lg:py-20" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-6">
            <Image 
              src="/logo.png"
              alt="Bevlytics Logo"
              width={120}
              height={45}
              className="w-24 sm:w-28 lg:w-32 mb-4 sm:mb-6"
              priority
            />
            <p className="text-base sm:text-base text-gray-400 mb-6 sm:mb-8">
              Transform your operations with AI-powered analytics and real-time insights.
            </p>
            <div className="flex space-x-4" role="navigation" aria-label="Social media links">
     
              <a href="/github" className="text-gray-400 hover:text-white transition-colors" aria-label="Visit our GitHub">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" role="img" aria-labelledby="github-title">
                  <title id="github-title">GitHub</title>
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="/linkedin" className="text-gray-400 hover:text-white transition-colors" aria-label="Connect with us on LinkedIn">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" role="img" aria-labelledby="linkedin-title">
                  <title id="linkedin-title">LinkedIn</title>
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="sm:col-span-1 lg:col-span-2" aria-label="Product">
            <h3 className="text-white font-semibold mb-4 sm:mb-6">Product</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="/features" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="/solutions" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Solutions</a></li>

              <li><a href="/demo" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Request Demo</a></li>
            </ul>
          </nav>

          <nav className="sm:col-span-1 lg:col-span-2" aria-label="Company">
            <h3 className="text-white font-semibold mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="/about" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="/careers" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </nav>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2024 Bevlytics. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6" aria-label="Legal">
              <a href="/privacy" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
} 