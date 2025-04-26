'use client';

import Link from 'next/link';
import StickyNavbar from '../../components/StickyNavbar';
import Footer from '../../components/Footer';
import ClientWrapper from '../../components/ClientWrapper';
import VideoBackground from '../../components/VideoBackground';

export default function ThankYouPage() {
  return (
    <ClientWrapper>
      <main className="min-h-screen bg-black">
        {/* Header/Navigation */}
        <StickyNavbar />

        {/* Thank You Section */}
        <section className="relative min-h-screen w-full overflow-hidden pt-24 sm:pt-32 lg:pt-40 flex items-center justify-center">
          <VideoBackground />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mx-auto bg-[#1A1A1A]/90 backdrop-blur-sm p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-8 animate-pulse">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                    stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 p-6 rounded-lg mb-6 backdrop-blur-sm">
                <p className="text-gray-200 mb-4 leading-relaxed">
                  Thank you for your message! We will get back to you as soon as possible.
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="inline-block mr-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                        stroke="#D52383" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  We&apos;ll respond within 24-48 hours
                </p>
              </div>
              <div className="flex space-x-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#D52383] hover:bg-[#B01868] text-white py-3 px-8 rounded-md font-medium transition-colors text-lg"
                >
                  Send Another Message
                </Link>
                <Link
                  href="/"
                  className="bg-transparent border border-gray-600 hover:border-white text-white py-3 px-8 rounded-md font-medium transition-colors text-lg"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </ClientWrapper>
  );
} 