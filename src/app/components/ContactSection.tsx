'use client';

import Link from 'next/link';

export default function ContactSection() {
  return (
    <div>
      <div className="text-[#D52383] uppercase font-medium tracking-wider mb-4">CONTACT US</div>
      <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">Get in Touch</h1>
      <p className="text-lg text-gray-300 mb-4">
        Have questions about our services? Our team is ready to help. 
        Reach out and we&apos;ll get back to you as soon as possible.
      </p>
      
      {/* Login button below the subheader */}
      <div className="inline-flex items-center mb-8 mt-2 border border-gray-800 px-6 py-2 rounded-full">
        <p className="text-gray-400 text-base mr-3">Looking for a demo instead?</p>
        <Link 
          href="/bookdemo" 
          className="font-medium relative overflow-hidden"
        >
          <span className="text-white text-base border-b border-gray-500 hover:border-white transition-colors">Book a demo</span>
        </Link>
      </div>
    </div>
  );
} 